import React from 'react'
import { Link } from 'react-router-dom';
const Fixture = (props) => {
  const renderGroup = () => {
    return props.group.map(team => {
      const style = {
        width:'50px',
        height: 'auto'
      }
      return (         
        <tr key={team._id} >         
          <td><img style={style} src={`flags/${team.flag}.png`} alt={team.title} /></td>
          <td><Link to = {`/team/${team._id}`}>{team.title} </Link> </td>
          <td>{team.play}</td>
          <td>{team.win}</td>
          <td> {team.draw} </td>
          <td>{team.lost}</td>
          <td>{team.goalFor}</td>
          <td>{team.goalAganist}</td>
          <td>{team.goalDiff}</td>
          <td>{team.point}</td>
          <td>-</td>
        </tr>
      )
    })
  
  }
  return (
    <ul className="teamTable">
      <li className="tableItem" >
        <div className="table-responsive">
          <table className="table table-striped " >
            <thead className="thead-light">
            <tr>
                <th>-</th>
                <th>Country</th>
                <th>Played</th>
                <th>Win </th>
                <th>drow </th>
                <th>Lost </th>
                <th>GF </th>
                <th>GA</th>
                <th>GD</th>
                <th>Point</th>
                <th>Pos</th>
              </tr>
            </thead>
            <tbody>
            {renderGroup()}
            </tbody>
          </table>
        </div>
      </li>
    </ul>
  )
}
export default Fixture