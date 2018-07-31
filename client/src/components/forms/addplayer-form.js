import React, { Component } from 'react';
//import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
//import axios from 'axios';
import InputElement from './InputElement'
import SelectInput from './SelectInput'
import { withRouter } from "react-router-dom";

class AddPlayerForm extends Component {
  static propTypes = {
    addNewPlayer: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired
  }
  static contextTypes = {
    router: PropTypes.object
  }
  state = {
    player: {
      name: '',
      age: 0,
      club: '',
      clubOrigin: '',
      jersey: '',
      position: '',
      image: '',
      country: null,
    },
    loading: false,
    errors: {}
  }
  componentDidMount = () => {
    if(this.props.team) {
      console.log(this.props.team)
    }
  }
  
  onChange = e => this.setState({
    player: { ...this.state.player, [e.target.name]: e.target.value }
  })
  submitHandle = e => {
    console.log(this.state)
    e.preventDefault()
    const errors = this.validator(this.state.player)
    console.log(errors)
    this.setState({ errors: errors })
    if (Object.keys(errors).length === 0) {
      let data = this.state.player
      this.props.addNewPlayer(data)
      // axios.post('/api/team/addTeam', { data }).then(res => {
      //   //this.context.router.history.push("/");
      //   this.props.history.push("/");
      // })
    }
  }
  validator(data) {

    const errors = {}
    if (!data.name) errors.name = "Invalid name"
    if (!data.club) errors.club = "Invalid club"
    if (!data.clubOrigin) errors.clubOrigin = "Invalid clubOrigin"
    if (!data.position) errors.position = "Invalid position"
    if (!data.age) errors.age = "Invalid age"
    if (!data.jersey) errors.jersey = "Invalid jersey"

    return errors
  }
  showCountry() {
    if (this.props.team) {
      const data = this.props.team.map(team => {
        return team.title
      })
      return <SelectInput nil={'country'} data={data} label={"country"} onchange={this.onChange} dftvlu="Select Country" /> 
    } else {
      return <div className="loading">Loading...</div>
    }
  }
  render() {
    const { player } = this.state

    return (
      <div>
        <form onSubmit={this.submitHandle}>

          <InputElement nil={'name'} label={'Name Of The player'}
            placeholder={'Messi'} value={player.name} onchange={this.onChange} />
          <InputElement nil={'age'} type={'number'} label={'Age'}
            placeholder={'D'} value={player.age} onchange={this.onChange} />
          <InputElement nil={'club'} label={'Club'}
            placeholder={'Club'} value={player.club} onchange={this.onChange} />
          <InputElement nil={'clubOrigin'}  label={'country of the Club'}
            placeholder={"Spain"} value={player.clubOrigin} onchange={this.onChange} />
          <InputElement nil={'position'}  label={'Position of Player'}
            placeholder={"sticker"} value={player.position} onchange={this.onChange} />
          <InputElement nil={'jersey'} label={'Jersey No'}
            placeholder={"10"} value={player.jersey} onchange={this.onChange} />
          <InputElement nil={'image'} label={'player photo'}
            placeholder={"ronaldo"} value={player.image} onchange={this.onChange} />
          {this.showCountry()}

          <button className="btn btn-primary" type="submit" > {this.props.btnText} </button>
        </form>
      </div>
    );
  }
}
//export default AddTeamForm
export default withRouter(AddPlayerForm)


