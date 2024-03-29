import Link from "next/link";
import React, { useState, useRef } from "react";
import styles from "./Navigation.module.css";
import { OfficeBuildingIcon, CogIcon } from "@heroicons/react/outline";

export const Navigation = ({ textColor, logoSrc, menuBarColor }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      <div
        className={`flex items-center justify-between py-3 container ${textColor} `}
      >
        {/* left side */}
        <menu className="flex items-center space-x-10">
          <Link href="/">
            <a>
              <div className="relative">
                <img
                  src={`${logoSrc}`}
                  width={60}
                  height={60}
                  alt="pink codrs africa logo"
                />
              </div>
            </a>
          </Link>
          <div className="hidden lg:flex items-center justify-around space-x-10  font-medium text-lg capitalize font-open tracking-wide">
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
        <menu className="hidden lg:flex items-center space-x-10  font-medium text-lg capitalize font-open tracking-wide">
          <div className="hover:text-primary transition ease-linear">
            <Link href="/for-engineers">
              <a className="flex items-center space-x-2">
                <CogIcon className="h-5" /> <span>for engineers</span>
              </a>
            </Link>
          </div>
          <div className="hover:text-primary transition ease-linear">
            <Link href="/for-companies">
              <a className="flex items-center space-x-2">
                <OfficeBuildingIcon className="h-5" />
                <span> for companies</span>
              </a>
            </Link>
          </div>
        </menu>

        {/* sidebar menu button*/}
        <div
          className={`block lg:hidden cursor-pointer ${
            isMenuClicked && styles.menu
          }`}
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        >
          <div
            className={`${styles.menuBar} ${
              menuBarColor ? menuBarColor : "bg-white"
            }`}
          ></div>
          <div
            className={`${styles.menuBar} ${
              menuBarColor ? menuBarColor : "bg-white"
            }`}
          ></div>
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
              <Link href="/for-engineers">
                <a className="flex items-center space-x-2">
                  <CogIcon className="h-5" /> <span>for engineers</span>
                </a>
              </Link>
            </div>
            <div className="hover:text-primary transition ease-linear">
              <Link href="/for-companies">
                <a className="flex items-center space-x-2">
                  <OfficeBuildingIcon className="h-5" />
                  <span> for companies</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </menu>
    </>
  );
};

export const menuLinks = [
  {
    id: 0,
    name: "home",
    href: "/",
  },
  {
    id: 1,
    name: "about",
    href: "/about",
  },
  {
    id: 2,
    name: "learn",
    href: "/learn",
  },
  {
    id: 3,
    name: "contact",
    href: "/contact",
  },
];
