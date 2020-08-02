import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import styled from "styled-components";
import SendButton from '../../images/sendButton';
import MessageList from './messagesList';
import SvgMinusbtn from '../../images/minus-btn'

const Chat = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: white;

   
    transform: ${props => {
        if (props.open && props.minimize) {
            return `
  translateY(90%)
`
        } else if (props.open && !props.minimize) {
            return `
 translateY(0)
`
        } else {
            return `
  translateY(100%)
`
        }
    }};
    transition: transform 0.3s ease-in-out;

    .chatapp-header{
        background-color: #00458B;
        text-align: center;
        padding: 15px 15px;
        cursor: pointer;

        h4{
            font-size: 18px;
            color: white;
        }
    }

    .chatapp-body{
        min-height: 400px;
        background-color: white;
        opacity: 0.7;
        min-width: 300px;
    }

    .send-msg-section{
        border-top: 1px solid black;
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        background-color: white;
        
        input {
                min-width: 240px;
                border: none;
                outline: none;
                font-size: 20px;
                padding: 10px 0px;
            }
    }

    .svg-send-continer{
        cursor: pointer;
        background-color: white;
        padding: 10px 10px;
        border-left: 1px solid black;

        .svg {
                height: 30px;
                width: 30px;
            }
    }


.chatapp-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.svg-minus-continer{
    svg{
        width: 15px;
        height: 20px;
    }
}

.close-chat{
    font-family: 'vegur-bold';
    font-size: 22px;
}
`;

var socket;

export default (props) => {
    const [firstJoin, setFirstJoin] = useState(true)
    const [name, setName] = useState(false)
    const [input, setInput] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([
        {
            content: 'please enter your name',
            sender: 'bot'
        }
    ])
    const ENDPOINT = 'http://localhost:3000'

    useEffect(() => {
        if (!firstJoin) {
            socket = io(ENDPOINT);
            socket.emit('join', { room: 'main', name: name }, (error) => {
                if (error) console.log('fucking error', error);
            })
        }
        return () => {
            if (socket) {
                socket.emit('disconnect');
                socket.off();
            }
        }
    }, [ENDPOINT, firstJoin])


    useEffect(() => {

        if (messages.length >= 2) {
            socket.once('message', message => {
                console.log('socket.on inside useEffect');
                setMessages(messages => [...messages, message]);
            })
        }

    }, [messages])

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = () => {
        const msg = {
            content: input,
            sender: 'user'
        }
        if (!name) {
            console.log('got here');
            setName(msg.content)
            setFirstJoin(false)
            setMessages(oldArray => [...oldArray, msg]);
            setInput('')
            return
        }
        socket.emit('sendMessage', msg, () => setInput(''));
    }

    return (
        <Chat className="chat" open={props.open} minimize={props.minimize}>
            <div className="chatapp-header">

                <div className="svg-minus-continer" onClick={() => props.setMinimize(!props.minimize)}>
                    <SvgMinusbtn className="svg"
                    ></SvgMinusbtn>
                </div>

                <h4 onClick={() => props.setMinimize(!props.minimize)}
                > Chat with a representative </h4> <span className="close-chat" onClick={() => props.setOpen(!props.open)}>X</span>
            </div>
            <div className="chatapp-body">
                <MessageList messages={messages} name={name}> </MessageList>
            </div>

            <div className="send-msg-section">
                <form>
                    <input type="text" value={input} onChange={handleChange} />
                </form>
                <div className="svg-send-continer" onClick={handleSubmit}>
                    <SendButton className="svg" ></SendButton>
                </div>
            </div>
        </Chat>
    )
}