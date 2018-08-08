import React from 'react'
import {Link} from 'react-router-dom'

export default ({matchs}) => {
  const matches = matchs.map(match=>{
    return <Match key={match._id}  data={match} />
  })
  return (
    <div>
        {matches}
    </div>
  )
}
    
const Match = ({ data})=> {
  const style = {
    width: '45px',
    height: '30px',
  };
  return (
    <li>
      <div className="div">
        <span>Match No {data.matchNo}  </span>
        <span> Group #{data.group} </span>
      </div>
      <div className="matchFixure">
        <h2 className="left">
          <Link to={"/team/"+data.teamOne._id}>{data.teamOne.title} </Link> 
          <span><img style={style} src={`/flags/${data.teamOne.flag}.png`} alt={data.teamOne.title} /></span> 
          <span className="scoreLine">2</span> 
        </h2> 
        <h2 className="right"> 
          <span className="scoreLine">3</span>
          <span> <img style={style} src={`/flags/${data.teamTwo.flag}.png`} alt={data.teamTwo.title} /> </span>
          <Link to={"/team/"+data.teamTwo._id}>{data.teamTwo.title} </Link>  
        </h2>
      </div>

    </li>
  )
}
