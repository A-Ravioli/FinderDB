import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar/Navbar";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserContext from "./context/UserContext";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState({ name: "Eric", id: "002828141" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <div id="page-container">
          <Outlet />
        </div>
      </QueryClientProvider>
      <ToastContainer />
    </UserContext.Provider>
  );
}

export default App;
