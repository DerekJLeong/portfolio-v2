import React, { Component } from "react";
import "./project.css";

class Project extends Component {
   render() {
      return (
         <div className={this.getContainerClass()}>
            <div className="project">
               <div className="projectHeader">
                  <span class="headerDot dot1" />
                  <span class="headerDot dot2" />
                  <span class="headerDot dot3" />
                  <h2>{this.props.project.title}</h2>
               </div>
               <div>
                  <img src={this.props.project.img} alt="project" />
                  <div class={this.getTargetClasses()}>
                     <h2>{this.props.project.title}</h2>
                     <ul>
                        <li>Demo</li>
                        <li>GitHub</li>
                     </ul>
                  </div>
               </div>
            </div>
            <p>{this.props.project.description}</p>
         </div>
      );
   }

   getContainerClass() {
      let containerClass = "projectContainer hoverContainer-";
      containerClass += this.props.project.id;
      return containerClass;
   }

   getTargetClasses() {
      let targetClasses = "projectHover hoverTarget-";
      targetClasses += this.props.project.id;
      return targetClasses;
   }
}

export default Project;
