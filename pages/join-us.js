import { Meta } from "../components/meta/Meta";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { RiDoubleQuotesL } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";

export default function JoinUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [joinForm, setJoinForm] = useState({
    name: "",
    email: "",
    occupation: "",
    ageGroup: "",
    gender: "",
    country: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJoinForm((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, country, occupation, ageGroup, gender } = joinForm;
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/join-us", {
        name,
        email,
        occupation,
        ageGroup,
        gender,
        country,
      });

      toast(data);
      setIsLoading(false);
      // console.log(data);
    } catch (error) {
      setIsLoading(true);
      // console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
  return (
    <>
      <Meta title="Join Us" />

      {/* Toaster */}
      <Toaster />

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
          <form onSubmit={handleSubmit}>
            <div className="py-8">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Your name <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              />
            </div>
            <div className="pb-5">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Your email <span className="text-red-500">*</span>
              </p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              />
            </div>
            <div className="pb-5">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Your occupation <span className="text-red-500">*</span>
              </p>
              <select
                name="occupation"
                id="occupation"
                onChange={handleChange}
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              >
                <option value="">Select your occupation</option>
                <option value="Studying">Studying</option>
                <option value="Working">Working</option>
                <option value="Unemployed">Unemployed</option>
              </select>
            </div>
            <div className="pb-5">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Your Age group <span className="text-red-500">*</span>
              </p>
              <select
                name="ageGroup"
                id="ageGroup"
                onChange={handleChange}
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              >
                <option value="">Select an age group</option>
                <option value="16-20">16-20</option>
                <option value="21-26">21-26</option>
                <option value="27-35">27-35</option>
                <option value="36+">36+</option>
              </select>
            </div>
            <div className="pb-5">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Your gender <span className="text-red-500">*</span>
              </p>
              <select
                name="gender"
                id="gender"
                onChange={handleChange}
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              >
                <option value="">Select your gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Unicorn">Unicorn</option>
              </select>
            </div>
            <div className="pb-5">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Your country <span className="text-red-500">*</span>
              </p>
              <select
                name="country"
                id="country"
                onChange={handleChange}
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              >
                <option value="">Select a country</option>
                <option value="South Africa">South Africa</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Tanzania">Tanzania</option>
              </select>
            </div>
            <div className="py-5">
              <button className="btn-primary p-2 w-full text-base flex items-center justify-center space-x-2">
                <span>register</span>
                <span>
                  {isLoading ? (
                    <BiLoaderAlt className="text-pink-200 text-lg animate-spin" />
                  ) : (
                    <ArrowRightIcon className="text-pink-200 h-4" />
                  )}
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
