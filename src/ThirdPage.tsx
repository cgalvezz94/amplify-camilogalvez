//import React from 'react';
import './ThirdPage.css';
import udd from './assets/udd.jpg';
import fh from './assets/fh.jpg';
import kaplan from './assets/kaplan.jpg';
import { useTranslation } from 'react-i18next';


const ThirdPage = () => {
    const { t } = useTranslation();
    const institutions = [
        { 
            src: udd, 
            title: t("institution-1"),
            subtitle: t("institution-title-1"),
            description: t("institution-description-1") 
        },
        { 
            src: fh, 
            title: t("institution-2"),
            subtitle: t("institution-title-2"), 
            description: t("institution-description-2")
        },
        { 
            src: kaplan,
            title: t("institution-3"),
            subtitle: t("institution-title-3"), 
            description: t("institution-description-3") 
        },
    ];

    return (
        <div className='ThirdPage'>
            <h1>{t('education-title')}</h1>
            <p>{t('education-description')}</p>
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