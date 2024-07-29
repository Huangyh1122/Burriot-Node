'use client';

import { Button, colors } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import RadarAnimation from './RadarAnimation';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

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
    <>
      <section
        id="burrito-node"
        ref={ref}
        className="py-10 px-10 text-center sm:p-20 sm:px-60 flex flex-col sm:flex-row sm:justify-around animate-fadeIn"
      >
        <div className="max-w-xl" data-aos="zoom-y-out" data-aos-delay={150}>
          <div className="text-5xl p-8 font-sans font-bold text-blue-600 tracking-wide  ">
            Burrito Node
          </div>
          <div className="text-lg leading-relaxed">
            Burrito Node is a high-security, non-custodial validator on the
            Terra Classic blockchain, dedicated to maintaining high uptime and
            ensuring the seamless operation of the network. Our node is designed
            to support the Burrito Money project while contributing to the
            overall stability and security of the Terra Classic ecosystem.
          </div>
          <ul>
            <li className="pt-5 text-xl font-semibold text-green-600">
              Low Commission Fee!! 💥
            </li>
            <li className="pt-5 text-xl font-semibold text-green-600">
              High Stability!! 💥
            </li>
          </ul>
          <div className="py-10 animate-bounce">
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="bg-blue-600 rounded-full shadow-lg mt-5"
            >
              Stake With Us
            </Button>
          </div>
        </div>
        <div className="flex-col">
          <RadarAnimation />
          <div className="flex justify-center">
            {inView && (
              <div className="text-2xl">
                <CountUp end={20000} />
              </div>
            )}
            <span className="flex items-center pl-3 text-lg">+ B Lunc</span>
          </div>
          <div className="flex justify-center">
            {inView && (
              <div className="text-2xl">
                <CountUp end={daysSince} />
              </div>
            )}
            <span className="flex items-center pl-3 text-lg">days</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default BurritoNode;
