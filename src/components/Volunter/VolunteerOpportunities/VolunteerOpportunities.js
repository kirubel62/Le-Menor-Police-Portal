import React from 'react';

const VolunteerOpportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: 'Food Distribution Volunteer',
      description: 'Help distribute food and meals to displaced individuals and families in need.',
      icon: 'food-icon.png', // Replace with the actual icon image file
    },
    {
      id: 2,
      title: 'English Language Tutor',
      description: 'Teach English language skills to displaced individuals to enhance their communication abilities.',
      icon: 'language-icon.png', // Replace with the actual icon image file
    },
    {
      id: 3,
      title: 'Community Events Organizer',
      description: 'Plan and coordinate community events and activities to engage and uplift displaced communities.',
      icon: 'events-icon.png', // Replace with the actual icon image file
    },
    // Add more volunteer opportunities as needed
  ];

  return (
    <div className="volunteer-opportunities">
      <h1>Volunteer Opportunities</h1>
      <p>Explore our available volunteer opportunities and find a role that matches your interests and skills.</p>
      <div className="opportunities-list">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="opportunity-card">
            <img src={opportunity.icon} alt={opportunity.title} />
            <h2>{opportunity.title}</h2>
            <p>{opportunity.description}</p>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerOpportunities;