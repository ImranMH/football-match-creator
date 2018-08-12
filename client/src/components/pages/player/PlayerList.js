import React from 'react'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'

const PlayerList= (props) => {
  const {players} = props

  const playerlist = players.map(player => {
    return <Player player={player} key={player._id}  />
  })
  return (
    <ul>
      {playerlist}
  
    </ul>
  )
}

// PlayerList.propTypes = {

// }
export default PlayerList
const Player = ({ player }) => {

  return (
    <li className="playerList">
      <Link to={"/player/"+player._id}><h2>{player.name} </h2> </Link>
      <div>Club: {player.club} </div>
      <div>Age: {player.age} </div>
      {/* <div>Country: {player.country.title} </div> */}
    </li>
  )
}