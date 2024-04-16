import React from 'react';
import ReactPlayer from 'react-player';

import './App.css'; // Assuming you have a CSS file for styles

function App() {
  return (
    <div className="App">
         
      <header className="App-header">
        <div className="logo">
          <img src="logo.png" alt="malt.blue logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/career">Career</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <button className="apply-button">Apply Now</button>
      </header>
      <div className="background-video">
      <ReactPlayer
  url="https://github.com/coder-ishan/DemoTesting-mov/raw/main/video.mp4"
  controls={false}
  playing
        loop
  width="100%"
  height="100%"
/>

               
            </div>
      <main>
        {/* Content with images goes here */}
      </main>
    </div>
  );
}

export default App;
