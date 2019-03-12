import React from 'react';
import Navbar from './Navbar.jsx';
import ExampleApp from './ExampleApp.jsx';
import ContactLinks from './ContactLinks.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devIcons: {
        HTML5: <i className="fab fa-html5"/>,
        CSS3: <i className="fab fa-css3-alt"></i>,
        Bootstrap: <i className="devicon-bootstrap-plain-wordmark"></i>,
        JS: <i className="devicon-javascript-plain"></i>,
        jQuery: <i className="devicon-jquery-plain-wordmark"></i>
      },
      projects: [{
        title: 'A Simon Game Clone',
        description: 'A memory game based on the Simon toy. The player matches color/sound cues in sequence Written mostly in Javascript and without jQuery as a way to improve my ability with vanilla Javascript.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JS'],
        link: 'https://codepen.io/niceboat111/full/BxjPMy/',
        image: 'https://i.imgur.com/KrH4bgU.png'
      },
      {
        title: 'A Twitch Stream Status Viewer',
        description: `This is a simple app for keeping track of a preset list of channels from the Twitch website. Online channels will display their status message while offline channels will display "offline". Users can toggle between seeing only online channels, offline channels, or both. The status and portrait for each channel are accessed through a modified link to Twitch's API using 'jQuery''s AJAX calls.`,
        technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JS', 'jQuery'],
        link: 'https://codepen.io/niceboat111/full/MGWYKg/',
        image: 'https://i.imgur.com/QZPxk0u.png'
      },
      {
        title: 'A Pomodoro Timer',
        description: `A timer to be used with the Pomodoro Technique. It has a "work" timer and a "break" timer and both can be adjusted in 1 minute increments. An alert sound is played when the "work" timer runs out, and once again when the "break" timer runs out.`,
        technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JS', 'jQuery'],
        link: 'https://codepen.io/niceboat111/full/pLbNwN/',
        image: 'https://i.imgur.com/giQtdYN.png'
      },
      {
        title: 'A Survey Form',
        description: 'A page meant to be an example of a survey form. It features the usage of various input fields including checkboxes, email, and numbers. Also features placeholder text and checks if required fields are filled in.',
        technologies: ['HTML5', 'CSS3', 'Bootstrap'],
        link: 'https://akwong372.github.io/survey-form/',
        image: 'https://i.imgur.com/SKYiBQH.png'
      }],
      contactLinks: [
        {
          link: 'https://www.linkedin.com/in/alvin-kwong-8b33ab47/',
          faIcon: 'fab fa-linkedin contact-link'
        },
        {
          link: 'https://www.freecodecamp.org/akwong372',
          faIcon: 'fab fa-free-code-camp contact-link'
        },
        {
          link: 'https://github.com/akwong372',
          faIcon: 'fab fa-github contact-link'
        },
        {
          link: 'https://codepen.io/niceboat111/',
          faIcon: 'fab fa-codepen contact-link'
        }]
    }
  }

  render() {

    var appTabs = this.state.projects.map((project, i) => {
      var icons = [];
      for (var k = 0; k < project.technologies.length; k++) {
        if (this.state.devIcons[project.technologies[k]]) {
          icons.push(this.state.devIcons[project.technologies[k]])
        }
      }

      return <ExampleApp
        key={'project' + i}
        title={project.title}
        description={project.description}
        displayedIcons={icons}
        link={project.link}
        image={project.image}
      />
    });

    var contactLinks = this.state.contactLinks.map((link, i) =>
      <ContactLinks key={'link'+i} link={link.link} faIcon={link.faIcon} />
    );

    return (
      <div>
        <Navbar />
        <article>
          <section className="parallax container-fluid" id="top-section">
            <h1 className="title top-text-title">hi.</h1>
            <h2 className="subtitle">i'm alvin
        <br /> and i'm a front-end
        <br /> web developer.</h2>
            <h3 className="sub-subtitle">(no chipmunk jokes, please)</h3>
          </section>

          <section className="container-fluid pic-and-text" id="about-section">
            <h1 className="title">about</h1>
            <p className="about-text">I'm a self-taught web developer from San Francisco, California.
        <br />
              I have a passion for learning and expanding my coding and design skills.
        <br />
              When I'm not working or studying, I'm probably looking up nonsense on the internet.</p>
          </section>

          <section className="container-fluid text-center projects-section-spacing" id="projects-section">
            <h1 className="title">projects</h1>
            <div className="projects-grid">
              {appTabs}
            </div>
          </section>

          <section className="container-fluid text-center parallax-contacts" id="contact-section">
            <h1 className="title">contact</h1>
            <p className="contact-text">Thanks for looking through my page!
        <br />
              You can check out more of my work or contact me through the links below.</p>
            <div className="grid-container-contacts">
              {contactLinks}
            </div>
          </section>
        </article>

        <button id="top-Button" title="Scroll to top">
          <i className="fas fa-arrow-up"/>
        </button>

        <footer className="footer-style">
          <p>Created by
      <a href="https://github.com/akwong372" target="_blank"> Alvin Kwong</a> © 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;