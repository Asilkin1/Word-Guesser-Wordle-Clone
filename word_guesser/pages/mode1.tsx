// This is a game mode with guessing words with a validation
// done through Words API

import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Keyboard from 'react-simple-keyboard';

type pageProps = {
    CHARS: number
}

const Mode1: NextPage<pageProps> = ({ CHARS }) => {

    // Keyboard layout can set character constraints
    const layout = {
        layout: {
            'default': [
                'q w e r t y u i o p',
                'a s d f g h j k l',
                'z x c v b n m'
            ],
            '3': ['w e r t y u i o p',
                'a s d f g j k l'],
            '4': [
                'a s d f g h j k l',
                'z x c v b n m'],
            '5': ['q w y u i o p',
                'a k l',
                'z x c v b n m'],
            '6': ['q w e r t',
                'a s d h j k l',
                'z x v n m'],
            '7': ['q y u i o p',
                'a s d f g h',
                'z'],
            '8': ['q w e r t y u i o p',
                'a s d f g h j k l'],
            '9': [
                'a s d f g h j k l',
                'z x c v b n m'],
            '10': ['q w e u i o',
                'a s d f g h j k',
                'c b n m']
        }
    }


    const [virtualKeyValue, setVirtualKey] = useState([]);
    let [lettersLeft, setLeft] = useState(CHARS);

    // handle virtual keyboard 
    const onKeyPress = (button) => {

        setVirtualKey([...virtualKeyValue, button])
        console.log('typed : ', virtualKeyValue.join(''));

        if (lettersLeft === 1) {
            console.log('Word is finished');

            setLeft(CHARS);
        }

    }

    const onChange = (input) => {
        console.log(input);
        console.log('input changed: ', lettersLeft);

        // setLeft(Array.from(chars).fill('a').length)
        setLeft(lettersLeft -= 1);

        if (lettersLeft === 0) {
            setLeft(CHARS);
            isAWord(virtualKeyValue.join(''));
            setVirtualKey([]);
        }

    }


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

        // if (lettersLeft === 0) {
        //     setLeft(CHARS);
        // }

    }, [guessed.length, uniqWords.size, isCorrect, CHARS, lettersLeft])



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
        setVirtualKey([]);

    }


    return (
        <>
            <div className='h-full'>
                <div className="text-center font-thin">
                    <h1 className="text-slate-800 p-10 text-2xl">All you can type in game mode</h1>
                    <p>Characters to type in {CHARS}</p>


                    {arrayForInputFields && arrayForInputFields.map((el, index) => (

                        <input key={index}
                            className={`border-gray-400 border-4 outline-none p-2 m-2 rounded-xl text-center text-xl uppercase w-16`}
                            placeholder={'*'}
                            disabled={true}
                        />
                    ))}
                    <p>Guessed correctly:</p>
                    <p className='text-xl font-bold'>#️⃣ {guessed.length}</p>
                </div>

                <ul className='flex flex-1 gap-2 justify-center'>{
                    Array.from(guessed).map((w, i) => (
                        <li key={i} className='bg-green-200 p-2 m-2 rounded-lg '>{w}</li>
                    ))}</ul>

                <form className="flex justify-center" onSubmit={(e) => { submitMultipleFields(e) }}>

                    {virtualKeyValue && virtualKeyValue.map((el, index) => (

                        <input key={index}
                            className={`${isCorrect ? 'border-green-600' : 'border-red-600'} border-4 outline-none p-2 m-2 rounded-xl text-center text-xl uppercase w-16`}
                            required
                            value={el}
                            maxLength={1}
                            disabled={false}
                        />
                    ))}
                    <input type="submit" className="hidden" />

                </form>
            </div>

            <div className="flex p-2 m-auto max-w-md items-center">
                <Keyboard
                    onKeyPress={onKeyPress}
                    onChange={onChange}
                    layout={layout.layout}
                    layoutName={CHARS.toString()}
                    physicalKeyboardHighlight={true}
                    physicalKeyboardHighlightTextColor={'white'}
                    physicalKeyboardHighlightBgColor={"red"}
                    onInit={(keyboard) => console.log("simple-keyboard initialized", keyboard)}
                />
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
