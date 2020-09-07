import React from 'react';
import Navbar from './Navbar.jsx';
import ExampleApp from './ExampleApp.jsx';
import ContactLinks from './ContactLinks.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devIcons: {
        HTML5: <i className="icon-html5-alt" />,
        CSS3: <i className="icon-css3-alt" />,
        Bootstrap: <i className="icon-bootstrap" />,
        JavaScript: <i className="icon-javascript-alt" />,
        jQuery: <i className="icon-jquery" />,
        AWS: <i class="icon-aws" />,
        Node: <i className="icon-nodejs" />,
        React: <i className="icon-reactjs" />,
        nginx: <i className="icon-nginx-alt" />,
        MongoDB: <i className="icon-mongodb" />,
        Redis: <i className="icon-redis" />,
        Sass: <i className="fab fa-sass"/>
      },
      projects: [
        {
          title: 'Pizza Dom',
          description: 'An app created to specifically order one large Philly cheese steak pizza from your closest Domino\'s Pizza store. Built using React, React-Router, Express/Node, and styled with Sass. The store location and payments are handled using the Domino\'s API.',
          technologies: ['React', 'Node', 'Sass'],
          link: 'https://github.com/akwong372/pizza-dom',
          image: 'https://i.imgur.com/9HJF2Vs.gif'
        },
        {
          title: 'Keeper',
          description: 'A clone of Google Keep, but also featuring the ability to log in and out using Passport.js. The ability to log in using a Google account through OAuth 2.0 was also added. User accounts and notes are stored using MongoDB Atlas and the app is currently deployed to Heroku.',
          technologies: ['React', 'Node', 'MongoDB'],
          link: 'https://keeper-app-1.herokuapp.com/',
          image: 'https://i.imgur.com/QkTxCej.gif'
        },
        {
          title: 'A Video Player Microservice',
          description: 'Video player microservice for a vimeo clone designed with service oriented architecture. A responsive front end built with React, Bootstrap, and some custom CSS. The back end was built with Express/Node and deployed to AWS EC2, load balanced with nginx, and cached responses with Redis. Service could handle up to 3000 requests per second with < 1% error rate and ~120ms response rate while querying a database of ~10 million entries.',
          technologies: ['React', 'Bootstrap', 'Node', 'nginx', 'MongoDB', 'Redis', 'AWS'],
          link: 'https://www.youtube.com/watch?v=3vibmxLCIvs&feature=youtu.be',
          image: 'https://github.com/sdc-windsor/video-player/blob/master/VidNavSm.gif?raw=true'
        },
        {
          title: 'A Simon Game Clone',
          description: 'A memory game based on the Simon toy. The player matches color/sound cues in sequence Written mostly in Javascript and without jQuery as a way to improve my ability with vanilla Javascript.',
          technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
          link: 'https://codepen.io/niceboat111/full/BxjPMy/',
          image: 'https://i.imgur.com/KrH4bgU.png'
        },
        {
          title: 'A Twitch Stream Status Viewer',
          description: `This is a simple app for keeping track of a preset list of channels from the Twitch website. Online channels will display their status message while offline channels will display "offline". Users can toggle between seeing only online channels, offline channels, or both. The status and portrait for each channel are accessed through a modified link to Twitch's API using jQuery's AJAX calls.`,
          technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery'],
          link: 'https://codepen.io/niceboat111/full/MGWYKg/',
          image: 'https://i.imgur.com/QZPxk0u.png'
        },
        {
          title: 'A Pomodoro Timer',
          description: `A timer to be used with the Pomodoro Technique. It has a "work" timer and a "break" timer and both can be adjusted in 1 minute increments. An alert sound is played when the "work" timer runs out, and once again when the "break" timer runs out.`,
          technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery'],
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
        key={`project${i}`}
        title={project.title}
        description={project.description}
        displayedIcons={icons}
        technologies={project.technologies}
        link={project.link}
        image={project.image}
      />
    });

    var contactLinks = this.state.contactLinks.map((link, i) =>
      <ContactLinks key={'link' + i} link={link.link} faIcon={link.faIcon} />
    );

    const currentYear = new Date().getFullYear();

    return (
      <div>
        <Navbar />
        <div id="particles-js"></div>
        <article>
          <section className="parallax container-fluid" id="top-section">
            <h1 className="title top-text-title">hi.</h1>
            <h2 className="subtitle">i'm alvin
        <br /> and i'm a software
        <br /> engineer.</h2>
            <h3 className="sub-subtitle">(no chipmunk jokes, please)</h3>
          </section>

          <section className="container-fluid pic-and-text" id="about-section">
            <h1 className="title">about</h1>
            <p className="about-text">I'm a full stack software engineer from San Francisco, California with a background
        <br />
              in JavaScript and experience building, deploying, and scaling web applications.
        <br />
              When I'm not working or studying, I might be soldering together a Nerf blaster or looking up nonsense on the internet.</p>
          </section>

          <section className="container-fluid text-center projects-section-spacing" id="projects-section">
            <h1 className="title">projects</h1>
            <div className="projects-grid" key='wat'>
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
          <i className="fas fa-arrow-up" />
        </button>

        <footer className="footer-style">
          <p>Created by
      <a href="https://github.com/akwong372" target="_blank"> Alvin Kwong</a> © {currentYear}</p>
        </footer>
      </div>
    );
  }
}

export default App;