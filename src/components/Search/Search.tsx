import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import styles from "./styles.module.scss";

export const Search = () => {
  return (
    <div className={styles.container}>
      <Box component='form' noValidate autoComplete='off'>
        <div className={styles.text}>MINSK</div>

        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      </Box>
    </div>
  );
};
