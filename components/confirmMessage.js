import React from 'react'
import Message from './message'

var ConfirmMessage = React.createClass({
  getInitialState: function () {
    return {
      message: this.props.message
    }
  },
  handleSubmit: function (e) {
    e.preventDefault()
    var newMessage = this.refs.messageInput.value
    this.setState({
      message: newMessage
    })
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref='messageForm'>
          <label for="message-input">
            Insert new message!
            <br></br>
            <input type="text" ref='messageInput' name="message-input" />
          </label>
          <Message message={this.state.message}  />
          <input type="submit" />
        </form>
      </div>
    )
  }
})

module.exports = ConfirmMessage
