import React from 'react'
import styles from '../../assets/Styles/Song.module.css';
import { FaCaretRight, FaHeart } from 'react-icons/fa';


export default function Song({
    id,
    title,
    artist,
    imageUrl,
    audioUrl,
    duration,
    onClick,
}) {
   const [check, setCheck] = React.useState(false)

   const clickPlay = () => {
    
   }

  return (
    <div className={styles.divSong} onClick={onClick}>
        <div className={styles.divcontent}>
          <div className={styles.infor}>
            <span className={styles.songId}>{id}</span>
            <span className={styles.songImage}>
                <img src={imageUrl} alt='' width='50' height='50'/>
            </span>
            <FaCaretRight className={styles.careRight}/>
            <span className={styles.songTitle}>{title}</span>
          </div>
          <span className={styles.songArtist}>{artist}</span>
          <FaHeart className={check !== false ? styles['heart-ticked'] : styles.heart}
          onClick = {() => { 
              setCheck((c) => !c)
              }
            }/>
        </div>
        
        <span className={styles.songDuration}>{duration}</span>
    </div>
  )
}
