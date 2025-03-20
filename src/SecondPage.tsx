//import React from 'react';
import './SecondPage.css';
import jake from './assets/jake.jpg';

const SecondPage = () => {
    return (
        <>
            <div className = "SecondPage">
                <h1>Second Page</h1>
                <p>This is the second page of your site.</p>
                <img src={jake} alt="Example" />
            </div>
            <div className="video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/HvOUxLBxCKQ?list=RDHvOUxLBxCKQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video"
                ></iframe>
            </div>
            <div className="video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/gzsKvibblpw?list=RDHvOUxLBxCKQ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video 2"
                ></iframe>
            </div>
        </>
    );
};

export default SecondPage;