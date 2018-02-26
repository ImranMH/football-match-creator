import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editTeam, deleteTeam, team } from '../actions/team';
import PropTypes from 'prop-types';

import EditTeamForm from '../components/forms/EditTeamForm';

class EditTeam extends Component {
  static propTypes = {
    getTeam: PropTypes.func.isRequired,
    deleteTeam: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    let params = this.props.match.params;
    this.props.getTeam(params)
  }
  teamSubmit = data => {
    let id = this.props.match.params.id
    this.props.editTeam(data, id).then(() => {
      this.props.history.push("/team/" + id);
    })
  }
  deleteTeam = () => {
    let id = this.props.match.params.id
    this.props.deleteTeam(id).then(
      ()=> {
        this.props.history.push("/");
      }
    )
    
  }
  render() {
    const {team} = this.props
    return (
      <div>
        <h2>Edit FIFA Team</h2>
        {team && <EditTeamForm data={team} submit={this.teamSubmit} btnText={'Edit Team'} />}
        <button onClick={this.deleteTeam} className="btn btn-danger"> Delete Team </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    team: state.team
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTeam: deleteTeam, getTeam: team, editTeam: editTeam }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(EditTeam);