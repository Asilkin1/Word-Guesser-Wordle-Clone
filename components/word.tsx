import { useState } from "react";

const Word = ({ chars }: any) => {
  // Keep what user have entered
  const [userInput, setUserInput] = useState(null);
  const [toGuess, setGuessed] = useState(chars);


  async function isAWord(word: string, e) {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const found = await res.json();

    // make sure if a key doesn't exist 
    // the program won't crash
    try {

      if (found[0]['word']) {

        // Highligh the whole row in green
        for (let i = 0; i < e.target.children.length; i++)
          e.target.children[i].className += ' bg-green-200 transition duration-700 ease-in-out';
      }

    }
    // Incorrect word case
    catch (error) {
      console.log('word is not found');

      for (let i = 0; i < e.target.children.length; i++)
        e.target.children[i].className += ' bg-red-200 opacity-50 transition duration-700 ease-in-out transition-opacity transition-shadow';
    }

  }


  function submitWords(e) {
    let word = '';
    e.preventDefault();

    for (let i = 0; i < e.target.length; i++) {
      word += e.target[i].value;
    };

    setGuessed(word);
    isAWord(word, e)
  }


  return (
    <>
      {/* Use form to get an index of the next input field */}
      <form onSubmit={(e) => { submitWords(e) }}>
        {
          toGuess.split('').map((c: string, index: number) => (
            <input
              key={index}
              className="p-2 m-2 w-16 h-16 text-3xl justify-center rounded-md text-center font-thick outline-none focus:bg-orange-200 focus:decoration-red-500 uppercase drop-shadow-md focus:underline caret-transparent cursor-pointer"
              value={c === ' ' ? userInput : c}
              onChange={(e) => { e.target.value !== ' ' ? console.log(e.target.value) : console.log('empty') }}
              disabled={c === ' ' ? false : true}
              maxLength={1}
              required={true}
            />
          ))
        }

        <input type="submit" hidden={true} />
      </form>
    </>

  )
}

export default Word;
