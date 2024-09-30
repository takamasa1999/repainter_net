import { IconButton } from "@mui/material";
import { useAudioRecorder } from "react-audio-voice-recorder";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useEffect } from "react";

interface type {
    onAudioBlobChange: (recordingBlob: Blob) => void
    isLoadingDictation: boolean
}
export default function AudioRecorder({ onAudioBlobChange, isLoadingDictation }: type) {
    const sizeCoefficient = 15;
    const {
        startRecording,
        stopRecording,
        recordingBlob,
        isRecording,
    } = useAudioRecorder();

    useEffect(() => {
        if (recordingBlob && recordingBlob.size > 0) {
            onAudioBlobChange(recordingBlob)
        }
    }, [recordingBlob, onAudioBlobChange])

    return (
        <IconButton
            sx={{
                fontSize: 5 * sizeCoefficient,
                width: 4 * sizeCoefficient,
                height: 4 * sizeCoefficient,
                animation: isRecording ? 'blink 0.2s infinite' : 'none', // Apply blink animation
                color: isRecording ? 'error' : 'warning', // Change color when recording
            }}
            color={isRecording ? 'error' : 'warning'}
            onTouchStart={startRecording}
            onTouchEnd={stopRecording}
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            disabled={isLoadingDictation}
        >
            <RadioButtonCheckedIcon fontSize="inherit" />
        </IconButton>
    )
}