import Image from "next/image";
import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import styles from "../styles/Others.module.css";

export default function about() {
  return (
    <>
      <Meta title="About" />

      <header className="relative h-[50vh] w-full bg-secondary ">
        <Image
          src="/assets/img/img-2.jpg"
          layout="fill"
          objectFit="cover"
          alt="header image"
          className="opacity-20 grayscale"
        />

        <nav className="z-50 sticky">
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>
        <div className="w-[90%] lg:w-[58%] mx-auto sticky my-20">
          <h1 className="font-noto text-5xl lg:text-6xl font-semibold tracking-wide  leading-tight text-center">
            {"We're building & training new talents"}
          </h1>
        </div>
      </header>

      {/* about us */}
      <section className="w-[90%] lg:w-[58%] mx-auto transform -translate-y-32">
        <div className="relative w-full h-[38rem]">
          <Image
            src="/assets/img/img-3.jpg"
            layout="fill"
            objectFit="cover"
            alt="about image"
          />
        </div>
        <div className=" lg:w-[75%] mx-auto h-40 bg-primary transform -translate-y-20 shadow-lg grid grid-cols-3 items-center">
          <div className="text-center lg:border-r-2 border-pink-400 space-y-3">
            <h1 className="font-noto text-5xl font-semibold text-white">
              150+
            </h1>
            <p className="text-pink-300 font-medium text-lg capitalize">
              paying customers
            </p>
          </div>
          <div className="text-center lg:border-r-2 border-pink-400 space-y-3">
            <h1 className="font-noto text-5xl font-semibold text-white">110</h1>
            <p className="text-pink-300 font-medium text-lg capitalize">
              total trainers
            </p>
          </div>
          <div className="text-center space-y-3">
            <h1 className="font-noto text-5xl font-semibold text-white">
              750+
            </h1>
            <p className="text-pink-300 font-medium text-lg capitalize">
              total trainies
            </p>
          </div>
        </div>

        <div className=" space-y-10 lg:w-[75%] mx-auto">
          <h1 className="capitalize font-noto text-4xl font-semibold text-secondary">
            our story
          </h1>
          <p className="text-slate-500 font-medium font-open text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            enim lobortis scelerisque fermentum. Neque sodales ut etiam sit amet
            how to manage. Malesuada proin libero nunc consequat interdum
            varius. Quam pellentesque nec nam aliquam sem et tortor consequat.
            Pellentesque adipiscing commodo elit at imperdiet. Semper auctor
            neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo
            donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet
            porttitor. Odio pellentesque diam volutpat commodo sed. Elit sed
            vulputate mi sit amet mauris commodo quis imperdiet.
          </p>
          <p className="text-slate-500 font-medium font-open text-lg">
            Temper auctor neque vitae tempus quam pellentesque nec. Amet dictum
            sit amet justo donec enim diam. Varius sit amet mattis vulputate
            enim nulla aliquet porttitor. Odio pellentesque diam volutpat
            commodo sed. Elit sed vulputate mi sit amet mauris commodo quis
            imperdiet.
          </p>
          <p className="text-slate-500 font-medium font-open capitalize text-lg">
            mbali hlongwane
          </p>
        </div>
      </section>

      {/* galery */}
      <section className={`${styles.paleBlueBg} py-20 space-y-10 `}>
        <div className="w-[90%] lg:w-[58%] mx-auto ">
          <h1 className="font-noto text-5xl font-bold capitalize text-secondary text-center w-[75%] mx-auto">
            slight peek at some of our past events
          </h1>
        </div>
        <div className="relative grid grid-cols-3 gap-x-16 items-center ">
          <div className="h-[27rem] w-[40rem]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img/img-3.jpg"
                layout="fill"
                objectFit="cover"
                alt="event image-1"
              />
            </div>
          </div>
          <div className="h-[27rem] w-[40rem]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img/img-3.jpg"
                layout="fill"
                objectFit="cover"
                alt="event image-1"
              />
            </div>
          </div>
          <div className="h-[27rem] w-[40rem]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img/img-3.jpg"
                layout="fill"
                objectFit="cover"
                alt="event image-1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
