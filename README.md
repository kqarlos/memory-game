# Memory Game

Choose a game theme and start playing. Only click each image once. Click twice and it's game over

## Getting Started



## Site Pictures

1. 

![Site](assets/images/.png)

2. 

![Site](assets/images/.png)


3. 

![Site](assets/images/.png)

## Code Snippets


1. Image clicked

```javascript

  function click(index) {
    if (gameState.clicked[index]) {
      gameState.gameOver = true;
    } else {
      gameState.clicked[index] = true;
      gameState.result = gameState.result.sort(() => Math.random() - 0.5);
    }
  }
    
```
* This function updates the _clicked_ object from the game state to keep track of the images that are clicked by th user. Since the images are shuffled after every click, the "index" refers to the source link for the image instead of an actual index.


2. 

```javascript


```
* Description:


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









