import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

/**
 * @TODO
 * Should receive chars from user input
 * */
const Word = ({ userInput }: any) => {
  // Set react component state with those words
  const [guessed, setWords] = useState(userInput);

  // Component state has changed
  useEffect(() => {
    setWords(userInput);
  }, [userInput]);

  return (
    <>
      <div className={styles.grid}>
        {/* Loop over each character and render words */}
        {guessed &&
          guessed.map((word: string) => (
            <>
              <p key={word} className={styles.card}>
                {word}
              </p>
            </>
          ))}
      </div>
    </>
  );
};

export default Word;
