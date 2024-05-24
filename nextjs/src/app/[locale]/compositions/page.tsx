import { useTranslations } from 'next-intl';
import { Container, Typography, Stack } from "@mui/material";
import { unstable_setRequestLocale } from "next-intl/server";
import React from 'react';
import CompositionContainer from './CompositionContainer';
// import SocialLinks from './SocialLinks';

type Props = {
 params: { locale: string };
};
export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  return (
    <Container>
        <CompositionContainer url='url' description='description' locale={locale}></CompositionContainer>
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
