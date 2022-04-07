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

  // Remove any char
  const shouldGuess = removeChar(words, 'a')

  return (
    <div className='h-full'>
      <Head>
        <title>Word Guesser</title>
        <meta name="description" content="novel word guessing game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-slate-500 p-10 text-2xl">Fill in game mode</h1>

      {/* <p>{guess}</p> */}
      <main className="flex justify-center m-2 p-2">
        {/* Here we pass chars typed by a user */}
        <div className="flex flex-col">

          <div className="flex flex-col justify-center items-center">
            <h2 className='text-2xl font-sans'>Your Words</h2>
            <div className='flex flex-col flex-auto p-2 space-around justify-center items-center bg-slate-100 border-slate-200 rounded-xl border-2'>
              {shouldGuess.map(word => (
                <p className="flex text-green-400 border-2 border-yellow-200">{word}</p>))}
            </div>
          </div>
          <Words words={shouldGuess} key={'s'} />
        </div>

      </main>
      {/* Keyboard part */}

      <div className="flex p-2 m-auto max-w-md items-center">
        <div className="flex flex-1">
          <Keyboard
            onKeyPress={onKeyPress}
            layout={layout.layout}
            physicalKeyboardHighlight={true}
            physicalKeyboardHighlightTextColor={'white'}
            physicalKeyboardHighlightBgColor={"red"}
            theme={"hg-theme-default myTheme1"}
          />
        </div>

      </div>

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
