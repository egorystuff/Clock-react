import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "../scss/home.scss";

import { Watch } from "../components/Watch/Watch";
import { WorldMap } from "../components/WorldMap/WorldMap";
import { WatchLeft } from "../components/Watch/WatchLeft";
import { WatchRight } from "../components/Watch/WatchRight";

export const Home: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={10}>
          {/* <Grid item xs={4}>
            <WatchLeft />
          </Grid> */}

          <Grid item xs={12}>
            <Watch />
          </Grid>

          {/* <Grid item xs={4}>
            <WatchRight />
          </Grid> */}
        </Grid>

        <WorldMap />
      </Box>
    </>
  );
};
