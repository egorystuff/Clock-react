import React, { useContext, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

import Box from "@mui/material/Box";

import { AppContext } from "../../App";
import moment from "moment-timezone";
import "moment/locale/ru";

export const WatchRight: React.FC = () => {
  const { time, setTime } = useContext(AppContext);

  const hourRef = useRef<HTMLDivElement | null>(null);
  const minuteRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);

  const deg: number = 6;

  let hh: number = time.utcOffset(2).hour() * 30;
  let mm: number = time.minute() * deg;
  let ss: number = time.second() * deg;

  //==============================================================================

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (hourRef.current !== null) hourRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      if (minuteRef.current !== null) minuteRef.current.style.transform = `rotateZ(${mm}deg)`;
      if (secondRef.current !== null) secondRef.current.style.transform = `rotateZ(${ss}deg)`;
      setTime(moment());
    }, 100);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <Box className={styles.box}>
        <div className={styles.clock}>
          <div className={styles.hour}>
            <div ref={hourRef} className={styles.hr}></div>
          </div>

          <div className={styles.min}>
            <div ref={minuteRef} className={styles.mn}></div>
          </div>

          <div className={styles.sec}>
            <div ref={secondRef} className={styles.sc}></div>
          </div>
        </div>
      </Box>
    </>
  );
};
