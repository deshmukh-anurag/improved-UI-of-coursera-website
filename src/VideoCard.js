import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelImage, duration }) {
    return (
        <div className="videoCard">
            <div className="videoCard__thumbnail">
                <img src={image} alt="" />
                <p className="videoCard__duration">{duration}</p>
            </div>
            <div className="videoCard__info">
                <Avatar
                    className="videoCard__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;
