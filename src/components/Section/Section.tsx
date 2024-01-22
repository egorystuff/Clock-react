import React from "react";

import styles from "./styles.module.scss";

export const Section = () => {
  const handleClick = (click: any): void => {
    console.log(click.target.id);
  };

  return (
    <>
      <div className={styles.clock}>
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
      </div>
    </>
  );
};
