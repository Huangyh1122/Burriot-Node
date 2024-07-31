'use client';

import { Button, colors } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import RadarAnimation from './RadarAnimation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import bg from '@/public/images/bg2.jpg';
import bgStyles from '@/styles/Background.module.css';

const BurritoNode = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold value as needed
  });

  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const startDate = new Date('2024-07-11').getTime();
    const today = new Date().getTime();
    const timeDiff = today - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysSince(daysDiff);
  }, []);

  return (
    <section
      id="burrito-node"
      className={`${bgStyles.bgImage} ${bgStyles.overlay} py-10 px-10 text-center sm:p-20 sm:px-60 flex flex-col sm:flex-row sm:justify-around animate-fadeIn`}
      style={{ backgroundImage: `url(${bg.src})` }}
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
          Burrito Node is a high-security, non-custodial validator on the Terra
          Classic blockchain, dedicated to maintaining high uptime and ensuring
          the seamless operation of the network. Our node is designed to support
          the Burrito Money project while contributing to the overall stability
          and security of the Terra Classic ecosystem.
        </div>
        <ul>
          <li className="pt-5 text-xl font-semibold text-green-600">
            Low Commission Fee
          </li>
          <li className="pt-5 text-xl font-semibold text-green-600">
            High Stability
          </li>
        </ul>
        <div className="py-10 animate-bounce">
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            className="bg-blue-600 rounded-full shadow-lg mt-5"
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
      </div>
      <div className={`${bgStyles.content} flex-col`}>
        <RadarAnimation />
        <div className="flex-col items-center md:flex-row " ref={ref}>
          <div>
            <div className="text-xl p-5">Total Stake</div>
            <div className="flex justify-center px-5">
              {inView && (
                <div className="text-3xl font-semibold">
                  <CountUp end={20234697703} />
                </div>
              )}
              <span className="flex items-center pl-3 text-lg">Lunc</span>
            </div>
          </div>
          <div>
            <div className="text-xl p-5">Onlined</div>
            <div className="flex justify-center px-5">
              {inView && (
                <div className="text-3xl font-semibold">
                  <CountUp end={daysSince} />
                </div>
              )}
              <span className="flex items-center pl-3 text-lg">days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurritoNode;
