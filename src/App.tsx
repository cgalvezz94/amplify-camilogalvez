//import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Static Web Page</h1>
        <p>This is a simple static page built with React and Vite.</p>
      </header>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=HvOUxLBxCKQ&list=RDHvOUxLBxCKQ&index=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
    </div>
  );
};

export default App;
