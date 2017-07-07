const express = require('express')
const app = express()
const { propEq, pathOr, filter, toLower, compose, take } = require('ramda')

// app.get('*', function(req, res) {
//   res.send('Im listening to all your GET requests to all paths.')
// })
const artistAlbums = [
  {
    id: 1,
    artist: 'Brand New',
    album: 'Daisy',
    song: 'archer',
    genre: 'rock'
  },
  {
    id: 2,
    artist: 'Brand New',
    album: 'Deja Entendu',
    song: 'sic transit gloria',
    genre: 'rock'
  },
  {
    id: 3,
    artist: 'Brand New',
    album: 'The Devil and God',
    song: 'Jesus Christ',
    genre: 'indie'
  }
]

app.get('/albums', function(req, res) {
  const isGenre = album => album.genre === toLower(isFilter)
  const limit = pathOr(10, ['query', 'limit'], req)
  const isFilter = pathOr(null, ['query', 'genre'], req)
  if (isFilter != null) {
    const result = compose(take(limit), filter(isGenre))(artistAlbums)

    res.send(result)
  } else {
    const allResults = compose(take(limit))(artistAlbums)
    res.send(allResults)
  }
})

// app.post('/', function(req, res) {
//   res.send('this is a post route to home page')
// })

app.listen(4000, function() {
  console.log('Api listening on port 4000')
})
