import os
import io
import uuid
from typing import Optional

try:
    from gtts import gTTS  # online, high quality
except ImportError:
    gTTS = None  # type: ignore

# Optional offline fallback
try:
    import pyttsx3  # type: ignore
except Exception:
    pyttsx3 = None  # type: ignore

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'tts_output'))
os.makedirs(OUTPUT_DIR, exist_ok=True)

def TTS(text_to_speak: str, language: str = 'en', slow_speed: bool = False, filename: Optional[str] = None) -> str:
    """Generate speech audio for text and save to MP3 file; return file path.

    - Prefers gTTS (online). If unavailable, attempts offline pyttsx3 (WAV), then converts extension to .wav.
    - Avoids server-side playback and FFmpeg dependency to prevent runtime errors on servers.
    """
    if not text_to_speak:
        raise ValueError("text_to_speak must be non-empty")

    # Decide output path
    base = filename or f"tts_{uuid.uuid4().hex}"
    mp3_path = os.path.join(OUTPUT_DIR, base + ".mp3")
    wav_path = os.path.join(OUTPUT_DIR, base + ".wav")

    # Try high-quality gTTS first
    if gTTS is not None:
        try:
            buf = io.BytesIO()
            tts = gTTS(text=text_to_speak, lang=language, slow=slow_speed)
            tts.write_to_fp(buf)
            with open(mp3_path, 'wb') as f:
                f.write(buf.getvalue())
            return mp3_path
        except Exception as e:
            print(f"[TTS] gTTS failed: {e}")

    # Offline fallback using pyttsx3
    if pyttsx3 is not None:
        try:
            engine = pyttsx3.init()
            # Optional: tune rate/voice; keep defaults for portability
            engine.save_to_file(text_to_speak, wav_path)
            engine.runAndWait()
            return wav_path
        except Exception as e:
            print(f"[TTS] pyttsx3 failed: {e}")

    # If all failed
    raise RuntimeError("No TTS backend available or all TTS attempts failed.")

__all__ = ["TTS"]