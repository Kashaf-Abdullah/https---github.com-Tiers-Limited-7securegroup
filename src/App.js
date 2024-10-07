import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbarr from "./components/Navbarr";
import NavSocialLink from "./components/NavSocialLink";
import HomePage from './pages/HomePage';
// import AboutPage from "./pages/AboutPage";
function App() {
  // const location = useLocation();
  // const isAdminRoute =  location.pathname.startsWith("/signup-admin") || 
  //                       location.pathname.startsWith("/login-admin") || 
  //                       location.pathname.startsWith("/admin-dashboard");
  return (
    <div>
      {<NavSocialLink />}
      { <Navbarr />}
      {/* <ScrollToTop/> */}
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
       
      </Routes>
     
      {/* <Footer /> */}
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
