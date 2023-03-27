import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

export default function faq() {
  return (
    <>
      <Meta title="Coming Soon" />

      <nav>
        <Navigation
          textColor="text-secondary"
          logoSrc="/pink-codrs-2.svg"
          menuBarColor="bg-secondary"
        />
      </nav>

      <main className=" w-[90%] lg:w-[45%] mx-auto tex-secondary space-y-10 my-20 ">
        <h1 className="font-noto text-5xl font-bold capitalize text-secondary text-center">
          FAQs
        </h1>

        <section>
          <div className="w-full rounded-2xl bg-white p-2 space-y-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-3 text-left text-lg font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                    <span>
                      What kind of tech skills do you offer to African women?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                    We offer a wide range of tech skills that are in high demand
                    in the current job market. Our courses include web
                    development, mobile app development, data analysis,
                    artificial intelligence, cybersecurity, and digital
                    marketing.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-3 text-left text-lg font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                    <span>Who is eligible to join your program?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                    Our program is designed specifically for African women who
                    are interested in developing their tech skills. We welcome
                    women of all ages, backgrounds, and skill levels.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-3 text-left text-lg font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                    <span>What is the duration of your program?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                    Our program duration varies depending on the course. Some
                    courses can be completed in a few weeks, while others may
                    take several months.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-3 text-left text-lg font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                    <span>What is the mode of delivery for your courses?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                    Our courses are delivered online, which makes them
                    accessible to women from all over Africa. We also offer some
                    in-person training in select locations.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-3 text-left text-lg font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                    <span>
                      What kind of support do you offer to your students?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                    We provide comprehensive support to our students, including
                    access to online resources, dedicated mentors, and career
                    guidance.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-3 text-left text-lg font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                    <span>
                      What are the career prospects after completing your
                      program?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                    Our program is designed to equip women with in-demand tech
                    skills, which can open up a wide range of career
                    opportunities. Many of our graduates have gone on to work
                    for top tech companies or start their own businesses.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-3 text-left text-lg font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                    <span>
                      How much does it cost to enroll in your program?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                    Our program fees vary depending on the course. We offer
                    scholarships and flexible payment options to ensure that our
                    program is accessible to everyone.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-md bg-slate-100 px-4 py-3 text-left text-lg font-medium text-secondary hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75">
                    <span>How do I apply to your program?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-secondary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500">
                    You can apply to our program by visiting our website and
                    filling out the online application form. Our team will
                    review your application and get back to you with more
                    information.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <Footer />
      </footer>
    </>
  );
}
