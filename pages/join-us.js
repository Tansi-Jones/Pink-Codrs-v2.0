import { Meta } from "../components/meta/Meta";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { RiDoubleQuotesL } from "react-icons/ri";
import Link from "next/link";

export default function joinUs() {
  return (
    <>
      <Meta title="Join Us" />
      <main className="lg:grid grid-cols-1 md:grid-cols-2 place-items-center">
        <section className="w-[90%] md:w-[60%] lg:w-[50%] mx-auto space-y-5 my-32 md:my-60 lg:my-0">
          <Link href="/">
            <a>
              <div className="relative">
                <Image
                  src="/pink-codrs-2.svg"
                  width={50}
                  height={50}
                  objectFit="fill"
                  alt="pink codrs africa logo"
                />
              </div>
            </a>
          </Link>
          <h1 className="text-secondary font-noto text-3xl md:text-4xl lg:text-4xl font-bold tracking-wide leading-loose">
            Join Pink Codrs
          </h1>
          <form>
            <div className="py-8">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Your name <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="name"
                id="name"
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              />
            </div>
            <div className="pb-5">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Your email <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="name"
                id="name"
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              />
            </div>
            <div className="py-5">
              <button className="btn-primary p-2 w-full text-base flex items-center justify-center space-x-2">
                <span>register</span>
                <span>
                  <ArrowRightIcon className="text-pink-200 h-4" />
                </span>
              </button>
            </div>
          </form>
        </section>
        <section className="relative h-screen w-full bg-secondary hidden lg:flex flex-col items-center justify-center">
          <Image
            src="/assets/img/img-1.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            alt="header image"
            className="opacity-10 grayscale"
            priority
          />
          <div className="w-[50%] mx-auto">
            <h1 className="font-noto text-4xl font-semibold tracking-wide leading-loose ">
              kaizer chiefs
            </h1>
            <div>
              <RiDoubleQuotesL className="text-primary text-3xl" />
              <p className="text-slate-400 text-lg px-10 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                cumque quibusdam optio odio ut quasi reiciendis voluptatum modi
                corrupti!
              </p>
              <div className="flex items-center space-x-5 pt-3">
                <div className="relative h-[30px] w-[30px] rounded-full overflow-auto">
                  <Image
                    src="/assets/img/team-4.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
                <h1 className=" font-open text-lg space-x-2 font-medium">
                  <span className="text-white">Micheal Wisdom</span>
                  <span className="text-slate-500 ">CEO, Kaizer Chiefs</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
