import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";
import Link from "next/link";
import styles from "../styles/Others.module.css";

export default function Custom505() {
  return (
    <>
      <Meta title="505 Server Error" />

      <nav>
        <Navigation
          textColor="text-secondary"
          logoSrc="/pink-codrs-2.svg"
          menuBarColor="bg-secondary"
        />
      </nav>

      <main className=" w-[90%] lg:w-[58%] mx-auto tex-secondary space-y-10 py-32 flex flex-col items-center">
        <h1
          className={`${styles.mainText} font-noto text-7xl font-bold capitalize text-secondary text-center`}
        >
          oh no
        </h1>
        <p className="text-slate-500 font-open text-xl text-center">
          {" Looks like the server is down. Please refresh the page"}
        </p>
        <Link href="/">
          <a>
            <button className="btn-primary py-3 px-6 w-full lg:w-auto ">
              back home
            </button>
          </a>
        </Link>
      </main>

      <footer className="bg-white border-t">
        <Footer />
      </footer>
    </>
  );
}
