import React from 'react'
import Message from '../message'
import { storiesOf, action } from '@kadira/storybook'

storiesOf('Message', module)
  .add('New message', () => (
    <Message message='A new message' />
  ))
  .add('Another message', () => (
    <Message message='Another message' />
  ))
