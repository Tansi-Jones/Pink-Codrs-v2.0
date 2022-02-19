import { Meta } from "../components/meta/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navigation } from "../components/navigation/Navigation";
import React, { useState, useRef } from "react";
import { PlayIcon } from "@heroicons/react/solid";
import { Footer } from "../components/footer/Footer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoPlayer = useRef();

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoPlayer.current.play();
    }
  };
  return (
    <>
      <Meta />
      <header className={`bg-secondary h-[100vh] lg:h-[80vh] ${styles.header}`}>
        <nav>
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>

        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 w-[90%] lg:w-[58%] mx-auto h-[60vh]">
          <div className="lg:my-5">
            <h1 className="text-white font-noto text-5xl lg:text-6xl font-semibold tracking-wide text-left leading-tight">
              Building Female Developers Across Africa
            </h1>
            <div className="block md:flex gap-5 space-y-5 md:space-y-0 my-10">
              <button className="btn-primary py-3 px-11 w-full lg:w-auto">
                work with us
              </button>
              <button className="btn-secondary py-3 px-11 w-full lg:w-auto">
                join pink codrs
              </button>
            </div>
          </div>

          <div className="relative rounded-lg " onClick={handlePlayPause}>
            <div className="relative z-50">
              <video
                width={1000}
                height={1000}
                ref={videoPlayer}
                className="rounded-sm z-[100%]  "
              >
                <source
                  src="assets/vid/Pink Codrs Africa.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              className={` cursor-pointer ${isPlaying ? "hidden" : "block"}`}
            >
              <div className="w-20 h-20 absolute top-[28%] left-[40%] z-50 flex items-center justify-center rounded-full">
                <PlayIcon className="text-primary h-20" />
              </div>
            </div>

            <div className="md:h-[90%] lg:h-[70%] w-[100%]  transform translate-y-[1rem] translate-x-2 md:-translate-y-[20rem] lg:-translate-y-[17rem]  md:translate-x-5 border-2 border-tertiary rounded-sm z-[-100%]"></div>
          </div>
        </div>
      </header>

      <main className="relative ">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 w-[90%] lg:w-[58%] mx-auto">
          <div className="max-w-sm">
            <div className="relative w-[60px] h-[60px] rounded-full bg-pink-600 flex items-center justify-center">
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
            <p className="text-lg text-slate-500 font-normal font-open">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="max-w-sm justify-self-start lg:justify-self-end">
            <div className="relative w-[60px] h-[60px] rounded-full bg-pink-600 flex items-center justify-center">
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
            <p className="text-lg text-slate-500 font-normal font-open">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="max-w-sm">
            <div className="relative w-[60px] h-[60px] rounded-full bg-pink-600 flex items-center justify-center">
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
            <p className="text-lg text-slate-500 font-normal font-open">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="max-w-sm justify-self-start lg:justify-self-end">
            <div className="relative w-[60px] h-[60px] rounded-full bg-pink-600 flex items-center justify-center">
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

        <section className="my-20 w-[90%] lg:w-[58%] mx-auto">
          <h1 className="text-secondary font-bold text-5xl font-noto capitalize my-3 text-center py-10">
            our vision & mission
          </h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative space-y-10 my-28">
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

                <p className="text-lg text-slate-500 font-normal font-open">
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

                <p className="text-lg text-slate-500 font-normal font-open">
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

                <p className="text-lg text-slate-500 font-normal font-open">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div>
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

        <section>
          <div className={`bg-secondary h-[40rem] ${styles.header}`}>
            <h1 className="text-white font-bold text-5xl font-noto capitalize my-3 text-center py-20">
              our most exciting events
            </h1>
          </div>
          <div className="w-[90%] lg:w-[58%] mx-auto grid grid-cols-1 lg:grid-cols-3 transform -translate-y-80 gap-x-20 gap-y-52">
            <article className="relative min-w-[325px] max-w-[325px] h-[23rem] space-y-3 text-gray-700">
              <div className="relative w-full h-full z-50 rounded-sm overflow-auto">
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
              <div className="relative w-full h-full border-2 border-tertiary transform -translate-y-[400px] translate-x-[16px] -z-50 rounded-sm"></div>
              <div>
                <div className="text-slate-600 transform -translate-y-[370px]">
                  <h1 className="font-noto text-secondary text-3xl font-semibold">
                    career guide
                  </h1>
                  <p className="text-lg font-normal py-2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </p>
                </div>
              </div>
            </article>
            <article className="relative min-w-[325px] max-w-[325px] h-[23rem] space-y-3 text-gray-700">
              <div className="relative w-full h-full z-50 rounded-sm overflow-auto">
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
              <div className="relative w-full h-full border-2 border-tertiary transform -translate-y-[400px] translate-x-[16px] -z-50 rounded-sm"></div>
              <div>
                <div className="text-slate-600 transform -translate-y-[370px]">
                  <h1 className="font-noto text-secondary text-3xl font-semibold">
                    career guide
                  </h1>
                  <p className="text-lg font-normal py-2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </p>
                </div>
              </div>
            </article>
            <article className="relative min-w-[325px] max-w-[325px] h-[23rem] space-y-3 text-gray-700">
              <div className="relative w-full h-full z-50 rounded-sm overflow-auto">
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
              <div className="relative w-full h-full border-2 border-tertiary transform -translate-y-[400px] translate-x-[16px] -z-50 rounded-sm"></div>
              <div>
                <div className="text-slate-600 transform -translate-y-[370px]">
                  <h1 className="font-noto text-secondary text-3xl font-semibold">
                    career guide
                  </h1>
                  <p className="text-lg font-normal py-2">
                    Get your blood tests delivered at home collect a sample from
                    the your blood tests.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <hr />
        <section>
          <h1 className="text-secondary font-bold text-5xl font-noto capitalize my-3 text-center py-10">
            what people say about us
          </h1>
        </section>
      </main>

      {/* <footer className="bg-white">
        <Footer />
      </footer> */}
    </>
  );
}
