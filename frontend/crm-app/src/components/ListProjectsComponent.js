import React, { Component } from 'react'
import ProjectsService from '../services/ProjectsService'

class ListProjectsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                projects: []
        }
        this.addProject = this.addProject.bind(this);
        this.editProject = this.editProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject(id){
        ProjectsService.deleteProject(id).then( res => {
            this.setState({projects: this.state.projects.filter(project => project.id !== id)});
        });
    }
    viewProject(id){
        this.props.history.push(`/api/view-project/${id}`);
    }
    editProject(id){
        this.props.history.push(`/api/add-project/${id}`);
    }

    componentDidMount(){
        ProjectsService.getProjects().then((res) => {
            this.setState({ projects: res.data});
        });
    }

    addProject(){
        this.props.history.push('/api/add-project/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Projektai</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProject}> Pridėti projektą</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Projekto pavadinimas</th>
                                    <th> Projekto aprašymas</th>
                                    <th> Projekto statusas</th>
                                    <th> Veiksmai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.projects.map(
                                        project => 
                                        <tr key = {project.id}>
                                             <td> {project.title} </td>   
                                             <td> {project.description}</td>
                                             <td> {project.status}</td>
                                             <td>
                                                 <button onClick={ () => this.editProject(project.id)} className="btn btn-info">Redaguoti </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProject(project.id)} className="btn btn-danger">Ištrinti </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProject(project.id)} className="btn btn-info">Peržiūrėti </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProjectsComponent