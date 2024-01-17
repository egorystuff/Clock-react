import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { Watch } from "../components/Watch/Watch";
import { WorldMap } from "../components/WorldMap/WorldMap";
import { WatchLeft } from "../components/Watch/WatchLeft";

export const Home: React.FC = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <WatchLeft />
          </Grid>

          <Grid item xs={4}>
            <Watch />
          </Grid>

          <Grid item xs={4}>
            <WatchLeft />
          </Grid>
        </Grid>
      </Box>

      <WorldMap />
    </div>
  );
};
