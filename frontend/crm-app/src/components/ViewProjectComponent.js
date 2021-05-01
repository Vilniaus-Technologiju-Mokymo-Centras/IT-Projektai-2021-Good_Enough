import React, { Component } from 'react'
import ProjectsService from '../services/ProjectsService'

class ViewProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        ProjectsService.getProjectById(this.state.id).then( res => {
            this.setState({project: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Project Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Projekto pavadinimas: </label>
                            <div> { this.state.employee.title }</div>
                        </div>
                        <div className = "row">
                            <label> Projekto aprašymas: </label>
                            <div> { this.state.project.description }</div>
                        </div>
                        <div className = "row">
                            <label> Projekto statusas: </label>
                            <div> { this.state.project.status }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProjectComponent