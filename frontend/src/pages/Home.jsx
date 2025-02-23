// import React from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Fooditems from "../section/Fooditems"

const Home = () => {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Fooditems></Fooditems>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Home
