import React from 'react'
import ConfirmMessage from '../confirmMessage'
import { storiesOf, action } from '@kadira/storybook'

storiesOf('ConfirmMessage', module)
  .add('New message', () => (
    <Message message='A new message' />
  ))
  .add('Another message', () => (
    <ConfirmMessage message='Another message' />
  ))
