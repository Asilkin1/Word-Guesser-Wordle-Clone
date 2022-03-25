import Keyboard from '../components/keyboard'
import Deck from './deck';
import { useEffect, useState } from 'react';


export default function Master() {

    /**
     * @Todo Probably need to keep a reference to keyboard here to insert user input
     * 
     */

    // Words fetched from API saved in here
    const [words, setWords] = useState(null);

    // User should guess
    const [useGuess, setUserGuess] = useState(null);

    /**
  * @Todo Can remove certain chars for user to figure a word
  * 
  */
    const removeChar = (chars: Array<string>) => {
        /**
         * @TODO populate the result in the deck for user to guess
         * chars - ['a','b','c']
         * replace a character in chars with a blank space
         * return - [' pple',' ook', etc]
        */
    }

    // Load words once on initial page request
    useEffect(() => {
        // Fetch words from API
        fetch(`api/words/1`)
            .then((res) => res.json())
            .then((data) => {
                // save words in the component's state
                setWords(data);
                // 1.Call strip function
                // 2.Set words without letters
            })
    }, [])

    const time = 20;

    return (
        <>

            <div className="flex flex-1  items-center p-4  gap-5"
            >
                <div className="flex   bg-red-100 p-2 rounded-xl border-2 border-red-200 text-xl font-bold">Time: 20 s</div>
                <div className="flex flex-1 bg-green-100 text-center p-2 rounded-xl border-2 border-green-200 text-xl font-bold">Chars: a,b,c,d,e,f,g</div>
                <div className="flex  bg-yellow-100 p-2 rounded-xl border-2 border-yellow-200 text-xl font-bold">Score:</div>
            </div>

            <Deck words={words} />

            <Keyboard />

        </>

    )
}