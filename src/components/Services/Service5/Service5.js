import React from 'react';
import './Service5.css';

import healthcareImage from './images/healthcare.png';
import selfCareImage from './images/self-care.jpg';

const Service5 = () => {
  return (
    <div className="health-wellbeing-container">
      <h2>Health and Well-being</h2>
      <p>
        Access to healthcare and well-being support is crucial for displaced individuals in Ethiopia. Here are some
        resources and tips to help you take care of your health and overall well-being:
      </p>
      <div className="resources-section">
        <h3>Healthcare Services</h3>
        <img src={healthcareImage} alt="Healthcare Services" className="healthcare-image" />
        <ul>
          <li>Local Health Clinic: [Clinic Name, Address, Contact Details]</li>
          <li>Free Medical Services: [Organization Name, Address, Contact Details]</li>
          <li>Mental Health Counseling: [Organization Name, Address, Contact Details]</li>
        </ul>
      </div>
      <div className="self-care-section">
        <h3>Self-Care and Well-being Tips</h3>
        <img src={selfCareImage} alt="Self-Care and Well-being Tips" className="self-care-image" />
        <p>
          Taking care of your physical and mental well-being is essential. Here are some self-care tips to consider:
        </p>
        <ul>
          <li>Engage in regular physical activity, such as walking or jogging.</li>
          <li>Practice mindfulness and relaxation techniques, such as deep breathing and meditation.</li>
          <li>Maintain a balanced diet and stay hydrated.</li>
          <li>Ensure adequate rest and sleep.</li>
          <li>Connect with others and build a support network within your community.</li>
        </ul>
        <p>
          If you are experiencing difficulties, it's important to seek professional help and talk to a healthcare
          provider or counselor.
        </p>
      </div>
      <div className="contact-section">
        <h3>Contact Information</h3>
        <p>
          For any health-related inquiries or further assistance, please reach out to our Health and Well-being
          department:
        </p>
        <p>Email: health@supportorganization.org</p>
        <p>Phone: +251 123 456 789</p>
      </div>
    </div>
  );
};

export default Service5;
