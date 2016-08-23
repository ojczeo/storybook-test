import React from 'react'
import List from './list'

var FilteredList = React.createClass({
  filterList: function (e) {
    var updatedList = this.state.initialItems;;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    })
    this.setState({items: updatedList})
  },

  getInitialState : function() {
    return {
      initialItems: this.props.items.map(function(item){
        return item.toString()
      }),
      items: []
    }
  },

  componentWillMount: function() {
      this.setState({items: this.props.items})
  },

  render: function () {
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList} />
        <List items={this.state.items} />
      </div>
    )
  }
})



module.exports = FilteredList
