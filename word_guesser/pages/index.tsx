import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Deck from "../components/deck";
import KeyboardWrapper from "../components/keyboard";

const Home: NextPage = (words) => {

  const removeChar = (words: any, remove: string) => {
    /**
     * words - ['ad','bd','cf']
     * return - an array with removed chars
    */

    let newArray: Array<string> = [];

    words.words['word'].map((word: string, index: BigInteger) => {
      newArray.push(word.split(remove).join(' '));
    })

    return newArray;

  }

  const shouldGuess = removeChar(words, 'a')

  console.log(shouldGuess);


  return (
    <div className='h-full'>
      <Head>
        <title>Word Guesser</title>
        <meta name="description" content="novel word guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-slate-500 p-10 text-2xl">Fill in game mode</h1>

      {shouldGuess && <Deck words={shouldGuess} />}

      <KeyboardWrapper />

    </div>
  );
};

// Get words from the API from backend
export async function getStaticProps() {

  const res = await fetch(`http://localhost:3000/api/words/1`);
  const words = await res.json();

  console.log('Words from backend ', words['word']);

  return {
    props: {
      words
    }
  }
}




export default Home;
