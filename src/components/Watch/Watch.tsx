import React, { useContext, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import { AppContext } from "../../App";
import moment from "moment-timezone";
import "moment/locale/ru";

export const Watch: React.FC = () => {
  const { time, setTime, offsetZone, setOffsetZone, zone, setZone, sizeMap } = useContext(AppContext);

  const hourRef = useRef<HTMLDivElement | null>(null);
  const minuteRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);

  const deg: number = 6;

  let hh: number = time.utcOffset(offsetZone).hour() * 30;
  let mm: number = time.utcOffset(offsetZone).minute() * deg;
  let ss: number = time.utcOffset(offsetZone).second() * deg;

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

  const timeString: string = time.utcOffset(offsetZone).format("k:mm:ss");
  const dateString: string = time.utcOffset(offsetZone).format("dddd, MMMM Do YYYY");

  const handleChangeTime = (utc: number, offset: number) => {
    if (offsetZone < 12 && offsetZone > -11) {
      setOffsetZone(offsetZone + utc);
      setZone(zone + offset);
    } else {
      setOffsetZone(0);
      setZone((sizeMap / 24) * 11);
    }
  };

  const handleResetTime = (utc: number, offset: number) => {
    setOffsetZone(utc);
    setZone(offset);
  };

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

      <Box sx={{ marginTop: "30px" }}>
        <h2 style={{ color: "#1976d2" }}>{timeString}</h2>
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
          <Button onClick={() => handleChangeTime(-1, -sizeMap / 24)}>- Utc</Button>
          <Button onClick={() => handleResetTime(0, (sizeMap / 24) * 11)}>Greenwich Time</Button>
          <Button onClick={() => handleChangeTime(1, sizeMap / 24)}>+ Utc</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
