import React from 'react';
import { Stack, Grid } from "@mui/material";
import { faSpotify, faSoundcloud, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import FAIconWithAction from '@/components/FAIconWithAction';
import Image from 'next/image';

export default function SocialLinks() {
  const st_size_coef = 0.35
  return (
    // <Stack direction={"row"} spacing={2} alignItems="center">
    <Grid container spacing={2}>
      <Grid item >
        <Image
          src={"/src/stickman_kamehameha.gif"}
          alt="stickman"
          width={368 * st_size_coef}
          height={244 * st_size_coef}
          unoptimized />
      </Grid>
      <Grid item >
        <FAIconWithAction
          icon={faSpotify}
          alt='Spotify'
          color='mediumseagreen'
          action="https://open.spotify.com/artist/7lEXRaPz4LNj8SlTYDQGhH?si=GS3L6MqCTYWqO-oDTK5k_Q"
        />
      </Grid>
      <Grid item >
        <FAIconWithAction
          icon={faSoundcloud}
          alt='test'
          color='darkorange'
          action="https://soundcloud.com/files-audio"
        />
      </Grid>
      <Grid item >
        <FAIconWithAction
          icon={faYoutube}
          alt='test'
          color='red'
          action="https://www.youtube.com/channel/UCj24CM7W7ysIDWJ1sVoIdGQ"
        />
      </Grid>
      <Grid item>
        <FAIconWithAction
          icon={faInstagram}
          alt='test'
          color='hotpink'
          action="https://www.instagram.com/repainter1999/"
        />
      </Grid>
    </Grid>
    // </Stack>
  )
}