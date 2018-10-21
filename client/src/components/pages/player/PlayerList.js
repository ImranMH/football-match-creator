import React from 'react'
import {Link} from 'react-router-dom'
import './player.css'

const PlayerList= (props) => {
  const {players} = props

  const playerlist = players.map(player => {
    return <Player player={player} key={player._id}  />
  })
  return (
    <div class="playerList_container">
      <h2 class="playerList_title">Current player List</h2>
      <ul className="playerList">
        {playerlist}
    
      </ul>
    </div>
  )
}

// PlayerList.propTypes = {

// }
export default PlayerList
const Player = ({ player }) => {

  return (
    <li className="player">
      <Link to={"/player/"+player._id}><h2 className="player_name">{player.name} </h2> </Link>
      <img className="player_img" src={`/players/${player.image}.jpg`} />
      
      <span>Age: {player.age} </span>
      <span>jersey: {player.jersey} </span>
      <div>Club: {player.club} </div>
      <div>{player.position} </div>
      {/* <div>Country: {player.country.title} </div> */}
    </li>
  )
}