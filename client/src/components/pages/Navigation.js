import React from 'react'
import { Link } from 'react-router-dom';

function Navigation (props) {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="nav-link" to="/"> Match Creater<span className="sr-only">(current)</span> </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/"> Home<span className="sr-only">(current)</span> </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fixture">Fixture </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/player">Players </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/team/new"> Add New </Link>
          </li>
        </ul>
      </div>
    </nav>
    
  )
}

export default Navigation;


