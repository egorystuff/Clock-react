import React from "react";
import { Routes, Route } from "react-router-dom";

import "moment/locale/ru";

import Container from "@mui/material/Container";
import "./scss/app.scss";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <Container sx={{ margin: "50px 0" }} maxWidth='xl'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
