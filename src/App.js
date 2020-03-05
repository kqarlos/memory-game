import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import API from "./utils/API";


function App() {
  const [gameState, setGameState] = useState({
    result: [],
    gameOver: false,
    clicked: {},
    playing: false,
    coins: 0
  });

  function search(e) {
    console.log("SEARCHING FOR", e.target.value);
    API.searchTiles(e.target.value)
      .then(res => {
        console.log("API SEARCH RESULTS", res.data.data);
        setGameState(state => ({
          ...state,
          result: res.data.data
        }));
      });
  }

  function click(index) {
    if (gameState.clicked[index]) {
      console.log("GAME OVER");
      setGameState(state => ({
        ...state,
        gameOver: true
      }));
    } else {
      console.log("KEEP PLAYING");
      gameState.clicked[index] = true;
      setGameState(state => ({
        ...state,
        coins: state.coins + 1,
        clicked: state.clicked,
        result: shuffle(gameState.result)
      }));
    }
    console.log("GAME STATE AFTER CLICK", gameState);
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function startGame() {
    if (gameState.result.length > 0) {
      setGameState(state => ({
        ...state,
        playing: true
      }));
      console.log("GAME STATE AFTER START GAME", gameState);
    }
  }

  function resetState() {
    setGameState(state => ({
      ...state,
      result: [],
      gameOver: false,
      clicked: {},
      playing: false,
      coins: 0
    }));
    console.log("GAME STATE AFTER RESETING GAME", gameState);
  }


  useEffect(() => {
    if (gameState.gameOver) {
      console.log("GAME OVER!!!!!!!!!!!!!!!!!");

    }
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" render={(props) => (<Home {...props} search={search} startGame={startGame} />)} />
        <Route exact path="/Game" render={(props) => (<Game {...props}
          click={click} coins={gameState.coins} resetGame={resetState} playing={gameState.playing} result={gameState.result} gameOver={gameState.gameOver} />)} />

      </div>
    </Router>
  );
}

export default App;


// Go to package json(top), add new key called homepage, value is link copied from GitHub 
// Npm install --save gh-pages
// Back to package json, under scripts, add two keys
// Add predeploy: npm run build
// Add deploy: gh-pages -d build
// Terminal then npm run deploy
// Under setting GitHub, source to gh-pages branch