import { Meta } from "../components/meta/Meta";
import styles from "../styles/Home.module.css";
import { Navigation } from "../components/navigation/Navigation";
import React, { useState, useRef } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Footer } from "../components/footer/Footer";
import Link from "next/link";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { JoinUs } from "../components/join us/JoinUs";
import { ArrowRightIcon } from "@heroicons/react/outline";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerActive, setPlayerActive] = useState(false);
  const [readmore, setReadmore] = useState(false);

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

        <div className="py-16 grid grid-cols-1 lg:grid-cols-2 container h-[60vh] lg:gap-x-3">
          <div className="lg:my-5">
            <h1 className="font-noto text-3xl lg:text-4xl 2xl:text-5xl font-semibold tracking-wide text-left leading-tight">
              Enable 1 million women with in-demand tech skills by 2030
            </h1>
            <div className="block md:flex gap-5 space-y-5 md:space-y-0 my-10">
              <Link href="/join-us">
                <a>
                  <button className="btn-primary py-3 px-11 w-full lg:w-auto mb-5">
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

          {/* Intro Video */}
          <div className={`${styles.video} relative rounded-lg`}>
            <div
              className="relative z-50 cursor-pointer"
              onClick={handlePlayPause}
            >
              <video
                width={1000}
                height={1000}
                ref={videoPlayer}
                className="rounded-sm z-[100%]"
              >
                <source
                  src="https://res.cloudinary.com/dqw0lwkil/video/upload/v1669162467/Pink%20Codrs/Pink_Codrs_hxdfyf.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div
              className={`cursor-pointer ${isPlaying ? "hidden" : "block"}`}
              onClick={handlePlayPause}
            >
              <div className="w-20 h-20 absolute top-[28%] left-[40%] z-50 flex items-center justify-center rounded-full bg-white bg-opacity-70">
                <BsPlayFill className="text-primary text-3xl" />
              </div>
            </div>

            <div className={styles.videoDesign}></div>
          </div>
        </div>
      </header>

      <main className="relative ">
        <h1 className="text-secondary font-bold text-3xl md:text-5xl font-noto capitalize my-3 text-center py-10 mt-10">
          Area of focus
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 container">
          <div className="max-w-sm">
            <div className="relative w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center">
              <img
                src="/assets/svg/dev.svg"
                width={30}
                height={30}
                className="object-fill"
                alt="pink codrs africa software deve icon"
              />
            </div>
            <h1 className="text-secondary font-bold text-3xl font-noto capitalize my-3">
              software development
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-normal font-open">
              12-month full-stack program that takes our candidates through C#,
              Java, Javascript, Databases, web; both front-end, back-end, and
              development operations.
            </p>
          </div>
          <div className="max-w-sm justify-self-start lg:justify-self-end">
            <div className="relative w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center">
              <img
                src="/assets/svg/db.svg"
                width={30}
                height={30}
                className="object-fill"
                alt="pink codrs africa data science icon"
              />
            </div>
            <h1 className="text-secondary font-bold text-3xl font-noto capitalize my-3 ">
              data science
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-normal font-open">
              6 months Data Science course takes you through T-SQL, Microsoft
              Excel, Power BI, the R and Python languages, Azure Machine
              Learning, HDInsight, and Spark
            </p>
          </div>
          <div className="max-w-sm">
            <div className="relative w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center">
              <img
                src="/assets/svg/ml.svg"
                width={30}
                height={30}
                className="object-fill"
                alt="pink codrs africa machine learning icon"
              />
            </div>
            <h1 className="text-secondary font-bold text-3xl font-noto capitalize my-3">
              machine learning
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-normal font-open">
              The skills attained from our 12-week machine learning program in
              python are SciPy and scikit-learn, Machine Learning, regression,
              Classification, Hierarchical Clustering
            </p>
          </div>
          <div className="max-w-sm justify-self-start lg:justify-self-end">
            <div className="relative w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center">
              <img
                src="/assets/svg/cloud.svg"
                width={30}
                height={30}
                className="object-fill"
                alt="pink codrs africa cloud computing icon"
              />
            </div>
            <h1 className="text-secondary font-bold text-3xl font-noto capitalize my-3">
              cloud computing
            </h1>
            <p className="text-lg text-slate-500 font-normal font-open">
              Develop, deploy, and manage cloud-based applications. Hire
              freelance cloud developers to analyse customer needs, design
              solutions, and debug systems.
            </p>
          </div>
        </section>

        <hr />

        <section className="my-8 container">
          <h1 className="text-secondary font-bold text-3xl md:text-5xl font-noto capitalize my-3 text-center py-10">
            our vision & mission
          </h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:py-20">
            <div className="relative space-y-10 my-6 lg:my-16">
              <div className="space-y-5">
                <div className="flex space-x-2">
                  <div className="relative mt-1">
                    <img
                      src="/assets/svg/green.svg"
                      width={20}
                      height={20}
                      className="object-fill"
                      alt="pink codrs africa data science icon"
                    />
                  </div>
                  <h1 className="font-noto text-secondary text-5xl font-semibold">
                    WHY?
                  </h1>
                </div>

                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  To mentor young women into skilled tech employees and
                  entrepreneurs that will drive African innovation
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex space-x-2">
                  <div className="relative mt-1">
                    <img
                      src="/assets/svg/pink.svg"
                      width={20}
                      height={20}
                      className="object-fill"
                      alt="pink codrs africa data science icon"
                    />
                  </div>
                  <h1 className="font-noto text-secondary text-5xl font-semibold">
                    How?
                  </h1>
                </div>

                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Training 1 million African women with in-demand digital skills
                  by 2030
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex space-x-2">
                  <div className="relative mt-1">
                    <img
                      src="/assets/svg/yellow.svg"
                      width={20}
                      height={20}
                      className="object-fill"
                      alt="pink codrs africa data science icon"
                    />
                  </div>
                  <h1 className="font-noto text-secondary text-5xl font-semibold">
                    Outcome
                  </h1>
                </div>

                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Pipeline of skilled women, Industry recognised qualification,
                  direct project experience, and job placements with corporates,
                  governments, NGOs, and tech startups
                </p>
              </div>
            </div>
            <div className="mt-20 -z-10">
              <div className="-mt-52 lg:-mt-52 relative w-[25rem] md:w-[32rem] h-[45rem] lg:w-[35rem]">
                <img
                  src="https://res.cloudinary.com/dqw0lwkil/image/upload/v1683626774/Pink%20Codrs/Img/work_neqrm0.png"
                  className="object-fill absolute inset-0 w-full h-full"
                  alt="pink codrs africa logo"
                />
              </div>
            </div>
          </div>
          n
        </section>

        {/* Our events */}
        <section>
          <div className={`bg-secondary h-[40rem] ${styles.header}`}>
            <h1 className="font-bold text-3xl md:text-5xl font-noto capitalize md:my-3 text-center py-32  container">
              our most exciting activities
            </h1>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transform -translate-y-64 lg:-translate-y-80 gap-x-20 gap-y-52">
            {events.map((event) => (
              <article
                key={event.id}
                className={`${styles.card} relative min-w-[325px] max-w-[325px] h-[23rem] space-y-3 text-gray-700  justify-self-center`}
              >
                <div className="relative w-full h-full z-50 rounded-sm overflow-auto">
                  <img
                    src={event.img}
                    alt="pink codrs africa logo"
                    className="transition-transform object-cover absolute inset-0 w-full h-full duration-500 ease-in-out hover:scale-105"
                  />
                </div>

                <div className=" w-16 h-16 absolute -top-12 left-[40px] z-50 flex items-center justify-center rounded-full">
                  <img
                    src={event.img_fig}
                    width={30}
                    height={30}
                    className="object-contain"
                    alt="pink codrs africa logo"
                  />
                </div>
                <div className={styles.cardDesign}></div>
                <div>
                  <div className="text-slate-500 transform -translate-y-[370px]">
                    <h1 className="font-noto text-secondary text-3xl font-semibold">
                      {event.title}
                    </h1>
                    <p className="text-base md:text-lg font-normal py-2">
                      {event.details}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className=" container ">
            <hr />
            <h1 className="text-secondary font-bold text-3xl md:text-5xl font-noto capitalize my-3 text-center py-10 mt-10">
              our process
            </h1>
          </div>
          <div className="container">
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
              {/*  left  */}
              <div className="flex flex-row-reverse md:contents">
                <div className="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  {/* <h3 className="font-semibold text-lg mb-1">Join the Army</h3> */}
                  <p className="leading-tight text-justify font-semibold text-lg mb-1">
                    Join the Army
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-rose-400 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
                </div>
              </div>
              {/*  right  */}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-rose-400 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
                </div>
                <div className="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                  {/* <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3> */}
                  <p className="leading-tight text-justify font-semibold text-lg mb-1">
                    Participate in our community activities ie Meetups,
                    workshops etc
                  </p>
                </div>
              </div>
              {/*  left  */}
              <div className="flex flex-row-reverse md:contents">
                <div className="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  {/* <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3> */}
                  <p className="leading-tight text-justify font-semibold text-lg mb-1">
                    Be selected for our partner programs and get trained and
                    certified for FREE
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-rose-400 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
                </div>
              </div>
              {/*  left  */}
              <div className="flex flex-row-reverse md:contents">
                <div className="bg-primary col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                  {/* <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3> */}
                  <p className="leading-tight text-justify font-semibold text-lg mb-1">
                    Work on amazing projects and build your profile
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-rose-400 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
                </div>
              </div>
              {/*  right  */}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-rose-400 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
                </div>
                <div className="bg-primary col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                  {/* <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3> */}
                  <p className="leading-tight text-justify font-semibold text-lg mb-1">
                    Get selected by our partners and land your dream job
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.paleBlueBg} pb-20 pt-5 flex flex-col items-center`}
        >
          <h1 className="text-secondary font-bold text-3xl md:text-5xl font-noto capitalize my-3 text-center py-10 mt-10">
            what people say about us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container">
            {testimonials.map(
              ({ id, name, position, img, company, details }) => (
                <div
                  key={id}
                  className="max-w-xl shadow-xl bg-white p-6 space-y-3"
                >
                  <div className="relative flex items-center space-x-3">
                    <div className="absolute -top-2 left-5">
                      <RiDoubleQuotesL className="text-primary text-3xl" />
                    </div>
                    <h1 className="text-secondary font-greatVibes text-2xl font-medium capitalize">
                      {company}
                    </h1>
                  </div>
                  <p className="text-slate-500 text-base font-normal italic">
                    {details}
                  </p>
                  <p className="text-base font-medium space-x-3">
                    <span className=" text-slate-600 ">{name}</span>
                    <span className="text-slate-500 ">{position}</span>
                  </p>
                </div>
              )
            )}
          </div>
          {/* <div className="pt-20">
            <button className="btn-primary py-3 px-6 w-full lg:w-auto flex items-center justify-center space-x-2">
              <span>see all testimonials</span>
              <span>
                <ArrowRightIcon className="text-white h-4" />
              </span>
            </button>
          </div> */}
        </section>

        <section className="bg-secondary">
          <JoinUs textColor="text-white" btnBackground="btn-primary" />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export const testimonials = [
  {
    id: 1,
    name: "Amanda Nyathi",
    // position: "CEO, Founder",
    img: "/assets/img/team-8.jpg",
    // company: "pink codrs",
    details:
      "I am proud to say that I am the plant that blossomed from the seed planted by Pink codrs and its partners. No amount of words can explain the amount of gratitude instilled in me because of the opportunity presented by Pink Codrs, It afforded me the opportunity to broaden my skills, to Jeam something new and intriguing that will take my career path to a different level. am thankful for the concept of upskilling more women in tech space and wish the opportunity I had can be available for more women out there.",
  },
  {
    id: 2,
    name: "Ives-Noma Ngubane",
    // position: "CEO, Founder",
    img: "/assets/img/team-4.jpg",
    // company: "pink codrs",
    details:
      "Thank you so much to Pink Codrs Africa for your great contribution in empowering us as young black women. Because of the opportunties presented by Pink Codrs Africa able to quit myself with in demand technical skills that have put me at the forefront of the tech transformation and advantage at the job market as i have relevant skills / am excited for the future and the opportunity to positively change my he and my family",
  },
  {
    id: 3,
    name: "Kelly Ncube",
    // position: "CEO, Founder",
    img: "/assets/img/team-6.jpg",
    // company: "pink codrs",
    details:
      "Engaging with the Microsoft Professional Program in Data Science has been a wondert experience. Not only have I obtained al round data science skills that can add value to almost any organisation but I have had a platform to create sisterhood with women who share the same interests and drive and above all broaden understanding on how to tackle the information era fuly equipped Once again, thank you to Pink Codrs Africa for finding us as a worthy investment",
  },
];

export const events = [
  {
    id: 1,
    title: "Meetups",
    img: "https://res.cloudinary.com/dqw0lwkil/image/upload/v1683626701/Pink%20Codrs/Img/img-4_soznkz.jpg",
    img_fig: "/assets/svg/1.svg",
    details:
      "Our meet-ups are monthly networking events for women in tech to connect, learn, and tackle industry challenges. A platform for women to meet like-minded thinkers and be themselves.",
  },
  {
    id: 2,
    title: "Workshops",
    img: "https://res.cloudinary.com/dqw0lwkil/image/upload/v1683626783/Pink%20Codrs/Img/img-3_thmw6o.jpg",
    img_fig: "/assets/svg/2.svg",
    details:
      "The 2-day intense workshops are introductory sessions facilitated by industry experts covering Software development, Cloud, Machine Learning and Data Science.",
  },
  {
    id: 3,
    title: "Bootcamps",
    img: "https://res.cloudinary.com/dqw0lwkil/image/upload/v1683626774/Pink%20Codrs/Img/img-2_bab0wk.jpg",
    img_fig: "/assets/svg/3.svg",
    details:
      "Our zero-to-hero boot camps are the best place for individuals interested to get into tech to learn everything they need to know to kick-start their career in tech with just 6 weeks of theory and practical learning.",
  },
];
