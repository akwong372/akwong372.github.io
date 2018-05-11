document.addEventListener("DOMContentLoaded", function(event) {
  let navBarButtons = {
    top: document.getElementById("top"),
    about: document.getElementById("about"),
    projects: document.getElementById("projects"),
    contact: document.getElementById("contact"),
    topSection: document.getElementById("top-section"),
    aboutSection: document.getElementById("about-section"),
    projectsSection: document.getElementById("projects-section"),
    contactSection: document.getElementById("contact-section")
  };

  let navBar = {
    barsIcon: document.getElementById("bars-icon"),

    buttonList: [
      navBarButtons.top,
      navBarButtons.about,
      navBarButtons.projects,
      navBarButtons.contact
    ],
    showMenu: function() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav container-fluid") {
        x.className += " responsive container-fluid";
      } else {
        x.className = "topnav container-fluid";
      }
    },
    barAnimation: function(bars) {
      bars.classList.toggle("change");
    },

    topSectionScroll: function() {
        navBarButtons.topSection.scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
    },

    aboutSectionScroll: function() {
        navBarButtons.aboutSection.scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
    },

    projectsSectionScroll: function() {
      navBarButtons.projectsSection.scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
    },

    contactSectionScroll: function() {
      navBarButtons.contactSection.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
  };

  navBar.barsIcon.onclick = function() {
    navBar.barAnimation(this);
    navBar.showMenu();
  };
 
  navBar.buttonList.forEach(function(button) {
    button.onclick = function() {
      let functionId = button.id + "SectionScroll";
      for (var i = 0; i < navBar.buttonList.length; i++) {
        navBar.buttonList[i].className = "";
      }
      navBar[button.id + "SectionScroll"]();
      button.className = "active";
    };
  });
  
});