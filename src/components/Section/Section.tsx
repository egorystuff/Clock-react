import React, { useRef } from "react";

import styles from "./styles.module.scss";

export const Section = () => {
  const oneRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (): void => {
    console.log(oneRef.current?.innerText);
  };

  return (
    <>
      <div className={styles.clock}>
        <div className={styles.clock__words}>
          <div className={styles.clock__word}>
            <div onClick={handleClick} ref={oneRef} className={styles.clock__wordBox}>
              1
            </div>
          </div>
          <div className={styles.clock__word}>
            <div onClick={handleClick} ref={oneRef} className={styles.clock__wordBox}>
              2
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
