import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const deg = 6;
    const hr = document.querySelector("#hr") as HTMLButtonElement | null;
    const mn = document.querySelector("#mn") as HTMLButtonElement | null;
    const sc = document.querySelector("#sc") as HTMLButtonElement | null;

    const interval = setInterval(() => {
      let hh = time.getHours() * 30;
      let mm = time.getMinutes() * deg;
      let ss = time.getSeconds() * deg;

      console.log(time.getMinutes());

      if (hr !== null) hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      if (mn !== null) mn.style.transform = `rotateZ(${mm}deg)`;
      if (sc !== null) sc.style.transform = `rotateZ(${ss}deg)`;
      setTime(new Date());
    }, 1000);

    // Format the time as a string

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [time]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <>
      <div className={styles.clock}>
        <div className={styles.hour}>
          <div className={styles.hr} id='hr'></div>
        </div>

        <div className={styles.min}>
          <div className={styles.mn} id='mn'></div>
        </div>

        <div className={styles.sec}>
          <div className={styles.sc} id='sc'></div>
        </div>
      </div>
      <p>{timeString}</p>
    </>
  );
};
