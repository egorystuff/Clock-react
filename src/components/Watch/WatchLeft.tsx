import React, { useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import { AppContext } from "../../App";

export const WatchLeft: React.FC = () => {
  const { time, setTime } = useContext(AppContext);

  // Update the time every second
  useEffect(() => {
    const deg: number = 6;
    const hr = document.querySelector("#hrleft") as HTMLButtonElement | null;
    const mn = document.querySelector("#mnleft") as HTMLButtonElement | null;
    const sc = document.querySelector("#scleft") as HTMLButtonElement | null;

    const interval = setInterval(() => {
      let hh: number = time.getHours() * 30 + 30;
      let mm: number = time.getMinutes() * deg;
      let ss: number = time.getSeconds() * deg;

      if (hr !== null) hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      if (mn !== null) mn.style.transform = `rotateZ(${mm}deg)`;
      if (sc !== null) sc.style.transform = `rotateZ(${ss}deg)`;
      setTime(new Date());
    }, 100);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <div className={styles.clock}>
        <div className={styles.hour}>
          <div className={styles.hr} id='hrleft'></div>
        </div>

        <div className={styles.min}>
          <div className={styles.mn} id='mnleft'></div>
        </div>

        <div className={styles.sec}>
          <div className={styles.sc} id='scleft'></div>
        </div>
      </div>
    </>
  );
};
