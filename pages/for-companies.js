import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";
import Link from "next/link";
import { JoinUs } from "../components/join us/JoinUs";
import styles from "../styles/Home.module.css";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function ForCompanies() {
  return (
    <>
      <Meta title="For Companies" />

      <header className={`bg-secondary h-[100vh] relative`}>
        <Image
          src="/assets/img/img-12.jpg"
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
              Passionate about the development of women in tech and seeking ways
              to support them?
            </h1>
            <p className="mt-10 text-lg md:text-xl text-slate-500 font-medium font-open">
              Pink Codrs Africa has a growing pipeline of organisations that are
              ensuring that the vision to develop 1 million women in Africa is
              met.
            </p>
            <div className="block md:flex gap-5 space-y-5 md:space-y-0 my-16">
              <Link href="/work-with-us">
                <a>
                  <button className="btn-secondary py-3 px-11 w-full lg:w-auto">
                    work with us
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className=" w-[90%] lg:w-[58%] mx-auto tex-secondary space-y-10 py-26 flex flex-col items-center">
        <section>
          <h1 className="text-secondary font-bold text-3xl md:text-5xl font-noto capitalize my-3 text-center py-10 mt-10">
            How To Play A Part
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            <article className="border border-slate-200 p-5 max-w-xs w-64 h-48">
              <h4 className="text-secondary space-x-2 flex items-center font-medium mb-2 capitalize">
                <span className="font-noto text-2xl">Donate</span>
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
              </h4>
              <p className="text-base md:text-[1.1rem] text-slate-500 font-normal font-open">
                Sponsor a female to go through our 12 month programs for as
                little as R10,000
              </p>
            </article>
            <article className="border border-slate-200 p-5 max-w-xs w-64 h-48">
              <h4 className="text-secondary space-x-2 flex items-center font-medium mb-2 capitalize">
                <span className="font-noto text-2xl">Fund a Cohort</span>
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
              </h4>
              <p className="text-base md:text-[1.1rem] text-slate-500 font-normal font-open">
                Pink Codrs runs 6-12 months program with 30-50 candidates per
                cohort.
              </p>
            </article>
            <article className="border border-slate-200 p-5 max-w-xs w-64 h-48">
              <p className="text-base md:text-[1.1rem] text-slate-500 font-normal font-open">
                Donate a device and help a woman interested in learning how to
                code.
              </p>
            </article>
            <article className="border border-slate-200 p-5 max-w-xs w-64 lg:w-72 h-48">
              <h4 className="text-secondary space-x-2 flex items-center font-medium mb-2 capitalize">
                <span className="font-noto text-2xl"> Partner with us</span>
                <span>
                  <BadgeCheckIcon className="w-7 text-green-500" />
                </span>
              </h4>
              <p className="text-base md:text-[1.1rem] text-slate-500 font-normal font-open">
                Contact mbali@pinkcodrs.africa
              </p>
            </article>
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
