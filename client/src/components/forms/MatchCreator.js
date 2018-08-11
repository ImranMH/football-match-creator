import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectInput from './SelectInput'
import InputElement from './InputElement'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMatch } from '../../actions/match';

class MatchCreator extends Component {
  static propTypes = {
    onchange: PropTypes.func,
  }

  state = {

  }
  groupOnchange = (e) => {
    const groupKey = e.target.value;
    const data = this.props.teams.filter(team => {
      if (team.group === groupKey) {
        return team
      }
      return false
    })
    const g = data.map(group=>{
      return group.title
    })
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      grouped:g,
    })
  }

  updateGroup = (e) => {
    this.setState({ ...this.state,[e.target.name]: e.target.value }) 
  }
  clickFn =(e)=>{
    e.preventDefault()

    this.props.createMatch(this.state)
  }
  render() {

    const { grouped} = this.state 
    const data = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
    ]

    return (
      <form>
     
      <div className="form-row">
          <InputElement onChange={this.updateGroup} nil={'matchNo'} cnc="form-group col-md-6" type={'number'} label={'Match No:'}
            placeholder={'Match No'} />
          <SelectInput onChange={this.groupOnchange} data={data} nil={'group'} label={"Select a group"} dftvlu="Select Group" />
          <SelectInput nil={'stadium'} onchange={this.updateGroup} label={"Select a stadium"} dftvlu="Select stadium" />
      </div>
      <div className="form-row">
        <SelectInput onChange={this.updateGroup} data={grouped} nil={'teamOne'} label={"Team One"} dftvlu="Select Team" />
        <SelectInput onChange={this.updateGroup} data={grouped} nil={'teamTwo'} label={"Team Two"} dftvlu="Select Oponent" />

      </div>
      <div className="form-row">
        
          <InputElement onChange={this.updateGroup} nil={'playDate'} cnc="form-group col-md-6" type={'date'} label={'Playing Date'}
          placeholder={'Playing Date'} />
          <InputElement onChange={this.updateGroup} nil={'playTime'} cnc="form-group col-md-6" type={'time'} label={'Playing Time'}
          placeholder={'Playing Time'} />
      </div>
      <button onClick={this.clickFn} type="submit" className="btn btn-primary">Create Match</button>
    </form>
    )
  }
}

/* redux implementation .................... */
const mapStateToProps = (state) => {
  return {
    teams: state.teams,
    groupTeam: state.groupTeam
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ createMatch }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(MatchCreator);
