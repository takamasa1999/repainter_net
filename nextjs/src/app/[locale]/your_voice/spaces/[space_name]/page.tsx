"use client"
import { Container, Stack, Typography, Button, TextField } from '@mui/material';
import Voices from "./components/Voices";
import { useState, useEffect } from 'react';
import postVoice from './functions/postVoice';
import getSpaceId from './functions/getSpaceId';
import { useGeneralAlertStore } from '@/stores/useGeneralAlertStore';
import AudioRecorder from './components/AudioRecorder';

export default function Page({ params }: { params: { space_name: string } }) {
  const space_name_decoded = decodeURIComponent(params.space_name);
  const [dictatedText, setDictatedText] = useState("");
  const [voiceSpaceId, setVoiceSpaceId] = useState<number | null>(null);
  const { setGeneralAlertStates } = useGeneralAlertStore();


  useEffect(() => {
    getSpaceId(space_name_decoded).then((response) => {
      if (response) {
        setVoiceSpaceId(response);
      }
    });
  }, [space_name_decoded]);

  function textOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDictatedText(event.target.value);
  }

  async function buttOnOnClick() {
    if (voiceSpaceId) {
      try {
        const newVoice = await postVoice({ dictated_text: dictatedText, voice_spaceId: voiceSpaceId });
        setGeneralAlertStates({
          "showAlert": true,
          "alertMessage": `New voice is registered`,
          "alertSeverity": "success"
        });
        setDictatedText("")
      } catch (error: any) {
        setGeneralAlertStates({
          "showAlert": true,
          "alertMessage": error.message,
          "alertSeverity": "warning"
        });
      }
    }
  }

  async function onAudioBlobChange(audioBlob: Blob) {
      const formData = new FormData();
      formData.append('file', audioBlob, 'audio.wav');
      formData.append('language', 'ja');
      formData.append('model', 'Systran/faster-whisper-small');
      // this url has to be replaced with environment value
      const apiUrl = `${process.env.NEXT_PUBLIC_FASTER_WHISPER_ENDPOINT}/v1/audio/transcriptions`
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });
      const res_json = await response.json()
      const message = res_json.text
      setDictatedText(message)
  }

  return (
    <Container>
      <Stack spacing={2}>
        <Typography component={"h1"} variant={"h4"}>
          Space name: {space_name_decoded}
        </Typography>
        <TextField value={dictatedText} onChange={textOnChange} disabled/>
        {voiceSpaceId && dictatedText.length >= 5 ? (
          <Button variant="contained" onClick={buttOnOnClick}>
            Post
          </Button>
        ) : null}
        <AudioRecorder onAudioBlobChange={onAudioBlobChange} isLoadingDictation={false} />
        <Voices space_name={space_name_decoded} />
      </Stack>
    </Container>
  );
}
