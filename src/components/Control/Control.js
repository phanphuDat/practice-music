import React from "react";
import styles from "../../assets/Styles/Control.module.css";
import {
  RiPlayFill,
  RiPauseFill,
  RiSkipForwardFill,
  RiSkipBackFill,
  RiShuffleFill,
  RiRepeatFill,
} from "react-icons/ri";

export default function Control({ onClick, action = "", songIndex= 0 }) {
  const handleOnClick = () => {
    if (onClick && typeof onClick === "function") {
      onClick();
    }
  };
  
  const handleOnClickNext = (actionName) => {
    if(onClick && typeof onClick === "function") {
      onClick(actionName);
      console.log("đã nghe next")
    }
  }

  const handleOnClickBack = (actionName) => {
    if(onClick && typeof onClick === "function") {
      onClick(actionName);
      console.log("đã nghe next")
    }
  }
  return (
    <div>
      {/* button handle play music */}
  <button className={styles.button_repeat}>
    <RiRepeatFill/>
  </button>

      {/* button handle play music */}
    <button className={styles.button_back} onClick={()=> {
      handleOnClickBack('back')
    }}>
      <RiSkipBackFill/>
    </button>    

      {/* button handle play music */}
      <button
          className={styles.button_play}
          onClick={() => {
            handleOnClick();
          }}
        >
          {action === "stop" ? <RiPlayFill /> : <RiPauseFill />}
        </button>

      {/* button handle next music */}
        <button className={styles.button_next} onClick={() => {
          handleOnClickNext('next')
        }}>
          <RiSkipForwardFill/>
        </button>

              {/* button handle next music */}
              <button className={styles.button_randum}>
          <RiShuffleFill/>
        </button>
    </div>
  );
}
