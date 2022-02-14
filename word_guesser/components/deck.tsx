import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const Deck = () => {
  // Create some state

  // Update if something has changed

  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}>
          <p className={styles.card}>H</p>
          <p className={styles.card}>E</p>
          <p className={styles.card}>L</p>
          <p className={styles.card}>L</p>
          <p className={styles.card}>O</p>
        </div>
        <div className={styles.grid}>
          <p className={styles.card}>A</p>
          <p className={styles.card}>B</p>
          <p className={styles.card}>C</p>
          <p className={styles.card}>D</p>
          <p className={styles.card}>E</p>
        </div>
      </main>
    </>
  );
};

export default Deck;
