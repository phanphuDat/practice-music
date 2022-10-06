import React from "react";
import styles from "../assets/Styles/Spotify.module.css";
import Song from "./Songs/Song";
import data from "../assets/Datas/Data";

import InfoLayer from "./LayerInformation/InfoLayer";
import { BiAlarm } from "react-icons/bi";
import Disc from "./Disc/Disc";
import Slider from "./Slider/Slider";
import Control from "./Control/Control";

export default function Spotify() {
  const [songIndex, setSongIndex] = React.useState(0)
  
  const [currentTime, setCurrentTime] = React.useState(0);

  const [status, setStatus] = React.useState("stop");

  const refPlayer = React.useRef();

  return (
    <div className={styles.container}>
      <div className={styles.song_list}>
        <div className={styles.title}>
          <InfoLayer title="Most Popular" subtitle="92 Songs" />
        </div>
        <div className={styles.contentTitle}>
          <div className={styles.ifSong}># TIÊU ĐỀ</div>
          <div className={styles.TitleSong}>ARTIST NAME</div>
          <div className={styles.infoTitleSong}>
            <BiAlarm className={styles.timer} />
          </div>
        </div>
        <div className={styles.content_list}>
          {data.map((item, index) => {
            return (
              <Song
                key={`song-${index}`}
                id={index + 1}
                imageUrl={item.imageUrl}
                title={item.title}
                artist={item.artist}
                duration={`${Math.floor(item.duration / 60)}:${
                  item.duration % 60
                }`}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.song_player}>
        <div className={styles.player_list}>
          <div className={styles.title}>
            <InfoLayer title="Now Playing" subtitle="55 Items on the list" />
          </div>

          <div className={styles.music_player}>
            <div className={styles.disc_rotate}>
              {/* đĩa nhạc */}
              <div className={styles.disc}>
                <Disc imageUrl="/music/image/ShapeOfYou.jpg" />
              </div>
              {/* audio music */}
              <div style={{ display: "none" }}>
                <audio
                  controls
                  ref={refPlayer}
                  src="/music/mp3/ShapeOfYou_EdSheeran.mp3"
                  onTimeUpdate={(e) => {
                    setCurrentTime(refPlayer?.current?.currentTime);
                  }}
                />
              </div>
              {/* slider bar music play */}
              <div className={styles.slider}>
                <Slider
                  max={200}
                  curentValue={currentTime}
                  onChange={(value) => {
                    refPlayer.current.currentTime = value;
                  }}
                />
              </div>
            </div>
            {/* controls */}
            <div className={styles.controls}>
              <div className={styles.playMusic}>
                <Control
                  action={status}
                  onClick={(actionName) => {
                    if (status === "stop") {
                      refPlayer.current.play();
                      setStatus("play");
                    } else if (status === "play") {
                      refPlayer.current.pause();
                      setStatus("stop");
                    }
                    switch (actionName) {
                      case 'next':
                        setSongIndex((s) => s+1)
                        setStatus("play")
                        break
                      case 'back':
                        setSongIndex((s) => s-1)
                        setStatus("play")
                        break
                      default:
                          
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
