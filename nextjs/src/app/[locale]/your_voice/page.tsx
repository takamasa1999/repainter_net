"use client"
import { useTranslations } from 'next-intl';
import { Container, Typography, Stack } from "@mui/material";
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CreateNewSpaceDialog from './CreateNewSpaceDialog';
import AvailableSpaces from './AvailableSpaces';
import { useScreenButtomStore } from '@/stores/useScreenButtomStore';


type Props = {
  params: { locale: string };
};
export default function Page({ params: { locale } }: Props) {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [shouldLoadMore, setShouldLoadMore] = useState(false)
  const t = useTranslations('YourVoice');
  function closeDialog() { setIsOpenDialog(false) }

  const {isScreenButtom} = useScreenButtomStore()

  useEffect(() => {
    if (isScreenButtom) {
      setShouldLoadMore(true)
    } else {
      setShouldLoadMore(false)
    }
  }, [isScreenButtom])

  function onRegisteredNew() {
  }

  return (
    <Container>
      <Stack spacing={2}>
        <Typography component={"p"} variant={"h5"}>
          {t('introduction')}
        </Typography>
        <Button variant='contained' onClick={() => setIsOpenDialog(true)}>
          Create new space
        </Button>
        <AvailableSpaces
          shouldLoadMore={shouldLoadMore}
        />
      </Stack>
      <CreateNewSpaceDialog isOpenDialog={isOpenDialog} closeDialog={closeDialog} onRegisteredNew={onRegisteredNew} />
    </Container>
  );
}
