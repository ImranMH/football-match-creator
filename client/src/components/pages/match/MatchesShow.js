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
          <Link to={"/team/" + data.teamOne.name._id}>{data.teamOne.name.title} </Link> 
          <span><img style={style} src={`/flags/${data.teamOne.name.flag}.png`} alt={data.teamOne.name.title} /></span> 
          <span className="scoreLine">{data.teamOne.score}</span> 
        </h2> 
        <h2 className="right"> 
          <span className="scoreLine">{data.teamTwo.score}</span>
          <span> <img style={style} src={`/flags/${data.teamTwo.name.flag}.png`} alt={data.teamTwo.name.title} /> </span>
          <Link to={"/team/"+data.teamTwo.name._id}>{data.teamTwo.name.title} </Link>  
        </h2>
      </div>

    </li>
  )
}
