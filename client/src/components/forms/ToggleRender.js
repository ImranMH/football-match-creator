import React, { Component } from 'react'

export default class ToggleRender extends Component {
  state = {
    on: false
  }
  toggleState = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    const { children } = this.props
    return children(
      {
        on: this.state.on,
        toggleState: this.toggleState
      }
    )
  }
}
