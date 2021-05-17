import React, { Component } from 'react';
import axios from 'axios';

class AddProjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            projectDescription: "",
            projectStatus: "",
           
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
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
                console.log(res.data)
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
                    <div>
                        <label>projectName</label>
                        <input type="text"
                            name="projectName"
                            value={this.state.projectName}
                            className="form-control"
                            placeholder="projectName"
                            onChange={this.handleChange}
                        />

                    </div>
                    <div>
                        <label>projectDescription</label>
                        <input type="text"
                            name="projectDescription"
                            value={this.state.projectDescription}
                            className="form-control"
                            placeholder="projectDescription"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>projectStatus</label>
                        <input type="text"
                            name="projectStatus"
                            value={this.state.projectStatus}
                            className="form-control"
                            placeholder="projectStatus"
                            onChange={this.handleChange}

                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary mt-2" onClick={this.handleClick}>SAVE</button>
                </form>             
            </div>
        )
    }
}

export default AddProjectForm;
