'use client';
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import Drawer from '../drawer';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import ConnectWalletButton from '../connect-wallet-button';

export default function Header() {
  return (
    <>
      <header className="fixed z-30 w-full bg-white shadow-lg">
        <div className="relative flex h-16 items-center px-6 sm:px-32 sm:gap-32 justify-between">
          <div className="flex">
            <div className="flex items-center md:mr-20">
              <Logo />
            </div>
            <ul className="hidden sm:flex items-center gap-16">
              <li className="flex items-center gap-2">
                <HubOutlinedIcon sx={{ color: 'grey' }} />
                <Link
                  href="/station/wallet"
                  className="text-gray-500 block py-2 px-2"
                >
                  Burrito Station
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
          <ConnectWalletButton />
        </div>
      </header>
    </>
  );
}
