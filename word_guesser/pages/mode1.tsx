// This is a game mode with guessing words with a validation
// done through Words API

import type { NextPage } from "next";
import { useState, useEffect, SyntheticEvent } from "react";

type pageProps = {
    CHARS: number
}

const Mode1: NextPage<pageProps> = ({ CHARS }) => {

    // Render words here
    const [guessed, setGuessed] = useState([]);
    // Use to have a unique word
    const [uniqWords, setUnique] = useState(new Set());

    // Correct
    const [isCorrect, setCorrect] = useState(false);

    // Use to loop over the length and create input boxes
    const [arrayForInputFields, setArrayLength] = useState([]);


    // Re-render when one of the values in the dependency array has changed
    useEffect(() => {
        setArrayLength(new Array(CHARS).fill('a'));

    }, [guessed.length, uniqWords.size, isCorrect, CHARS])



    // Check if typed in word is actually a word
    async function isAWord(word: string) {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const found = await res.json();

        // make sure if a key doesn't exist 
        // the program won't crash
        try {
            if (found[0]['word']) {
                console.log(found);
                console.log(found[0]['word']);
                uniqWords.add(found[0]['word']);
                setGuessed([...Array.from(uniqWords)])
                setCorrect(true);
            }
        }
        // Incorrect word case
        catch (e) {
            setCorrect(false);
            console.log('word is not found');
        }

    }

    function submitMultipleFields(e: any) {

        let word = ''
        e.preventDefault();

        for (let i = 0; i < e.target.length; i++) {
            word += e.target[i].value;
        };

        // Call WORD API
        isAWord(word);

        // Erase all fields
        for (let i = 0; i < e.target.length; i++) {
            e.target[i].value = '';
        };

        // Focus on the first letter
        e.target[0].focus();

    }


    return (
        <>
            <div className='h-full'>
                <div className="text-center font-thin">
                    <h1 className="text-slate-800 p-10 text-2xl">All you can type in game mode</h1>
                    <p>Guessed correctly:</p>
                    <p className='text-xl font-bold'>#️⃣ {guessed.length}</p>

                </div>

                <ul className='flex flex-1 gap-2 justify-center'>{
                    Array.from(guessed).map((w, i) => (
                        <li key={i} className='bg-green-200 p-2 m-2 rounded-lg '>{w}</li>
                    ))}</ul>

                <form className="flex justify-center" onSubmit={(e) => { submitMultipleFields(e) }}>

                    {arrayForInputFields && arrayForInputFields.map((el, index) => (

                        <input key={index} className={`${isCorrect ? 'border-green-600' : 'border-red-600'} border-4 outline-none p-2 m-2 rounded-xl text-center text-xl uppercase w-16`}
                            required
                            maxLength={1} />
                    ))}
                    <input type="submit" className="hidden" />

                </form>
            </div>
        </>
    );
};


// Get the number of chars ready, before the react component is rendered
export async function getStaticProps() {

    // Get random number of chars
    function getRandomArbitrary(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the 
    }


    const CHARS = getRandomArbitrary(3, 10);


    return {
        props: {
            CHARS
        }
    }
}



export default Mode1;
