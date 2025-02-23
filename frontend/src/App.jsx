// import React from 'react'
// import Footer from "./components/Footer";
// import Nav from "./components/Nav";
// import Fooditems from "./section/Fooditems";
// import Button from "./components/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Getstarted";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        {/* <Route path="/Signup" element={<Getstarted />}></Route> */}
      </Routes>
      {/* <Button path={"src/pages/Login.jsx"}>HI</Button> */}
    </Router>
  );
};

export default App;
