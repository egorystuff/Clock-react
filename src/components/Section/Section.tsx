import React, { useContext } from "react";

import styles from "./styles.module.scss";
import { AppContext } from "../../App";

export const Section = () => {
  const { setOffsetZone } = useContext(AppContext);

  const handleClick = (click: any): void => {
    // setOffsetZone(Number(click.target.id));
    console.log(click.target.id);
  };

  return (
    <>
      <div className={styles.clock}>
        <div onClick={handleClick}>
          <svg viewBox='0 0 110 110'>
            <path
              id='0'
              className={styles.sector}
              d='M55,55 L29.99999999999998,11.698729810778083 A50,50 0 0,1 54.99999999999999,5z'></path>
            <path
              id='1'
              className={styles.sector}
              d='M55,55 L54.99999999999999,5 A50,50 0 0,1 80,11.698729810778069z'></path>
            <path
              id='2'
              className={styles.sector}
              d='M55,55 L80,11.698729810778069 A50,50 0 0,1 98.30127018922192,29.99999999999998z'></path>
            <path
              id='3'
              className={styles.sector}
              d='M55,55 L98.30127018922192,29.99999999999998 A50,50 0 0,1 105,54.999999999999986z'></path>
            <path id='4' className={styles.sector} d='M55,55 L105,55 A50,50 0 0,1 98.30127018922194,80z' />
            <path
              id='5'
              className={styles.sector}
              d='M55,55 L98.30127018922194,80 A50,50 0 0,1 80,98.30127018922192z'
            />
            <path id='6' className={styles.sector} d='M55,55 L80,98.30127018922192 A50,50 0 0,1 55,105z' />
            <path
              id='7'
              className={styles.sector}
              d='M55,55 L55,105 A50,50 0 0,1 30.00000000000001,98.30127018922194z'></path>
            <path
              id='8'
              className={styles.sector}
              d='M55,55 L30.00000000000001,98.30127018922194 A50,50 0 0,1 11.698729810778062,80z'></path>
            <path
              id='9'
              className={styles.sector}
              d='M55,55 L11.698729810778062,80 A50,50 0 0,1 5,55.00000000000001z'></path>
            <path
              id='10'
              className={styles.sector}
              d='M55,55 L5,55.00000000000001 A50,50 0 0,1 11.698729810778069,29.999999999999993z'></path>
            <path
              id='11'
              className={styles.sector}
              d='M55,55 L11.698729810778069,29.999999999999993 A50,50 0 0,1 29.99999999999998,11.698729810778083z'></path>
          </svg>
        </div>
      </div>
    </>
  );
};
