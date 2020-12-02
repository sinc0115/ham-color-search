const apiKey = 'b54892ca-9143-4859-a50a-c9dee02fb9b6'

console.warn('Howdy!')

const HarvardArt = {
  search (day, month) {
    return fetch(`https://api.harvardartmuseums.org/spectrum?q=(month:${month} day:${day})&apikey=${apiKey}`, {
      method: 'GET'
    }).then(response => {
    //   console.warn(response.json())
      return response.json()
    }).then(data => {
      console.warn(data.records[0])
      return data.records.map(record => ({
        id: record.id,
        color: record.color,
        month: record.month,
        day: record.day,
        daynumber: record.daynumber
      }))
    }).catch(err => {
      console.log(err)
    })
  }
}

// HarvardArt.search()

export default HarvardArt
