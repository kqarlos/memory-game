import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";


function App() {
  return (
    <Navbar />
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