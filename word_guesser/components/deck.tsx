import styles from "../styles/Home.module.css";
import Word from "./word";
import Keyboard from "./keyboard";
import { useState } from "react";

/**
 * This component:
 * 1. Create a list of Words that user typed in
 * 2. Pass user input into the Word component
 * */



const Deck = ({ wordsProp }: any) => {
  const WORD_LENGTH = 5;

  const [words, setWords] = useState([<Word length={WORD_LENGTH} key={'unique'} />]);

  // Add another word
  const addMoreWords = () => {
    setWords([...words, <Word length={WORD_LENGTH} key={'123'} />])
  };

  const chars = ['a', 'b', 'c'];

  return (
    <>
      <main className={styles.main}>
        {/* Here we pass chars typed by a user */}
        <div className="flex">
          <Word length={WORD_LENGTH} startingChar={chars} />
        </div>

      </main>
    </>
  );
};

export default Deck;
