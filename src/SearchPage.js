import TuneOutlinedIcon from 'react-icons/all/TuneOutlinedIcon';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AIdro_k2s_e0y-2o5s2_So_y_t2q-3Jvjqd-3q_x-w=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Sonny Sangha"
                verified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />

            <hr />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want a FREE one-hour training... check out this video"
                timestamp="59 seconds ago"
                channel="Sonny Sangha"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-J3V_d_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_w=1280&h=720"
            />
            <VideoRow
                views="2.1M"
                subs="1.2M"
                description="Learn the basics of React in this comprehensive course for beginners. This course will get you started with the popular JavaScript library."
                timestamp="1 year ago"
                channel="freeCodeCamp.org"
                title="React Course - Beginner's Tutorial for React JavaScript Library [2022]"
                image="https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-J3V_d_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_y-2_w=1280&h=720"
            />
        </div>
    )
}

export default SearchPage;