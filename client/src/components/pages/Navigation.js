import React from 'react'
import { Link } from 'react-router-dom';

function Navigation (props) {
  return(
    <ul className="nav">
      <li>
        <Link to="/"> home </Link>
      </li>
      <li>
        <Link to="/test"> test</Link>
      </li>
      <li>
        <Link to="/prediction"> Not Implemented </Link>
      </li>
      <li>
        <Link to="/fixture">Fixture </Link>
      </li>
      <li>
        <Link to="/team/new"> Add New </Link>
      </li>

    </ul>
  )
}

export default Navigation;


