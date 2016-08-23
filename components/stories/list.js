import React from 'react'
import List from '../list'
import FilteredList from '../filteredList'
import { storiesOf, action } from '@kadira/storybook'

var list = [1, 2, 3, 4, 5]

storiesOf('List', module)
  .add('List', () => (
    <List items={list} />
  ))
  .add('Filtered List', () => (
    <FilteredList items={list} />
  ))
