import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTeam, teams} from '../actions/team';
import { addPlayer } from '../actions/player';
import PropTypes from 'prop-types';

import AddTeamForm from '../components/forms/AddTeamForm';
import AddPlayerForm from '../components/forms/addplayer-form';

class AddTeam extends Component {
  static propTypes = {
    addTeam: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.teams()
  }
  AddTeam = data => {
    this.props.addTeam(data).then(res=>{
      let params = this.props.team._id;
      this.props.history.push("/team/" +params);
    })
  }
  addPlayer = data => {
    this.props.addPlayer(data)
    console.log(data)
  }
  render() {
    if(this.props.team) {
      console.log('hi')
    }
    return (
      <div className="row">
        <div className=" col-md-6 country">
          <h2>Add new Country</h2>
          <AddTeamForm  addNewTeam={this.AddTeam} btnText={'Add Team'} />
        </div>
        <div className=" col-md-6 country">
          <h2>Add new player</h2>
          <AddPlayerForm addNewPlayer={this.addPlayer} team={this.props.team} btnText={'Add Player'} />
        </div>      
      </div>
    );
  }
}

/* redux connect ................................ */
const mapStateToProps = (state) => {
  return {
    team: state.teams,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addTeam, teams, addPlayer}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(AddTeam);