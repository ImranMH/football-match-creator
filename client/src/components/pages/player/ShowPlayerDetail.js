import React from 'react'
import PropTypes from 'prop-types'

const ShowPlayerDetail = ({player}) => {
  
  return (
    <div>

      <h2>jarsey No: {player.jersey}</h2>
      <h2>name: {player.name}</h2>
      <div>club:{player.club} </div>
      {/* <div>country:{player.country.title} </div> */}
      <div>age:{player.age} </div>
    </div>
  )
}

ShowPlayerDetail.propTypes = {

}

export default ShowPlayerDetail
