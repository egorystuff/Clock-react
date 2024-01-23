import React, { useRef } from "react";

import styles from "./styles.module.scss";

export const Section = () => {
  const handleClick = (click: any): void => {
    console.log(click.target.id);
  };

  return (
    <>
      {/* <div className={styles.clock}>
        <div onClick={handleClick} className={styles.clock__words}>
          <div id='1' className={styles.clock__word}></div>
          <div id='2' className={styles.clock__word}></div>
          <div id='3' className={styles.clock__word}></div>
          <div id='4' className={styles.clock__word}></div>
          <div id='5' className={styles.clock__word}></div>
          <div id='6' className={styles.clock__word}></div>
          <div id='7' className={styles.clock__word}></div>
          <div id='8' className={styles.clock__word}></div>
          <div id='9' className={styles.clock__word}></div>
          <div id='10' className={styles.clock__word}></div>
          <div id='11' className={styles.clock__word}></div>
          <div id='12' className={styles.clock__word}></div>
        </div>
      </div> */}

      <svg viewBox='0 0 110 110'>
        <path className={styles.sector} d='M55,55 L105,55 A50,50 0 0,1 80,98.30z' />
        <path className={styles.sector} d='M55,55 L80,98.30 A50,50 0 0,1 30,98.30z' />
        <path className={styles.sector} d='M55,55 L30,98.30 A50,50 0 0,1 5,55z' />
        <path className={styles.sector} d='M55,55 L5,55 A50,50 0 0,1 30,11.69z' />
        <path className={styles.sector} d='M55,55 L30,11.69 A50,50 0 0,1 80,11.69z' />
        <path className={styles.sector} d='M55,55 L80,11.69 A50,50 0 0,1 105,55z' />
      </svg>
    </>
  );
};
