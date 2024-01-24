import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import styles from "./styles.module.scss";

const navItems = ["Home", "About", "Contact"];

export const Header: React.FC = () => {
  return (
    <AppBar className={styles.main}>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          WATCH-REACT
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item, index) => (
            <Button key={index} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
