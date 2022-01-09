import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ByHandsPaperFlowers from "./pages/ByHandsPaperFlowers";
import HerbMuseum from "./pages/HerbMuseum";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="byHandsPaperFlowers" element={<ByHandsPaperFlowers />} />
        <Route path="herbMuseum" element={<HerbMuseum />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
