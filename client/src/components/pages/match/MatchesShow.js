import React from 'react'
import {Link} from 'react-router-dom'

export default ({ matchs}) => {
  const matches = matchs.map(match=>{
    return <Match key={match._id}  data={match} />
  })
  return (
    <div>
        {matches}
    </div>
  )
}
    
const Match = ({  data})=> {
  const style = {
    width: '45px',
    height: '30px',
  };
  return (
    <li>
      <div className="div">
        <span >Match No {data.matchNo}  </span>
        <span> Group #{data.group} </span>
      </div>
      <div className="matchFixure">
        <h2 className="left">
          <Link to={"/team/" + data.teamOne.id._id}>{data.teamOne.name} </Link> 
          <span><img style={style} src={`/flags/${data.teamOne.id.flag}.png`} alt={data.teamOne.name} /></span> 
          <span className="scoreLine">{data.teamOne.score}</span> 
        </h2> 
        <h2 className="right"> 
          <span className="scoreLine">{data.teamTwo.score}</span>
          <span> <img style={style} src={`/flags/${data.teamTwo.id.flag}.png`} alt={data.teamTwo.name} /> </span>
          <Link to={"/team/"+data.teamTwo.id._id}>{data.teamTwo.name} </Link>  
        </h2>
      </div>

    </li>
  )
}
