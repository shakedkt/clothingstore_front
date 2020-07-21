import React from 'react';

export default (props) => {

   function changeSection (section) {
        props.changeSection(section)
    }

    return (
        <div className="links">
            <button onClick={() => changeSection('')}> all </button>
            <button onClick={() => changeSection('Topwear')}> shirts </button>
            <button onClick={() => changeSection('Bottomwear')}> pants </button>
            <button onClick={() => changeSection('Watches')}> Watches </button>
        </div>
    )
};