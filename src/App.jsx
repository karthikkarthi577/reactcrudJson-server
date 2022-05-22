import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Home from "./Home";
import Navbar from "./Navbar";
import Edit from "./Components/Edit";
import Delete from "./Components/Deletpost";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
