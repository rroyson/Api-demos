const express = require('express')
const app = express()
const {
  filter,
  find,
  toLower,
  pathOr,
  compose,
  split,
  head,
  last
} = require('ramda')

const teams = [
  {
    id: 1,
    university: 'South Carolina',
    teamNickName: 'Gamecocks',
    conference: 'SEC',
    division: 'East'
  },
  {
    id: 2,
    university: 'Georgia',
    teamNickName: 'Bulldogs',
    conference: 'SEC',
    division: 'West'
  },
  {
    id: 3,
    university: 'Alabama',
    teamNickName: 'Crimson Tide',
    conference: 'SEC',
    division: 'East'
  },
  {
    id: 4,
    university: 'Clemson',
    teamNickName: 'Tigers',
    conference: 'ACC',
    division: 'East'
  },
  {
    id: 5,
    university: 'North Carolina',
    teamNickName: 'Tar Heels',
    conference: 'ACC',
    division: 'West'
  },
  {
    id: 6,
    university: 'Virginia Tech',
    teamNickName: 'Hokies',
    conference: 'ACC',
    division: 'East'
  },
  {
    id: 7,
    university: 'Arkansas',
    teamNickName: 'Razorbacks',
    conference: 'SEC',
    division: 'East'
  },
  {
    id: 8,
    university: 'Tennessee',
    teamNickName: 'Vols',
    conference: 'SEC',
    division: 'west'
  },
  {
    id: 9,
    university: 'Oregon State',
    teamNickName: 'Beavers',
    conference: 'PAC 12',
    division: 'N/A'
  },
  {
    id: 10,
    university: 'Louiville',
    teamNickName: 'Cardnals',
    conference: 'BIG 10',
    division: 'N/A'
  }
]

app.get('/teams', function(req, res) {
  const myFilter = pathOr('N/A', ['query', 'filter'], req)
  console.log('filter', myFilter)
  const splitFilter = split(':', myFilter)
  console.log('splitFilter', splitFilter)
  const filterName = head(splitFilter)
  console.log('filterName', filterName)
  const filterValue = last(splitFilter)
  console.log('filterValue', filterValue)

  const isConference = team => team[filterName] === filterValue
  if (filterValue != 'N/A') {
    const result = compose(filter(isConference))(teams)
    res.send(result)
  } else {
    res.send(teams)
  }
})
app.get('/teams/:id', function(req, res) {
  const filterTeam = function(t) {
    return Number(req.params.id) === t.id
  }
  const foundTeams = find(filterTeam, teams)
  res.send(foundTeams)
})

app.listen(4000, function() {
  console.log('API listening on port 4000')
})
