import React from 'react';
import './App.css';
import VideoCard from './components/VideoCard';

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img className="app__logo"
             alt=""
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"/>
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <VideoCard
          channel={'nmkip'}
          avatarSrc={'https://instagram.faep24-1.fna.fbcdn.net/v/t51.2885-15/e35/118588501_1786008791537263_145961684458563401_n.jpg?_nc_ht=instagram.faep24-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=9mLjAVzudz4AX_s6e1w&oh=2fed03a50eba8939134f1f809bb3e610&oe=5F5CE84C'}
          song={'Seagulls'}
          url={'https://instagram.faep24-1.fna.fbcdn.net/v/t50.2886-16/118693248_164827495217708_2546609402371347966_n.mp4?_nc_ht=instagram.faep24-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=_kmvcYjY8aUAX-5gFTP&oe=5F5D1B00&oh=09d0796c2829ed86c598164e8890325e'}
          likes={900}
          shares={50}
        />
      </div>
    </div>
  );
}

export default App;
