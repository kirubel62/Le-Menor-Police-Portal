import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="title">Privacy Policy</h1>
      <p className="subtitle">
        At [Your Organization Name], we value the privacy and security of our users' personal information. This Privacy Policy explains how we collect, use, and protect the information you provide to us through our website. By accessing or using our website, you consent to the terms of this Privacy Policy.
      </p>
      <h2 className="section-title">Information We Collect</h2>
      <p className="section-text">
        We collect personal information from you when you voluntarily provide it to us through our website. This may include your name, email address, phone number, and any other information you choose to provide. We may also collect non-personal information, such as your IP address and browsing data, to enhance your user experience and improve our website.
      </p>
      <h2 className="section-title">How We Use Your Information</h2>
      <p className="section-text">
        We use the information you provide to us for the following purposes:
        <ul className="bullet-list">
          <li>Communicate with you and respond to your inquiries</li>
          <li>Provide and improve our services</li>
          <li>Send you updates, newsletters, or promotional materials</li>
          <li>Monitor and analyze website usage and trends</li>
          <li>Protect against unauthorized access or use of our website</li>
        </ul>
      </p>
      <h2 className="section-title">Information Sharing and Disclosure</h2>
      <p className="section-text">
        We may share your personal information with trusted third parties who assist us in operating our website or providing our services. These third parties are obligated to keep your information confidential and secure. We may also disclose your information if required by law or to protect our rights or the rights of others.
      </p>
      <h2 className="section-title">Security</h2>
      <p className="section-text">
        We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>
      <h2 className="section-title">Changes to This Privacy Policy</h2>
      <p className="section-text">
        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.
      </p>
      <h2 className="section-title">Contact Us</h2>
      <p className="section-text">
        If you have any questions or concerns regarding this Privacy Policy, please contact us at:
        <br />
        [Your Organization Name]
        <br />
        Email: [Email Address]
        <br />
        Phone: [Phone Number]
        <br />
        Address: [Physical Address]
      </p>
    </div>
  );
};

export default PrivacyPolicy;
