import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import moment from "moment-timezone";
import "moment/locale/ru";

import Container from "@mui/material/Container";
import "./scss/app.scss";
import { Home } from "./Pages/Home";

export const AppContext = createContext<any>("");

function App() {
  const [time, setTime] = useState(moment());
  const [offsetZone, setOffsetZone] = useState<number>(3);
  // const [zone, setZone] = useState<string>("Europe/Minsk");

  return (
    <>
      <AppContext.Provider value={{ time, setTime, offsetZone, setOffsetZone }}>
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
