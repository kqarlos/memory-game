# Memory Game

Choose a game theme and start playing. Only click each image once. Click twice and it's game over

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
* This function updates the _gameState_. The game logic depends on the _clicked_ object. This object keeps track of the images that are clicked by the user. Since the images are shuffled after every click, the "index" refers to the source link for the image instead of an actual index of the image in the _result_ array. The _gameState_ is updated after every click so that either the shuffle images are displayed to the user if the game is not over, or display a message and a button to go back if the game is over. 


2. Conditional rendering

```javascript

    checkGameStatus() {
        console.log("Props", this.props);
        if (this.props.gameOver || this.props.result.length === 0) {
            return (
                <div>
                    <h2 className="display-4 mb-3">GAME OVER!! You Scored {this.props.coins} points!</h2>

                    <Link onClick={this.props.resetGame} to="/memory-game/" className="btn btn-warning btn-lg" role="button">
                        Play Again <i className="fas fa-gamepad"></i>
                    </Link>

                </div>
            );

        } else if (this.props.playing) {
            return (

                <div>
                    <h2 className="display-4 mb-3">Click each gif only once... Go!</h2>
                    <div className="row">
                        {this.props.result.map((gif, i) => (
                            <Tile key={i} click={this.props.click} image={gif.images.original.url} />
                        ))}
                    </div>
                </div>
            )
        }
    }
```
* It renders an short instruction message if the game is still going. If the game is over it will display a message of game over and a button to go back to the home page.


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


## Acknowledgments

* [Bootstrap components](https://getbootstrap.com/docs/4.4/components/navbar/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [Create React App](https://github.com/facebook/create-react-app).









