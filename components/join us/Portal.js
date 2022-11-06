import Link from "next/link";
import styles from "./JoinUs.module.css";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

export const Portal = ({ textColor, btnBackground }) => {
    let [dropdown,setDropdown]=useState(false)
    const content = "Pink codrs is building the largest portal of women in tech across africa. To thrive as a continent in a digital revolution, Pink Codrs Africa and Id8 Space recognises the importance for Africa to enhance and develop the skills of its workforce and invest in its local talents, especially women. To promote gender parity in its teams, the partnership between Pink Codrs Africa and Id8 Space has developed a platform  equipped with enough resources to connect you, assist you, source out resources and equip skills to hasten your ideas and tech careers."
  return (
    <div className=" py-20">
      <div className="container flex flex-col items-center space-y-10">
        <h1
          className={`${styles.mainText} font-noto text-3xl md:text-5xl font-bold capitalize ${textColor} text-center`}
        >
          Our
          <span className="text-orange-500"> Portal?</span>
        </h1>

        <p className="text-slate-500 font-open text-base md:text-xl text-center max-w-4xl mx-auto">
        {dropdown? content: content.slice(0,150)}
        ... <button onClick={()=>setDropdown(!dropdown)} className="text-slate-500 font-semibold">{dropdown? "show less":"read more"}</button>
        </p>
        <p className="text-slate-500 font-open text-base md:text-xl text-center max-w-4xl mx-auto">
            <strong>Sign up on our portal and be a part of a community of women  in tech in  Africa.</strong>
        </p>
        <Link href="/#">
          <a>
            <button
              className={`${btnBackground} py-3 px-6 w-full lg:w-auto flex items-center justify-center space-x-2`}
            >
              <span>sign up</span>
              <span>
                <ArrowRightIcon className="text-white h-4" />
              </span>
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
