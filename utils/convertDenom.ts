interface DenomMapping {
  [key: string]: {
    id: string;
    displayName: string;
    logo: string;
    decimals: number;
  };
}

const denomMapping: DenomMapping = {
  uluna: {
    id: 'terra-luna',
    displayName: 'LUNC',
    logo: 'uluna.svg',
    decimals: 6,
  },
  uusd: {
    id: 'usd-coin',
    displayName: 'USDC',
    logo: 'uusd.svg',
    decimals: 6,
  },
};

export const convertDenom = (
  denom: string,
): { displayName: string; logo: string; decimals: number; id: string } => {
  if (denomMapping[denom]) {
    return denomMapping[denom];
  }
  return { displayName: denom.toUpperCase(), logo: '', decimals: 0, id: '' };
};

export const formatAmount = (amount: string, decimals: number): string => {
  const formattedAmount = (parseInt(amount) / Math.pow(10, decimals)).toFixed(
    decimals,
  );
  return formattedAmount;
};
