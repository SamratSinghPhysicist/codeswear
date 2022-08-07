import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="CodesWear.com - Wear the Code" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
