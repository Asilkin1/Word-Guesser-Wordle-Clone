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

        console.log(found[0]['word']);
        e.target.style.visibility = 'hidden'
      }
    }
    // Incorrect word case
    catch (e) {
      console.log('word is not found');
    }

  }


  // Handle user input
  const handleUserInput = (e) => {


    toGuess.split('').map((w, index) => {
      const oldString = w.charAt(index);
      let newString = w[index] === ' ' ? w[index].replace(w[index], e.target.value) : w[index];
      console.log(oldString);
    })

    console.log();


  }

  function submitWords(e) {
    let word = '';
    e.preventDefault();

    for (let i = 0; i < e.target.length; i++) {
      word += e.target[i].value;
    };

    console.log(word);


    setGuessed(word);
    isAWord(word, e)
  }


  return (
    <>
      {/* Use form to get an index of the next input field */}
      <form onSubmit={(e) => { submitWords(e) }}>
        {
          toGuess.split('').map((c, index) => (
            <input
              key={index}
              className="p-2 m-2 w-12 h-12 border border-grey-500  justify-center rounded-md text-center"
              value={c === ' ' ? userInput : c}
              disabled={c === ' ' ? false : true}
              onChange={(e) => handleUserInput(e)}
              maxLength={1}

            />
          ))
        }

        <input type="submit" hidden={true} />
      </form>
    </>

  )
}

export default Word;
