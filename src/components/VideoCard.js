import React, {useState, useRef} from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

const VideoCard = ({ channel, avatarSrc, url, song, likes, shares }) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    return (
        <div className="videoCard">
          <VideoHeader />
          <video
            onClick={onVideoPress}
            ref={videoRef}
            className="videoCard__player"
            src={url}
            alt="IG reels video"
            loop
          />
          <VideoFooter
            avatarSrc={avatarSrc}
            likes={likes}
            shares={shares}
            song={song}
            channel={channel}/>
        </div>
    );
};

export default VideoCard;
