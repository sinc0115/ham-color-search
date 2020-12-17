const apiKey = 'b54892ca-9143-4859-a50a-c9dee02fb9b6'

const HarvardArt = {
  search (day, month) {
    return fetch(`https://api.harvardartmuseums.org/spectrum?q=(month:${month} day:${day})&apikey=${apiKey}`, {
      method: 'GET'
    }).then(response => {
      return response.json()
    }).then(data => {
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

export default HarvardArt
