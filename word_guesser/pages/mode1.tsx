// This is a game mode with guessing words with a validation
// done through Words API

import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";

const Mode1: NextPage = () => {

    const [guessed, setGuessed] = useState([]);

    useEffect(() => {

    }, [guessed.length])



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
                setGuessed([...guessed, word])
            }
            else if (found[0]['title']) {
                console.log('Word is not found');
            }
        }
        catch (e) {
            console.log('word is not found');
        }


        console.log(guessed);

    }

    // Handle submit button or keyboard event handler
    function submitWord(e) {
        e.preventDefault();
        isAWord(e.target[0].value)
        e.target[0].value = '';
    }


    return (
        <div className='h-full m-20'>
            <Head>
                <title>Word Guesser</title>
                <meta name="description" content="novel word guessing game" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-center text-slate-500 p-10 text-2xl">Welcome to Word Guesser!</h1>
            <p>Guessed correctly:</p>
            <ul className='flex flex-1 gap-2 '>{
                guessed.map((w) => (
                    <li key={w[2]} className='bg-green-200 p-2 m-2 rounded-lg'>{w}</li>
                ))}</ul>
            <form onSubmit={(e) => { submitWord(e) }}>
                <input placeholder="sdf" maxLength={5} />
            </form>


        </div>
    );
};






export default Mode1;
