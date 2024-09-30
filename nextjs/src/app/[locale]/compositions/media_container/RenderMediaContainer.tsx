import YoutubeContainer from "./YoutubeContainer";
import SpotifyContainer from "./SpotifyContainer";
import SoundCloudContainer from "./SoundCloudContainer";

type Platform = 'YouTube' | 'Spotify' | 'SoundCloud';
// type Result = { platform: Platform, id: string | null };

export default function RenderMediaContainer({url}:{url: string}) {

    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const spotifyRegex = /(?:https?:\/\/)?(?:open\.)?spotify\.com\/track\/([a-zA-Z0-9]{22})/;
    const soundcloudRegex = /(?:https?:\/\/)?(?:www\.)?soundcloud\.com\/([^?]+)/;

    if (youtubeRegex.test(url)) {
        const match = url.match(youtubeRegex);
        const videoCode = match ? match[1] : null;
        return (
            <YoutubeContainer videoCode={videoCode}/>
        )
    } else if (spotifyRegex.test(url)) {
        const match = url.match(spotifyRegex);
        const SongID = match ? match[1] : null;
        return (
            <SpotifyContainer SongID={SongID}/>
        )
    } else if (soundcloudRegex.test(url)) {
        const match = url.match(soundcloudRegex);
        const trackID = match ? match[1] : null;
        return (
            <SoundCloudContainer trackID={trackID}/>
        )
    } else {
        return (
            <>{url}</>
        )
    }
};
