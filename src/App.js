import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Game from "./pages/Game";
// import GameModel from "./utils/GameModel";
// import GameContext from "./utils/GameContext";
import API from "./utils/API";


function App() {
  // const gameModel = GameModel();
  const [gameState, setGameState] = useState({
    theme: "",
    result: []
  });

  // function updateResult(result) {
  //   setGameState({...gameState, result});
  // }

  function search(e) {
    console.log("SEARCHING");
    // console.log("EVENT");
    // console.log(e.target.value);

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
        console.log("GAME STATE")
        console.log(gameState);
      })
    // .catch(err => gameModel.setError(err));
  }

  // useEffect(() => {
  //   // console.log("+++++++++++++++++++++++++++++++++++");
  //   // console.log("APP: GAME STATE");
  //   // console.log(gameState);
  //   // console.log("+++++++++++++++++++++++++++++++++++");
  // }, []);

  return (

    <Router>
      <div>
        <Navbar />
        {/* <GameContext.Provider value={gameState}> */}
          <Route exact path="/" render={(props) => (<Home {...props} search={search} />)} />
          <Route exact path="/Game" render={(props) => (<Game {...props} result={gameState.result} />)} />
        {/* </GameContext.Provider> */}


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