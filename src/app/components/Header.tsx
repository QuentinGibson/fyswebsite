"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { useMediaQuery } from "usehooks-ts";

export default function Header() {
  let isDesktop = useMediaQuery("(min-width: 1050px)", {
    initializeWithValue: false,
    defaultValue: false,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="  dark:border-slate-300 flex flex-col items-center justify-between border-b border-white/10 dark px-4 py-5">
      <div className="item-center dark:text-slate-100 flex w-full items-center justify-start md:gap-8 pl-4 pr-5">
        <div className="">
          <Link prefetch href="/">
            <h1 className="font-sauce text-3xl font-semibold uppercase">
              <img src={"/static/FYS-logo.svg"} alt="" />
            </h1>
          </Link>
        </div>
        <div className="flex w-full gap-2 md:gap-8">
          {isDesktop ? (
            <nav className="box-border flex w-full items-center justify-between font-display tracking-[1.8px] text-base">
              <div className="flex gap-8 font-bold uppercase">
                <Link prefetch href="/">
                  Home
                </Link>
                <Link prefetch href="/services">
                  Services
                </Link>
                <Link prefetch href="/about">
                  About
                </Link>
                <Link prefetch href="/portfolio">
                  Portfolio
                </Link>
                <Link prefetch href="/case-studies">
                  Case Studies
                </Link>
                <Link prefetch href="/testimonials">
                  Testimonials
                </Link>
              </div>
              <div>
                <Link
                  className="border-2 px-8 py-3 font-display text-sm font-semibold hover:bg-slate-500  hover:text-primary"
                  prefetch
                  href="/contact"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          ) : (
            <div className="flex w-full items-center justify-end">
              {!isDesktop && (
                <button className="p-4">
                  {isMenuOpen ? (
                    <HiX onClick={() => setIsMenuOpen(false)} className="text-3xl" />
                  ) : (
                    <HiMenuAlt4 onClick={() => setIsMenuOpen(true)} className="text-3xl" />
                  )}
                </button>
              )}
            </div>
          )}
          {/* <button>
              {isDark ?
                <HiOutlineSun onClick={changeTheme} className='text-2xl' /> :
                <HiOutlineMoon onClick={changeTheme} className='text-2xl' />
              }
            </button> */}
        </div>
      </div>
      {isDesktop
        ? null
        : isMenuOpen && (
            <nav className="my-2 flex flex-col justify-center gap-4">
              <Link className="hover:font-bold" prefetch href="/services" onClick={closeMenu}>
                Services
              </Link>
              <Link className="hover:font-bold" prefetch href="/about" onClick={closeMenu}>
                About
              </Link>
              <Link className="hover:font-bold" prefetch href="/portfolio" onClick={closeMenu}>
                Portfolio
              </Link>
              <Link className="hover:font-bold" prefetch href="/case-studies" onClick={closeMenu}>
                Case Studies
              </Link>
              <Link className="hover:font-bold" prefetch href="/testimonials" onClick={closeMenu}>
                Testimonials
              </Link>
              <Link className="hover:font-bold" prefetch href="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
            </nav>
          )}
    </header>
  );
}
