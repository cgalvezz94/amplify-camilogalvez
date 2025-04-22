import './FourPage.css';
import liberty from './assets/liberty-1.jpg';
import lv from './assets/lv.jpg';
import puc from './assets/puc-chile.png';
import abcdin from './assets/abcdin.jpg';
import { useTranslation } from 'react-i18next';

const FourthPage = () => {
    const { t } = useTranslation(); // ✅ Enable translations

    const companies = [
        {
            src: liberty,
            title: t("libertyTitle"),
            subtitle: t("libertySubtitle"),
            description: t("libertyDescription", { returnObjects: true }) // ✅ Ensure description supports lists
        },
        {
            src: lv,
            title: t("lvTitle"),
            subtitle: t("lvSubtitle"),
            description: t("lvDescription", { returnObjects: true })
        },
        {
            src: puc,
            title: t("pucTitle"),
            subtitle: t("pucSubtitle"),
            description: t("pucDescription", { returnObjects: true })
        },
        {
            src: abcdin,
            title: t("abcdinTitle"),
            subtitle: t("abcdinSubtitle"),
            description: t("abcdinDescription", { returnObjects: true })
        }
    ];

    return (
        <div className='FourthPage'>
            <h1>{t("experienceTitle")}</h1>
            <p>{t("experienceDescription")}</p>
            {companies.map((company, index) => (
                <div key={index} className="company-item">
                    <img src={company.src} alt={company.title} className="company-image" />
                    <div className="text-content">
                        <h2>{company.title}</h2>
                        <h3>{company.subtitle}</h3>
                        <ul>
                            {Array.isArray(company.description) &&
                            company.description.map((point, idx) => (
                                <li key={idx}>{point}</li> // ✅ Dynamically rendering list items
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FourthPage;
