'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './logo';
import Drawer from '../drawer';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  return (
    <header className="fixed z-30 w-full bg-white shadow-lg">
      <div className="relative flex h-16 items-center px-6 sm:px-32 sm:gap-32 justify-between sm:justify-start">
        {/* Site branding */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Hamburger menu button */}
        <div className="sm:hidden">
          <Drawer></Drawer>
        </div>

        {/* Navigation links */}
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
      </div>
    </header>
  );
}
