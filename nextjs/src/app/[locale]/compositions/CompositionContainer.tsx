import { Container } from "@mui/material";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
    url: string;
    description: string;
    locale: string;
};
export default function CompositionContainer({ url, description, locale }: Props) {
    // Enable static rendering
    // unstable_setRequestLocale(locale);
    return (
        <Container>
            {url}, 
            {description}
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