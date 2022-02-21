import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";
import { JoinUs } from "../components/join us/JoinUs";
import { HomeIcon, DeviceMobileIcon, MailIcon } from "@heroicons/react/solid";
import styles from "../styles/Others.module.css";

export default function contact() {
  return (
    <>
      <Meta title="Contact" />

      <header className="relative py-1 w-full bg-secondary">
        <nav className="z-50 sticky">
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>
        <div className="container sticky my-8 lg:my-20 space-y-10">
          <h1 className="lg:w-[75%] mx-auto font-noto text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide leading-loose text-center">
            {"Get in touch with us"}
          </h1>
        </div>
      </header>

      <main className="container my-20">
        <section className="grid grid-cols-1 xl:grid-cols-2 justify-center">
          {/* left side */}
          <div>
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-center pb-5">
                <div>
                  <p className="pb-2 text-slate-600 text-base lg:text-lg">
                    Your name <span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="outline-none border border-tertiary w-full p-2 text-slate-600"
                  />
                </div>
                <div>
                  <p className="pb-2 text-slate-600 text-base lg:text-lg">
                    Your email <span className="text-red-500">*</span>
                  </p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="outline-none border border-tertiary w-full p-2 text-slate-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-center pb-5">
                <div>
                  <p className="pb-2 text-slate-600 text-base lg:text-lg">
                    Your subject <span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="outline-none border border-tertiary w-full p-2 text-slate-600"
                  />
                </div>
                <div>
                  <p className="pb-2 text-slate-600 text-base lg:text-lg">
                    Your occupation <span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    name="occupation"
                    id="occupation"
                    className="outline-none border border-tertiary w-full p-2 text-slate-600"
                  />
                </div>
              </div>
              <div className="pb-5">
                <p className="pb-2 text-slate-600 text-base lg:text-lg">
                  Your message <span className="text-red-500">*</span>
                </p>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  className="outline-none border border-tertiary w-full p-2 resize-none text-slate-600"
                ></textarea>
              </div>
              <div className="pb-5">
                <button className="btn-primary p-2 w-full text-xl ">
                  send
                </button>
              </div>
            </form>
          </div>

          {/* right side */}
          <div className="space-y-5 lg:justify-self-center mt-10 lg:mt-0">
            <div className="flex space-x-3">
              <div>
                <HomeIcon className="h-6 text-primary" />
              </div>
              <p className="pb-2 text-slate-600 text-base lg:text-lg">
                44 Stanley Avenue Milpark Johannesburg 2092
              </p>
            </div>
            <div className="flex space-x-3">
              <div>
                <MailIcon className="h-6 text-primary" />
              </div>
              <p className="pb-2 text-slate-600 text-base lg:text-lg">
                +27 (81) 523-8220
              </p>
            </div>
            <div className="flex space-x-3">
              <div>
                <DeviceMobileIcon className="h-6 text-primary" />
              </div>
              <p className="pb-2 text-slate-600 text-base lg:text-lg">
                info@pinkcodrs.africa
              </p>
            </div>
          </div>
        </section>

        {/* google maps */}
        <section className="my-20">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3478921115184!2d28.016746615634165!3d-26.185359069568257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c0a6ffc9379%3A0x3d365796c1f181b!2s44%20STANLEY!5e0!3m2!1sen!2s!4v1637002101355!5m2!1sen!2s"
              className="w-full h-full border"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>

      {/* join pink codrs */}
      <section className={styles.paleBlueBg}>
        <JoinUs textColor="text-secondary" btnBackground="btn-secondary" />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
