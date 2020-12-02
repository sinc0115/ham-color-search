import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import './ColorSearch.css'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
})

class DatePicker extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   birthday: null
    // }
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    // this.setState({ birthday: event.target.value })
    // console.log('Change: ' + event.target.value)
    const birthday = event.target.value
    this.props.handleBirthday(birthday)
  }

  // handleSubmit (event) {
  //   console.log('Birthday: ' + this.state.birthday)
  //   event.preventDefault()
  // }

  render () {
    const { classes } = this.props

    return (
      <form className={classes.container}>
        <TextField
          onChange={this.handleChange}
          id='date'
          label='Birthday'
          type='date'
          defaultValue='1988-01-01'
          className={classes.textField}
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

DatePicker.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(DatePicker)
