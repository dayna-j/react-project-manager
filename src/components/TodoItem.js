import React, { Component } from 'react';

// ProjectItem component represents an individual project.  Every project is contained by a list-item element

class TodoItem extends Component {
    render() {
        return (
            <li className="Todo">
                <strong>{this.props.todo.title}</strong>
            </li>
        );
    }
}

export default TodoItem;
