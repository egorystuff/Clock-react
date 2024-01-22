import React, { useContext } from "react";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

import { AppContext } from "../../App";

export const WorldMap = () => {
  const { zone, time, offsetZone, setOffsetZone, setZone, sizeMap } = useContext(AppContext);

  const btnClick = (event: any): void => {
    const data = Number(event.target.value);

    setOffsetZone(data);
    setZone(sizeMap * (12 + data));
  };

  const timeString: string = time.utcOffset(offsetZone).format("zZ");

  return (
    <div className={styles.body}>
      <Button onClick={btnClick} value='-12' className={styles.mapBtn}>
        -12.00
      </Button>
      <Button onClick={btnClick} value='-11' className={styles.mapBtn}>
        -11.00
      </Button>
      <Button onClick={btnClick} value='-10' className={styles.mapBtn}>
        -10.00
      </Button>
      <Button onClick={btnClick} value='-9' className={styles.mapBtn}>
        -09.00
      </Button>
      <Button onClick={btnClick} value='-8' className={styles.mapBtn}>
        -08.00
      </Button>
      <Button onClick={btnClick} value='-7' className={styles.mapBtn}>
        -07.00
      </Button>
      <Button onClick={btnClick} value='-6' className={styles.mapBtn}>
        -06.00
      </Button>
      <Button onClick={btnClick} value='-5' className={styles.mapBtn}>
        -05.00
      </Button>
      <Button onClick={btnClick} value='-4' className={styles.mapBtn}>
        -04.00
      </Button>
      <Button onClick={btnClick} value='-3' className={styles.mapBtn}>
        -03.00
      </Button>
      <Button onClick={btnClick} value='-2' className={styles.mapBtn}>
        -02.00
      </Button>
      <Button onClick={btnClick} value='-1' className={styles.mapBtn}>
        -01.00
      </Button>
      <Button onClick={btnClick} value='0' className={styles.mapBtn}>
        00.00
      </Button>
      <Button onClick={btnClick} value='1' className={styles.mapBtn}>
        +01.00
      </Button>
      <Button onClick={btnClick} value='2' className={styles.mapBtn}>
        +02.00
      </Button>
      <Button onClick={btnClick} value='3' className={styles.mapBtn}>
        +03.00
      </Button>
      <Button onClick={btnClick} value='4' className={styles.mapBtn}>
        +04.00
      </Button>
      <Button onClick={btnClick} value='5' className={styles.mapBtn}>
        +05.00
      </Button>
      <Button onClick={btnClick} value='6' className={styles.mapBtn}>
        +06.00
      </Button>
      <Button onClick={btnClick} value='7' className={styles.mapBtn}>
        +07.00
      </Button>
      <Button onClick={btnClick} value='8' className={styles.mapBtn}>
        +08.00
      </Button>
      <Button onClick={btnClick} value='9' className={styles.mapBtn}>
        +09.00
      </Button>
      <Button onClick={btnClick} value='10' className={styles.mapBtn}>
        +10.00
      </Button>
      <Button onClick={btnClick} value='11' className={styles.mapBtn}>
        +11.00
      </Button>
      <Button onClick={btnClick} value='12' className={styles.mapBtn}>
        +12.00
      </Button>

      <div className={styles.map}>
        <div className={styles.mapLine} style={{ transform: `translateX(${zone}px)` }}>
          {/* <div className={styles.text}>{timeString}</div> */}
        </div>
      </div>
    </div>
  );
};
