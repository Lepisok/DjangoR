import React from "react";


class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', repository: '', users: props.users[0].url}
    }

    handleChange(event)
    {
        this.setState(
                {
                    [event.target.name]: event.target.value
                }
            );
    }
    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.repository, this.state.users)
        event.preventDefault()
      }
      render() {
        return (
          <form onSubmit={(event)=> this.handleSubmit(event)}>
            <div className="form-group">
                <label for="login">name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event)=>this.handleChange(event)} />
            </div>

            <div className="form-group">
                <label for="repository">repo</label>

                <input type="url" className="form-control" name="repository" value={this.state.repository} onChange={(event)=>this.handleChange(event)} />
            </div>
            <div className="form-group">
                <label for="users">users</label>

            <select name="users" className='form-control' onChange={(event)=>this.handleChange(event)}>
                {this.props.users.map((item)=><option value={item.url}>{item.username}</option>)}
            </select>
            </div>

            <input type="submit" className="btn btn-primary" value="Save" />
          </form>
        );
      }
    }

    export default ProjectForm
  