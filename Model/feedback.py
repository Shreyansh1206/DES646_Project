import os
import json
import ast
from typing import List, Union

try:
    from groq import Groq  # type: ignore
except ImportError:
    Groq = None  # Allow offline usage without Groq installed

_API_KEY = os.getenv('GROQ_API_KEY')
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
    deviations = data.get('angle_deviations', {}) or {}
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
    points: List[str] = []
    if score >= 75:
        points.append(f"Strong overall form with score {score:.1f}; keep consistent mechanics throughout reps.")
    elif score >= 50:
        points.append(f"Moderate execution (score {score:.1f}); focus on smoother tempo and stability.")
    else:
        points.append(f"Low performance score {score:.1f}; reset technique fundamentals before adding load.")
    if worst_dev_key and worst_abs_dev > 5:
        points.append(f"Largest deviation at {worst_dev_key} ({worst_abs_dev:.1f}°); prioritize controlled alignment.")
    points.append("Engage core and maintain neutral spine for safer force transfer.")
    # Constrain length (10-15 words) by truncation
    trimmed = []
    for p in points[:3]:
        words = p.split()
        if len(words) > 15:
            words = words[:15]
        elif len(words) < 10:
            # Pad lightly if too short
            words += ["consistently"]
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
