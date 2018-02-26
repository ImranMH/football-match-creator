import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { team } from '../actions/team';
import  DisplayTeamDetail  from '../components/pages/TeamDetail';

class SingleTeam extends Component {
  componentDidMount = () => {
    let params = this.props.match.params;
    this.props.getTeam(params)
  }
  renderDetail() {
    const { team } = this.props;
    if (team) {
      return <DisplayTeamDetail team ={team} />
    } else {
      return <div> Loading ... </div>
    }
  }
  render() {
    return (
      <div>
        {this.renderDetail()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    team: state.team
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getTeam: team }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(SingleTeam);