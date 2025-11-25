import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Become a Web Developer in 100 Days | 2024"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AIdro_k2s_e0y-2o5s2_So_y_t2q-3Jvjqd-3q_x-w=s88-c-k-c0x00ffffff-no-rj"
                    channel="Sonny Sangha"
                    image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/hq720.jpg"
                    duration="5:30:00"
                />
                <VideoCard
                    title="Data Structures and Algorithms for Beginners"
                    views="1.1M Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnj_freecodecamp=s88-c-k-c0x00ffffff-no-rj"
                    channel="freeCodeCamp.org"
                    image="https://i.ytimg.com/vi/RBSGKlAcr1E/hq720.jpg"
                    duration="8:00:00"
                />
                <VideoCard
                    title="Introduction to Machine Learning"
                    views="879K Views"
                    timestamp="6 months ago"
                    channelImage="https://yt3.ggpht.com/ytc/AIdro_k2s_e0y-2o5s2_So_y_t2q=s88-c-k-c0x00ffffff-no-rj"
                    channel="Andrew Ng"
                    image="https://i.ytimg.com/vi/PPLop4L2eGk/hq720.jpg"
                    duration="1:30:00"
                />
                <VideoCard
                    title="Python for Everybody - Full University Python Course"
                    views="5.4M Views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnj_freecodecamp=s88-c-k-c0x00ffffff-no-rj"
                    channel="freeCodeCamp.org"
                    image="https://i.ytimg.com/vi/8DvywoWv6fI/hq720.jpg"
                    duration="13:30:00"
                />
            </div>
        </div>
    );
}

export default RecommendedVideos;
