import React, { Component } from 'react';
import { Card, Form, Button, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

export default class Task extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.projectChange = this.projectChange.bind(this);
        this.submitTask = this.submitTask.bind(this);
        const { match: { params } } = this.props;
        this.api = `http://localhost:8080/api/projects/${params.projectId}/tasks`;
    }


    initialState = {

        taskName: '', taskDescription: '', taskPriority: '',
        taskState: '', taskModifyTime: '', taskCreateTime: '' 
    }

    submitTask(event) {

        event.preventDefault();

        const task = {
            taskName: this.state.taskName,
            taskDescription: this.state.taskDescription,
            taskPriority: this.state.taskPriority,
            taskState: this.state.taskState,
            taskModifyTime: this.state.taskModifyTime,
            taskCreateTime: this.state.taskCreateTime
        };

        axios.post(this.api, task)
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

        axios.get("http://localhost:8080/api/projects/" + projectId + "/tasks")
            .then(response => {
                this.setState({
                    taskName: response.data.taskName,
                    taskDescription: response.data.taskDescription,
                    taskPriority: response.data.taskPriority,
                    taskState: response.data.taskState,
                    taskModifyTime: response.data.taskModifyTime,
                    taskCreateTime: response.data.taskCreateTime


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
    resetTask = () => {

        this.setState(() => this.initialState)
       
    }

    taskList = () => {
        const projectId = this.props.match.params.projectId;
        return this.props.history.push("/tasklist/" + projectId);

    };


    render() {

        const { taskName, taskDescription, taskState, taskPriority, taskCreateTime, taskModifyTime } = this.state;

        return (
            <Card>
                <Card.Header> Add new task </Card.Header>

                <Form onReset={this.resetTask} onSubmit={this.submitTask} id="taskFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTasktName">
                                <Form.Label>Task Name</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="taskName"
                                    value={taskName}
                                    onChange={this.projectChange}
                                    placeholder="Enter task name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTaskPriority">
                                <Form.Label>Task Priority</Form.Label>
                                <Form.Control as="select" required autoComplete="off"
                                    type="text" name="taskPriority"
                                    value={taskPriority}
                                    onChange={this.projectChange}>
                                    <option></option>
                                    <option>LOW</option>
                                    <option>NORMAL</option>
                                    <option>HIGH</option>
                                </Form.Control>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridTaskState">
                                <Form.Label>Tast State</Form.Label>
                                <Form.Control as="select" required
                                    type="text" name="taskState"
                                    value={taskState}
                                    onChange={this.projectChange}>
                                    <option></option>
                                    <option>TO_DO</option>
                                    <option>IN_PROGRESS</option>
                                </Form.Control >
                            </Form.Group>
                        </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTaskDescription">
                                    <Form.Label>Task Description</Form.Label>
                                    <Form.Control required autoComplete="off"
                                        type="textarea" name="taskDescription"
                                        value={taskDescription}
                                        as="textarea" rows="3"
                                        onChange={this.projectChange}
                                        placeholder="Description" />
                                </Form.Group>
                            </Form.Row>

                    </Card.Body>
                    <Card.Footer>
                        <Button size="sm" variant="success" type="submit">Submit</Button>{' '}

                        <Button size="sm" variant="info" type="reset">Reset</Button>{' '}

                        <Button size="sm" variant="info" type="button" onClick={this.taskList.bind()}>Task List</Button>{' '}
                    </Card.Footer>
                </Form>
            </Card >
        );

    }

}