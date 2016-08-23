import React from 'react'
import Message from './message'

var CustomMessage = React.createClass({
  getInitialState: function () {
    return {
      message: this.props.message
    }
  },
  handleCustomMessage: function (e) {
    var newMessage = e.target.value
    this.setState({
      message: newMessage
    })
  },
  render: function () {
    return (
      <div>
        <input value={this.state.message} onChange={this.handleCustomMessage} />
        <Message message={this.state.message} />
      </div>
    )
  }
})

module.exports = CustomMessage
