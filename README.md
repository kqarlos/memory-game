# Memory Game 🎮

</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/kqarlos/memory-game?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/kqarlos/memory-game?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/kqarlos/memory-game?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/kqarlos/memory-game?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/kqarlos/memory-game?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/memory-game/gh-pages?style=for-the-badge" alt="GH-Pages Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/memory-game/react?style=for-the-badge" alt="react Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/memory-game/react-dom?style=for-the-badge" alt="React-Dom Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/memory-game/react-router-dom?style=for-the-badge" alt="React-Router-Dom Version" />
    <img src="https://img.shields.io/github/last-commit/kqarlos/memory-game?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/kqarlos/memory-game?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/kqarlos?style=social" alt="Followers" />  
</p>

## Description

Choose a game theme and start playing! Only click each image once. Click twice and it's game over.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)

## Installation

    In the project directory, you can run:

    ### `npm start`

    Runs the app in the development mode.<br />
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.<br />
    You will also see any lint errors in the console.

    ### `npm test`

    Launches the test runner in the interactive watch mode.<br />
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

    ### `npm run build`

    Builds the app for production to the `build` folder.<br />
    It correctly bundles React in production mode and optimizes the build for the best performance.


    ## Deployment to Github Pages

    * In package.json, add new key:
      *  _homepage_: [Value is published link copied from GitHub Pages section in settings]
    * Make sure gh-pages package is installed. Run: 
      * npm install --save gh-pages
    * In package.json, under scripts, add two keys:
      * predeploy: npm run build
      * deploy: gh-pages -d build
    * Run in terminal:
      * npm run deploy
    * Make sure under settings in Github the source is to gh-pages branch


<p align="center">
    <a href="https://kqarlos.github.io/memory-game"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p>

## Usage

### Screenshot

1. Live site

![Site](./public/live.gif)

### Snippets


1. Image clicked

```javascript

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
    
```
* This function updates the _gameState.clicked_ object. This object keeps track of the images that are clicked by the user. Since the images are shuffled after every click, the _index_ in _clicked_ refers to the source link for the image gottent from _gameStame.result_. If the clicked image is not in the _clicked_ object, the game is not over and we need to shuffle the images. If the clicked image is already in the _clicked_ object, the game is over.


2. Conditional rendering

```javascript

    checkGameStatus() {
        if (props.gameOver || props.result.length === 0) {
            return (
                <div>
                    <h2 className="display-4 mb-3">GAME OVER!! You Scored {props.coins} points!</h2>

                    <Link onClick={props.resetGame} to="/memory-game/" className="btn btn-warning btn-lg" role="button">
                        Play Again <i className="fas fa-gamepad"></i>
                    </Link>

                </div>
            );

        } else if (props.playing) {
            return (
                <div>
                    <h2 className="display-4 mb-3">Click each gif only once... Go!</h2>
                    <div className="row">
                        {props.result.map((gif, i) => (
                            <Tile key={i} click={props.click} image={gif.images.original.url} />
                        ))}
                    </div>
                </div>
            )
        }
    }
```
* If the user is playing, function will return a short instructions message and a grid of all the images. If the game is over or if the result array is empty, it will return a game over message, a score, and a button to go back to the homepage. 



## Credit

### Author

- 💼 Carlos Toledo: [portfolio](https://professional-portfolio2020.herokuapp.com/)
- :octocat: Github: [kqarlos](https://www.github.com/kqarlos)
- LinkedIn: [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)

## Built With

</br>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blue?style=for-the-badge" alt="Bootstrap" /></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/-React-blue?style=for-the-badge" alt="React" /></a>
</p>

## License

</br>
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/kqarlos/memory-game?style=for-the-badge" alt="MIT license" />
</p>




