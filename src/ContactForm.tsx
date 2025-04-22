import { useState } from "react";
import "./App.css";
import emailjs from "emailjs-com";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement| HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Force a state update even if selecting the first option
    setFormData((prevState) => ({ ...prevState, [name]: value === prevState.title ? "" : value,}));
    console.log("Updated title:", value); // Debugging selection
  };

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
        await emailjs.send("service_8cgalt7", "template_g0tz3mc", formData, "hWjT7_UncmZZts5jt");
        alert("Message sent successfully!");
        
        // Reset form data to clear all inputs
        setFormData({
            title: "",
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    } catch (error) {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS Error:", error);
    }
};

  return (
    <div className="App-contact-form">
      <h2 className="frame-title-contact-form">{t('contact-me')}</h2>
      <div className="App-frame-contact-form">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            {t('title')}:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t('name')}:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t('email')}:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t('phone')}:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {t('message')}:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">{t('submit')}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;