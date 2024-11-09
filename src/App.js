import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Clients from "./components/Clients";
import Tours from "./components/Tours";
import Excursions from "./components/Excursions";
import Header from "./components/Header";
import "./App.css"
import "./style/page.css"

function App() {
  return (
    <Router>
       <Header/>
       <div className="container">

       </div>
      <div className="main_section">
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/excursions" element={<Excursions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
