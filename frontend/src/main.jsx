import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import AllUnclaimed from "./pages/AllUnclaimed/AllUnclaimed";
import Home from "./pages/Home/Home";
import LostItemRequests from "./pages/LostItemRequests/LostItemRequests";
import MyClaims from "./pages/MyClaims/MyClaims";
import ReportFoundItem from "./pages/ReportFoundItem/ReportFoundItem";
import RequestLostItemForm from "./pages/RequestLostItemForm/RequestLostItemForm";
import SearchPage from "./pages/SearchPage/SearchPage";

ReactDOM.createRoot(document.getElementById("root")).render(
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
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
