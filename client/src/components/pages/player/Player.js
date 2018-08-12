import React from 'react'
const Player = ({ player }) => {

  return (
    <li className="playerList">
      <h2>{player.name} </h2>
      <div>Club: {player.club} </div>
      <div>Age: {player.age} </div>
      <div>Country: {player.country.title} </div>
    </li>
  )
}
export default Player