// WalletProviderWrapper.tsx
'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import {
  WalletProvider,
  getInitialConfig,
  InfoResponse,
} from '@terra-money/wallet-kit';
import TerraStationMobileWallet from '@terra-money/terra-station-mobile';

interface WalletProviderWrapperProps {
  children: ReactNode;
}

const WalletProviderWrapper: React.FC<WalletProviderWrapperProps> = ({
  children,
}) => {
  const [defaultNetworks, setDefaultNetworks] = useState<InfoResponse | null>(
    null,
  );

  useEffect(() => {
    getInitialConfig().then((config) => {
      setDefaultNetworks(config);
    });
  }, []);

  if (!defaultNetworks) {
    return <></>;
  }

  return (
    <WalletProvider
      defaultNetworks={defaultNetworks}
      extraWallets={[new TerraStationMobileWallet()]}
    >
      {children}
    </WalletProvider>
  );
};

export default WalletProviderWrapper;
