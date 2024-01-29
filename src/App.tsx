import React, { createContext } from "react";
import { Routes, Route } from "react-router-dom";

import "moment/locale/ru";

import Container from "@mui/material/Container";
import "./scss/app.scss";
import { Home } from "./Pages/Home";

export const AppContext = createContext<any>(null);

function App() {
  return (
    <>
      <AppContext.Provider value={{}}>
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
