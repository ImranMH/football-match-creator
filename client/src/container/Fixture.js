import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
// import AddTeamTableContainer from '../components/pages/AddTeamTableContainer'
import MatchCreator from '../components/forms/MatchCreator'
import MatchResultCont from '../components/pages/match/MatchResultCont'
import MatchesShow from '../components/pages/match/MatchesShow'
 import { teams } from '../actions/team';
import { sendGroup } from '../actions/team';
import { getAllMatches } from '../actions/match';
// import axios from 'axios';



class Fixture extends Component {
  
  componentWillMount() {
   this.props.geTteam()

  }
  componentDidMount = () => {
    this.props.getAllMatches()
  };
  matchFixture = ()=> {
    if(this.props.matches) {
      return <MatchesShow matchs ={this.props.matches} />
    } else {
      return <div> loading match ..... </div>
    }
  }
  selectGroup = (e) => {
    const groupKey = e.target.value;
    const data = this.props.teams.filter(team => {
      if (team.group === groupKey) {
        return team        
      }
      return false
    })
    this.props.sendGroup(data)
    //this.groupTeam()
  };

  
  render() {
    console.log(this);
    return (
      <div className="row">

        <div className="col-md-7">
          {this.matchFixture()}
        </div>

        <div className="col-md-5">
          <Link to= {`${this.props.match.url}/addMatch`} className="btn btn-primary"> Create New Match </Link>
          <Link to= {`${this.props.match.url}/matchResult`} className="btn btn-primary"> Match Result </Link>
          <div className="fixture_area">
            
            <Route path={`${this.props.match.url}/addMatch`} render ={ ()=> {
              return <MatchCreator  team={this.props.teams} />
            } }/>
            <Route path={`${this.props.match.url}/matchResult`} render={() => {
              return <MatchResultCont matches={this.props.matches} team={this.props.teams} />
            }} />
          </div>
        </div>
      </div>
    )
  }
}

/* redux implementation .................... */
const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    groupTeam: state.groupTeam,
    matches: state.matches
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ geTteam: teams, sendGroup, getAllMatches }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Fixture);