import { Meta } from "../components/meta/Meta";
import {
  IoTrophyOutline,
  IoSchoolOutline,
  IoSearchOutline,
} from "react-icons/io5";
import Link from "next/link";
import styles from "../styles/Others.module.css";
import Router from "next/router";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";
import Countries from "../public/countries.json";

const train =
  "Understanding that women should be at the forefront of the tech transformation. Our focus at Pink Codrs Africa is to Upskill or Reskill teams/individuals with in demand tech skills to close the mismatch between skills gained at institutions and the requirements of the job market. We recognize the importance for Africa to enhance and develop the skills of its workforce and invest in its local talents, especially women.";
const recruit =
  "Get matched with the best candidate for your organisation from our network of female engineers from around Africa. On-board the best talent with a quick and easy hiring process without hassle. Our engineers are vetted and matched against global standards. ";
const run =
  "We have over 1000 women engineers ready to solve the most pressing challenges in your organisation/country.  Our army of female engineers uses code, and innovation to solve the most challenging problems. ";

export default function WorkWithUs() {
  const [displayTrain, setDisplayTrain] = useState(false);
  const [displayRun, setDisplayRun] = useState(false);
  const [displayRecruit, setDisplayRecruit] = useState(false);

  const [isSelectedValue, setIsSelectedValue] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [workForm, setWorkForm] = useState({
    email: "",
    organization: "",
    representative: "",
    country: "",
  });

  const filterCountries = Countries.filter((country) => {
    return country.continent === "Africa";
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
    const { email, organization, representative, country } = workForm;
    console.log(category[isSelectedValue - 1]);
    // try {
    //   setIsLoading(true);
    //   const { data } = await axios.post("/api/work-with-us", {
    //     email,
    //     organization,
    //     representative,
    //     category: category[isSelectedValue],
    //   });

    //   toast.success(data.message);
    //   setIsLoading(false);
    //   Router.push("/");
    // } catch (error) {
    //   setIsLoading(true);
    //   // console.log(error.response.data);
    //   toast.error(error.response.data);
    // }

    window.Email.send({
      SecureToken: "e81cdbb6-35b0-4af8-b543-9aa71f6af38f",
      To: "apinkcodrsafrica@gmail.com",
      From: "info@pinkcodrs.africa",
      Subject: "Work with us",
      Body: `
      <body
      style="
        font-family: sans-serif;
        width: 70%;
        margin: 0 auto;
      ">
    <h1>${representative} just applied to work with us</h1>
      
      <p style="color: #324054; font-size: 20px">
        <span>Category: </span>
        <code style="color: #e81a6b">${category[isSelectedValue - 1]}</code>
      </p>
      <p style="color: #324054; font-size: 20px">
        <span>Email: </span>
        <code style="color: #e81a6b">${email}</code>
      </p>
      <p style="color: #324054; font-size: 20px">
        <span>Organization: </span>
        <code style="color: #e81a6b">${organization}</code>
      </p>
      <p style="color: #324054; font-size: 20px">
        <span>Representative: </span>
        <code style="color: #e81a6b">${representative}</code>
      </p>
      <p style="color: #324054; font-size: 20px">
        <span>Country: </span>
        <code style="color: #e81a6b">${country}</code>
      </p>
  
     
      <a href="/" style="text-decoration: none">
        <code style="color: #e81a6b; font-size: 15px"
          >Sent from Pink Codrs Website</code
        >
      </a>
    </body>`,
    }).then((message) => toast.success("Message sent successfully!"));
  };

  return (
    <>
      <Meta title="Work With Us" />

      {/* Toaster */}
      <Toaster />

      <main className="flex flex-col-reverse lg:grid grid-cols-1 md:grid-cols-2 place-items-center">
        <section className="w-[90%] md:w-[60%] lg:w-[50%] mx-auto space-y-5 my-20 lg:my-60 xl:my-0">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a>
                <div className="relative">
                  <img
                    src="/pink-codrs-2.svg"
                    width={50}
                    height={50}
                    className="object-fill"
                    alt="pink codrs africa logo"
                  />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="text-slate-500 font-semibold">Home</a>
            </Link>
          </div>
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
                {filterCountries.map((country, index) => (
                  <option key={index} value={country.country}>
                    {country.country}
                  </option>
                ))}
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
                  {displayTrain ? train : train.slice(0, 100) + "..."}
                  <button
                    onClick={() => setDisplayTrain(!displayTrain)}
                    className="text-slate-500 font-semibold"
                  >
                    {displayTrain ? "show less" : "read more"}
                  </button>
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
                  {displayRun ? run : run.slice(0, 100) + "..."}
                  <button
                    onClick={() => setDisplayRun(!displayRun)}
                    className="text-slate-500 font-semibold"
                  >
                    {displayRun ? "show less" : "read more"}
                  </button>
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
                  {displayRecruit ? recruit : recruit.slice(0, 100) + "..."}
                  <button
                    onClick={() => setDisplayRecruit(!displayRecruit)}
                    className="text-slate-500 font-semibold"
                  >
                    {displayRecruit ? "show less" : "read more"}
                  </button>
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
