import React, { Component } from 'react';
import axios from 'axios';

export default class EditProject2 extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.projectChange = this.projectChange.bind(this);
        this.submitProject = this.submitProject.bind(this);
        const { match: { params } } = this.props;
        this.api = `http://localhost:8080/api/projects/${params.projectId}`;
    }

    initialState = {
        projectName: '', projectDescription: '', projectStatus: '', projectId: ''
    }
    submitProject(event) {
        event.preventDefault();
        const project = {
            projectName: this.state.projectName,
            projectDescription: this.state.projectDescription,
            projectStatus: this.state.projectStatus,
            projectId: this.state.projectId
        };
        axios.put(this.api, project)
            .then(response => {
                if (response.data != null) {
                    this.setState(this.initialState);
                }
            });

    }
    componentDidMount() {
        const projectId = this.props.match.params.projectId;
        if (projectId) {
            this.findProjectById(projectId);
        }
    };

    findProjectById = (projectId) => {
        axios.get("http://localhost:8080/api/projects/" + projectId)
            .then(response => {
                this.setState({
                    projectName: response.data.projectName,
                    projectDescription: response.data.projectDescription,
                    projectStatus: response.data.projectStatus,
                    projectId: response.data.projectId

                });
            }).catch((error) => {
                console.log("Error - " + error);
            });
    };

    projectChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    resetProject = () => {
        this.setState(() => this.initialState)
    }
    projectList = () => {
        return this.props.history.push("/list");
    };
    render() {
        const { projectName, projectDescription, projectStatus} = this.state;
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Pavadinimas: </label>
                                            <input placeholder="Pavadinimas" name="title" className="form-control" 
                                                value={projectName} onChange={this.projectChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Aprašymas </label>
                                            <input placeholder="Aprašymas" name="description" className="form-control" 
                                                value={projectDescription} onChange={this.projectChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Statusas </label>
                                            <input placeholder="Statusas" name="status" className="form-control" 
                                                value={projectStatus} onChange={this.projectChange}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.projectList.bind()}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}