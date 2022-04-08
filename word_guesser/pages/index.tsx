import type { NextPage } from "next";
import Head from "next/head";
import Words from "../components/word/words";
import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";


const Home: NextPage = (words) => {


  // Keyboard layout can set character constraints
  const layout = {
    layout: {
      'default': [
        'q w e r t y u i o p',
        'a s d f g h j k l',
        'z x c v b n m'
      ],
    }
  }

  const onKeyPress = (button: string) => {
    console.log(button);

  }

  // Remove all vowels from words
  const removeChar = (words: any) => {

    let newArray: Array<string> = [];

    const vowels = {
      'a': ' ', 'e': ' ', 'i': ' ',
      'o': ' ', 'u': ' ', 'y': ' '
    };

    words.words['word'].map((word, i) => {
      newArray.push(word.replace(/[eyuioa]/g, m => vowels[m]));

    })

    return newArray;

  }

  // Remove any char
  const shouldGuess = removeChar(words, 'a')

  return (
    <div className=''>
      <Head>
        <title>Word Guesser</title>
        <meta name="description" content="novel word guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center uppercase  text-orange-200 p-10 text-6xl font-mono font-bold underline  decoration-wavy underline-offset-2 decoration-yellow-500 ">Fill in game mode</h1>

      {/* <p>{guess}</p> */}
      <main className="flex justify-center max-h-full">
        {/* Here we pass chars typed by a user */}
        <div className="flex flex-col">
          <Words words={shouldGuess} key={'s'} />
        </div>

      </main>

    </div>
  );
};

// Get words from the API from backend
export async function getStaticProps() {

  // Randomize day

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the 
  }

  const randomDay = getRandomArbitrary(1, 10);

  const res = await fetch(`http://localhost:3000/api/words/${randomDay}`);
  const words = await res.json();

  console.log('Words from backend ', words['word']);

  return {
    props: {
      words
    }
  }
}




export default Home;
