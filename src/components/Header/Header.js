import React from 'react'
import Typography from '@material-ui/core/Typography'

function Header () {
  return (
    <header className='App-header'>
      <Typography variant='h1'>Find Your Color</Typography>
      <Typography variant='subtitle1'>Enter your birthday and find your spot on the color spectrum. Based on the <a href='https://harvardartmuseums.org/article/the-index-color-spectrum'>Harvard Art Museum Index Color Spectrum</a>. </Typography>
    </header>
  )
}

export default Header
