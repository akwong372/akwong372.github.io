import React from 'react';

const ExampleApp = (props) => (
    <div className='project-card'>
      <h2 className="project-title">{props.title}</h2>
      <p className="project-description">{props.description}</p>
      <p className="dev-icons">{props.displayedIcons}</p>
      <a href={props.link} className="project-image" target="_blank">
        <img src={props.image} alt={props.title} />
      </a>
    </div>
  );

export default ExampleApp;