import React, {Component} from 'react'
import style from './style'

class Tile extends Component {
  render() {
    const { marking, selectTile } = this.props

    return (
      <button style={style.tile} onClick={selectTile} disabled={marking}>
        <p style={style.label}>{ marking }</p>
      </button>
    )
  }
}
export default Tile
