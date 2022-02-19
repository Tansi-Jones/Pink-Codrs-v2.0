import { Meta } from "../components/meta/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navigation } from "../components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <Meta />
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
    </>
  );
}
