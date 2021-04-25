import axios from 'axios';

const PROJECTS_API_BASE_URL = "http://localhost:8080/api/v1/projects";

class ProjectsService {

    getProjects(){
        return axios.get(PROJECTS_API_BASE_URL);
    }

    createProject(project){
        return axios.post(PROJECTS_API_BASE_URL, project);
    }

    getProjectById(projectId){
        return axios.get(PROJECTS_API_BASE_URL + '/' + projectId);
    }

    updateProject(project, projectId){
        return axios.put(PROJECTS_API_BASE_URL + '/' + projectId, project);
    }

    deleteProject(projectId){
        return axios.delete(PROJECTS_API_BASE_URL + '/' + projectId);
    }
}

export default new ProjectsService()