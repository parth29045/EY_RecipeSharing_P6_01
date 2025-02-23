// import React from 'react'
import Search from "./Search";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-[url('src/assets/img/bg.jpeg')] h-[70vh] bg-cover bg-center pt-8">
      <div>
        <div className="absolute h-[70vh] inset-0 bg-black/50">
          <div className="flex justify-around">
            <h1 className="text-2xl font-bold text-white">ShareRecp</h1>
              <ul className="gap-10 pt-2 font-bold hidden sm:flex">
                <li>
                  <Link to="/" className="text-white">Home</Link>
                </li>
                <li>
                  <Link to="/About" className="text-white">About</Link>
                </li>
                <li>
                  <Link to="/Login" className="text-white">Get Started</Link>
                </li>
              </ul>
          </div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Nav;