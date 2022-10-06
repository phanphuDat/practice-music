import React from 'react'
import styles from '../../assets/Styles/Slider.module.css';


export default function Slider({max = 100, currentValue, onChange,}) {
    const [value, setValue] = React.useState(currentValue)

  return (
    <div className={styles.slidecontainer}>
        <input type='range'
            min={0}
            max= {max}
            value = {value}
            className={styles.slider}
            onInput={(e) => {
                setValue(e.target.value);
                if(onChange && typeof onChange === 'function') {
                    onChange(e.target.value)
                }
            }}
        />
    </div>
  )
}
