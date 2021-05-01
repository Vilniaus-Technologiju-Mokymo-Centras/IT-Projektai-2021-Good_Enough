import axios from 'axios';

const PROJECTS_API_BASE_URL = "http://localhost:8080/api/projects";
//const PROJECTS_API_BASE_URL = "https://60570137055dbd0017e84567.mockapi.io/grid/Books";

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