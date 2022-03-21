import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";
import Master from "../components/master";

const Home: NextPage = () => {

  const keyboard = useRef();
  const [input, setInput] = useState('')

  return (
    <div className='h-full m-20'>
      <Head>
        <title>Word Guesser</title>
        <meta name="description" content="novel word guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-slate-500 p-10 text-2xl">Welcome to Word Guesser!</h1>
      {/* Master component */}
      <Master />


      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
