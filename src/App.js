import React, { Component } from 'react';
import Header from "./components/Header"
import Banner from "./components/Banner"
import Game from "./components/Game"
import Footer from "./components/Footer"

const data = require("./data.json")

class App extends Component {

  state = {
    currentScore: 0,
    bestScore: 0,
    message: "Click on any image to begin!",
    logos: data
  }

  setMessage = (message) => {
    this.setState({ message })
  }

  incrementScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 })
  }

  render () {
    return (
      <div className="app">
        <Header message={this.state.message} scores={this.state.scores} />
        <Banner />
        <Game 
          setMessage={this.setMessage}
          incrementScore={this.incrementScore} 
          logos={this.state.logos} />
        <Footer />
      </div>
    );
  }
}

export default App;
