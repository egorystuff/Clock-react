import React, { useContext } from "react";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

import { AppContext } from "../../App";

const hourArr = [-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const WorldMap = () => {
  const { zone, setOffsetZone, setZone, sizeMap } = useContext(AppContext);

  const btnClick = (event: any): void => {
    const data = Number(event.target.value);

    setOffsetZone(data);
    setZone(sizeMap * (12 + data));
  };

  return (
    <div className={styles.body}>
      {hourArr.map((number, index) => {
        return (
          <Button onClick={btnClick} value={number} className={styles.mapBtn}>
            {number}
          </Button>
        );
      })}

      <Button onClick={btnClick} value='12' className={`${styles.mapBtn} ${styles.mapBtn__last}`}>
        12
      </Button>

      <div className={styles.map}>
        <div className={styles.mapLine} style={{ transform: `translateX(${zone}px)` }}></div>
      </div>
    </div>
  );
};
