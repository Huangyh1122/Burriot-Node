'use client';
// app/college/page.tsx
import React, { useEffect } from 'react';
import StationHeader from './station-sidebar';
import Wallet from './wallet';
import Staking from './Staking';

const College = () => {
  useEffect(() => {
    // 保存原始的overflow值
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // 禁用滚动
    document.body.style.overflow = 'hidden';

    // 在组件卸载时恢复滚动
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return (
    <>
      <StationHeader />
      <div className="h-screen bg-black pl-80">
        <Wallet />
        <Staking></Staking>
      </div>
    </>
  );
};

export default College;
