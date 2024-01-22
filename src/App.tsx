import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import moment from "moment-timezone";
import "moment/locale/ru";

import Container from "@mui/material/Container";
import "./scss/app.scss";
import { Home } from "./Pages/Home";

export const AppContext = createContext<any>(null);

const sizeMap = 1280;

function App() {
  const [time, setTime] = useState<moment.Moment>(moment());
  const [offsetZone, setOffsetZone] = useState<number>(0);
  const [zone, setZone] = useState<number>((sizeMap / 25) * 12);
  // const [nameZone, setNameZone] = useState<string>("Minsk");

  return (
    <>
      <AppContext.Provider value={{ time, setTime, offsetZone, setOffsetZone, zone, setZone, sizeMap }}>
        <Container sx={{ margin: "50px 0" }} maxWidth='xl'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
      </AppContext.Provider>
    </>
  );
}

export default App;
