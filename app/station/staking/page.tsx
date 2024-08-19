'use client';
import { useConnectedWallet, useLcdClient } from '@terra-money/wallet-kit';
import React, { useEffect, useState } from 'react';

import { MagicCard } from '@/components/magicui/MagicCard';
import { Validator } from '@terra-money/feather.js/dist/core/staking/Validator';

export type processedValidatorInfo = {
  moniker: String;
  tokens: String;
  commission_rate: String;
  max_commission_rate: String;
  min_commission_rate: String;
};

const wallet = () => {
  const theme = 'dark';
  const lcd = useLcdClient();
  const connected = useConnectedWallet();
  const [validatorInfos, setValidatorInfos] = useState<Validator[]>([]);
  const chainID = 'columbus-5';

  useEffect(() => {
    if (connected) {
      const params = { status: 'BOND_STATUS_BONDED' };
      lcd.staking.validators(chainID, params).then((res) => {
        setValidatorInfos(res[0]);
      });

      lcd.staking.delegations(connected.addresses[chainID]).then((res) => {
        console.log(res);
      });
    } else {
    }
  }, [connected]);

  const processRawValidatorInfo = (rawInfos: Validator[]) => {
    const processedInfos = [];
  };

  return (
    <>
      <div className={'flex h-full w-full flex-col gap-4 '}>
        <MagicCard
          className="flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl "
          gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
        >
          {validatorInfos.length > 0
            ? validatorInfos[1].description?.moniker
            : null}
          {!connected && <p>Wallet not connected!</p>}
        </MagicCard>
      </div>
      ;
    </>
  );
};

export default wallet;
