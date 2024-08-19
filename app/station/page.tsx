'use client';

import { useConnectedWallet, useLcdClient } from '@terra-money/wallet-kit';
import React, { useEffect, useState } from 'react';
import ShineBorder from '@/components/magicui/ShineBorder';

import { MagicCard } from '@/components/magicui/MagicCard';
import { convertDenom, formatAmount } from '@/utils/convertDenom';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';

interface Balance {
  denom: string;
  amount: string;
}

const page = () => {
  const theme = 'dark';

  return (
    <>
      <div className={'flex h-full w-full flex-col gap-4 '}>
        <MagicCard
          className="flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl "
          gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
        >
          This is the index
        </MagicCard>
      </div>
      ;
    </>
  );
};

export default page;
