import React, { useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import { AppContext } from "../../App";

export const Watch: React.FC = () => {
  const { time, setTime, addTime, setAddTime } = useContext(AppContext);

  // Update the time every second
  useEffect(() => {
    const deg: number = 6;
    const hr = document.querySelector("#hr") as HTMLButtonElement | null;
    const mn = document.querySelector("#mn") as HTMLButtonElement | null;
    const sc = document.querySelector("#sc") as HTMLButtonElement | null;

    const interval = setInterval(() => {
      let hh: number = time.getHours() * 30 + addTime;
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

  const hours: number = time.getHours();
  const minutes: number = time.getMinutes();
  const seconds: number = time.getSeconds();

  const timeString: string = `${hours}:${minutes}:${seconds}`;

  const handleChangeTime = (data: number) => {
    setAddTime(addTime + data);
  };

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
      <p style={{ color: "white" }}>{timeString}</p>

      <button onClick={() => handleChangeTime(30)}>plus 1 hour</button>
      <br />

      <button onClick={() => setAddTime(0)}>origin time</button>

      <br />

      <button onClick={() => handleChangeTime(-30)}>minus1 hour</button>
    </>
  );
};
