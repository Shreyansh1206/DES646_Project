import os
import json
import ast
from typing import List, Union

try:
    from groq import Groq  # type: ignore
except ImportError:
    Groq = None  # Allow offline usage without Groq installed

_API_KEY = os.getenv('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')
if not _API_KEY:
    print("[feedback] GROQ_API_KEY not set; using deterministic local heuristic feedback.")

client = Groq(api_key=_API_KEY) if (Groq and _API_KEY) else None

SYSTEM_PROMPT = (
    "You are an expert fitness coach and biomechanical analyst. Translate exercise telemetry into"
    " concise, actionable feedback. STRICT RULES:\n"
    "1) Input JSON keys: exercise_type (string), overall_score (0-100), angle_deviations (object of *_dev floats),"
    " joint_scores (object of joint->score).\n"
    "2) Output ONLY a JSON array of 2 or 3 strings. No narration.\n"
    "3) Each string: 10-15 words, concise, actionable.\n"
    "4) Use encouraging tone if metrics good; corrective tone if deviations large or scores low."
)

def _normalize_input(payload: Union[str, dict]) -> dict:
    """Accept dict or stringified dict/JSON; map legacy keys to expected schema."""
    if isinstance(payload, str):
        try:
            # Prefer JSON
            data = json.loads(payload)
        except Exception:
            # Fallback to Python literal
            try:
                data = ast.literal_eval(payload)
            except Exception:
                return {}
    else:
        data = payload

    # Legacy key mappings
    if 'exercise' in data and 'exercise_type' not in data:
        data['exercise_type'] = data.pop('exercise')
    if 'net_score' in data and 'overall_score' not in data:
        data['overall_score'] = data.pop('net_score')
    if 'jointwise_score' in data and 'joint_scores' not in data:
        data['joint_scores'] = data.pop('jointwise_score')

    return data

def _local_fallback_feedback(data: dict) -> List[str]:
    """Generate simple deterministic feedback without LLM (offline mode)."""
    if not data:
        return ["Insufficient data provided for feedback generation."]
    
    score = data.get('overall_score', 0)
    exercise_type = data.get('exercise_type', '').lower()
    deviations = data.get('angle_deviations', {}) or {}
    joint_scores = data.get('joint_scores', {}) or {}
    
    # Find worst angle deviation
    worst_dev_key = None
    worst_abs_dev = -1
    for k, v in deviations.items():
        try:
            val = abs(float(v))
            if val > worst_abs_dev:
                worst_abs_dev = val
                worst_dev_key = k
        except Exception:
            continue
    
    # Exercise-specific feedback templates
    exercise_cues = {
        'deadlift': {
            'good': "Excellent hip hinge pattern; maintain bar close to shins throughout the lift.",
            'moderate': "Keep chest up and drive through heels; avoid rounding lower back.",
            'poor': "Reset form: neutral spine, shoulders over bar, push through midfoot.",
            'torso': "Torso angle deviation detected; maintain neutral spine and engaged lats.",
            'knee': "Knee tracking issue; ensure knees track over toes during lift.",
            'hip': "Hip hinge needs work; initiate with glutes and maintain hip stability."
        },
        'squat': {
            'good': "Strong squat depth and alignment; maintain upright torso on ascent.",
            'moderate': "Work on consistent depth and knee tracking over toes.",
            'poor': "Focus on basics: chest up, knees out, weight on midfoot.",
            'torso': "Torso collapsing forward; keep chest up and core braced.",
            'knee': "Knee valgus detected; actively push knees out during the squat.",
            'hip': "Hip mobility limiting depth; work on hip flexor flexibility."
        },
        'pullup': {
            'good': "Great pull-up mechanics; full range of motion with controlled descent.",
            'moderate': "Increase scapular retraction at bottom; avoid swinging momentum.",
            'poor': "Build strength: focus on dead hangs and negatives first.",
            'torso': "Excessive torso swing; engage core and keep body tight.",
            'shoulder': "Shoulder positioning off; depress scapula and pull elbows down.",
            'elbow': "Incomplete range at elbows; aim for chin over bar."
        }
    }
    
    # Default fallback for unknown exercises
    if exercise_type not in exercise_cues:
        exercise_type = 'deadlift'  # Default behavior
    
    cues = exercise_cues[exercise_type]
    points: List[str] = []
    
    # Overall score feedback
    if score >= 75:
        points.append(cues['good'])
    elif score >= 50:
        points.append(cues['moderate'])
    else:
        points.append(cues['poor'])
    
    # Deviation-specific feedback
    if worst_dev_key and worst_abs_dev > 5:
        # Extract angle type from worst_dev_key (e.g., "mean_torso_dev" -> "torso")
        angle_type = None
        for key in ['torso', 'knee', 'hip', 'shoulder', 'elbow']:
            if key in worst_dev_key:
                angle_type = key
                break
        
        if angle_type and angle_type in cues:
            points.append(cues[angle_type])
        else:
            points.append(f"Largest deviation at {worst_dev_key.replace('_', ' ')} ({worst_abs_dev:.1f}°); focus on control.")
    
    # Add joint-specific feedback if available
    if joint_scores:
        # Find lowest scoring joints
        low_joints = [(k, v) for k, v in joint_scores.items() if isinstance(v, (int, float)) and v < 60]
        if low_joints:
            low_joints.sort(key=lambda x: x[1])
            worst_joint = low_joints[0][0].replace('_', ' ')
            points.append(f"Pay attention to {worst_joint} positioning for better alignment.")
    
    # Ensure we have at least 2 points
    if len(points) < 2:
        points.append("Maintain consistent tempo and controlled breathing throughout.")
    
    # Constrain length (10-15 words) by truncation
    trimmed = []
    for p in points[:3]:
        words = p.split()
        if len(words) > 15:
            words = words[:15]
        elif len(words) < 10:
            # Pad lightly if too short
            words += ["throughout the movement"]
        trimmed.append(' '.join(words))
    
    return trimmed[:3]

def feedback(raw_input: Union[str, dict]) -> str:
    """Return JSON array string of 2-3 feedback sentences.

    Accepts either a dict or a JSON/stringified-dict. Guarantees valid JSON list output.
    Falls back to deterministic heuristic if Groq unavailable.
    """
    data = _normalize_input(raw_input)
    if client is None:
        return json.dumps(_local_fallback_feedback(data))
    try:
        user_content = json.dumps(data, ensure_ascii=False)
        completion = client.chat.completions.create(
            model="llama-3.1-8b-instant",  # faster, cheaper; adjust if needed
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_content},
            ],
            temperature=0.6,
            max_completion_tokens=256,
            top_p=1,
            stream=False,
        )
        raw = completion.choices[0].message.content.strip()
        # Parse LLM output
        try:
            arr = json.loads(raw)
        except Exception:
            arr = ast.literal_eval(raw) if (raw.startswith('[') and raw.endswith(']')) else [raw]
        if not isinstance(arr, list):
            arr = [str(arr)]
        # Enforce 2-3 items, length constraints
        cleaned: List[str] = []
        for s in arr:
            if not isinstance(s, str):
                s = str(s)
            words = s.split()
            if len(words) < 10:
                # Simple padding if too short
                words += ["proper", "control"]
            if len(words) > 15:
                words = words[:15]
            cleaned.append(' '.join(words))
            if len(cleaned) == 3:
                break
        if len(cleaned) < 2:
            cleaned += _local_fallback_feedback(data)[len(cleaned):2]
        return json.dumps(cleaned[:3])
    except Exception as e:
        print(f"[feedback] API error: {e}")
        return json.dumps(_local_fallback_feedback(data))

__all__ = ["feedback"]
