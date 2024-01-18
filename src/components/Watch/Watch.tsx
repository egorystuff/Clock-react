import React, { useContext, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

import { AppContext } from "../../App";
import moment from "moment";
import "moment/locale/ru";

export const Watch: React.FC = () => {
  const { time, setTime, addHour, setAddHour } = useContext(AppContext);

  // const date1 = new Date();
  // console.log(date1);

  const deg: number = 6;

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  let hh: number = time.getHours() * 30 + addHour;
  let mm: number = time.getMinutes() * deg;
  let ss: number = time.getSeconds() * deg;

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (hourRef.current !== null) hourRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      if (minuteRef.current !== null) minuteRef.current.style.transform = `rotateZ(${mm}deg)`;
      if (secondRef.current !== null) secondRef.current.style.transform = `rotateZ(${ss}deg)`;
      setTime(new Date());
    }, 100);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [time]);

  const timeString: string = moment().format("LTS");
  const dateString: string = moment().format("LL");

  const handleChangeTime = (data: number) => {
    setAddHour(addHour + data);
  };

  return (
    <>
      <div className={styles.clock}>
        <div className={styles.hour}>
          <div ref={hourRef} className={styles.hr} id='hr'></div>
        </div>

        <div className={styles.min}>
          <div ref={minuteRef} className={styles.mn} id='mn'></div>
        </div>

        <div className={styles.sec}>
          <div ref={secondRef} className={styles.sc} id='sc'></div>
        </div>
      </div>
      <h2 style={{ color: "#1976d2" }}>{timeString}</h2>
      <h2 style={{ color: "#1976d2" }}>{dateString}</h2>

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
          <Button onClick={() => setAddHour(0)}>Origin</Button>
          <Button onClick={() => handleChangeTime(-30)}>- Hour</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
