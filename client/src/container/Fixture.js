import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
// import AddTeamTableContainer from '../components/pages/AddTeamTableContainer'
// import ShowTeam from '../components/pages/ShowTeam'
 import { teams } from '../actions/team';
// import axios from 'axios';



class Fixture extends Component {
  componentWillMount() {
    this.props.geTteam()
    console.log(this.props.teams)
    console.log('will mount')
  }
  componentDidMount = () => {

  }
  // groupTable() {
  //   if (this.props.teams) {
  //     const teams = this.props.teams;
  //     return <AddTeamTableContainer teams={teams} />
  //   } else {
  //     return (
  //       <div> loading ... </div >
  //     )
  //   }
  // }
  renderTeam() {

  //   if (this.props.teams) {
  //     return this.props.teams.map(team => (
  //       <ShowTeam teams={team} key={team._id} />
  //     ))
  //   } else {
  //     return (
  //       <div>loading ...</div>
  //     )
  //   }
   }
  render() {
    console.log(this.props)
    return (
      <div className="row">

        <div className="col-md-8">
          {/* {this.groupTable()} */}
          col-8
        </div>

        <div className="col-md-4">
          <Link to= {`${this.props.match.url}/addMatch`} > add Match </Link>
          <ul>
            {/* {this.renderTeam()} */}
            <Route path={`${this.props.match.url}/addMatch`} render ={ ()=> {
              return <div> hello editor </div>
            } }/>
            col-4
          </ul>
        </div>
      </div>
    )
  }
}

/* redux implementation .................... */
const mapStateToProps = (state) => {
  return {
    teams: state.teams
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ geTteam: teams }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Fixture);