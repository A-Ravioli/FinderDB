import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "../components/Navbar/Navbar";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <div id="page-container">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
