import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import App from "./App";
import MyClaims from "./pages/MyClaims/MyClaims";
import ReportFoundItem from "./pages/ReportFoundItem/ReportFoundItem";
import RequestLostItemForm from "./pages/RequestLostItemForm/RequestLostItemForm";
import LostItemRequests from "./pages/LostItemRequests/LostItemRequests";
import AllUnclaimed from "./pages/AllUnclaimed/AllUnclaimed";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="/all-unclaimed" element={<AllUnclaimed />} />
          <Route path="/my-claims" element={<MyClaims />} />
          <Route path="/lost-item-requests" element={<LostItemRequests />} />
          <Route path="/report-found-item" element={<ReportFoundItem />} />
          <Route path="/report-lost-item" element={<RequestLostItemForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
