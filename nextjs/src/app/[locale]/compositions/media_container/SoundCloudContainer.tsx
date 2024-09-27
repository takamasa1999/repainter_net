interface Props {
    trackID: string | null; // get the src url from song -> share -> embed track
}
export default function SoundCloudContainer({ trackID }: Props) {
    if (trackID==null) {
        console.error("trackID is null")
        return (
            <></>
        )
    }
    return (
        <iframe
            width="100%"
            height="166"
            allow="autoplay"
            style={{ borderRadius: "12px", border: 0 }}
            src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/${trackID}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
        />
    )
}