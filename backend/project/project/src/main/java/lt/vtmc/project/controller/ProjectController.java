package lt.vtmc.project.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.supercsv.io.CsvBeanWriter;
import org.supercsv.io.ICsvBeanWriter;
import org.supercsv.prefs.CsvPreference;

import io.swagger.annotations.ApiOperation;
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
	@ApiOperation(value = "Get all projects", notes = "Returns all projects.")
	public List<Project> getAllProjects() {
		return projectService.getAllProjects();
	}

	@PostMapping("/projects")
	@ApiOperation(value = "Create a project", notes = "Creates a project.")
	public void createProject(@RequestBody ProjectCommand project) {
		projectService.createProject(project);
	}

	@DeleteMapping("/projects/{id}")
	@ApiOperation(value = "Delete a project", notes = "Deletes a project by id.")
	public void deleteProject(@PathVariable("id") Long id) {
		projectService.deleteProject(id);
	}

	@GetMapping("/projects/{id}")
	@ApiOperation(value = "Get a project", notes = "Returns a project by id.")
	public ResponseEntity<Project> getProjectById(@PathVariable("id") Long id) {
		return projectService.getProjectById(id);
	}

	@PutMapping("/projects/{id}")
	@ApiOperation(value = "Update a project", notes = "Updates a project by id.")
	public ResponseEntity<Project> updateProject(@PathVariable("id") Long id, @RequestBody Project project) {
		return projectService.updateProject(id, project);
	}

	@GetMapping("/projects/export")
	public void exportToCSV(HttpServletResponse response) throws IOException {
		response.setContentType("text/csv");
		String fileName = "projects.csv";
		String headerKey = "Content-Disposition";
		String headerValue = "attachment; filename = " + fileName;
		response.setHeader(headerKey, headerValue);

		List<Project> projects = projectService.getAllProjects();

		ICsvBeanWriter csvWriter = new CsvBeanWriter(response.getWriter(), CsvPreference.STANDARD_PREFERENCE);

		String[] csvHeader = { "Project ID", "Name", "Description", "Status" };
		String[] nameMapping = { "id", "projectName", "projectDescription", "projectStatus" };

		csvWriter.writeHeader(csvHeader);

		for (Project project : projects) {
			csvWriter.write(project, nameMapping);
		}

		csvWriter.close();
	}

}
