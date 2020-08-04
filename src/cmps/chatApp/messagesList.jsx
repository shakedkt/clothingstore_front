import React from 'react';
import Message from './message';
import ScrollToBottom from 'react-scroll-to-bottom';

export default (props) => {

    console.log('props:',props);

    return (
        <div className='message-list'>
            {props.messages.map((message) => (

                <ScrollToBottom className="list"  key={Math.random()}><Message message={message} name={props.name}></Message> </ScrollToBottom>
            ))}
        </div>
    )
}

