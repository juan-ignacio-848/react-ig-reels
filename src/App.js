import React from 'react';
import './App.css';

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
        {/*container of app__videos (scrollable container)*/} 
        {/*<Video />*/} 
        {/*<Video />*/} 
        {/*<Video />*/} 
      </div>
    </div>
  );
}

export default App;
