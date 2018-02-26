import React from 'react'
import GroupData from './groupData'

const TableHeading = (props) => {
  const style = {
    fontSize: "16px",
    textAlign: "center",
    padding: "10px"
  }
  return <h2 style = {style}> Group {props.group} </h2>
}
export default ({teams}) => {


  const grouplist =(group) => {
    const groupItem = teams.filter(team => {
      return team.group === group
    })
    return <GroupData group={groupItem} name={group} />
  }

  return (
    <div className="tableContainer">
      <div className="groupContainer">
        <TableHeading group={'A'} />
        {grouplist('A')}
      </div>
      <div className="groupContainer">
        <TableHeading group={'B'} />
        {grouplist('B')}
      </div> 
      <div className="groupContainer">
        <TableHeading group={'C'} />
        {grouplist('C')}
      </div> 
      <div className="groupContainer">
        <TableHeading group={'D'} />
        {grouplist('D')}
      </div> 
      <div className="groupContainer">
        <TableHeading group={'E'} />
        {grouplist('E')}
      </div> 
      <div className="groupContainer">
        <TableHeading group={'F'} />
        {grouplist('F')}
      </div> 
      <div className="groupContainer">
        <TableHeading group={'G'} />
        {grouplist('G')}
      </div> 
      <div className="groupContainer">
        <TableHeading group={'H'} />
        {grouplist('H')}
      </div>  
    </div>
  )
}
