import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";
import Link from "next/link";
import { JoinUs } from "../components/join us/JoinUs";
import styles from "../styles/Home.module.css";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function ForEngineers() {
  return (
    <>
      <Meta title="For Engineers" />

      <header className={`bg-secondary h-[100vh] relative`}>
        <Image
          src="/assets/img/img-13.jpg"
          layout="fill"
          alt=""
          className="object-cover object-center opacity-10"
          priority
        />
        <nav className="z-50 sticky">
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>

        <div className="my-20 lg:my-32 container z-50 sticky">
          <div className="lg:my-5">
            <h1 className="font-noto text-3xl md:text-5xl font-semibold tracking-wide text-left leading-tight">
              Be a part of the 1 million women we aim to enable with in-demand
              tech skills by 2030.
            </h1>
            <p className="mt-10 text-lg md:text-xl text-slate-500 font-medium font-open">
              Pink Codrs Africa has a growing pipeline of organisations that are
              ensuring that the vision to develop 1 million women in Africa is
              met.
            </p>
            <div className="block md:flex gap-5 space-y-5 md:space-y-0 my-16">
              <Link href="/join-us">
                <a>
                  <button className="btn-primary py-3 px-11 w-full lg:w-auto mb-5">
                    join pink codrs
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="w-[90%] lg:w-[58%] mx-auto tex-secondary space-y-10 py-26 flex flex-col items-center">
        <section>
          <h1 className="text-secondary font-bold text-3xl md:text-5xl font-noto capitalize my-3 text-center py-10 mt-16">
            Be Part of a growing community
          </h1>

          <div className="lg:flex items-center justify-between lg:space-x-10 mb-10 lg:mb-20">
            <div className="mt-10 lg:mt-0 relative w-[22rem] h-[18rem] lg:w-[40rem] lg:h-[22rem]">
              <Image
                src="/assets/img/img-15.png"
                layout="fill"
                alt=""
                priority
              />
            </div>
            <div className="space-y-5 lg:space-y-8 mt-10 lg:mt-0">
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Learn new skills from 50+ free courses, workshops, and events.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Meet like-minded thinkers and tackle industry challenges while
                  sharing your experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-secondary font-bold text-3xl md:text-5xl font-noto capitalize my-3 text-center py-10 lg:mt-10">
            Exciting opportunities through our partner programs:
          </h1>

          <div className="lg:flex items-center justify-between lg:space-x-10 mb-20">
            <div className="space-y-5 lg:space-y-8">
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Gain new skills through exclusive learning opportunities.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Qualify for exams and get accredited.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Work with international teams and companies that are
                  intensional in supporting the growth of women in tech.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Find meaningful work with exciting organizations.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Work on real-life solutions and develop your profile.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative w-[22rem] h-[18rem] lg:w-[40rem] lg:h-[22rem]">
              <Image
                src="/assets/img/img-14.png"
                layout="fill"
                alt=""
                priority
              />
            </div>
          </div>
        </section>
      </main>
      <section className={styles.paleBlueBg}>
        <JoinUs textColor="text-secondary" btnBackground="btn-secondary" />
      </section>

      <footer className="bg-white border-t">
        <Footer />
      </footer>
    </>
  );
}
