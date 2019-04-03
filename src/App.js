import React, { Component } from "react";
import Header from "./components/header";
import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
   state = {
      projects: [
         {
            id: 1,
            title: "Portfolio Site V1",
            description:
               "My original portfolio site, made using vanilla HTML, CSS, and JavaScript. Rebuilt and designed after discoving React.js to display new abilities.",
            img: require("./components/images/portfolioProject.png"),
            demo: "",
            github: "https://github.com/DerekJLeong/DerekJLeong.github.io"
         },
         {
            id: 2,
            title: "Concentration Memory Game",
            description:
               "1 of 8 different projects completed for Udacity Front End Nanodegree. Based off of the classic game 'Concentration'. Demonstration of JavaScript DOM manipulation, event handling, and CSS animations.",
            img: require("./components/images/concentrationProject.png"),
            demo: "",
            github:
               "https://github.com/DerekJLeong/Udacity-FE-Memory-Game/tree/master/Front%20End%20Project%20-%20Memory%20Game"
         },
         {
            id: 3,
            title: "Restuarant Review Application",
            description:
               "Another project completed as part of Front End Nanodegree. Responsible for responsive redesign using CSS flex box/grid, accessibility, and service worker offline caching for multi-page application.",
            img: require("./components/images/restuarantProject.png"),
            demo: "",
            github:
               "https://github.com/DerekJLeong/Udacity-FE-Restuarant-App-stage-1"
         }
      ],
      skills: [
         {
            id: 1,
            title: "HTML",
            img: require("./components/images/html5.svg"),
            details: ["HTML5", "Accessibility", "Semantics", "JSX"]
         },
         {
            id: 2,
            title: "CSS",
            img: require("./components/images/css3.svg"),
            details: ["CSS3", "Flexbox/Grid", "Responsive", "Bootstrap"]
         },
         {
            id: 3,
            title: "JavaScript",
            img: require("./components/images/javascript.svg"),
            details: ["ES6 JavaScript", "React.js", "jQuery", "APIs", "npm"]
         },
         {
            id: 4,
            title: "Learning",
            img: require("./components/images/think.svg"),
            details: ["Quick Learner", "Passionate", "Adaptable", "Reliable"]
         }
      ]
   };
   render() {
      return (
         <body>
            <NavBar />
            <Header />
            <main>
               <About />
               <Projects projects={this.state.projects} />
               <Skills skills={this.state.skills} />
               <Contact />
            </main>
            <Footer />
         </body>
      );
   }
}

export default App;
