import React, { Component } from 'react';
import axios from 'axios';

class AddProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            projectDescription: "",
            projectStatus: "ACTIVE",
           
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    cancel(){
        this.props.history.push('/api/projects');
    }
    handleClick = (event) => {
        event.preventDefault()

        const productObject = {
            projectName: this.state.projectName,
            projectDescription: this.state.projectDescription,
            projectStatus: this.state.projectStatus,
       
        };

        axios.post('http://localhost:8080/api/projects/', productObject)
            .then((res) => {
                console.log(res.data);
                window.location.reload(false);
            }).catch((error) => {
                console.log(error)
            });

        this.setState({
            projectName: "",
            projectDescription: "",
            projectStatus: "",
          
        })

    }
    render() {

        return (
            <div>
                <form className="container">
                    <h3>Pridėti projektą</h3>
                    <div className="my-2">
                        <input type="text"
                            name="projectName"
                            value={this.state.projectName}
                            className="form-control"
                            placeholder="Projekto pavadinimas"
                            onChange={this.handleChange}
                        />
                    </div>
                   
                    <div className="my-2">
                        <input type="text"
                            name="projectDescription"
                            value={this.state.projectDescription}
                            className="form-control"
                            placeholder="Projekto aprašymas"
                            onChange={this.handleChange}
                          
                        />
                    </div>
                    <div className="my-2">
                        <input type="text"
                            name="projectStatus"
                            value={this.state.projectStatus}
                            className="form-control"
                            placeholder="Projekto statusas"
                            //onChange={this.handleChange}
                            //prideda tik tada kai active
                        />
                    </div>
                    <button type="submit" className="btn btn-success mt-2" onClick={this.handleClick}>Išsaugoti</button>
                    <button type="submit" className="btn btn-danger mt-2 mx-2" onClick={this.cancel.bind(this)}>Atšaukti</button>
                </form>
                
            </div>
        )
    }
}

export default AddProjectForm;
