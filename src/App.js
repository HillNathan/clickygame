import React, { Component } from 'react';
import Header from "./components/Header"
import Banner from "./components/Banner"
import Game from "./components/Game"
import Footer from "./components/Footer"
import { thisExpression } from '@babel/types';

let data = require("./data.json")

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

shuffleArray(data)

class App extends Component {

  state = {
    currentScore: 0,
    bestScore: 0,
    message: "Click on any image to begin!",
    logos: data,
    clicked: []
  }

  logoClick = (theId) => {
    if (this.state.clicked.includes(theId)) {
      this.setMessage('Sorry, you have lost the game. Click an image to start a new game!')
      if (this.state.currentScore > this.state.bestScore) this.setState({bestScore: this.state.currentScore})
      this.setState({ clicked: [], currentScore: 0 })
    }
    else {
      shuffleArray(data)
      this.incrementScore()
      this.setMessage('')
      this.state.clicked.push(theId)
    }

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
        <Header 
          message={this.state.message} 
          currentScore={this.state.currentScore} 
          bestScore={this.state.bestScore} 
        />
        <Banner />
        <Game 
          logoClick={this.logoClick}
          logos={this.state.logos} />
        <Footer />
      </div>
    );
  }
}

export default App;
