import React, { useContext } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import moment from "moment-timezone";
import "moment/locale/ru";

import styles from "./styles.module.scss";
import { AppContext } from "../../App";

const arr = moment.tz.names();
let items: any = [];
arr.filter((obj) => {
  if (obj.split("/")[1] !== undefined) items.push(obj.split("/")[1]);
  return false;
});
console.log(items);

export const Search: React.FC = () => {
  const { search, setSearch } = useContext(AppContext);

  const country = items.filter((obj: any) => {
    if (obj.split("/")[1] !== undefined && obj.split("/")[1].includes(search)) {
      return true;
    }
    return false;
  });

  return (
    <div className={styles.root}>
      <div className={styles.text}>{country}</div>
      <div className={styles.container}>
        <SearchIcon className={styles.iconSearch} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className={styles.search}
          placeholder='search'
        />

        {search && <CloseIcon onClick={() => setSearch("")} className={styles.clearIcon} />}
      </div>

      {/* <TextField id='standard-basic' label='Search country' variant='standard' /> */}
    </div>
  );
};
