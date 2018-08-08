import React, { Component } from 'react'
import Form from './Form'
import InputElement from './InputElement'
import SelectInput from './SelectInput'
export default class EditPlayer extends Component {
  state= ({
    player: this.props.player
  })
  handleSubmit = (e)=>{
     e.preventDefault()
     this.props.submitPlayer(this.state.player)
  }
  onChange = (e)=>{
    e.preventDefault()
    this.setState({
      player: { ...this.state.player, [e.target.name]: e.target.value }
    })
  }

  render() {
    const {player} = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit} >
          <InputElement nil={'name'} label={'Name Of The player'}
            placeholder={'Messi'} value={player.name} onChange={this.onChange} />
          <InputElement nil={'age'} type={'number'} label={'Age'}
            placeholder={'D'} value={player.age} onChange={this.onChange} />
          <InputElement nil={'club'} label={'Club'}
            placeholder={'Club'} value={player.club} onChange={this.onChange} />
          <InputElement nil={'clubOrigin'} label={'country of the Club'}
            placeholder={"Spain"} value={player.clubOrigin} onChange={this.onChange} />
          <InputElement nil={'position'} label={'Position of Player'}
            placeholder={"sticker"} value={player.position} onChange={this.onChange} />
          <InputElement nil={'jersey'} label={'Jersey No'}
            placeholder={"10"} value={player.jersey} onChange={this.onChange} />
          <InputElement nil={'image'} label={'player photo'}
            placeholder={"ronaldo"} value={player.image} onChange={this.onChange} />
          <input name="" id="" className="btn btn-primary" type="submit" value="Update Player"/>
        </Form >
      </div>
    )
  }
}
