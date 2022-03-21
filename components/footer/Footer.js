import Link from "next/link";
import { OfficeBuildingIcon, CogIcon } from "@heroicons/react/outline";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-10 lg:px-8 font-open mb-5 gap-y-8">
        <div className="justify-self-start lg:justify-self-start">
          <h1 className="capitalize text-lg font-medium mb-2 text-secondary">
            company
          </h1>
          <div className="space-y-2 font-normal text-md capitalize tracking-wide">
            <div>
              <div className="hover:text-primary transition ease-linear text-slate-500">
                <Link href="/about">
                  <a>about us</a>
                </Link>
              </div>
              <div className="hover:text-primary transition ease-linear text-slate-500">
                <Link href="/learn">
                  <a>learn</a>
                </Link>
              </div>
              <div className="hover:text-primary transition ease-linear text-slate-500">
                <Link href="/coming-soon">
                  <a>terms </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-self-start lg:justify-self-center">
          <h1 className="capitalize text-lg font-medium mb-2 text-secondary">
            join pink codrs
          </h1>
          <div className="space-y-2  font-normal text-md capitalize tracking-wide">
            <div className="hover:text-primary transition ease-linear text-slate-500">
              <Link href="/coming-soon">
                <a className="flex items-center space-x-2">
                  <CogIcon className="h-4" /> <span>for engineers</span>
                </a>
              </Link>
            </div>
            <div className="hover:text-primary transition ease-linear text-slate-500">
              <Link href="/coming-soon">
                <a className="flex items-center space-x-2">
                  <OfficeBuildingIcon className="h-4" />
                  <span> for companies</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="justify-self-start lg:justify-self-end">
          <h1 className="capitalize text-lg font-medium mb-2 text-secondary">
            resources
          </h1>
          <div className="space-y-2  font-normal text-md capitalize tracking-wide">
            <div>
              <div className="hover:text-primary transition ease-linear text-slate-500">
                <Link href="/privacy">
                  <a>privacy</a>
                </Link>
              </div>
              <div className="hover:text-primary transition ease-linear text-slate-500">
                <Link href="/contact">
                  <a>contact us</a>
                </Link>
              </div>
              <div className="hover:text-primary transition ease-linear text-slate-500">
                <Link href="/coming-soon">
                  <a>FAQ</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-slate-500 text-sm py-5 flex flex-wrap space-y-5 items-center justify-between">
        <p>&copy; Pink-Codrs.com. All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <div>
            <Link href="https://twitter.com/PinkcodrsAfrica">
              <a target="_blank">
                <BsTwitter className="text-xl text-primary" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/company/19128552/admin/">
              <a target="_blank">
                <BsLinkedin className="text-xl text-primary" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/pinkcodrs_africa/">
              <a target="_blank">
                <BsInstagram className="text-xl text-primary" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/facebook">
              <a target="_blank">
                <BsFacebook className="text-xl text-primary" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
