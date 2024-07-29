// app/radar/RadarAnimation.js
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/RadarAnimation.module.css'; // 使用 CSS Modules

const RadarAnimation = () => {
  return (
    <div className="relative flex items-center justify-center p-28">
      <div className={`${styles.rippleContainer}`}>
        <div className={`${styles.avatarWrapper}`}>
          <Image
            src="/images/BurritoLogo.png"
            alt="Logo"
            width={100}
            height={100}
            className={`${styles.avatar}`}
          />
        </div>
        <div className={`${styles.ripple} w-[100px] h-[100px]`}></div>
        <div className={`${styles.ripple} w-[100px] h-[100px]`}></div>
        <div className={`${styles.ripple} w-[100px] h-[100px]`}></div>
        <div className={`${styles.ripple} w-[100px] h-[100px]`}></div>
      </div>
    </div>
  );
};

export default RadarAnimation;
