# Memory Game

Choose a game theme and start playing. Only click each image once. Click twice and it's game over.

## Site Pictures

1. Live site

![Site](./public/live.gif)

## Code Snippets


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



## Available Scripts for cloned repos

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


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [React](https://reactjs.org/)


## Deployed Link

* [See Live Site](https://kqarlos.github.io/memory-game)

## Author

 * **Carlos Toledo** 

## Links

- [Link to site repository](https://github.com/kqarlos/memory-game)
- [Link to Github](https://www.github.com/kqarlos)
- [Link to LinkedIn](https://www.linkedin.com/in/carlos-toledo415/)










