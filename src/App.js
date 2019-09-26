import React from 'react';
import Header from "./components/Header"
import Banner from "./components/Banner"
import Game from "./components/Game"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
