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

const wallet = () => {
  const theme = 'dark';
  const lcd = useLcdClient();
  const connected = useConnectedWallet();
  const [balances, setBalances] = useState<Balance[]>([]);
  const chainID = 'columbus-5';
  const [tokenPrices, setTokenPrices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const getTokenPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=cosmos-ecosystem&per_page=250',
        );
        const data = await response.json();

        const res = data.reduce((acc: any, token: any) => {
          acc[token.id.toLowerCase()] = token.current_price;
          return acc;
        }, {});
        return res;
      } catch (error) {
        console.error('Error fetching token prices:', error);
        return null;
      }
    };

    const fetchBalancesAndPrices = async () => {
      if (connected) {
        // Fetch token prices from CoinGecko
        const prices = await getTokenPrices();
        console.log(prices);
        setTokenPrices(prices);

        // Fetch balances from Terra blockchain
        const coins = await lcd.bank.balance(connected.addresses[chainID]);
        const balanceList = coins[0].toArray().map((coin: any) => ({
          denom: coin.denom,
          amount: coin.amount.toString(),
        }));

        setBalances(balanceList);
      } else {
        setBalances([]);
      }
    };

    fetchBalancesAndPrices();
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
                <div className="p-2">Native Token</div>
                <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none p-10">
                  {connected && balances.length > 0 ? (
                    balances.map((balance) => {
                      const { displayName, logo, decimals, id } = convertDenom(
                        balance.denom,
                      );
                      const rawAmount = formatAmount(balance.amount, decimals);
                      const [integerPart, decimalPart] = rawAmount.split('.');
                      const formattedAmount =
                        new Intl.NumberFormat().format(Number(integerPart)) +
                        (decimalPart ? `.${decimalPart}` : '');
                      let amountInUSD;

                      if (tokenPrices !== null) {
                        const tokenPrice = tokenPrices[id.toLowerCase()] || 0;
                        amountInUSD = (Number(rawAmount) * tokenPrice).toFixed(
                          2,
                        );
                      } else {
                        amountInUSD = 'N/A';
                      }

                      return (
                        <div
                          key={balance.denom}
                          className="flex p-3 items-center"
                        >
                          <Avatar
                            alt={`${displayName} logo`}
                            src={`/images/${logo}`}
                            sx={{ width: 32, height: 32 }}
                          />
                          <span className="ml-5">
                            {displayName}: {formattedAmount} ≈ ${amountInUSD}{' '}
                            USD
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <p>loading data......</p>
                  )}
                </div>
              </ShineBorder>
              <ShineBorder
                className="relative flex  w-2/5 flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl"
                color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
              >
                <div className="p-2">CW20 Token</div>
                <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none p-10">
                  {connected && balances.length > 0 ? (
                    balances.map((balance) => {
                      const { displayName, logo, decimals } = convertDenom(
                        balance.denom,
                      );
                      const rawAmount = formatAmount(balance.amount, decimals);
                      const [integerPart, decimalPart] = rawAmount.split('.');
                      const formattedAmount =
                        new Intl.NumberFormat().format(Number(integerPart)) +
                        (decimalPart ? `.${decimalPart}` : '');

                      return (
                        <div
                          key={balance.denom}
                          className="flex p-3 items-center"
                        >
                          <Avatar
                            alt={`${displayName} logo`}
                            src={`/images/${logo}`}
                            sx={{ width: 32, height: 32 }}
                          />
                          <span className="ml-5">
                            {displayName}: {formattedAmount}
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <p>loading data......</p>
                  )}
                </div>
              </ShineBorder>
            </div>
          </div>
        </MagicCard>
      </div>
      ;
    </>
  );
};

export default wallet;
