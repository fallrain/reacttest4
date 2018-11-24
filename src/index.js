import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Square extends Component {
  render() {
    return (
      <button
        type={'button'}
        className={'square'}
        onClick={() => {
          this.props.onClick()
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]} onClick={() => {
        this.handleClick(i);
      }}/>
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext === 'X' ? 'O' : 'X';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const status = 'next palyer:' + (this.state.xIsNext ? 'X' : 'O');
    return (
      <div>
        <div className={'status'}>
          {status}
        </div>
        <div className={'board-row'}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={'board-row'}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={'board-row'}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  };
}

class Game extends Component {
  render() {
    return (
      <div className={'game'}>
        <div className={'game-board'}>
          <Board/>
        </div>
        <div className={'game-info'}>
          {
            /*todo*/
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game/>, document.getElementById('root'));