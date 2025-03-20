//import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="intro-text"> ✌️ Hi, I am Camilo! </p>
        <h1>Welcome to my IT World</h1>
        <p>This is a page dedicated to learning about IT in an easy and fast way</p>
        <a 
          href="https://www.youtube.com/c/magonicolasp/videos" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="youtube-button">Visit My YouTube Channel</button>
        </a>
      </header>
      <div className="App-frame">
        <h2 className="frame-title">About me</h2>
        <p className="frame-text">
        IT professional and tech enthusiast. Passionate for data and technology solutions. ✅

        Help companies to design resilient, secure, cost-effective cloud and on-premise data solutions through data-driven decisions. ✅
        </p>
      </div>    
    </div>
  );
};

export default App;
