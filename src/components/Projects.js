import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

// Projects component renders ProjectItems into a Projects div
// each project in the projects array is mapped to a ProjectItem component

class Projects extends Component {
    constructor() {
        super();
        this.deleteProject = this.deleteProject.bind(this);
    }
    deleteProject(id) {
        this.props.onDelete(id);
    }
    render() {
        let projectItems;
        // if projects exist in the projects state array...
        if(this.props.projects) {
            // map each project in the state array to a ProjectItem component
            projectItems = this.props.projects.map( project => {
            // console.log(project);
            return (
                <ProjectItem onDelete={this.deleteProject} key={project.title} project={project}/>
            )
        });
    }
    return (
    // remember, every render method MUST have a return statement...
    // return array output from projects.map
      <div className="Projects">
      <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

// Projects.propTypes = {
//     projects: React.PropTypes.array,
//     onDelete: React.PropTypes.func
// }

export default Projects;
