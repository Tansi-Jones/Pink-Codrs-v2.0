import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";
import Link from "next/link";
import { JoinUs } from "../components/join us/JoinUs";
import styles from "../styles/Home.module.css";
import { BadgeCheckIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

export default function ForEngineers() {
  return (
    <>
      <Meta title="For Engineers" />

      <header className={`bg-secondary w-full h-[100vh] relative`}>
        <img
          src="/assets/img/img-12.jpg"
          alt=""
          className="object-cover absolute w-full h-full object-center opacity-10"
        />
        <nav className="z-50 sticky">
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>

        <div className="my-20 lg:my-28 container z-50 sticky">
          <div className="lg:my-5">
            <h1 className="font-noto text-3xl md:text-4xl lg:text-6xl font-semibold tracking-wide text-left leading-tight">
              Be a part of the 1 million women we aim to enable with in-demand
              tech skills by 2030.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-500 font-medium font-open">
              Empowering African Women for the Future of Tech
            </p>
            <div className="block md:flex gap-5 space-y-5 md:space-y-0 my-10">
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

          <div className="lg:flex items-start justify-between lg:space-x-10 mb-10 lg:mb-20">
            <div className="mt-10 lg:mt-0 relative w-[22rem] h-[18rem] lg:w-[22rem] lg:h-[18rem]">
              <img
                src="/assets/img/img-15.png"
                alt=""
                className="absolute w-full h-full"
              />
            </div>
            <div className="space-y-5 lg:space-y-8 mt-10 lg:mt-0">
              <div className="md:w-[30rem] px-4 pt-1">
                <div className="w-full max-w-xl rounded-2xl bg-white p-2">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 text-left text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                          <span>Supportive and Inclusive Environment</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-pink-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Being a part of a community of women in tech provides
                          a supportive and inclusive environment where women can
                          feel comfortable to learn and grow without the fear of
                          judgment or discrimination.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 text-left text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                          <span>Networking Opportunities</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-pink-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Joining a community of women in tech offers ample
                          networking opportunities that can help women build
                          professional relationships, make connections, and
                          potentially find job opportunities
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 text-left text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                          <span>Access to Relevant Resources</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-pink-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Communities of women in tech often provide access to
                          relevant resources such as courses, workshops,
                          bootcamps, and mentorship programs that can help women
                          acquire new skills and advance their careers.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 text-left text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                          <span>Empowerment</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-pink-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Being part of a community of women in tech can provide
                          a sense of empowerment, as women can share their
                          experiences, challenges, and successes with
                          like-minded individuals who can offer support and
                          encouragement.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 text-left text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                          <span>Diverse Perspectives</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-pink-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Communities of women in tech bring together women from
                          various backgrounds, experiences, and skill levels,
                          offering a diverse range of perspectives and ideas.
                          This can help women develop a broader understanding of
                          the tech industry and its potential impact.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-pink-100 px-4 py-2 text-left text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-500 focus-visible:ring-opacity-75">
                          <span>Overcoming Stereotypes</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-pink-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          Women in tech often face stereotypes and biases that
                          can hinder their progress. Joining a community of
                          women in tech can help women overcome these obstacles
                          by providing a supportive environment and empowering
                          women to challenge these biases.
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
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
                  <BadgeCheckIcon className="w-7 text-slate-400" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Gain new skills through exclusive learning opportunities.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-slate-400" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Qualify for exams and get accredited.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-slate-400" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Work with international teams and companies that are
                  intensional in supporting the growth of women in tech.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-slate-400" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Find meaningful work with exciting organizations.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span>
                  <BadgeCheckIcon className="w-7 text-slate-400" />
                </span>
                <p className="text-base md:text-lg text-slate-500 font-normal font-open">
                  Work on real-life solutions and develop your profile.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative w-[22rem] h-[18rem] lg:w-[40rem] lg:h-[18rem]">
              <img
                src="/assets/img/img-14.png"
                className="absolute inset-0 w-full h-full "
                alt=""
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
