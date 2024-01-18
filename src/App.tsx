import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";
import "./scss/app.scss";
import { Home } from "./Pages/Home";

export const AppContext = createContext<any>("");

function App() {
  const [time, setTime] = useState<Date>(new Date());
  const [addHour, setAddHour] = useState<number>(0);
  const [zone, setZone] = useState<string>("Europe/Berlin");

  return (
    <>
      <AppContext.Provider value={{ time, setTime, addHour, setAddHour, zone, setZone }}>
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
