import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/profile";
import Header from "./layout/header";
import ChangePassPage from "./pages/changePassword";

function App() {
  const { loggedIn } = useSelector((state: any) => state.loggedIn || {});

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/change-password" element={<ChangePassPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
