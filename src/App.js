import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./components/Pages/MainPage/RequireAuth";
import LoginPage from "./components/Pages/Login/LoginPage";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Resources from "./components/Pages/Dashboard/Resources";
import Schedule from "./components/Pages/Dashboard/Schedule";
import Admission from "./components/Pages/Dashboard/Admission";
import Curriculum from "./components/Pages/Dashboard/Curriculum";
import Other from "./components/Pages/Dashboard/Other";



function App() {
 

  return (
    <div className="w-screen">
      <ToastContainer
        position="top-center"
        className="w-full"
        style={{ width: "600px" }}
      />
      
    <Router >
      <Routes>
          <Route path="/*" element={<LoginPage/>} />
          <Route element={<RequireAuth/>}>
            <Route path="/myaccount/*" element={<Dashboard/>} />
            <Route path="/resources/*" element={<Resources/>} />
            <Route path="/schedule/*" element={<Schedule/>} />
            <Route path="/admission/*" element={<Admission/>} />
            <Route path="/curriculum/*" element={<Curriculum/>} />
            <Route path="/other/*" element={<Other/>} />
          </Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
