import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import moment from "moment-timezone";
import "moment/locale/ru";

import Container from "@mui/material/Container";
import "./scss/app.scss";
import { Home } from "./Pages/Home";

export const AppContext = createContext<any>("");

function App() {
  const [time, setTime] = useState<number>(0);
  const [addOffset, setAddOffset] = useState<number>(0);
  const [zone, setZone] = useState<string>("Europe/Minsk");

  return (
    <>
      <AppContext.Provider value={{ time, setTime, addOffset, setAddOffset, zone, setZone }}>
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
