import styled from '@emotion/styled';
import { useState } from 'react';

const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
  position: relative;
`;

const CustomedIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 0; /* Replaces the deprecated frameBorder attribute */
`;

interface Props {
  videoCode: string | null; // The YouTube video code (part of the URL after 'v=')
}

const YoutubeContainer: React.FC<Props> = ({ videoCode }) => {
  const [loaded, setloaded] = useState(false)
  if (videoCode === null) {
    console.error("videoCode is null");
    return null;
  }

  return (
      <VideoContainer>
        <CustomedIframe
          src={`https://www.youtube.com/embed/${videoCode}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onLoad={() => setloaded(true)}
        />
      </VideoContainer>
  );
};

export default YoutubeContainer;
