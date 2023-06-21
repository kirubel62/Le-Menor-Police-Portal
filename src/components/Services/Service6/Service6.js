import React from 'react';
import './Service6.css';

import rightsImage from './images/rights.png';
import documentationImage from './images/documentation.png';

const Service6 = () => {
  return (
    <div className="legal-rights-container">
      <h2>Legal and Rights Information</h2>
      <p>
        It's important to be aware of your legal rights and protections as a displaced individual in Ethiopia. Here is
        some information to help you navigate the legal aspects of your situation:
      </p>
      <div className="rights-section">
        <h3>Know Your Rights</h3>
        <img src={rightsImage} alt="Know Your Rights" className="rights-image" />
        <ul className="ul">
          <li>Right to Seek Asylum: Understand the process and requirements for seeking asylum in Ethiopia.</li>
          <li>Access to Legal Aid: Learn about organizations that provide free or low-cost legal assistance.</li>
          <li>Non-Discrimination: Know your rights to be free from discrimination based on nationality or refugee status.</li>
        </ul>
      </div>
      <div className="documentation-section">
        <h3>Documentation and Identification</h3>
        <img src={documentationImage} alt="Documentation and Identification" className="documentation-image" />
        <p>
          Proper documentation is essential to access services and assert your rights. Take note of the following:
        </p>
        <ul className="ul">
          <li>Refugee ID Card: Understand the process for obtaining a refugee identification card.</li>
          <li>Legalization of Stay: Familiarize yourself with the requirements for legalizing your stay in Ethiopia.</li>
          <li>Important Documents: Safeguard your identification and other essential documents.</li>
        </ul>
      </div>
      <div className="contact-section">
        <h3>Contact Information</h3>
        <p>
          If you have any questions or require further assistance regarding your legal rights, please contact our Legal
          and Rights department:
        </p>
        <p>Email: legal@supportorganization.org</p>
        <p>Phone: +251 123 456 789</p>
      </div>
    </div>
  );
};

export default Service6;
