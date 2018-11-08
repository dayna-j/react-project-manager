import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos'
// import 'reset-css';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    // App Component defines an initial state:  projects array with 3 values
    // Each element in the projects array is an Object with 2 properties

    // projects state is passed to Projects component as props
    this.state = {
      projects: [],
      todos: []
    }

    this.handleAddProject = this.handleAddProject.bind(this);
    this.handleDeleteProject = this.handleDeleteProject.bind(this);
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      data: 'JSON',
      cache: false,
      success: function(data) {
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this), 
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getProjects() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Website1',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Website2',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Website3',
        category: 'Web Design'
      }
    ]});
  }

  // componentWillMount is a lifecycle method that sets up the initial project state values
  // When the App is loaded
  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }
  
  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  // render AddProject and Projects.  Seed Projects component
  // with projects array as props
  render() {
    // AddProject renders the part of the UI with text input and select menu
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject}/>
        <hr/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
