import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { team } from '../actions/team';
import  DisplayTeamDetail  from '../components/pages/TeamDetail';

class SingleTeam extends Component {
  componentDidMount = () => {
    let params = this.props.match.params;
    console.log(params)
    this.props.getTeam(params)
    console.log(this.props.getTeam(params));
    console.log(this.props.singleTeam);
  }
  renderDetail() {
    const { singleTeam } = this.props;
    console.log(singleTeam)
    if (singleTeam) {
      return <DisplayTeamDetail team={singleTeam} />
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
    singleTeam: state.team
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getTeam: team }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(SingleTeam);