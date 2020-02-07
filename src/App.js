import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameModel from "./utils/GameModel";
import GameContext from "./utils/GameContext";



function App() {
  const gameModel = GameModel();

  useEffect(() => {
    console.log("App: Game Model");
    console.log(gameModel);
  }, [gameModel]);

  return (

    <Router>
      <div>
        <Navbar />
        <GameContext.Provider value={gameModel}>
          <Route exact path="/" component={Home} />
          <Route exact path="/Game" component={Game} />
        </GameContext.Provider>


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