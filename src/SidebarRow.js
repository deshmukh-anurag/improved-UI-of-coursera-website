import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

function SidebarRow({ selected, Icon, title, avatar }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            {Icon && <Icon className="sidebarRow__icon" />}
            {avatar && <Avatar className="sidebarRow__avatar" alt={title} src={avatar} />}
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow;
