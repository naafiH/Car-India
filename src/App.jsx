import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signIn";
import Signout from "./pages/signOut";
import Header from "../components/Header";
import Profile from "./pages/profile";
import About from "./pages/about";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="sign-out" element={<Signout />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
