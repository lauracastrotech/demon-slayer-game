import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [isMatched, setIsMatched] = useState(false);
  let tiles = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
  let pair = [null, null];
  let flippedTiles = 0;
  let matches = 0;

  useEffect(() => {
    console.log('hello');
    //addCharacters();
    //  shuffle(tiles);
  }, []);

  console.log("after useEffect load this is the state of tiles", tiles);

  const addCharacters = async () => {
    for(let i = 0; i < tiles.length; i+=2){
      try {
        if( i === 0) {
          let tile1 = await axios.get(`https://www.demonslayer-api.com/api/v1/characters?/${i}`)
          tiles[i] = response;
          tiles[i+1] = response;
        }
      } catch(e) {
        console.log(e.message);
      }
    }
  }
  // shuffle tiles
  const shuffle = (tiles) => {
     // copy tiles
     let tilesCopy = [...tiles];

     // reassign tile using random index
     for(let tile = 15; tile >= 0; tile--){
        tilesCopy[tile] = tilesCopy[Math.floor(Math.random() * 16)]
     }
     tiles = tilesCopy;
  }

  // check if the two tiles match
  const checkTiles = (pair) => {
    // do the two tiles match
    if(pair[0] === pair[1]){
      setIsMatched(true);
    } else {
      flipDown();
    }
    console.log("The value of pair in checkTiles func", pair);
  }

  // add event listener to flip tiles
  const flipUp = (e) => {
    e.preventDefault();
    // get the value of the tile
    let tile = e.target.getAttribute('data-value');
  
    // add the value of flipped tile to pair array
    pair[flippedTiles] = tile;

    // counter for flipped tiles
    flippedTiles++;
    
    // check if they match when two tiles have been flipped
    if(flippedTiles === 2){
      checkTiles(pair);
    }
  }

  // if the tiles don't match, flip both down
  const flipDown = () => {

  }

  // reset game
  const resetGame = () => {
    shuffle(tiles);
  }

  return (
     <>
        <div id="game">
          <div id="matches">Matches: {matches}</div>
           <div className = "grid-container" id="tile-board">
            {tiles.map((tile, i) => {
              return (
                <div key = {i} data-value={tile} className="grid-item" onClick={flipUp}>{tile}</div>
              )
            })}
          </div>
          <button onClick={resetGame}>Reset</button>
        </div>
     </>
  );
}

export default App;
