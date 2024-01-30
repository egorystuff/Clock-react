import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./styles.module.scss";
import { RootState } from "../../redux/store";
import { setOffsetZone, setZone, sizeMap } from "../../redux/slices/zoneSlice";

type pathType = {
  id: string;
  value: string;
};

const pathList: pathType[] = [
  { id: "0", value: "M55,55 L29.99999999999998,11.698729810778083 A50,50 0 0,1 54.99999999999999,5z" },
  { id: "1", value: "M55,55 L54.99999999999999,5 A50,50 0 0,1 80,11.698729810778069z" },
  { id: "2", value: "M55,55 L80,11.698729810778069 A50,50 0 0,1 98.30127018922192,29.99999999999998z" },
  { id: "3", value: "M55,55 L98.30127018922192,29.99999999999998 A50,50 0 0,1 105,54.999999999999986z" },
  { id: "4", value: "M55,55 L105,55 A50,50 0 0,1 98.30127018922194,80z" },
  { id: "5", value: "M55,55 L98.30127018922194,80 A50,50 0 0,1 80,98.30127018922192z" },
  { id: "6", value: "M55,55 L80,98.30127018922192 A50,50 0 0,1 55,105z" },
  { id: "7", value: "M55,55 L55,105 A50,50 0 0,1 30.00000000000001,98.30127018922194z" },
  { id: "8", value: "M55,55 L30.00000000000001,98.30127018922194 A50,50 0 0,1 11.698729810778062,80z" },
  { id: "9", value: "M55,55 L11.698729810778062,80 A50,50 0 0,1 5,55.00000000000001z" },
  { id: "10", value: "M55,55 L5,55.00000000000001 A50,50 0 0,1 11.698729810778069,29.999999999999993z" },
  {
    id: "11",
    value: "M55,55 L11.698729810778069,29.999999999999993 A50,50 0 0,1 29.99999999999998,11.698729810778083z",
  },
];

export const Section: React.FC = () => {
  const dispatch = useDispatch();
  const offsetZone = useSelector((state: RootState) => state.zoneSlice.offsetZone);
  const time = useSelector((state: RootState) => state.timeSlice.time);

  const handleClick = (click: any): void => {
    let hours = time.utcOffset(offsetZone).hour() - 12;
    let data = hours - Number(click.target.id);
    let res = offsetZone - data;
    dispatch(setOffsetZone(res));
    dispatch(setZone(sizeMap * (12 + res)));
  };

  return (
    <>
      <div className={styles.clock}>
        <div onClick={handleClick}>
          <svg className={styles.svgIcon} viewBox='0 0 110 110'>
            {pathList.map((obj) => (
              <path id={obj.id} className={styles.sector} d={obj.value}></path>
            ))}
          </svg>
        </div>
      </div>
    </>
  );
};
