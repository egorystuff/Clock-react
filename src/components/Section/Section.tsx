import React, { useRef } from "react";

import styles from "./styles.module.scss";

export const Section = () => {
  const sectionOne = useRef<HTMLDivElement | null>(null);

  // const handleClick = () => {
  //   sectionOne.current.focus();
  // };

  return (
    <>
      <div className={styles.clock}>
        <div className={styles.clock__words}>
          <div className={styles.clock__word}>
            <div ref={sectionOne} className={styles.clock__wordBox}>
              1
            </div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>2</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>3</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>4</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>5</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>6</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>7</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>8</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>9</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>10</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>11</div>
          </div>
          <div className={styles.clock__word}>
            <div className={styles.clock__wordBox}>12</div>
          </div>
        </div>
      </div>
    </>
  );
};
