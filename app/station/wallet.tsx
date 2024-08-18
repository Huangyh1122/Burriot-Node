import { useConnectedWallet, useLcdClient } from '@terra-money/wallet-kit';
import React, { useEffect, useState } from 'react';
import ShineBorder from '@/components/magicui/ShineBorder';

import { MagicCard } from '@/components/magicui/MagicCard';

interface Balance {
  denom: string;
  amount: string;
}

const wallet = () => {
  const theme = 'dark';
  const lcd = useLcdClient();
  const connected = useConnectedWallet();
  const [balances, setBalances] = useState<Balance[]>([]);
  const chainID = 'columbus-5';

  useEffect(() => {
    if (connected) {
      lcd.bank.balance(connected.addresses[chainID]).then(([coins]) => {
        const balanceList = coins.toArray().map((coin) => ({
          denom: coin.denom,
          amount: coin.amount.toString(),
        }));

        lcd.bank.total(chainID).then((res) => {
          console.log(res);
        });
        setBalances(balanceList);
      });
    } else {
      setBalances([]);
    }
  }, [connected]); // useEffect is called when these variables change

  return (
    <>
      <div className={'flex h-full w-full flex-col gap-4 '}>
        <MagicCard
          className="flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl "
          gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
        >
          <div className="p-5">
            <div className="flex justify-around">
              <ShineBorder
                className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl w-2/5"
                color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
              >
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none p-10">
                  {connected && balances.length > 0 ? (
                    balances.map((balance) => (
                      <p key={balance.denom}>
                        {balance.denom.toUpperCase()}: {balance.amount}
                      </p>
                    ))
                  ) : (
                    <p>Wallet not connected or no balance available!</p>
                  )}
                </span>
              </ShineBorder>
              <ShineBorder
                className="relative flex  w-2/5 flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
                color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
              >
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none p-10">
                  {connected && balances.length > 0 ? (
                    balances.map((balance) => (
                      <p key={balance.denom}>
                        {balance.denom.toUpperCase()}: {balance.amount}
                      </p>
                    ))
                  ) : (
                    <p>Wallet not connected or no balance available!</p>
                  )}
                </span>
              </ShineBorder>
              {/* <ShineBorder
                className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
              >
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none ">
                  {connected && balances.length > 0 ? (
                    balances.map((balance) => (
                      <p key={balance.denom}>
                        {balance.denom.toUpperCase()}: {balance.amount}
                      </p>
                    ))
                  ) : (
                    <p>Wallet not connected or no balance available!</p>
                  )}
                </span>
              </ShineBorder> */}
            </div>
          </div>
        </MagicCard>
      </div>
      ;
    </>
  );
};

export default wallet;
