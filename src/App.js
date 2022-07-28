
import './App.css';
import Game from './components/Game';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="app">
        <Game />
        <Instructions />
    </div>
  );
}

export default App;
/*

components:
1. header: name + menu 
  - menu: game - start game, hint - possibleMove(highlight), undo(last move)

2. game: stock + foundation + table.
  - foundation (4 ace)
  - table shuffled (4 x max 12 piles): 
  - stock
  - card: number, symbol, symbol*number

3. instructions

functions:
- possibileMove - if there are 2 consecutive card from those face-up
- createBoard: 
  - createTable array 2 -> K and put them in the table: 12 piles x 4 cards 
  - createFoundation array 4 x Ace - shuffled
- getStock:
  - create allCards array from the table piles
  - distributes them in the table 
- moveCard(card, target) 
  - if target.no - card.no === 1 && target.symbol === card.symbol
*/