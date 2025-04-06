//import React from 'react';
import './SecondPage.css';

const SecondPage = () => {
    return (
        <div className='SecondPage'>
            <div className = "App-header">
                <h1>Second Page</h1>
                <p>This is the second page of your site.</p>
            </div>
            <div className="content">
                <div className="video-section">
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
                    <div className="text-content">
                        <h2>Welcome to the Second Page</h2>
                        <h3>This page is dedicated example.</h3>
                        <p>Description for</p>
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
                </div>
            </div>
        </div>
    );
};

export default SecondPage;