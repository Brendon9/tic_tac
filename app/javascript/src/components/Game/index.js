import React, {Component} from 'react'
import Board from '../Board/index'
import style from './style'

class Game extends Component {

  render() {
    const { board, initializeTiles } = this.props

    return (
      <div>
        { board.loaded &&
          <Board {...this.props} />
        }

        <div style={style.buttonGroup}>
          <button style={style.button} onClick={() => initializeTiles(3, 'single')}>Single Player</button>
          <button style={style.button} onClick={() => initializeTiles(3, 'multi')}>Mutliplayer</button>
        </div>
      </div>
    )
  }
}

export default Game
