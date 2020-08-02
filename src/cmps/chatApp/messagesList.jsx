import React from 'react';
import Message from './message';

export default (props) => {
    console.log('messages list:', props.messages);
    return (
        <div className='message-list'>
            {props.messages.map((message) => (
                <Message className="list" message={message} key={Math.random()} name={props.name}> </Message>
            ))}
        </div>
    )
}

