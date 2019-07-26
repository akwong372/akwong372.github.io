import React from 'react';

const ExampleApp = ({ title, description, displayedIcons, link, image }) => (
  <div className='project-card'>
    <h2 className="project-title">{title}</h2>
    <p className="project-description">{description}</p>
    <div className="dev-icons">{
      displayedIcons.map((icon, i) => <div key={title + i}>{icon}</div>)
    }</div>
    <a href={link} className="project-image" target="_blank">
      <img src={image} alt={title} />
    </a>
  </div>
);

export default ExampleApp;