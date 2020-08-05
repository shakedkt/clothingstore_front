import React from 'react';
export default (props) => {

    var message = props.message
    var name = props.name
  
console.log('message.sender', message.sender);
console.log('name', name);

    const myStyle = {
        backgroundColor: message.sender.toLowerCase() === name.toLowerCase() ? 'blue' : 'gray',
        color: message.sender.toLowerCase() === name.toLowerCase() ? 'white' : 'black'
    };


    return (
        <div className='message-continer' style={myStyle}>
            <div>
                {message.sender}:
            </div>
            <div className="message-content">
                <div>{message.content}</div>
                </div>
        </div >
    )
}

