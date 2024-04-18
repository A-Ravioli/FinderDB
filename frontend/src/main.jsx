import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import App from "./App";
import MyClaims from "./pages/MyClaims/MyClaims";
import ReportLostItemForm from "./pages/ReportLostItemForm/ReportLostItemForm";
import ReportItem from "./pages/ReportFoundItem/ReportFoundItem";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/my-claims" element={<MyClaims />} />
          <Route path="/request-lost-item" element={<ReportLostItemForm />} />
          <Route path="/request-found-item" element={<ReportItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
