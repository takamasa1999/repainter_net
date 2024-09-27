import { useTranslations } from 'next-intl';
import { Container, Typography, Stack } from "@mui/material";
import SocialLinks from './SocialLinks';
import { unstable_setRequestLocale } from 'next-intl/server';


type Props = {
  params: { locale: string };
};
export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);  
  const t = useTranslations('Index');

  return (
    <Container>
      <Stack spacing={2}>
        <Typography component={"h1"} variant={"h1"}>
          {t.rich('title')}
        </Typography>
        <Typography component={"p"} variant={"body1"}>
          {t.rich('greeting')}
        </Typography>
        <Typography component={"p"} variant={"body1"}>
          {t.rich('introduction')}
        </Typography>
        <Typography component={"p"} variant={"body1"}>
          {t.rich('please-subscribe')}
        </Typography>
        <SocialLinks />
      </Stack>
    </Container>
  );
}
