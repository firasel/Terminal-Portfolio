import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home/Home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Firasel.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default HomePage;
