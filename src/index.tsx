import React from 'react';
import ReactDOM from 'react-dom';
// import { Clock } from './clock';
import { App } from './components/app';
import './index.css';


// /** */
// interface SquareProps {
//   value: any;
//   onClick: () => void;
// }

// /** Function component */
// const Square = (props: SquareProps) => {
//   return (<button className="square"
//     onClick={props.onClick}>
//     {props.value}
//   </button>
//   );
// }

// /** */
// interface BoardProps {
//   squares: (string | null)[];
//   onClick: (i: number) => void;
// }

// /** */
// class Board extends React.Component<BoardProps> {

//   renderSquare(i: number): any {
//     return (<Square
//       value={this.props.squares[i]}
//       onClick={() => this.props.onClick(i)}
//     />);
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// interface GameState {
//   history: HistoryItem[];
//   showClock: boolean;
//   stepNumber: number;
//   xIsNext: boolean;
// }

// interface HistoryItem {
//   squares: Array<string | null>;
//   row: number | null;
//   column: number | null;
// }

// class Game extends React.Component<any, GameState> {


//   constructor(props: Readonly<any>) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//         row: null,
//         column: null,
//       }],
//       showClock: false,
//       stepNumber: 0,
//       xIsNext: true,
//     };

//     this.clickClock = this.clickClock.bind(this);
//   }

//   /** */
//   clickClock() {
//     this.setState((state, props) => ({
//       showClock: !state.showClock
//     }));
//   };

//   /** */
//   handleClick(i: number) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();

//     // exit if square clicked or game over
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }

//     // row/col
//     const column = (i % 3) + 1;
//     const row = Math.floor(i / 3) + 1;
//     console.log(`${row} x ${column}`);

//     squares[i] = this.state.xIsNext
//       ? 'X'
//       : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares,
//         row,
//         column,
//       }]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   jumpTo(step: number) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0,
//     })
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move
//         ? 'Go to move #' + move
//         : 'Go to game start';
//       const coord = move
//         ? `(${step.row}x${step.column})`
//         : '';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>
//             {desc} {coord}
//           </button>
//         </li>
//       )
//     });

//     let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else {
//       status = 'Next player: ' +
//         (this.state.xIsNext
//           ? 'X'
//           : 'O');
//     }


//     return (
//       <>
//         <div className="game">
//           <div className="game-board">
//             <Board
//               squares={current.squares}
//               onClick={(i) => this.handleClick(i)}
//             />
//           </div>
//           <div className="game-info">
//             <div>{status}</div>
//             <ol>{moves}</ol>
//           </div>
//         </div>
//         <hr />
//         <button onClick={this.clickClock}>Toggle Clock</button>
//         {this.state.showClock && <Clock />}
//       </>
//     );
//   }
// }

// function calculateWinner(squares: (string | null)[]) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


// ========================================

ReactDOM.render(
  <App />, //<Game />,
  document.getElementById('root')
);
