import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const RestartButton = withStyles({
  root: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'rgba(250, 250, 250, 0.9)'
    }
  }
})(Button)

export default class ColorResult extends React.Component {
  constructor (props) {
    super(props)

    this.handleRestart = this.handleRestart.bind(this)
  }

  handleRestart () {
    this.props.resetState()
    console.log('Reset!')
  }

  render () {
    return (
      <div
        className='color-result'
        style={{ backgroundColor: this.props.color }}
      >
        <div className='color-result-text'>
          <Typography variant='h1'>{this.props.color}</Typography>
          <Typography variant='body1'>{this.props.birthday}</Typography>
        </div>
        <RestartButton
          onClick={this.handleRestart}
          variant='contained'
          type='submit'
          value='Submit'
        >Restart
        </RestartButton>
      </div>
    )
  }
}
