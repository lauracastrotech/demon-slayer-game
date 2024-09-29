import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [tiles, setTiles] = useState([null,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]);

  const [isMatched, setIsMatched] = useState(false);

  const matches = 0;

  useEffect(() => {
     console.log('hello');
    //  shuffle(tiles);
  }, []);

  // shuffle tiles
  const shuffle = (tiles) => {
     // copy tiles
     let tilesCopy = [...tiles];

     // reassign tile using random index
     for(let tile = 15; tile >= 0; tile--){
        tilesCopy[tile] = tilesCopy[Math.floor(Math.random() * 16)]
     }
     setTiles(tilesCopy);
  }

  // add event listener to flip tiles
  const flipTile = (e) => {
    e.preventDefault();
  }

  console.log("after useEffect load this is the state of tiles", tiles);
  return (
     <>
        <div id="game">
          <div id="matches">Matches: {matches}</div>
           <div className = "grid-container" id="tile-board">
            {tiles.map((tile, i) => {
              return (
                <div key = {i} className="grid-item" onClick={flipTile}>{tile}</div>
              )
            })}
          </div>
          <button>Reset</button>
        </div>
     </>
  );
}

export default App;
