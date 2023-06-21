import React from 'react';
import './TermsOfUse.css';

const TermsOfUse = () => {
  return (
    <div className="terms-of-use-container">
      <h1 className="title">Terms of Use</h1>
      <p className="subtitle">
        Welcome to [Your Organization Name]. These terms and conditions outline the rules and regulations for the use of our website. By accessing or using our website, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, please do not use our website.
      </p>
      <h2 className="section-title">License</h2>
      <p className="section-text">
        Unless otherwise stated, [Your Organization Name] and/or its licensors own the intellectual property rights of the website and all materials on the website. You may view and/or print pages from the website for your own personal use, subject to the restrictions set out in these terms and conditions.
      </p>
      <h2 className="section-title">Restrictions</h2>
      <p className="section-text">
        You are specifically restricted from all of the following:
        <ul className="bullet-list">
          <li>Republishing any material from our website</li>
          <li>Selling, renting, or sub-licensing any material from our website</li>
          <li>Reproducing, duplicating, or copying any material from our website</li>
          <li>Redistributing content from our website</li>
        </ul>
      </p>
      <h2 className="section-title">Limitation of Liability</h2>
      <p className="section-text">
        In no event shall [Your Organization Name], nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of our website, whether such liability is under contract, tort, or otherwise.
      </p>
      <h2 className="section-title">Indemnification</h2>
      <p className="section-text">
        You hereby indemnify to the fullest extent [Your Organization Name] from and against any and all liabilities, costs, demands, causes of action, damages, and expenses arising out of or in any way related to your breach of any of the provisions of these terms and conditions.
      </p>
      <h2 className="section-title">Severability</h2>
      <p className="section-text">
        If any provision of these terms and conditions is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
      </p>
      <h2 className="section-title">Variation of Terms</h2>
      <p className="section-text">
        [Your Organization Name] is permitted to revise these terms and conditions at any time without prior notice. By using our website, you are expected to review these terms and conditions regularly.
      </p>
      <h2 className="section-title">Governing Law</h2>
      <p className="section-text">
        These terms and conditions shall be governed by and construed in accordance with the laws of Ethiopia and you irrevocably submit to the exclusive jurisdiction of the courts in that country.
      </p>
      <h2 className="section-title">Contact Us</h2>
      <p className="section-text">
        If you have any questions or concerns regarding these terms and conditions, please contact us at:
        <br />
        [Your Organization Name]
        <br />
        Email: [Email Address]
        <br />
        Phone: [Phone Number]
      </p>
    </div>
  );
};

export default TermsOfUse;
