import React from 'react';
import { useTranslation } from 'react-i18next';

type LanguageSwitcherProps = {
    className?: string; // Optional className prop for styling
};


const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng); // ✅ This updates the entire webpage's language
    };

    return (
        <div className='language-switcher'>
            <select onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="pt">Portuguese</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
