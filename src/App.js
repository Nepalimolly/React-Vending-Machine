// import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Skittles from "./Skittles";
import KrabbyPatty from "./KrabbyPatty";
import Kombucha from "./Kombucha";
import NavBar from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/krabbyPatty" element={<KrabbyPatty />} />
          <Route path="/kombucha" element={<Kombucha />} />
          <Route path="/skittles" element={<Skittles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
