import React, { Component } from 'react'

export default class DeletePlayer extends Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    if (this.state.count === 2) {
      this.props.handleDelete()
    }
  }
  render() {
   const {count } = this.state
    const { deleteText } = this.props
    return (
      <div>
        <button onClick={this.handleClick} className="btn btn-primary"> {deleteText[count]}
        </button>
      </div>
    )
  }
}
