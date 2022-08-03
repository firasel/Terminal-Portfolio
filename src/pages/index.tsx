import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home/Home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fi Rasel - MERN Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="FiRasel" />
        <meta
          name="keywords"
          content="FiRasel, Rasel, MdRasel, mern stack developer, terminal portfolio, terminal style portfolio, nextJS portfolio"
        />
        <meta
          name="description"
          content="Hi, I'm Fi Rasel, A Programmer and MERN stack developer."
        />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default HomePage;
