import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";
import Link from "next/link";
import { JoinUs } from "../components/join us/JoinUs";
import styles from "../styles/Home.module.css";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

export default function ForCompanies() {
  return (
    <>
      <Meta title="For Companies" />

      <header className={`bg-secondary w-full h-[100vh] relative`}>
        <picture>
          <img
            src="/assets/img/img-13.jpg"
            alt="hero "
            className="object-cover absolute w-full h-full object-center opacity-10"
          />
        </picture>
        <nav className="z-50 sticky">
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>

        <div className="my-20 lg:my-32 container z-50 sticky">
          <div className="lg:my-5">
            <h1 className="font-noto text-3xl md:text-4xl lg:text-6xl font-semibold tracking-wide text-left leading-tight">
              Passionate about the development of women in tech and seeking ways
              to support them?
            </h1>
            <p className="mt-5 text-sm md:text-xl text-slate-500 font-medium font-open">
              Pink Codrs Africa has a growing pipeline of organisations that are
              ensuring that the vision to develop 1 million women in Africa is
              met.
            </p>
            <div className="block md:flex gap-5 space-y-5 md:space-y-0 my-16">
              <Link href="/work-with-us">
                <a>
                  <button className="btn-secondary py-2 px-11 w-full lgsm-auto">
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

          <div className="lg:flex items-start justify-between lg:space-x-10 mb-10 lg:mb-20">
            <div className="mt-10 lg:mt-0 relative w-[22rem] h-[23rem] lg:w-[26rem] lg:h-[26rem]">
              <picture>
                <img
                  src="/assets/img/img-16.png"
                  alt=""
                  className="absolute w-full h-full"
                />
              </picture>
            </div>
            <div className="md:w-[30rem] px-4 pt-1">
              <div className="w-full rounded-2xl bg-white p-2 space-y-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-2 text-left text-sm font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                        <span>
                          What kind of tech skills do you offer to African
                          women?
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-secondary`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        We offer a wide range of tech skills that are in high
                        demand in the current job market. Our courses include
                        web development, mobile app development, data analysis,
                        artificial intelligence, cybersecurity, and digital
                        marketing.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-2 text-left text-sm font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                        <span>Providing Funding</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-secondary`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Companies can provide funding to support the development
                        of the Pink Codrs Africa and its programs. This could
                        include funding for specific programs that align with
                        the {"corporate's"} values and mission.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-2 text-left text-sm font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                        <span>What is the duration of your program?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-secondary`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Our program duration varies depending on the course.
                        Some courses can be completed in a few weeks, while
                        others may take several months.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-2 text-left text-sm font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                        <span>Offering Mentorship</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-secondary`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Companies can offer mentorship to the Pink Codrs Africa
                        founders and leadership team. This can provide valuable
                        insights, guidance, and networks to help the company
                        grow and succeed.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-2 text-left text-sm font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                        <span>Providing Access to Resources</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-secondary`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Companies can provide access to resources that the Pink
                        Codrs Africa may not have access to, such as technology,
                        training materials, and expertise in specific areas.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-2 text-left text-sm font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                        <span>Offering Partnership Opportunities</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-secondary`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Companies can offer partnership opportunities that can
                        help Pink Codrs Africa grow and scale its impact. This
                        could include partnering with the company on specific
                        initiatives or providing access to their networks and
                        resources.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-2 text-left text-sm font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                        <span>Supporting Diversity and Inclusion</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-secondary`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Companies can support Pink Codrs Africa efforts to
                        promote diversity and inclusion within the tech
                        industry. This could include providing access to
                        training, resources, and programs that promote diversity
                        and inclusion or partnering on initiatives that promote
                        these values.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
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
