import React, { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import "moment/locale/ru";

import styles from "./styles.module.scss";
import { SelectCity } from "../SelectCity/SelectCity";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const deg: number = 6;

export const WatchLeft: React.FC = () => {
  const city = useSelector((state: RootState) => state.citySlice.city);
  const time = useSelector((state: RootState) => state.timeSlice.time);

  const hourRef = useRef<HTMLDivElement | null>(null);
  const minuteRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);

  let hh: number = time.utcOffset(city).hour() * 30;
  let mm: number = time.minute() * deg;
  let ss: number = time.second() * deg;

  //==============================================================================

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (hourRef.current !== null) hourRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      if (minuteRef.current !== null) minuteRef.current.style.transform = `rotateZ(${mm}deg)`;
      if (secondRef.current !== null) secondRef.current.style.transform = `rotateZ(${ss}deg)`;
    }, 200);

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

      <SelectCity />
    </>
  );
};
