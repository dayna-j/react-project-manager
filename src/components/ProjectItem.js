import React, { Component } from 'react';

// ProjectItem component represents an individual project.  Every project is contained by a list-item element

class ProjectItem extends Component {
    constructor() {
        super()
        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject(id) {
        this.props.onDelete(id)
    }

    render() {
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href='#' onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
            </li>
        );
    }
}

export default ProjectItem;
