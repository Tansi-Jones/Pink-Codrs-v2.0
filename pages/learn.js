import { Meta } from "../components/meta/Meta";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";
import { JoinUs } from "../components/join us/JoinUs";
import { SearchIcon } from "@heroicons/react/outline";
import { BsCollection } from "react-icons/bs";

export default function learn() {
  return (
    <>
      <Meta title="Learn" />

      <header className="relative py-1 w-full bg-secondary">
        <nav className="z-50 sticky">
          <Navigation textColor="text-slate-400" logoSrc="/pink-codrs.svg" />
        </nav>
        <div className="container sticky my-8 lg:my-20 space-y-10">
          <h1 className="lg:w-[75%] mx-auto font-noto text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide leading-loose text-center">
            {"Build new skills, Improve yourself"}
          </h1>
          <div className="lg:w-[75%] mx-auto flex items-center space-x-3 py-2 px-3 border border-tertiary bg-slate-800">
            <div>
              <SearchIcon className="text-slate-500 h-5" />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for courses..."
              className="text-lg placeholder:text-slate-500 flex-grow outline-none bg-transparent text-white"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="flex flex-col items-center my-32 space-y-5">
          <div>
            <BsCollection className="text-[8rem] text-slate-500" />
          </div>
          <h1 className="text-slate-500 text-5xl font-medium font-noto capitalize">
            no course yet!
          </h1>
        </section>
      </main>

      {/* join pink codrs */}
      <JoinUs />

      <footer>
        <Footer />
      </footer>
    </>
  );
}
