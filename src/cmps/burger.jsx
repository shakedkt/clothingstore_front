import React, { useState } from 'react';
import SvgMenuBtn from '../images/menu-btn';
import NavBar from '../cmps/navBar';

export default (props) => {

    const [section, setSection] = useState('');
    const [title, setTitle] = useState('all');

    function changeSection(name) {
        console.log('got here bitch');

        setSection(name)
        sectionName(name)
    }

    function sectionName(name) {
        if (name === '') {
            setTitle('all products')
        } else {
            setTitle(name)
        }
    }

    return (
        <div className="burger-image-continer">
            <SvgMenuBtn className="svg"></SvgMenuBtn>
            <NavBar changeSection={changeSection} > </NavBar>
        </div>
    )

}
