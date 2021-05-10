package lt.vtmc.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import lt.vtmc.project.command.TaskCommand;
import lt.vtmc.project.model.Task;
import lt.vtmc.project.service.TaskService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/projects/{id}")
public class TaskController {

	private TaskService taskService;

	@Autowired
	public TaskController(TaskService taskService) {
		this.taskService = taskService;
	}

	@GetMapping("/tasks")
	@ApiOperation(value = "Get all tasks", notes = "Returns all tasks.")
	public List<Task> getAllTasks() {
		return taskService.getAllTasks();
	}

	@PostMapping("/tasks")
	@ApiOperation(value = "Create a task", notes = "Creates a task.")
	public void createTask(@RequestBody TaskCommand task) {
		taskService.createTask(task);
	}

}
