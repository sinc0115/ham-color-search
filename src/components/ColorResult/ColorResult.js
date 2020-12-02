import React from 'react'
import './ColorResult.css'
// import HarvardArt from '../../util/HarvardArt'

class ColorResult extends React.Component {
  render () {
    return (
      <div className='color-result'>
        <h2>{this.props.birthday}</h2>
      </div>
    )
  }
}

export default ColorResult
