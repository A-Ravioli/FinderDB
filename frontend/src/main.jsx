import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import App from "./App";
import MyClaims from "./pages/MyClaims/MyClaims";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/my-claims" element={<MyClaims />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
