import React, { useContext } from "react";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

import { AppContext } from "../../App";

export const WorldMap = () => {
  const { zone, time, offsetZone } = useContext(AppContext);

  const timeString: string = time.utcOffset(offsetZone).format("zZ");

  return (
    <div className={styles.body}>
      <Button sx={{ border: "2px solid" }}>Text</Button>
      <Button sx={{ border: "2px solid" }}>Text</Button>

      <div className={styles.map}>
        <div className={styles.mapLine} style={{ left: `${zone}px` }}>
          <div className={styles.text}>{timeString}</div>
        </div>
      </div>
    </div>
  );
};
