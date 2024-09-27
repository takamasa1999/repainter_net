"use client"
import { Box, Divider, Stack, Typography } from "@mui/material";
import RenderMediaContainer from "./media_container/RenderMediaContainer";
// import {CircularProgress} from "@mui/material";

type Props = {
  url: string;
  title: string;
  description: string;
};
export default function CompositionContainer({ url, title, description }: Props) {
  // Enable static rendering
  return (
    <>
      <Divider />
      <Box sx={{ pt: 1, pb: 1 }}>
          <Stack spacing={1}>
            <Typography component={"h4"} variant={"h4"}>
              {title}
            </Typography>
            <RenderMediaContainer url={url} />
            <Typography component={"p"} variant={"body1"}>
              {description}
            </Typography>
          </Stack>
      </Box>
    </>
  );
}