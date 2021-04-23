package lt.vtmc.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import lt.vtmc.project.command.ProjectCommand;
import lt.vtmc.project.exceptions.ResourceNotFoundException;
import lt.vtmc.project.model.Project;
import lt.vtmc.project.repository.ProjectRepository;

@Service
public class ProjectService {

	private ProjectRepository projectRepository;

	@Autowired
	public ProjectService(ProjectRepository projectRepository) {
		this.projectRepository = projectRepository;
	}

	public List<Project> getAllProjects() {
		return projectRepository.findAll();

	}

	public void createProject(ProjectCommand createdProject) {
		Project project = new Project();
		project.setProjectName(createdProject.getProjectName());
		project.setProjectDescription(createdProject.getProjectDescription());
		project.setProjectStatus(createdProject.getProjectStatus());
		projectRepository.save(project);

	}

	public void deleteProject(@PathVariable("id") Long id) {
		projectRepository.deleteById(id);

	}

	public ResponseEntity<Project> getProjectById(Long id) {
		Project project = projectRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student with id: " + id + " does not exist."));

		return ResponseEntity.ok(project);
	}
}
