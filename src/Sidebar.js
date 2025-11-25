import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { OndemandVideo, PlaylistPlay } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />
            <h4 className="sidebar__heading">SUBSCRIPTIONS</h4>
            <SidebarRow
                avatar="https://yt3.ggpht.com/ytc/AIdro_k2s_e0y-2o5s2_So_y_t2q-3Jvjqd-3q_x-w=s88-c-k-c0x00ffffff-no-rj"
                title="Sonny Sangha"
            />
            <SidebarRow
                avatar="https://yt3.ggpht.com/ytc/AIdro_k2s_e0y-2o5s2_So_y_t2q-3Jvjqd-3q_x-w=s88-c-k-c0x00ffffff-no-rj"
                title="freeCodeCamp.org"
            />
            <SidebarRow
                avatar="https://yt3.ggpht.com/ytc/AIdro_k2s_e0y-2o5s2_So_y_t2q-3Jvjqd-3q_x-w=s88-c-k-c0x00ffffff-no-rj"
                title="Clever Programmer"
            />
            <hr />
            <h4 className="sidebar__heading">Course Content</h4>
            <SidebarRow Icon={PlaylistPlay} title="Chapter 1: Intro (1hr)" />
            <SidebarRow Icon={PlaylistPlay} title="Chapter 2: Basics (3hr)" />
            <SidebarRow Icon={PlaylistPlay} title="Chapter 3: Advanced (5hr)" />
            <SidebarRow Icon={OndemandVideo} title="Chapter 4: Project (4hr)" />
            <hr />
        </div>
    )
}

export default Sidebar;