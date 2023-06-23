import React from 'react'
import { css } from '@emotion/css'
import ScrollToBottom  from 'react-scroll-to-bottom';
import Message from '../Message/Message';
import './Messages.css';

const ROOT_CSS = css({
    height: 350,
})

const Messages = ( { messages, name} ) => {
  return (
    <div>
        <ScrollToBottom className={ROOT_CSS}>
            {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
        </ScrollToBottom>
    </div>
  )
}

export default Messages