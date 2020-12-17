import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class ColorSearch extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const birthday = event.target.value
    this.props.handleBirthday(birthday)
  }

  render () {
    return (
      <form>
        <TextField
          onChange={this.handleChange}
          id='date'
          label='Birthday'
          type='date'
          defaultValue='1988-01-01'
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          onClick={this.props.handleSubmit}
          type='submit'
          value='Submit'
          variant='contained'
        >Go
        </Button>
      </form>
    )
  }
}

export default ColorSearch
