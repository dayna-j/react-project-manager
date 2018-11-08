import React, { Component } from 'react';
import TodoItem from './TodoItem';

// Projects component renders ProjectItems into a Projects div
// each project in the projects array is mapped to a ProjectItem component

class Todos extends Component {
    render() {
        let todoItems;
        // if projects exist in the projects state array...
        if(this.props.todos) {
            // map each project in the state array to a ProjectItem component
            todoItems = this.props.todos.map( todo => {
            // console.log(project);
            return (
                <TodoItem key={todo.title} todo={todo}/>
            )
        });
    }
    return (
    // remember, every render method MUST have a return statement...
    // return array output from projects.map
      <div className="Todos">
      <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}

// Projects.propTypes = {
//     projects: React.PropTypes.array,
//     onDelete: React.PropTypes.func
// }

export default Todos;
