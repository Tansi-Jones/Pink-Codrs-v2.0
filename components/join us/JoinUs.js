import Link from "next/link";
import styles from "./JoinUs.module.css";

export const JoinUs = ({ textColor, btnBackground }) => {
  return (
    <div className=" py-20">
      <div className="container flex flex-col items-center space-y-10">
        <h1
          className={`${styles.mainText} font-noto text-3xl md:text-5xl font-bold capitalize ${textColor} text-center`}
        >
          want to be part of the
          <span className="text-green-500"> journey?</span>
        </h1>

        <p className="text-slate-500 font-open text-base md:text-xl text-center max-w-4xl mx-auto">
          We are always open to talk to great people who want to help us shape
          the future of work, and we have job openings all over the world.
        </p>
        <Link href="/join-us">
          <a>
            <button className={`${btnBackground} py-3 px-6 w-full lg:w-auto`}>
              join pink codrs
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
