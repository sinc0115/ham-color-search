import React from 'react'
import '../style.css'

import HarvardArt from '../util/HarvardArt'
import Header from './Header'
import ColorSearch from './ColorSearch'
import ColorResult from './ColorResult'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.starterState()

    this.handleBirthday = this.handleBirthday.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.searchHarvardArt = this.searchHarvardArt.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  starterState () {
    return {
      color: '',
      birthday: '',
      month: '',
      day: '',
      process: true,
      submit: null
    }
  }

  resetState () {
    this.setState(this.starterState())
  }

  searchHarvardArt (day, month) {
    HarvardArt.search(day, month).then(records => {
      this.setState({ color: records[0].color })
    })
  }

  handleBirthday (birthday) {
    this.setState({ birthday: birthday })
  }

  handleSubmit (event) {
    this.setState({ submit: true })
    event.preventDefault()
  }

  componentDidUpdate () {
    if (this.state.submit) {
      if (this.state.process) {
        const split = this.state.birthday.split('-')
        this.setState({ month: split[1], day: split[2], process: false })
      }
    }
    if (this.state.month) {
      this.searchHarvardArt(this.state.day, this.state.month)
    }
  }

  render () {
    return (
      <div className='container'>
        {!this.state.submit &&
          <div className='search-container'>
            <Header />
            <ColorSearch
              handleBirthday={this.handleBirthday}
              handleSubmit={this.handleSubmit}
            />
          </div>}
        {this.state.submit &&
          <ColorResult
            color={this.state.color}
            birthday={this.state.birthday}
            resetState={this.resetState}
          />}
      </div>
    )
  }
}

export default App
