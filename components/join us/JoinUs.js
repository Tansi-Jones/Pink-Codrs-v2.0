import Link from "next/link";
import styles from "./JoinUs.module.css";
import { ArrowRightIcon } from "@heroicons/react/outline";

export const JoinUs = ({ textColor, btnBackground }) => {
  return (
    <div className=" py-20">
      <div className="container flex flex-col items-center space-y-10">
        <h1
          className={`${styles.mainText} font-noto text-3xl md:text-5xl font-bold capitalize ${textColor} text-center`}
        >
          Interested in Joining the
          <span className="text-green-500"> journey?</span>
        </h1>

        <p className="text-slate-500 font-open text-base md:text-xl text-center max-w-4xl mx-auto">
          We welcome conversations with exceptional individuals who share our
          vision of shaping the future of work.
        </p>
        <Link href="/join-us">
          <a>
            <button
              className={`${btnBackground} py-3 px-6 w-full lg:w-auto flex items-center justify-center space-x-2`}
            >
              <span>join pink codrs</span>
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
