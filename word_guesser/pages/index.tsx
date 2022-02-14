import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Deck from "../components/deck";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Word Guesser</title>
        <meta name="description" content="novel word guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Welcome to Word Guesser!</h1>
      {/* words comes here */}
      <Deck />

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
