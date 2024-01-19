import React, { useContext, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import { AppContext } from "../../App";
import moment from "moment-timezone";
import "moment/locale/ru";

export const Watch: React.FC = () => {
  const { time, setTime, addOffset, setAddOffset, zone, setZone } = useContext(AppContext);

  const hourRef = useRef<HTMLDivElement | null>(null);
  const minuteRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLDivElement | null>(null);

  const deg: number = 6;

  // let hh: number = moment.tz(zone).hour() * 30 + addOffset;
  // let mm: number = moment.tz(zone).minute() * deg;
  // let ss: number = moment.tz(zone).second() * deg;

  let hh: number = moment.tz(zone).hour() * 30 + addOffset;
  let mm: number = moment.tz(zone).minute() * deg;
  let ss: number = moment.tz(zone).second() * deg;

  //==============================================================================

  let res = moment().utcOffset(180).format();
  let res2 = moment().utcOffset(180).hour();
  // res.format();

  console.log(res);
  console.log(res2);

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

  // const timeString: string = `${hh / 30}: ${mm / deg}: ${ss / deg}`;
  const timeString: string = moment().format("LTS");
  const dateString: string = moment().format("LL");

  const handleChangeTime = (data: number) => {
    setAddOffset(addOffset + data);
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
          <Button onClick={() => handleChangeTime(30)}>+ Hour</Button>
          <Button onClick={() => setAddOffset(0)}>Origin</Button>
          <Button onClick={() => handleChangeTime(-30)}>- Hour</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
