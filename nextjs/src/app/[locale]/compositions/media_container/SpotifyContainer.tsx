interface Props {
    SongID: string | null // get the src url from song -> share -> embed track
}
export default function SpotifyContainer({ SongID }: Props) {
    if (SongID == null) {
        console.error("SongID is null")
        return (
            <></>
        )
    }
    return (
        <iframe
            style={{ borderRadius: "12px", border: 0 }}
            src={`https://open.spotify.com/embed/track/${SongID}?utm_source=generator`}
            width="100%" height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    )
}