import React from 'react'
import PropTypes from 'prop-types'

const ShowPlayerDetail = ({player}) => {
  
  return (
    <div className="player_detail">
      <div className="pic">
        <img src={`/players/${player.image}.jpg`} />
      </div>
      <div className="info">
        <h2> {player.name}</h2>
        <div>{player.position} </div>
        <div className="jarsey">jarsey No: <span>{player.jersey}</span> </div>
        <div>club:{player.club}, {player.clubOrigin} </div>
        {/* <div>club:{player.country.continent}</div> */}
        
        <div>age:{player.age} </div>
      </div>
      
    </div>
  )
}

ShowPlayerDetail.propTypes = {

}

export default ShowPlayerDetail
