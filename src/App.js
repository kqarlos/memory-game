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
        gameState.result = res.data.data;
        console.log("GAME STATE AFTER API SEARCH")
        console.log(gameState);
      })
    // .catch(err => gameModel.setError(err));
  }

  function click(index) {
    // console.log(index);
    if (gameState.clicked[index]) {
      gameState.gameOver = true;
    } else {
      gameState.clicked[index] = true;
      gameState.result = gameState.result.sort(() => Math.random() - 0.5);
    }
    console.log("GAME STATE AFTER CLICK")
    console.log(gameState);
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
        <Route exact path="/" render={(props) => (<Home {...props} search={search} />)} />
        <Route exact path="/Game" render={(props) => (<Game {...props} click={click} result={gameState.result} gameOver={props.gameOver} />)} />

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