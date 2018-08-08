import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectInput from './../../forms/SelectInput'
import InputElement from './../../forms/InputElement'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllMatches } from '../../../actions/match';

class MatchResultCont extends Component {
  static propTypes = {
    onchange: PropTypes.func,
  }

  state = {

  }
  componentDidMount =() =>{

  }
  groupOnchange = (e) => {
    const groupKey = e.target.value;
    const data = this.props.teams.filter(team => {
      if (team.group === groupKey) {
        return team
      }
      return false
    })
    const g = data.map(group => {
      return group.title
    })
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      grouped: g,
    })
  }

  updateGroup = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }
  clickFn = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.createMatch(this.state)
  }
  onChange =()=>{
    console.log('onchange')
  }
  render() {

    const mlist = []
    if (this.props.matches) {
      const match = this.props.matches
      
       match.map(item => {
         let i = {}
         i.id = item._id,
           i.match = item.matchNo,
          mlist.push(i)
       })
       console.log(mlist)
    }
    const options = (data) => {
      if (data) {
        return data.map((opt, index) => {
          return <option key={index} value={opt.id} >{opt.match} </option>
        })
      }
    }
    
    const { grouped } = this.state
    
    const data = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
    ]

    return (
      <form>
        <div className="form-row">
          <label htmlFor="matchNo" >select Match </label>
          <select className="form-group col-md-6"  name="matchNo" value="" onChange={this.onChange}>
            <option defaultValue='' >Choose a match ... </option>
            {options(mlist)}
          </select>
        </div>
        <div className="form-row">
          <SelectInput onChange={this.updateGroup} data={this.mlist} nil={'matchno'} label={"Match No"} dftvlu="Select Match" />
          <SelectInput onChange={this.groupOnchange} data={data} nil={'group'} label={"Select a group"} dftvlu="Select Group" />
          <SelectInput nil={'stadium'} onchange={this.updateGroup} label={"Select a stadium"} dftvlu="Select stadium" />
        </div>
        <h2>heeellloooo</h2>
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
  return bindActionCreators({ findMatch: getAllMatches }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(MatchResultCont);
