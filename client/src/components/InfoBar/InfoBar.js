import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';


import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online "/>
            <h3>{room}</h3>
        </div>
        <div className="leftInnerContainer">
            <a href="/"><img className="closeIcon" src={closeIcon} alt="close "></img></a>
        </div>

    </div>
)

export default InfoBar;