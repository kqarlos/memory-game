import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import API from "./utils/API";


function App() {
  const [gameState, setGameState] = useState({
    theme: "",
    result: [],
    gameOver: false,
    clicked: {}
  });

  function search(e) {

    gameState.theme = e.target.value;

    API.searchTiles(gameState.theme)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setGameState({
          theme: gameState.theme,
          result: res.data.data,
          gameOver: false,
          clicked: {}
        });
        // gameState.result = res.data.data;
        console.log("GAME STATE AFTER API SEARCH")
        console.log(gameState);
      })
  }

  function click(index) {
    if (gameState.clicked[index]) {
      setGameState({
        theme: "",
        result: [],
        gameOver: true,
        clicked: {}
      });
    } else {
      gameState.clicked[index] = true;
      setGameState({
        theme: gameState.theme,
        result: shuffle(gameState.result),
        gameOver: gameState.gameOver,
        clicked: gameState.clicked
      });
    }
    console.log("GAME STATE AFTER CLICK")
    console.log(gameState);
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  useEffect(() => {
    if (gameState.gameOver) {
      console.log("GAME OVER!!!!!!!!!!!!!!!!!");

    }
  }, gameState.result);

  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/memory-game/" render={(props) => (<Home {...props} search={search} />)} />
        <Route exact path="/memory-game/Game" render={(props) => (<Game {...props} click={click} result={gameState.result} gameOver={gameState.gameOver} />)} />

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