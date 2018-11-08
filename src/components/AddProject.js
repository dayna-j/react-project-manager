import React, { Component } from 'react';
import uuid from 'uuid';

// AddProject is rendered by <App/>
class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newProject: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // The static keyword defines a static method for a class. 
    // Static methods aren't called on instances of the class--they're called on the class itself. 
    static defaultProps = {
        categories: ['Web design', 'Web development', 'Mobile development']
    }

    handleSubmit(e) {
        if(this.refs.title.value === '') {
            alert('title is required');
        } else {
            this.setState({newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function() {
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
        // categoryOptions will be the output of a map method.
        // category is a property of the props object.  It was passed in by <App/>
        let categoryOptions = this.props.categories.map(category => {
            // each category is placed into an option html tag.
            // the options will be embedded inside of a select tag when rendered
            return <option key={category} value={category}>{category}</option>
        })
        return (
          <div>
            <h3>Add Project</h3>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type='text' ref='title'/>
                </div>
                <div>
                    <label>Category</label>
                    <select ref='category'>
                        {categoryOptions}
                    </select>
                </div>
                <br/>
                <input type='submit' value='submit'/>
            </form>
          </div>
        );
    }
}

export default AddProject;
