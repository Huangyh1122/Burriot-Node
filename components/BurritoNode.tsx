'use client';

import { Button, colors } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import RadarAnimation from './RadarAnimation';
import StakeDetail from './StakeDetail';

import bg from '@/public/images/bg2.jpg';
import bgStyles from '@/styles/Background.module.css';

const BurritoNode = () => {
  return (
    <section
      id="burrito-node"
      className={`${bgStyles.bgImage} ${bgStyles.overlay}`}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div
        className={` py-10 px-10 text-center sm:p-10 sm:px-60 flex flex-col sm:flex-row sm:justify-around `}
      >
        <div
          className={`${bgStyles.content} max-w-xl`}
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
          <div className="text-5xl p-8 font-sans font-bold tracking-wide">
            Burrito Node
          </div>
          <div className="text-lg leading-relaxed">
            Burrito Node is a high-security, non-custodial validator on the
            Terra Classic blockchain, dedicated to maintaining high uptime and
            ensuring the seamless operation of the network. Our node is designed
            to support the Burrito Money project while contributing to the
            overall stability and security of the Terra Classic ecosystem.
          </div>
        </div>
        <RadarAnimation />
      </div>
      <StakeDetail />
      <div className="py-10 animate-bounce text-center mt-5">
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          className="bg-blue-600 rounded-full shadow-lg"
          onClick={() =>
            window.open(
              'https://station.terra.money/validator/terravaloper16x9dcx9pm9j8ykl0td4hptwule706ysjel6500',
              '_blank',
            )
          }
        >
          Stake With Us
        </Button>
      </div>
    </section>
  );
};

export default BurritoNode;
