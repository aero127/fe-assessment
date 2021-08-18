import React, {useState} from 'react';

function Component({icon, title, name}) {

    return (
        <div className="component-container">
            <span className="image-container"><img src={icon}/></span>
            <div className="content-container">
                <div className="title-content">{title}</div>
                <div className="content">{name}</div>

            </div>
        </div>
    );
}

export default Component;