import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <h1 className="header__title">Coursera</h1>
            </div>
            <div className="header__right">
                <div className="header__search">
                    <SearchIcon className="header__icon" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="header__icons">
                    <VideoCallIcon className="header__icon" />
                    <AppsIcon className="header__icon" />
                    <NotificationsIcon className="header__icon" />
                    <Avatar
                        alt="Sonny Sangha"
                        src="https://yt3.ggpht.com/ytc/AIdro_k2s_e0y-2o5s2_So_y_t2q-3Jvjqd-3q_x-w=s88-c-k-c0x00ffffff-no-rj"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;