from gtts import gTTS
from pydub import AudioSegment
from pydub.playback import play
import io

def TTS(text_to_speak: str, language: str = 'en', slow_speed: bool = False):
    try:
        audio_buffer = io.BytesIO()
        tts = gTTS(text=text_to_speak, lang=language, slow=slow_speed)
        tts.write_to_fp(audio_buffer)

        audio_buffer.seek(0)

        sound = AudioSegment.from_file(audio_buffer, format="mp3")
        play(sound)

    except Exception as e:
        print(f"An error occurred during TTS playback: {e}")