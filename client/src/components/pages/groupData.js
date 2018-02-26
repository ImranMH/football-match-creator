import React from 'react'
import { Link } from 'react-router-dom';
const GroupData = (props) => {
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
          <td>3</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>5</td>
          <td>4</td>
          <td>1</td>
          <td>4</td>
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
                <th></th>
                <th>Country</th>
                <th>Played</th>
                <th>Win</th>
                <th>Loss</th>
                <th>Drow</th>
                <th>GF</th>
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
export default GroupData