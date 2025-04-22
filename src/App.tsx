//import React from 'react';
import './App.css';
import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';


const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <p className="intro-text">{t('introText')}</p>
        <h1>{t('welcomeTitle')}</h1>
        <p>{t('welcomeDescription')}</p>
        <a 
          href="https://www.youtube.com/@one-minute-channel" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="youtube-button">{t('youtubeButton')}</button>
        </a>
      </header>
      <div className="App-frame">
        <h2 className="frame-title">{t('aboutMeTitle')}</h2>
        <p className="frame-text">{t('aboutMeDescription')}</p>
        <div className="badges">
          <a href="https://www.credly.com/badges/562ce2f2-61b5-4f01-a8ae-d8a81bd4b788/linked_in_profile" target="_blank" rel="noopener noreferrer">
            <img src="https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="Badge 1" className="badge" />
          </a>
          <a href="https://www.credly.com/badges/eb899a99-029c-43aa-a19d-0c39e6dd6c30/linked_in_profile" target="_blank" rel="noopener noreferrer">
            <img src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="Badge 2" className="badge" />
          </a>
        </div>
      </div>
      <ContactForm />

    </div>
  );
};

export default App;
