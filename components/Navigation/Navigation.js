import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import menuLinks from "./menuLinks";
import styles from "./Navigation.module.css";
import { CodeIcon, CogIcon } from "@heroicons/react/outline";

export const Navigation = ({ textColor, logoSrc }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      <div
        className={`flex items-center justify-between py-3 w-[90%] lg:w-[58%] mx-auto ${textColor} `}
      >
        {/* left side */}
        <menu className="flex items-center space-x-10">
          <div className="relative">
            <Image
              src={`${logoSrc}`}
              width={60}
              height={60}
              objectFit="fill"
              alt="pink codrs africa logo"
            />
          </div>
          <div className="hidden lg:flex items-center justify-around space-x-10  font-medium text-base capitalize font-open tracking-wide">
            {menuLinks.map(({ id, name, href }) => (
              <div
                key={id}
                className="hover:text-primary transition ease-linear"
              >
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </div>
            ))}
          </div>
        </menu>

        {/* right side */}
        <menu className="hidden lg:flex items-center space-x-10  font-medium text-base capitalize font-open tracking-wide">
          <div className="hover:text-primary transition ease-linear">
            <Link href="/coming-soon">
              <a className="flex items-center space-x-2">
                <CogIcon className="h-5" /> <span>for engineers</span>
              </a>
            </Link>
          </div>
          <div className="hover:text-primary transition ease-linear">
            <Link href="/coming-soon">
              <a className="flex items-center space-x-2">
                <CodeIcon className="h-5" />
                <span> for developers</span>
              </a>
            </Link>
          </div>
        </menu>

        {/* sidebar menu button*/}
        <div
          className={`block lg:hidden ${isMenuClicked && styles.menu}`}
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        >
          <div className={styles.menuBar}></div>
          <div className={styles.menuBar}></div>
        </div>
      </div>

      {/* sidebar */}
      <menu
        className={`lg:hidden bg-white p-5 ${
          isMenuClicked ? "block" : "hidden"
        } ${isMenuClicked && styles.menuSlideIn}`}
      >
        <div className="w-[90%] lg:w-[58%] mx-auto">
          <div className=" lg:hidden items-center justify-around space-y-5 mb-8 text-secondary font-medium text-base capitalize font-open tracking-wide">
            {menuLinks.map(({ id, name, href }) => (
              <div
                key={id}
                className="hover:text-primary transition ease-linear"
              >
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </div>
            ))}
          </div>
          <div className="block lg:hidden items-center space-y-5 text-secondary font-medium text-base capitalize font-open tracking-wide">
            <div className="hover:text-primary transition ease-linear">
              <Link href="/coming-soon">
                <a className="flex items-center space-x-2">
                  <CogIcon className="h-5" /> <span>for engineers</span>
                </a>
              </Link>
            </div>
            <div className="hover:text-primary transition ease-linear">
              <Link href="/coming-soon">
                <a className="flex items-center space-x-2">
                  <CodeIcon className="h-5" />
                  <span> for developers</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </menu>
    </>
  );
};
