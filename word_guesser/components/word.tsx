import { createRef, useEffect, useRef, useState } from "react";

const Word = ({ chars }: any) => {
  // Keep what user have entered
  const [userInput, setUserInput] = useState(null);
  const [toGuess, setGuessed] = useState(chars);

  console.log(chars);

  // Handle user input
  const handleUserInput = (e) => {

    // Try to replace empty space
    setGuessed(toGuess[0].replace(' ', e.target.value))
  }

  // useEffect(() => {

  // }, [])

  console.log('Chars passed', chars, 'type', typeof chars);

  return (
    <>
      {/* Use form to get an index of the next input field */}
      <form>
        {
          toGuess.split('').map((c) => (
            <input
              key={c}
              className="p-2 m-2 w-12 h-12 border border-grey-500  justify-center rounded-md text-center"
              value={c}
              onChange={(e) => handleUserInput(e)}
              maxLength={1}

            />
          ))
        }
      </form>
    </>

  )
}

export default Word;
