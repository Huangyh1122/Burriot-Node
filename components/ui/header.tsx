"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed z-30 w-full ">
        <div className="relative flex h-16 items-center justify-between gap-3 bg-white/90 px-32 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <ul className="flex flex-1 items-center gap-10">
            <li>
              <Link
                href="/signup"
                className=" text-black "
              >
               Abount Us
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className=" text-black "
              >
                Burrito College
              </Link>
            </li>

          </ul>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-blue-700 text-gray-200 shadow hover:bg-gray-900"
              >
                Connet Wallet
              </Link>
            </li>
          </ul>
        </div>
    </header>
  );
}
