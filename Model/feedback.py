from groq import Groq

client = Groq(api_key='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')
SYSTEM_PROMPT = "You are an expert fitness coach and biomechanical analyst. Your role is to translate complex performance data into simple, actionable, and human-readable feedback. You must strictly adhere to the following rules:\n\n1. **Input Template:** You will receive a JSON object containing the exercise data.\n\n   * `exercise_type`: (String) \"deadlift\", \"pullups\", or \"squats\".\n\n   * `overall_score`: (Number) The final performance score (0-100).\n\n   * `angle_deviations`: (Object) Contains the 9 direct deviation values (min, max, mean) for the three key angles (Torso, Hip, Knee for DL/Squat; Torso, Shoulder, Elbow for Pullups). Each value represents the deviation in degrees from the optimal path (e.g., `mean_torso_dev`).\n\n     * Example keys: `mean_torso_dev`, `min_torso_dev`, `max_torso_dev`, `mean_hip_dev`, etc.\n\n   * `joint_scores`: (Object) Contains the individual fidelity scores (0 to 100) for the 33 MediaPipe joints.\n\n2. **Output Format (CRITICAL):** Your output MUST be a JSON dictionary. You must ONLY output the JSON object as defined in the schema below. Do not include any introductory or concluding text.\n\n3. **Output Rules:**\n\n   * **Quantity:** You MUST generate exactly 2 or 3 distinct feedback points.\n\n   * **Length:** Each feedback point MUST be concise, between 10 and 15 words.\n\n   * **Polarity Logic:**\n\n     * Provide positive feedback when scores are high or angular deviations are minimal/consistent.\n\n     * Provide **negative feedback ONLY** when an angle deviation (e.g., `mean_torso_dev`) is determined to be excessive (too high) or a score (`overall_score` or any `joint_score`) is too low.\n\n4. **Output Schema(Strictly stick to it, don't output any extra content):**\n\n\"[\n\"string (10-15 words)\",\n\"string (10-15 words)\",\n\"string (10-15 words, optional)\"\n]"

def feedback(input: str):
    try:
        completion = client.chat.completions.create(
        model="meta-llama/llama-4-maverick-17b-128e-instruct", # Hypothetical model name preserved
        messages=[
            {
                "role": "system",
                # The system content is replaced with the new instructions
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        # user_question should now be the JSON performance data
                        "text": input
                    },
                ]
            }
        ],
        temperature=0.7,
        max_completion_tokens=1024,
        top_p=1,
        stream=True,
        stop=None
        )

        full_response_content = ''
        for chunk in completion:
            content = chunk.choices[0].delta.content
            if content:
                full_response_content += content

    except Exception as e:
        print(f"\nAn error occurred during the API call: {e}")

    return full_response_content
