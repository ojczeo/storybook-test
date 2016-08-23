import React from 'react'

var Message = React.createClass({
  render: function () {
    return (
      <div>{this.props.message}</div>
    )
  }
})

module.exports = Message
