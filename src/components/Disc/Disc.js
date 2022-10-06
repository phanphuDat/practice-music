import React from 'react'
import styles from '../../assets/Styles/Disc.module.css'
import InfoLayer from '../LayerInformation/InfoLayer'

export default function Disc({
    imageUrl
}) {
  return (
    <div className={styles.discRotation}>
        <div className={styles.disc} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 300,
            width: 300,
            borderRadius: '50%',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
        }}>
        <div style={{ height: 60, width: 60, borderRadius: '50%', backgroundColor: 'white' }}></div>
        </div>
        <InfoLayer style='center' title='Change The Rapper' subtitle='Pop King' titleSize={18} subTitleSize={14}/>
    </div>
  )
}
