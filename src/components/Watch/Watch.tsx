import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../App";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import moment from "moment-timezone";
import "moment/locale/ru";

import styles from "./styles.module.scss";
import { Section } from "../Section/Section";

const deg: number = 6;
const arr = moment.tz.names();
console.log(arr);

export const Watch: React.FC = () => {
  const { time, setTime, offsetZone, setOffsetZone, setZone, sizeMap } = useContext(AppContext);

  const hourRef = useRef<HTMLDivElement | null>(null);
  const minuteRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);

  let hh: number = time.utcOffset(offsetZone).hour() * 30;
  let mm: number = time.utcOffset(offsetZone).minute() * deg;
  let ss: number = time.utcOffset(offsetZone).second() * deg;

  //==================================================================================================

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

  const timeString: string = time.utcOffset(offsetZone).format("k:mm:ss");
  const dateString: string = time.utcOffset(offsetZone).format("dddd, MMMM Do YYYY");
  const zoneString: string = time.utcOffset(offsetZone).format("zZ");

  //==================================================================================================

  const handleChangeTime = (utc: number, offset: number): void => {
    if (offsetZone < 12 && offsetZone > -12) {
      setOffsetZone(offsetZone + utc);
      setZone(sizeMap * (12 + (offsetZone + utc)));
    } else {
      // setOffsetZone(0);
      // setZone(sizeMap * 12);
    }
  };

  const handleResetTime = (utc: number, offset: number): void => {
    setOffsetZone(utc);
    setZone(offset);
  };

  //==================================================================================================

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

        <Section />
      </Box>

      <Box sx={{ marginTop: "40px" }}>
        <h2 style={{ color: "#1976d2" }}>{timeString}</h2>
        <h2 style={{ color: "#1976d2" }}>{zoneString}</h2>
        <h2 style={{ color: "#1976d2" }}>{dateString}</h2>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}>
        <ButtonGroup size='large' variant='text' aria-label='text button group'>
          <Button onClick={() => handleChangeTime(-1, -1)}>- Utc</Button>
          <Button onClick={() => handleResetTime(0, sizeMap * 12)}>Greenwich Time</Button>
          <Button onClick={() => handleChangeTime(1, 1)}>+ Utc</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
