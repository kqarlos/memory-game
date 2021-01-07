import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import API from "./utils/API";
import Wrapper from "./components/Wrapper";


function App() {
  const [gameState, setGameState] = useState({
    result: [],
    gameOver: false,
    clicked: {},
    playing: false,
    coins: 0
  });

  function search(theme) {
    console.log("SEARCHING FOR", theme);
    API.searchTiles(theme)
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
    } else {
      search("coco");
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
  
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/memory-game/" render={(props) => (<Home {...props} search={search} startGame={startGame} />)} />
          <Route exact path="/memory-game/Game" render={(props) => (<Game {...props}
            click={click} coins={gameState.coins} resetGame={resetState} playing={gameState.playing} result={gameState.result} gameOver={gameState.gameOver} />)} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
