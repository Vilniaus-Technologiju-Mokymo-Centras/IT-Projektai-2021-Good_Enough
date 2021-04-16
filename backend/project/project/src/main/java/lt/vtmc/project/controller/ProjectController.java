package lt.vtmc.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.vtmc.project.command.ProjectCommand;
import lt.vtmc.project.model.Project;
import lt.vtmc.project.service.ProjectService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProjectController {

	private ProjectService projectService;

	@Autowired
	public ProjectController(ProjectService projectService) {
		this.projectService = projectService;
	}

	@GetMapping("/projects")
	public List<Project> getAllProjects() {
		return projectService.getAllProjects();
	}

	@PostMapping("/projects")
	public void createProject(@RequestBody ProjectCommand project) {
		projectService.createProject(project);
	}

	@DeleteMapping("/projects/{id}")
	public void deleteProject(@PathVariable("id") Long id) {
		projectService.deleteProject(id);
	}
}
