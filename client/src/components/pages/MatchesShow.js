import React from 'react'

export default ({matchs}) => {
  console.log(matchs);
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
  console.log(data);
  return (
    <li>
      <strong>{data.matchNo} </strong>
      <h2>{data.teamOne.title} </h2>
      <h2>{data.teamTwo.title} </h2>
      <strong>{data.group} </strong>
    </li>
  )
}
