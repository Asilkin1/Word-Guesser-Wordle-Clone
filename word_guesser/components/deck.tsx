import styles from "../styles/Home.module.css";
import Word from "./word";
import Keyboard from "./keyboard";

/**
 * This component:
 * 1. Create a list of Words that user typed in
 * 2. Pass user input into the Word component
 * */

const Deck = ({ wordsProp }: any) => {
  // keyboard data
  // All of the chars we want to use
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <>
      <main className={styles.main}>
        {/* Here we pass chars typed by a user */}
        <Word userInput={["A", "B", "C"]} />
      </main>
      <Keyboard allowedChars={alphabet} />
    </>
  );
};

export default Deck;
