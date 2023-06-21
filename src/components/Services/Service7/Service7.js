import React from 'react';
import './Service7.css';

import communityImage from './images/community.png';
import integrationImage from './images/integration.png';

const Service7 = () => {
  return (
    <div className="community-integration-container">
      <h2>Community and Integration</h2>
      <p>
        Building a sense of community and fostering integration are essential for displaced individuals in Ethiopia. Here
        are some resources and tips to help you connect and integrate within your new community:
      </p>
      <div className="community-section">
        <h3>Engage in Community Activities</h3>
        <img src={communityImage} alt="Engage in Community Activities" className="community-image" />
        <ul>
          <li>Local Cultural Events: Attend festivals, gatherings, and celebrations to learn about Ethiopian culture.</li>
          <li>Language Exchange Programs: Participate in language exchange programs to improve communication skills.</li>
          <li>Volunteer Opportunities: Get involved in local volunteer initiatives to contribute to your community.</li>
        </ul>
      </div>
      <div className="integration-section">
        <h3>Promote Integration</h3>
        <img src={integrationImage} alt="Promote Integration" className="integration-image" />
        <p>
          Integration is a two-way process. Here are some tips to promote integration and build positive relationships:
        </p>
        <ul>
          <li>Learn the Local Language: Take language classes or use language learning resources to communicate effectively.</li>
          <li>Respect Local Customs: Familiarize yourself with local customs and traditions, showing respect and understanding.</li>
          <li>Connect with Support Groups: Join support groups to meet individuals who have undergone similar experiences.</li>
        </ul>
      </div>
      <div className="contact-section">
        <h3>Contact Information</h3>
        <p>
          For more information on community activities and integration support, please reach out to our Community and
          Integration department:
        </p>
        <p>Email: community@supportorganization.org</p>
        <p>Phone: +251 123 456 789</p>
      </div>
    </div>
  );
};

export default Service7;
