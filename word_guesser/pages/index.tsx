import type { NextPage } from "next";
import Head from "next/head";
import Words from "../components/word/words";
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

    words.words.map((word: string, i: number) => {
      newArray.push(word.replace(/[eyuioa]/g, m => vowels[m]));

    })

    return newArray;

  }

  // Remove any char
  const shouldGuess = removeChar(words)

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
          {words && <Words words={shouldGuess} key={'s'} />}
        </div>

      </main>

    </div>
  );
};

// Get words from the API from backend
export async function getStaticProps() {

  // Randomize day

  function getRandomArbitrary(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the 
  }

  const randomDay = getRandomArbitrary(1, 10);

  // localhost
  //const res = await fetch(`http://localhost:3000/api/words/${randomDay}`);
  // Production
  const wordSchedule = {
    1: ['abaca', 'aalii', 'saber', 'cable', 'facer'],
    2: ['acrid', 'actor', 'acute', 'adage', 'adapt'],
    3: ['adept', 'admin', 'admit', 'adobe', 'adopt'],
    4: ['adore', 'adorn', 'adult', 'affix', 'afire'],
    5: ['afoot', 'afoul', 'after', 'again', 'agape'],
    6: ['agate', 'agent', 'agile', 'aging', 'aglow'],
    7: ['agony', 'agora', 'agree', 'ahead', 'aider'],
    8: ['aisle', 'alarm', 'album', 'alert', 'algae'],
    9: ['alibi', 'alien', 'align', 'alike', 'alive'],
    10: ['allay', 'alley', 'allot', 'allow', 'alloy']
  }
  const words = wordSchedule[randomDay];




  return {
    props: {
      words
    }
  }
}




export default Home;
