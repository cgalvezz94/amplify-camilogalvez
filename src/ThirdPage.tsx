//import React from 'react';
import './ThirdPage.css';
import udd from './assets/udd.jpg';
import fh from './assets/fh.jpg';
import kaplan from './assets/kaplan.jpg';


const ThirdPage = () => {
    const institutions = [
        { 
            src: udd, 
            title: "Universidad del Desarrollo",
            subtitle: "Ingeniería Civil Industrial",
            description: "Located in Chile, focusing on innovation and leadership." 
        },
        { 
            src: fh, 
            title: "FH Vorarlberg",
            subtitle: "Computer Science - Exchange Program", 
            description: "Located in Austria, known for its cutting-edge technology and research programs." 
        },
        { 
            src: kaplan,
            title: "Kaplan Internatinal Toronto",
            subtitle: "English Language School", 
            description: "Global education provider specializing in test prep and certifications." 
        },
    ];

    return (
        <div className='ThirdPage'>
            <h1>Education</h1>
            <p>A journey of learning across different places, where knowledge and experience have shaped my path.</p>
            {institutions.map((institution, index) => (
                <div key={index} className="education-item">
                    <img
                        src={institution.src}
                        alt={`${institution.title} logo`}
                        className="animated-image"
                    />
                    <div className="text-content">
                        <h2>{institution.title}</h2>
                        <h3>{institution.subtitle}</h3>
                        <p>{institution.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ThirdPage;