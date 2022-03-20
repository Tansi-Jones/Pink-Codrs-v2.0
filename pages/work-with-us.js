import { Meta } from "../components/meta/Meta";
import Image from "next/image";
import {
  IoTrophyOutline,
  IoSchoolOutline,
  IoSearchOutline,
} from "react-icons/io5";
import Link from "next/link";
import styles from "../styles/Others.module.css";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";

export default function WorkWithUs() {
  const [isSelectedValue, setIsSelectedValue] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [workForm, setWorkForm] = useState({
    email: "",
    organization: "",
    representative: "",
  });

  const category = [
    "Train With Pink Codrs",
    "Run a Challenge",
    " Recruit from Pink Codrs",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setWorkForm((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, organization, representative } = workForm;
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/work-with-us", {
        email,
        organization,
        representative,
        category: category[isSelectedValue],
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
      <Meta title="Work With Us" />

      {/* Toaster */}
      <Toaster />

      <main className="flex flex-col-reverse lg:grid grid-cols-1 md:grid-cols-2 place-items-center">
        <section className="w-[90%] md:w-[60%] lg:w-[50%] mx-auto space-y-5 my-20 lg:my-60 xl:my-0">
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
          <h1
            className={`text-secondary font-noto text-3xl md:text-4xl lg:text-4xl font-bold tracking-wide leading-loose ${
              isSelectedValue === 1 ? "block" : "hidden"
            }`}
          >
            Train With Pink Codrs
          </h1>
          <h1
            className={`text-secondary font-noto text-3xl md:text-4xl lg:text-4xl font-bold tracking-wide leading-loose ${
              isSelectedValue === 2 ? "block" : "hidden"
            }`}
          >
            Run a Challenge
          </h1>
          <h1
            className={`text-secondary font-noto text-3xl md:text-4xl lg:text-4xl font-bold tracking-wide leading-loose ${
              isSelectedValue === 3 ? "block" : "hidden"
            }`}
          >
            Recruit from Pink Codrs
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="py-8">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Your email <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              />
            </div>
            <div className="pb-5">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Name of organization <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="organization"
                id="organization"
                onChange={handleChange}
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              />
            </div>
            <div className="pb-5">
              <p className="pb-2 text-tertiary text-base lg:text-lg font-normal">
                Representative <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                name="representative"
                id="representative"
                onChange={handleChange}
                className="outline-none border border-slate-400 w-full p-2 text-slate-600"
              />
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

            {/* Edit this base on functionality */}
            <div className="py-5">
              <button className="btn-primary p-2 w-full text-base flex items-center justify-center space-x-2">
                <span className={isSelectedValue === 1 ? "block" : "hidden"}>
                  <IoSchoolOutline className="text-2xl text-white" />
                </span>
                <span className={isSelectedValue === 2 ? "block" : "hidden"}>
                  <IoTrophyOutline className="text-2xl text-white" />
                </span>
                <span className={isSelectedValue === 3 ? "block" : "hidden"}>
                  <IoSearchOutline className="text-2xl text-white" />
                </span>
                <span>Send</span>
                {isLoading && (
                  <BiLoaderAlt className="text-pink-200 text-lg animate-spin" />
                )}
              </button>
            </div>
          </form>
        </section>

        <section className="relative lg:h-screen w-full lg:bg-secondary flex flex-col items-center justify-center space-y-8 mt-16 lg:mt-0">
          <h1 className="font-noto text-4xl font-semibold tracking-wide leading-loose text-secondary lg:text-white">
            Select a category
          </h1>
          <article
            className={`${
              styles.workCard
            } border-[1px] lg:border-[3px] border-primary cursor-pointer opacity-90 hover:opacity-100 ${
              isSelectedValue === 1
                ? "border-primary opacity-100"
                : "border-white"
            }`}
            onClick={() => setIsSelectedValue(1)}
          >
            <div className="flex space-x-2">
              <div className="pt-1">
                <IoSchoolOutline className="text-2xl text-primary" />
              </div>
              <div>
                <h1 className="text-tertiary text-base lg:text-lg font-medium">
                  Train with Pink Codrs
                </h1>
                <p className="text-slate-500 text-base hidden xl:block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  placeat obcaecati amet vel saepe explicabo!
                </p>
              </div>
            </div>
          </article>
          <article
            className={`${
              styles.workCard
            } border-[1px] lg:border-[3px] border-primary cursor-pointer opacity-90 hover:opacity-100 ${
              isSelectedValue === 2
                ? "border-primary opacity-100"
                : "border-white"
            }`}
            onClick={() => setIsSelectedValue(2)}
          >
            <div className="flex space-x-2">
              <div className="pt-1">
                <IoTrophyOutline className="text-2xl text-primary" />
              </div>
              <div>
                <h1 className="text-tertiary text-base lg:text-lg font-medium">
                  Run a Challenge
                </h1>
                <p className="text-slate-500 text-base hidden xl:block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  placeat obcaecati amet vel saepe explicabo!
                </p>
              </div>
            </div>
          </article>
          <article
            className={`${
              styles.workCard
            } border-[1px] lg:border-[3px] border-primary cursor-pointer opacity-90 hover:opacity-100 ${
              isSelectedValue === 3
                ? "border-primary opacity-100"
                : "border-white"
            }`}
            onClick={() => setIsSelectedValue(3)}
          >
            <div className="flex space-x-2">
              <div className="pt-1">
                <IoSearchOutline className="text-2xl text-primary" />
              </div>
              <div>
                <h1 className="text-tertiary text-base lg:text-lg font-medium">
                  Recruit from Pink Codrs
                </h1>
                <p className="text-slate-500 text-base hidden xl:block">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  placeat obcaecati amet vel saepe explicabo!
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
