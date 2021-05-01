import React, { Component } from 'react'
import ProjectsService from '../services/ProjectsService';

class CreateProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            description: '',
            status: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveOrUpdateProject = this.saveOrUpdateProject.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ProjectsService.getProjectById(this.state.id).then( (res) =>{
                let project = res.data;
                this.setState({title: project.title,
                    description: project.description,
                    status: project.status,
                  
                });
            });
        }        
    }
    saveOrUpdateProject = (e) => {
        e.preventDefault();
        let project = {title: this.state.title, description: this.state.description, status: this.state.status};
        console.log('project => ' + JSON.stringify(project));

        // step 5
        if(this.state.id === '_add'){
            ProjectsService.createProject(project).then(res =>{
                this.props.history.push('/api/projects');
            });
        }else{
            ProjectsService.updateProject(project, this.state.id).then( res => {
                this.props.history.push('/api/projects');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    cancel(){
        this.props.history.push('/api/projects');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Pridėti</h3>
        }else{
            return <h3 className="text-center">Redaguoti</h3>
        }
    }
    render() {
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
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Aprašymas </label>
                                            <input placeholder="Aprašymas" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Statusas </label>
                                            <input placeholder="Statusas" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProject}>Save</button>
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

export default CreateProjectComponent