"use client"

import { useTranslations } from 'next-intl';
import { Container, Button } from "@mui/material";
import React, { useEffect } from 'react';
import CompositionContainer from './CompositionContainer';
import { callDatabaseApi } from '@/lib/callDatabaseApi';
// import FormGenerator from '@/components/formGenerator';

type Props = {
  params: { locale: string };
};
export default function Page({ params: { locale } }: Props) {
  // callDatabaseApi("test", "findMany").then((res) => {
  //   console.log(res)
  // })
  const t = useTranslations('Index');
  return (
    <Container>
      {/* <FormGenerator /> */}

      <CompositionContainer url='url' description='description' locale={locale}></CompositionContainer>
      <Button
      // onClick={createComposition}
      >
        Create
      </Button>

      {/* <Stack spacing={2}>
        <Typography component={"h1"} variant={"h1"}>
          {t('title')}
        </Typography>
        <Typography component={"p"} variant={"body1"}>
          {t.rich('greeting')}
        </Typography>
        <Typography component={"p"} variant={"body1"}>
          {t.rich('introduction')}
        </Typography>
        <Typography component={"p"} variant={"body1"}>
          {t('please-subscribe')}
        </Typography>
        <SocialLinks/>
      </Stack> */}
    </Container>
  );
}
