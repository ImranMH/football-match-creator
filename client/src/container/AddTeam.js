import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTeam, showAllTeams} from '../actions/team';
import { addPlayer } from '../actions/player';
import PropTypes from 'prop-types';

import AddTeamForm from '../components/forms/AddTeamForm';
import AddPlayerForm from '../components/forms/addplayer-form';

class AddTeam extends Component {
  static propTypes = {
    addTeam: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.props.showAllTeams()
  }
  AddTeam = data => {
    this.props.addTeam(data).then(res=>{
      let params = this.props.team._id;
      this.props.history.push("/team/" +params);
    })
  }
  addPlayer = data => {
    this.props.addPlayer(data).then(player=>{
      console.log(player);
    })
  }
  render() {
    return (
      <div className="row">
        <div className=" col-md-6 country">
          <h2>Add new Country</h2>
          <AddTeamForm  addNewTeam={this.AddTeam} btnText={'Add Team'} />
        </div>
        <div className=" col-md-6 country">
          <h2>Add new player</h2>
          <AddPlayerForm addNewPlayer={this.addPlayer} team={this.props.teams} btnText={'Add Player'} />
        </div>      
      </div>
    );
  }
}

/* redux connect ................................ */
const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    team: state.team,
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addTeam, showAllTeams, addPlayer}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(AddTeam);