import styles from "../styles/Home.module.css";
import Word from "./word";
import Words from "./word/words";
import Keyboard from "./keyboard";
import { useState } from "react";

/**
 * This component:
 * 1. Displays the list of correct words the user has gotten
 * 2. Needs the list of correct words from the server
 * */



const Deck = ({ wordsProp }: any) => {
  const sampleWords = ['pizza', 'fuzzy', 'space', 'stone', 'brick'];

  return (
    <>
      <main className="flex justify-center">
        {/* Here we pass chars typed by a user */}
        <div className="flex flex-col">
          <Words key={'s'} />
          <div className="flex flex-col justify-center items-center">
            <h2 className='text-2xl'>Your Words</h2>
            <div className='container flex flex-col p-2 justify-center items-center bg-slate-100 border-slate-200 rounded-xl border-2'>
              {sampleWords.map(word => (<p className="text-green-400">{word}</p>))}
            </div>
          </div>
        </div>

      </main>
    </>
  );
};

export default Deck;
