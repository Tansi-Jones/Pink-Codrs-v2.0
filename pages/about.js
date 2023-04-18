import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";
import { JoinUs } from "../components/join us/JoinUs";
import styles from "../styles/Others.module.css";
import { Portal } from "../components/join us/Portal";

export default function About() {
  return (
    <>
      <Meta title="About" />

      <header className="relative h-[50vh] w-full bg-secondary">
        <img
          src="/assets/img/img-1.jpg"
          alt="header img"
          className="opacity-10 grayscale object-cover object-bottom absolute w-full h-full"
        />

        <nav className="z-50 sticky">
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>
        <div className="container sticky my-8 lg:my-16">
          <h1 className="lg:w-[75%] mx-auto font-noto text-3xl md:text-5xl xl:text-5xl 2xl:text-6xl font-semibold tracking-wide leading-loose text-center">
            {"We're building & training new talents"}
          </h1>
        </div>
      </header>

      {/* about us */}
      <section className="container transform -translate-y-24 lg:-translate-y-16 2xl:-translate-y-28">
        <div className="relative w-ful h-[20rem] md:h-[38rem]  shadow-lg">
          <img
            src="/assets/img/img-10.jpg"
            className="object-cover object-center"
            alt="about img"
          />
        </div>
        <div className="lg:w-[75%] mx-auto h-40 bg-primary transform  -translate-y-20 shadow-lg grid grid-cols-3 items-center">
          <div className="text-center lg:border-r-2 border-pink-400 space-y-3">
            <h1 className="font-noto text-2xl md:text-5xl font-semibold text-white">
              30+
            </h1>
            <p className="text-pink-300 font-medium text-base md:text-lg capitalize">
              <span className="hidden md:inline">paying</span> customers
            </p>
          </div>
          <div className="text-center lg:border-r-2 border-pink-400 space-y-3">
            <h1 className="font-noto text-2xl md:text-5xl font-semibold text-white">
              110
            </h1>
            <p className="text-pink-300 font-medium text-base md:text-lg capitalize">
              total trainers
            </p>
          </div>
          <div className="text-center space-y-3">
            <h1 className="font-noto text-2xl md:text-5xl font-semibold text-white">
              750+
            </h1>
            <p className="text-pink-300 font-medium text-base md:text-lg capitalize">
              total trainies
            </p>
          </div>
        </div>

        <div className=" space-y-10 lg:w-[75%] mx-auto">
          <h1 className="capitalize font-noto text-4xl font-semibold text-secondary">
            our story
          </h1>
          <p className="text-slate-500 font-medium font-open text-base md:text-lg">
            Pink Codrs Africa was founded in 2017 to address the worldwide
            shortage of female engineers, particularly in Africa, by empowering
            women to become digital technology experts and building a robust
            network of female engineers throughout the continent.
          </p>
          <p className="text-slate-500 font-medium font-open text-base md:text-lg">
            Our mission is to increase the representation of women in tech by
            providing opportunities for women to advance their digital
            technology and related skills and create sustainable change in the
            industry through relevant job placements.
          </p>

          <p className="text-slate-500 font-medium font-open text-base md:text-lg">
            Our ultimate goal at Pink Codrs Africa is to train and place one
            million women in tech by 2030, contributing to the theory of change
            that seeks to create opportunities for women to learn and thrive. To
            achieve this, we rely on three key pillars that drive our strategy:
            Demand Pillar: Resource, Mentor, Grow; Linkage Pillar: Inform,
            Prepare, Connect and Supply Pillar: Skill, Upskill, Reskill
          </p>
          <ul className="text-slate-500 font-medium font-open text-base md:text-lg">
            <li>Demand Pillar: Resource, Mentor, Grow</li>
            <li>Linkage Pillar: Inform, Prepare, Connect</li>
            <li>Supply Pillar: Skill, Upskill, Reskill</li>
          </ul>

          <p className="text-slate-500 font-medium font-greatVibes capitalize text-xl md:text-3xl">
            mbali hlongwane
          </p>
        </div>
      </section>

      {/* galery */}
      <section className="space-y-10">
        <div className="container">
          <hr className="mb-10" />
          <h1 className="font-noto text-3xl md:text-5xl font-bold capitalize text-secondary text-center lg:w-[75%] mx-auto pb-5">
            slight peek at some of our past events
          </h1>
        </div>
        <div className="relative grid grid-cols-3 gap-x-1 md:gap-x-5 items-center ">
          <div className="h-[10rem] md:h-[15rem] lg:h-[20rem] xl:h-[27rem] w-full">
            <div className="relative h-full w-full">
              <img
                src="/assets/img/img-4.jpg"
                alt="event img-1"
                className="transition-transform absolute h-full w-full duration-500 object-cover ease-in-out hover:scale-105"
              />
            </div>
          </div>
          <div className="h-[10rem] md:h-[15rem] lg:h-[20rem] xl:h-[27rem] w-full">
            <div className="relative h-full w-full">
              <img
                src="/assets/img/img.jpg"
                alt="event img-1"
                className="transition-transform absolute h-full w-full object-cover duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
          <div className="h-[10rem] md:h-[15rem] lg:h-[20rem] xl:h-[27rem] w-full">
            <div className="relative h-full w-full">
              <img
                src="/assets/img/img-1.jpg"
                alt="event img-1"
                className="transition-transform absolute h-full w-full object-cover duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* join pink codrs */}
      <section className={styles.paleBlueBg}>
        <Portal textColor="text-secondary" btnBackground="btn-secondary" />
      </section>

      {/* partners */}
      <section className="bg-secondary py-20 space-y-10">
        <div className="container">
          <h1 className="font-noto text-3xl md:text-5xl font-bold capitalize text-center lg:w-[80%] mx-auto pb-5">
            {"We're fortunate to have incredible partners."}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-center py-16 container">
          {ourPartners.map(({ id, img }) => (
            <div
              key={id}
              className="border border-slate-700 py-7 px-10 flex items-center justify-center"
            >
              <div className="relative h-[2rem] w-[5rem] md:h-[4rem] md:w-[10rem] ">
                <img
                  src={img}
                  alt={img}
                  className="object-contain absolute w-full h-full brightness-200 grayscale"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

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

export const ourPartners = [
  {
    id: 1,
    img: "/assets/img/microsoft.png",
  },
  {
    id: 2,
    img: "/assets/img/kaizer-chiefs.png",
  },
  {
    id: 3,
    img: "/assets/img/orange-corners.png",
  },
  {
    id: 4,
    img: "/assets/img/sap.png",
  },
  {
    id: 5,
    img: "/assets/img/dotmodus.png",
  },
  {
    id: 6,
    img: "/assets/img/liquid-telecom.png",
  },
  {
    id: 7,
    img: "/assets/img/22onsloane-2.png",
  },
  {
    id: 8,
    img: "/assets/img/adrica-talking.png",
  },
  {
    id: 9,
    img: "/assets/img/innovate-durban.png",
  },
  {
    id: 10,
    img: "/assets/img/jozihub.png",
  },
];
