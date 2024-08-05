import React, { useEffect, useState } from 'react';
import bgStyles from '@/styles/Background.module.css';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Divider, useMediaQuery, useTheme } from '@mui/material';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { Tooltip } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const StakeDetail = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold value as needed
  });

  const [copied, setCopied] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [daysSince, setDaysSince] = useState(0);

  const fullAddress = 'terravaloper16x9dcx9pm9j8ykl0td4hptwule706ysjel6500';
  const [displayAddress, setDisplayAddress] = useState(fullAddress);

  useEffect(() => {
    const startDate = new Date('2024-07-11').getTime();
    const today = new Date().getTime();
    const timeDiff = today - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysSince(daysDiff);

    if (isMobile) {
      setDisplayAddress('terravaloper.....jel6500');
    } else {
      setDisplayAddress(fullAddress);
    }
  }, [isMobile]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div
        className="max-w-xs mx-auto sm:max-w-4xl bg-gray-900 rounded-2xl "
        data-aos="zoom-y-out"
        data-aos-delay={150}
      >
        <div className={`${bgStyles.content} p-4`}>
          <div className="flex flex-col items-center md:flex-row" ref={ref}>
            <div className="w-full dm:w-80 p-3">
              <div className="text-xl p-5 mx-auto text-center">Total Stake</div>
              <div className="flex justify-center mx-auto p-5">
                {inView && (
                  <div className="text-3xl font-semibold text-green-500">
                    <CountUp end={20234697703} />
                  </div>
                )}
                <span className="flex items-center pl-3 text-lg">Lunc</span>
              </div>
            </div>
            <Divider
              orientation={isMobile ? 'horizontal' : 'vertical'}
              variant="middle"
              flexItem
              sx={{ bgcolor: 'white' }}
            />
            <div className="w-full dm:w-80 p-3">
              <div className="text-xl p-5 mx-auto text-center">Onlined</div>
              <div className="flex justify-center p-5">
                {inView && (
                  <div className="text-3xl font-semibold">
                    <CountUp end={daysSince} />
                  </div>
                )}
                <span className="flex items-center pl-3 text-lg">days</span>
              </div>
            </div>
            <Divider
              orientation={isMobile ? 'horizontal' : 'vertical'}
              variant="middle"
              flexItem
              sx={{ bgcolor: 'white' }}
            />
            <div className="w-full dm:w-80 p-3">
              <div className="text-xl p-5 mx-auto text-center">Commision</div>
              <div className="flex justify-center p-5">
                {inView && (
                  <div className="text-3xl font-semibold">
                    <CountUp end={3.11} decimals={2} suffix=" %" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="p-5 md:mt-5 text-center">
            <div className="text-2xl bg-">Validator address </div>
            <div className="bg-gray-600 inline-flex items-center rounded-lg mt-4">
              <span className="text-white py-2 px-4">{displayAddress}</span>
            </div>
            <CopyToClipboard text={fullAddress} onCopy={handleCopy}>
              <Tooltip title={copied ? 'Copied!' : 'Copy'} enterTouchDelay={0}>
                <FileCopyOutlinedIcon className="ml-4 text-white cursor-pointer" />
              </Tooltip>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakeDetail;
