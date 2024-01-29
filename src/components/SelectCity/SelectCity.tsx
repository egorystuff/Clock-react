import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import styles from "./styles.module.scss";
import { RootState } from "../../redux/store";
import { setCity } from "../../redux/slices/citySlice";

export const SelectCity: React.FC = () => {
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.citySlice.city);

  type cityType = {
    name: string;
    value: number;
  };

  const selectList: cityType[] = [
    { name: "Минск", value: 3 },
    { name: "Варшава", value: 2 },
    { name: "Лондон", value: 0 },
    { name: "Париж", value: 1 },
    { name: "Нью-Йорк", value: -5 },
    { name: "Токио", value: 9 },
    { name: "Пекин", value: 8 },
    { name: "Дубай", value: 4 },
  ];

  const handleChange = (event: SelectChangeEvent): void => {
    dispatch(setCity(event.target.value as string));
  };

  return (
    <div className={styles.root}>
      <FormControl className={styles.form}>
        <InputLabel>City</InputLabel>
        <Select value={String(city)} label='City' onChange={handleChange}>
          {selectList.map((obj, index) => {
            return (
              <MenuItem key={index} value={obj.value}>
                {obj.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
