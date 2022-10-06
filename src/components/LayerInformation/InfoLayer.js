import React from 'react'
import styles from '../../assets/Styles/LayerInfor.module.css'

export default function InfoLayer({
    id,
    title,
    titleSize,
    subTitleSize,
    subtitle,
    style = null,
}) {
  return (
    <div className={styles.infoLayer} style={{alignItems :style}}>
        <div className={styles.title} style={{fontSize: titleSize}}>{title}</div>
        <div className={styles.subTitle} style={{fontSize: subTitleSize}}>{subtitle}</div>
    </div>
  )
}
