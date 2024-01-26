import React, { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import styles from "./styles.module.scss";
import { AppContext } from "../../App";

export const SelectCity: React.FC = () => {
  const { city, setCity } = useContext(AppContext);

  const selectList = [
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
    setCity(event.target.value as string);
  };

  return (
    <div className={styles.root}>
      <FormControl className={styles.form}>
        <InputLabel>City</InputLabel>
        <Select value={city} label='City' onChange={handleChange}>
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
