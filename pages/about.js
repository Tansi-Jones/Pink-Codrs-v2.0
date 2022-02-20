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
          src="/assets/img/img-1.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          alt="header image"
          className="opacity-20 grayscale"
        />

        <nav className="z-50 sticky">
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>
        <div className="container sticky my-20">
          <h1 className="font-noto text-5xl lg:text-6xl font-semibold tracking-wide  leading-tight text-center">
            {"We're building & training new talents"}
          </h1>
        </div>
      </header>

      {/* about us */}
      <section className="container transform -translate-y-32">
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
        <div className="container">
          <h1 className="font-noto text-5xl font-bold capitalize text-secondary text-center lg:w-[75%] mx-auto pb-5">
            slight peek at some of our past events
          </h1>
        </div>
        <div className="relative grid grid-cols-3 gap-x-5 items-center ">
          <div className="h-[27rem] w-full">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img/img-3.jpg"
                layout="fill"
                objectFit="cover"
                alt="event image-1"
              />
            </div>
          </div>
          <div className="h-[27rem] w-full">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img/img-3.jpg"
                layout="fill"
                objectFit="cover"
                alt="event image-1"
              />
            </div>
          </div>
          <div className="h-[27rem] w-full">
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

      {/* teams */}
      <section className="container my-20">
        <h1 className="font-noto text-5xl font-bold capitalize text-secondary text-center ">
          our amazing team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center py-16">
          {teamMembers.map(({ id, name, position, img }) => (
            <div key={id} className="flex flex-col items-center space-y-1">
              <div className="relative rounded-full overflow-auto h-32 w-32 bg-pink-300 ">
                <Image src={img} layout="fill" objectFit="cover" alt={name} />
              </div>
              <h1 className="font-noto text-secondary text-xl font-bold text-center pt-3">
                {name}
              </h1>
              <p className="font-open text-primary text-base font-semibold text-center">
                {position}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export const teamMembers = [
  {
    id: 1,
    name: "Mbali Hlongwane",
    position: "CEO, Founder",
    img: "/assets/img/team-8.jpg",
  },
  {
    id: 2,
    name: "Elisa Nguyen",
    position: "Co-Founder, Lead Engineer",
    img: "/assets/img/team-2.jpg",
  },
  {
    id: 3,
    name: "Travis Stephens",
    position: "Senior Software Engineer",
    img: "/assets/img/team-1.jpg",
  },
  {
    id: 4,
    name: "Cameron Mckay",
    position: "Senior UX/UI Designer",
    img: "/assets/img/team-7.jpg",
  },
  {
    id: 5,
    name: "Patricia Curnock",
    position: "Software Engineer",
    img: "/assets/img/team-6.jpg",
  },
  {
    id: 6,
    name: "Amanda Danish",
    position: "Senior Data Scientist",
    img: "/assets/img/team-4.jpg",
  },
  {
    id: 7,
    name: "zoltan Jackson",
    position: "Marketing Manager",
    img: "/assets/img/team-5.jpg",
  },
  {
    id: 8,
    name: "George Tolinski",
    position: "Community Manager",
    img: "/assets/img/team-3.jpg",
  },
];
