import React from 'react'
import Message from '../message'
import CustomMessage from '../customMessage'
import { storiesOf, action } from '@kadira/storybook'

storiesOf('Message', module)
  .add('New message', () => (
    <Message message='A new message' />
  ))
  .add('Another message', () => (
    <CustomMessage message='Custom message' />
  ))
