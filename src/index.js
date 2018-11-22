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
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]} onClick={this.handleClick}/>
    );
  }

  handleClick(i) {
    alert()
    //const squares = this.state.squares.slice();
    this.state.squares[i] = 'X';
    this.setState({squares: this.state.squares});
  }

  render() {
    const status = 'next palyer:X';
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