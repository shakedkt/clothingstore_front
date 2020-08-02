import React, { useState } from "react";
import SvgChat from '../../images/chatapp';
import Chat from './chat';

export default (props) => {
    const [open, setOpen] = useState(false)
    const [minimize, setMinimize] = useState(false)

    return (
        <div className="chat-app">
            <div className="svg-chat-continer" open={open} onClick={() =>
                setOpen(!open)}
                style={{ display: open ? 'none' : 'block' }}>
                <SvgChat className="svg"></SvgChat>
            </div>
            {open ? <Chat open={open} minimize={minimize} setMinimize={setMinimize} setOpen={setOpen}></Chat> : ''
            }
        </div>
    )
}