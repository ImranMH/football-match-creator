 import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import { editedPlayer, deleteById } from '../actions/player';

 import { getPlayerById } from "../actions/player";
import ToggleRender from '../components/forms/ToggleRender'
import EditPlayer from '../components/forms/EditPlayer'
import DeletePlayer from '../components/forms/DeletePlayer'
import ShowPlayerDetail from '../components/pages/player/ShowPlayerDetail'
const deteleText = ['Delete', 'Are You Really sure ?', 'Ok lets Delete  this Player']
export class SinglePlayer extends Component {
  static propTypes = {
    // prop: PropTypes
  }
  componentDidMount = ()=>{
    let params = this.props.match.params;
    this.props.getPlayer(params).then((data)=>{
      console.log(data)
    })
  }
  handleSubmit = (updatedPlayer)=>{
    this.props.editPlayerById(updatedPlayer)
  }
  player = ()=>{
    if (this.props.player.name){
      return <EditPlayer submitPlayer={this.handleSubmit}
        teams={this.props.teams} player={this.props.player} />
    }
  }
  handleDelete=()=>{
    this.props.deletePlayerById(this.props.player._id)
    .then(data=>{
      this.props.history.push('/player')
    })
    .catch(err=>{
      console.log(err, 'error happens')
    })
    console.log(this.props.player._id)
  }
  render() {
    
    const {player} = this.props
    return (
      <div className="container">
        <div className="row">
          
          <div className="col-md-6">
            <h2>single player page</h2>
            
            <ShowPlayerDetail player= {player} />
          </div>
          <div className="col-md-6">
            <DeletePlayer deleteText={deteleText} handleDelete={this.handleDelete} />
            <ToggleRender >
              {
                ({ on, toggleState})=>( 
                  <div>
                    <button className="btn btn-warning" onClick={toggleState} >
                      Edit player
                    </button>
                    { on && this.player() }
                    { !on && <ShowPlayerDetail player={player} />}
                   
                  </div>
                 ) 

              }
            </ToggleRender >
          </div>
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player : state.player.player,
    teams : state.teams
  }
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getPlayer: getPlayerById, editPlayerById: editedPlayer, deletePlayerById: deleteById }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SinglePlayer) 
