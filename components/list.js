import React from 'react'

var List = React.createClass({
  render: function(){
    return (
      <ul>
        {
          this.props.items.map(function(item) {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    )
  }
})

module.exports = List
