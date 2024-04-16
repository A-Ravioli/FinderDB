import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "../components/Navbar/Navbar";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <div id="page-container">
          <Outlet />
        </div>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
