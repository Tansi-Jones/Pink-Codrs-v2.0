import { Meta } from "../components/meta/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navigation } from "../components/navigation/Navigation";
import React, { useState, useRef } from "react";
import { PlayIcon } from "@heroicons/react/solid";
import { Footer } from "../components/footer/Footer";
import Link from "next/link";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { JoinUs } from "../components/join us/JoinUs";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerActive, setPlayerActive] = useState(false);

  const videoPlayer = useRef();

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setPlayerActive(true);
    if (!isPlaying) {
      return videoPlayer.current.play();
    } else {
      return videoPlayer.current.pause();
    }
  };

  return (
    <>
      <Meta />
      <header
        className={`bg-secondary h-[100vh] md:h-[100vh] lg:h-[80vh] ${styles.header}`}
      >
        <nav>
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>

        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 w-[90%] lg:w-[58%] mx-auto h-[60vh]">
          <div className="lg:my-5">
            <h1 className="font-noto text-4xl lg:text-6xl font-semibold tracking-wide text-left leading-tight">
              Building Female Developers Across Africa
            </h1>
            <div className="block md:flex gap-5 space-y-5 md:space-y-0 my-10">
              <Link href="/join-us">
                <a>
                  <button className="btn-primary py-3 px-11 w-full lg:w-auto">
                    join pink codrs
                  </button>
                </a>
              </Link>
              <Link href="/work-with-us">
                <a>
                  <button className="btn-secondary py-3 px-11 w-full lg:w-auto">
                    work with us
                  </button>
                </a>
              </Link>
            </div>
          </div>

          <div className={`${styles.video} relative rounded-lg`}>
            <div className="relative z-50" onClick={handlePlayPause}>
              <video
                width={1000}
                height={1000}
                ref={videoPlayer}
                className="rounded-sm z-[100%]"
              >
                <source
                  src="assets/vid/Pink Codrs Africa.mp4"
                  type="video/mp4"
                />
              </video>
              <div
                className={`${styles.videoPlayer} ${
                  playerActive ? "flex" : "hidden"
                }`}
              >
                <input
                  type="range"
                  name=""
                  id=""
                  className={`w-full mt-1 ${styles.playerRange}`}
                />
                <div className="cursor-pointer" onClick={handlePlayPause}>
                  {isPlaying ? (
                    <BsPauseFill className="text-3xl text-primary" />
                  ) : (
                    <BsPlayFill className="text-3xl text-primary" />
                  )}
                </div>
              </div>
            </div>
            <div
              className={` cursor-pointer ${isPlaying ? "hidden" : "block"}`}
            >
              <div className="w-20 h-20 absolute top-[28%] left-[40%] z-50 flex items-center justify-center rounded-full">
                <BsPlayFill className="text-white text-8xl" />
              </div>
            </div>

            <div className={styles.videoDesign}></div>
          </div>
        </div>
      </header>

      <main className="relative ">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 w-[90%] lg:w-[58%] mx-auto">
          <div className="max-w-sm">
            <div className="relative w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center">
              <Image
                src="/assets/svg/cloud.svg"
                width={30}
                height={30}
                objectFit="fill"
                alt="pink codrs africa cloud computing icon"
              />
            </div>
            <h1 className="text-secondary font-bold text-3xl font-noto capitalize my-3">
              cloud computing
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-normal font-open">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="max-w-sm justify-self-start lg:justify-self-end">
            <div className="relative w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center">
              <Image
                src="/assets/svg/ml.svg"
                width={30}
                height={30}
                objectFit="fill"
                alt="pink codrs africa machine learning icon"
              />
            </div>
            <h1 className="text-secondary font-bold text-3xl font-noto capitalize my-3">
              machine learning
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-normal font-open">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="max-w-sm">
            <div className="relative w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center">
              <Image
                src="/assets/svg/dev.svg"
                width={30}
                height={30}
                objectFit="fill"
                alt="pink codrs africa software deve icon"
              />
            </div>
            <h1 className="text-secondary font-bold text-3xl font-noto capitalize my-3">
              software development
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-normal font-open">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="max-w-sm justify-self-start lg:justify-self-end">
            <div className="relative w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center">
              <Image
                src="/assets/svg/db.svg"
                width={30}
                height={30}
                objectFit="fill"
                alt="pink codrs africa data science icon"
              />
            </div>
            <h1 className="text-secondary font-bold text-3xl font-noto capitalize my-3 ">
              data science
            </h1>
            <p className="text-lg text-slate-500 font-normal font-open">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>

        <hr />

        <section className="my-8 w-[90%] lg:w-[58%] mx-auto">
          <h1 className="text-secondary font-bold text-3xl md:text-5xl font-noto capitalize my-3 text-center py-10">
            our vision & mission
          </h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative space-y-10 my-6 lg:my-16">
              <div className="space-y-5">
                <div className="flex space-x-2">
                  <div className="relative mt-1">
                    <Image
                      src="/assets/svg/green.svg"
                      width={20}
                      height={20}
                      objectFit="fill"
                      alt="pink codrs africa data science icon"
                    />
                  </div>
                  <h1 className="font-noto text-secondary text-5xl font-semibold">
                    500+
                  </h1>
                </div>

                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex space-x-2">
                  <div className="relative mt-1">
                    <Image
                      src="/assets/svg/pink.svg"
                      width={20}
                      height={20}
                      objectFit="fill"
                      alt="pink codrs africa data science icon"
                    />
                  </div>
                  <h1 className="font-noto text-secondary text-5xl font-semibold">
                    80%
                  </h1>
                </div>

                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex space-x-2">
                  <div className="relative mt-1">
                    <Image
                      src="/assets/svg/yellow.svg"
                      width={20}
                      height={20}
                      objectFit="fill"
                      alt="pink codrs africa data science icon"
                    />
                  </div>
                  <h1 className="font-noto text-secondary text-5xl font-semibold">
                    90%
                  </h1>
                </div>

                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="mt-20">
              <div className="-mt-52 lg:-mt-0 relative w-[20rem] h-[35rem] lg:h-[40rem] lg:w-[30rem]">
                <Image
                  src="/assets/svg/work.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="pink codrs africa logo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our events */}
        <section>
          <div className={`bg-secondary h-[40rem] ${styles.header}`}>
            <h1 className="font-bold text-3xl md:text-5xl font-noto capitalize md:my-3 text-center py-32  w-[90%] lg:w-[58%] mx-auto">
              our most exciting events
            </h1>
          </div>
          <div className="w-[90%] lg:w-[58%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transform -translate-y-64 lg:-translate-y-80 gap-x-20 gap-y-52">
            <article
              className={`${styles.card} relative min-w-[325px] max-w-[325px] h-[23rem] space-y-3 text-gray-700  justify-self-center`}
            >
              <div className="relative w-full h-full z-50 rounded-sm overflow-auto bg-pink-300">
                <Image
                  src="/assets/img/img-4.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="pink codrs africa logo"
                />
              </div>

              <div className="bg-primary w-16 h-16 absolute -top-12 left-[40px] z-50 flex items-center justify-center rounded-full">
                <Image
                  src="/assets/svg/1.svg"
                  width={30}
                  height={30}
                  objectFit="contain"
                  alt="pink codrs africa logo"
                />
              </div>
              <div className={styles.cardDesign}></div>
              <div>
                <div className="text-slate-600 transform -translate-y-[370px]">
                  <h1 className="font-noto text-secondary text-3xl font-semibold">
                    career guide
                  </h1>
                  <p className="text-base md:text-lg font-normal py-2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </p>
                </div>
              </div>
            </article>
            <article
              className={`${styles.card} relative min-w-[325px] max-w-[325px] h-[23rem] space-y-3 text-gray-700  justify-self-center`}
            >
              <div className="relative w-full h-full z-50 rounded-sm overflow-auto bg-pink-300">
                <Image
                  src="/assets/img/img-3.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="pink codrs africa logo"
                />
              </div>

              <div className="bg-primary w-16 h-16 absolute -top-12 left-[40px] z-50 flex items-center justify-center rounded-full">
                <Image
                  src="/assets/svg/2.svg"
                  width={30}
                  height={30}
                  objectFit="contain"
                  alt="pink codrs africa logo"
                />
              </div>
              <div className={styles.cardDesign}></div>
              <div>
                <div className="text-slate-600 transform -translate-y-[370px]">
                  <h1 className="font-noto text-secondary text-3xl font-semibold">
                    career guide
                  </h1>
                  <p className="text-base md:text-lg font-normal py-2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </p>
                </div>
              </div>
            </article>
            <article
              className={`${styles.card} relative min-w-[325px] max-w-[325px] h-[23rem] space-y-3 text-gray-700  justify-self-center`}
            >
              <div className="relative w-full h-full z-50 rounded-sm overflow-auto bg-pink-300">
                <Image
                  src="/assets/img/img-2.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="pink codrs africa logo"
                />
              </div>

              <div className="bg-primary w-16 h-16 absolute -top-12 left-[40px] z-50 flex items-center justify-center rounded-full">
                <Image
                  src="/assets/svg/3.svg"
                  width={30}
                  height={30}
                  objectFit="contain"
                  alt="pink codrs africa logo"
                />
              </div>
              <div className={styles.cardDesign}></div>
              <div>
                <div className="text-slate-600 transform -translate-y-[370px]">
                  <h1 className="font-noto text-secondary text-3xl font-semibold">
                    career guide
                  </h1>
                  <p className="text-base md:text-lg font-normal py-2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section>
          <div className=" w-[90%] lg:w-[58%] mx-auto mb-16">
            <hr />
            <h1 className="text-secondary font-bold text-3xl md:text-5xl font-noto capitalize my-3 text-center py-10 mt-10">
              what people say about us
            </h1>
            <div>
              <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                {/* left  */}
                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-greatVibes text-2xl mb-1">
                      Andria Hitchin
                    </h3>
                    <p className="leading-tight md:text-justify  text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi, quaerat?
                    </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-pink-600 pointer-events-none overflow-auto"></div>
                    </div>
                    <div className="w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-primary shadow overflow-auto">
                      <div className="relative h-full w-full">
                        <Image
                          src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg"
                          layout="fill"
                          objectFit="cover"
                          alt="pink codrs africa logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* right  */}
                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-pink-600 pointer-events-none"></div>
                    </div>
                    <div className="w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-primary shadow overflow-auto">
                      <div className="relative h-full w-full">
                        <Image
                          src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
                          layout="fill"
                          objectFit="cover"
                          alt="pink codrs africa logo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                    <h3 className="font-greatVibes text-2xl mb-1">
                      Willy Mikson
                    </h3>
                    <p className="leading-tight md:text-justify text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, facilis.
                    </p>
                  </div>
                </div>
                {/*  left  */}
                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-greatVibes text-2xl mb-1">
                      Sonnia Fasci
                    </h3>
                    <p className="leading-tight md:text-justify text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi, quaerat?
                    </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-pink-600 pointer-events-none"></div>
                    </div>
                    <div className="w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-primary shadow  overflow-auto">
                      {" "}
                      <div className="relative h-full w-full">
                        <Image
                          src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
                          layout="fill"
                          objectFit="cover"
                          alt="pink codrs africa logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*  left  */}
                <div className="flex flex-row-reverse md:contents">
                  <div className="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                    <h3 className="font-greatVibes text-2xl mb-1">
                      Jessica Maria
                    </h3>
                    <p className="leading-tight md:text-justify text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi, quaerat?
                    </p>
                  </div>
                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-pink-600 pointer-events-none"></div>
                    </div>
                    <div className="w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-primary shadow  overflow-auto">
                      <div className="relative h-full w-full">
                        <Image
                          src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg"
                          layout="fill"
                          objectFit="cover"
                          alt="pink codrs africa logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*  right  */}
                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1 bg-pink-600 pointer-events-none"></div>
                    </div>
                    <div className="w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-primary shadow overflow-auto">
                      <div className="relative h-full w-full">
                        <Image
                          src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
                          layout="fill"
                          objectFit="cover"
                          alt="pink codrs africa logo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                    <h3 className="font-greatVibes text-2xl mb-1">
                      Paul Borge
                    </h3>
                    <p className="leading-tight md:text-justify text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <JoinUs />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
