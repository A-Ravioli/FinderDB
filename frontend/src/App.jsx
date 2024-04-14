import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div id="page-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
