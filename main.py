from motionClassification.motionClassifier import predict_motion
from angleCalculator import calculate_angles
from autoEncoder.Deadlift.model import posture_correctness_score as pcs_deadlift
from autoEncoder.Squat.model import posture_correctness_score as pcs_squat
from autoEncoder.Pull_Up.model import posture_correctness_score as pcs_pullup

from preProcessing import sequence_from_videopath

if __name__ == "__main__":
    video_path = "Deadlift_9.mp4"
    sequence = sequence_from_videopath(video_path)
    motion = 'Deadlift'
    # motion = predict_motion(sequence)
    # print(motion)

    # if(motion == "Deadlift"):
    #     required_angles = calculate_angles(sequence, ['torso', 'knee', 'hip'])

    

