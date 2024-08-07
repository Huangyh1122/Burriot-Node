'use client';
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import Drawer from '../drawer';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import { Button, Popover, Box, Typography } from '@mui/material';
import { useConnectedWallet, useWallet } from '@terra-money/wallet-kit';
import WalletIcon from '@mui/icons-material/Wallet';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
  const connectedWallet = useConnectedWallet();
  const { connect, disconnect, availableWallets } = useWallet();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleDisconnectClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleConnectClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="fixed z-30 w-full bg-white shadow-lg">
      <div className="relative flex h-16 items-center px-6 sm:px-32 sm:gap-32 justify-between">
        <div className="flex">
          <div className="flex items-center md:mr-20">
            <Logo />
          </div>
          <ul className="hidden sm:flex items-center gap-16">
            <li className="flex items-center gap-2">
              <InfoOutlinedIcon sx={{ color: 'grey' }} />
              <Link
                href="/#features-planet"
                className="text-gray-500 block py-2 px-2"
              >
                About Us
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <MemoryOutlinedIcon sx={{ color: 'grey' }} />
              <Link
                href="/#burrito-node"
                className="text-gray-500 block py-2 px-2"
              >
                Burrito Node
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <SchoolOutlinedIcon sx={{ color: 'grey' }} />
              <Link href="/college" className="text-gray-500 block py-2 px-2">
                Burrito College
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <MonitorHeartOutlinedIcon sx={{ color: 'grey' }} />
              <Link href="/monitor" className="text-gray-500 block py-2 px-2">
                Burrito Monitor
              </Link>
            </li>
          </ul>
          <div className="sm:hidden my-auto">
            <Drawer />
          </div>
        </div>

        <div>
          {connectedWallet ? (
            <>
              <Button
                id="disconnect-button"
                variant="contained"
                onClick={handleDisconnectClick}
                sx={{
                  fontWeight: '700',
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                }}
                endIcon={<WalletIcon />}
                aria-controls={open ? 'basic-popover' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                {connectedWallet.name}
              </Button>
              <Popover
                id="basic-popover"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                slotProps={{
                  paper: {
                    style: {
                      marginTop: '10px', // 设置菜单与按钮之间的距离
                      borderRadius: '10px',
                    },
                  },
                }}
              >
                <div className="p-2">
                  <div
                    className="hover:bg-gray-300 rounded-md flex p-2 cursor-pointer "
                    onClick={() => {
                      disconnect();
                      handleClose();
                    }}
                  >
                    <div className="mr-3 text-s">Disconnect</div>
                    <LogoutIcon />
                  </div>
                </div>
              </Popover>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                onClick={handleConnectClick}
                endIcon={<WalletIcon />}
                sx={{
                  fontWeight: '700',
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                }}
              >
                Connect Wallet
              </Button>
              <Popover
                id="connect-popover"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                slotProps={{
                  paper: {
                    style: {
                      marginTop: '10px',
                      borderRadius: '10px',
                    },
                  },
                }}
              >
                <div className="p-2">
                  {availableWallets.map(({ id, name, isInstalled }) => (
                    <div
                      key={id}
                      className={`hover:bg-gray-300 rounded-md flex p-2 cursor-pointer ${!isInstalled && 'opacity-50'}`}
                      onClick={() => isInstalled && connect(id)}
                    >
                      <div className="mr-3 text-s tracking-wide">{name}</div>
                      {name === 'Browser Extension' ||
                      name === 'Station Mobile App' ? (
                        <img
                          src="/images/TerraStationLogo.svg"
                          alt="Terra Station Logo"
                          className="h-6 w-6"
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
                </div>
              </Popover>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
