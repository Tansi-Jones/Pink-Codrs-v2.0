import "../styles/globals.css";
import Script from "next/script";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import ScrollToTop from "react-scroll-to-top";

const progress = new ProgressBar({
  size: 4,
  color: "#E81A6B",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: "#E81A6B",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          padding: "10px",
        }}
      />
      <Script src="https://smtpjs.com/v3/smtp.js" />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
