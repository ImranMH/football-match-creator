/* 
  Single Teampage main layout
*/
import React from 'react'
import { Link } from 'react-router-dom';
import Player from '../player/Player'
import PlayerList from '../player/PlayerList'
// import MatchShow from '../match/MatchesShow'
import ShowTeam from './ShowTeam'
const TeamDetail = (props) => {
  const {team} = props
  return (
    <div className="displayTeamDetail">
      <div className="teamSummery fc ">
        <ShowTeam teams ={team} />
        {/* <div className="teamlit fc">
          <h2 className="top">Details Page</h2>
          <div className="teamflag">
            <img src={`/flags/${team.flag}.png`} alt={team.title} />
            <Link to={`/team/${team._id}/edit`} >Edit </Link>
          </div>
          <div className="teaminfo">
            <h2 className="teaminfo_heading" > <Link to={`team/${team._id}`}> {team.title} </Link></h2>
            <h3 >Rangking:<strong>{team.ranking} </strong> </h3>
            <h3>Continent:<strong>{team.continent} </strong> </h3>
          </div>
          <div className="group"> <p>{team.group}</p> </div>
        </div> */}
        <div className="teamInfo fl_left">
          
          <h2 className="team_title">Recent matches</h2>
          <MatchShow matchs={team.matches} />
        </div>
        <div className="teamPlayer fl_right">
            {/* <h2>Player list</h2> */}
            {/* <ul>
              {
              team.players.map(player=>{
                return <Player key={player._id} player={player}  />
              })
              }
            </ul> */}
            <PlayerList players={team.players} />
        </div>
      </div>

    </div>
  )
}
export default TeamDetail;

const MatchShow =  ({ matchs }) => {
  const matches = matchs.map(match => {
    console.log(match)
    return <Match key={match._id} data={match} />
  })
  return (
    <div>
      {matches}
    </div>
  )
}

const Match = ({data}) => {
  const style = {
    width: '45px',
    height: '30px',
  };
  return (
    <div>
      <div className="matchFixure">
        <h2 className="left">
          <Link to={"/team/" + data.teamOne_id}>{data.teamOne.name} </Link>
          <span><img style={style} src={`/flags/${data.teamOne.flag}.png`} alt={data.teamOne.name} /></span>
          <span className="scoreLine">{data.teamOne.score}</span>
        </h2>
        <h2 className="right">
          <span className="scoreLine">{data.teamTwo.score}</span>
          <span> <img style={style} src={`/flags/${data.teamTwo.flag}.png`} alt={data.teamTwo.name} /> </span>
          <Link to={"/team/" + data.teamTwo._id}>{data.teamTwo.name} </Link>
        </h2>
      </div>
    </div>
  )
}



