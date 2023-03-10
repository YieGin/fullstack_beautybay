import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Cart from "./component/Cart/Cart";
const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
