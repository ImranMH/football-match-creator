import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTeam } from '../actions/team';
import PropTypes from 'prop-types';

import AddTeamForm from '../components/forms/AddTeamForm';

class AddTeam extends Component {
  static propTypes = {
    addTeam: PropTypes.func.isRequired,
  }

  AddTeam = data => {
    this.props.addTeam(data).then(res=>{
      let params = this.props.team._id;
      this.props.history.push("/team/" +params);
    })
  }

  render() {

    return (
      <div>
        <h2>Add new Times</h2>
        <AddTeamForm  addNewTeam={this.AddTeam} btnText={'Add Team'} />       
      </div>
    );
  }
}

/* redux connect ................................ */
const mapStateToProps = (state) => {
  return {
    team: state.team
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addTeam }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(AddTeam);