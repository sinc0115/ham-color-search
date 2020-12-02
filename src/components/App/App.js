import React from 'react'
import './App.css'

import HarvardArt from '../../util/HarvardArt'
import Header from '../Header/Header'
import ColorSearch from '../ColorSearch/ColorSearch'
import ColorResult from '../ColorResult/ColorResult'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      birthday: '',
      month: '',
      day: '',
      process: true,
      submit: null
    }

    this.handleBirthday = this.handleBirthday.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.searchHarvardArt = this.searchHarvardArt.bind(this)
  }

  searchHarvardArt (day, month) {
    console.log(HarvardArt.search(day, month))
  }

  // searchHarvardArt (day, month) {
  //   HarvardArt.search(day, month).then(records => {
  //     this.setState({ records: records })
  //   })
  // }

  // searchHarvardArt () {
  //   HarvardArt.search().then(artists => {
  //     this.artists = artists.alphasort
  //     console.log('artist: ' + this.artists)
  //   })
  // }

  handleBirthday (birthday) {
    this.setState({ birthday: birthday })
  }

  handleSubmit (event) {
    this.setState({ submit: true })
    event.preventDefault()
    document.querySelector('.container').style.backgroundColor = 'blue'
  }

  componentDidUpdate () {
    if (this.state.submit) {
      if (this.state.process) {
        const $birthday = this.state.birthday
        const split = $birthday.split('-')
        console.log('Birthday split: ' + split)
        this.setState({ month: split[1], day: split[2], process: false })
        console.log('Month: ' + this.state.month)
      }
    }
    if (this.state.month) {
      this.searchHarvardArt(this.state.day, this.state.month)
    }
  }

  render () {
    // this.searchHarvardArt()
    return (
      <div className='container'>
        {!this.state.submit &&
          <div>
            <Header />
            <ColorSearch
              handleBirthday={this.handleBirthday}
              handleSubmit={this.handleSubmit}
            />
          </div>}
        {this.state.submit &&
          <ColorResult
            birthday={this.state.birthday}
          />}
      </div>
    )
  }
}

export default App
