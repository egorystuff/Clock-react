import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import { Home } from "./Pages/Home";

export const AppContext = createContext<any>("");

function App() {
  const [time, setTime] = useState<Date>(new Date());
  const [addHour, setAddHour] = useState<number>(0);

  return (
    <>
      <AppContext.Provider value={{ time, setTime, addHour, setAddHour }}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
