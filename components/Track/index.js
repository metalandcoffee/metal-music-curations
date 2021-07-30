import Image from "next/image"
import styles from '@components/Track/Track.module.css'

export default function Track({ track }) {
   console.log(track.album);
//   console.log(track.album.images);
  return (
    <li key={track.id}>
     {track.artists.map(artist => artist.name)} - {track.album.name}
     <Image 
      src={track.album.images[0].url} 
      height={track.album.images[0].height} 
      width={track.album.images[0].width}
      alt={track.name} 
      layout="responsive" />
      <a href={track.album.external_urls.spotify} target="_blank">Click to open album.</a>
    </li>
  )
}
