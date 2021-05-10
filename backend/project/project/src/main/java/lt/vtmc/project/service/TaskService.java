package lt.vtmc.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import lt.vtmc.project.command.TaskCommand;
import lt.vtmc.project.exceptions.ResourceNotFoundException;
import lt.vtmc.project.model.Task;
import lt.vtmc.project.repository.TaskRepository;

@Service
public class TaskService {

	private TaskRepository taskRepository;

	@Autowired
	public TaskService(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}

	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}

	public void createTask(TaskCommand createdTask) {
		Task task = new Task();
		task.setTaskName(createdTask.getTaskName());
		task.setTaskDescription(createdTask.getTaskDescription());
		task.setTaskPriority(createdTask.getTaskPriority());
		task.setTaskStatus(createdTask.getTaskStatus());
		taskRepository.save(task);

	}

	public void deleteTask(@PathVariable("id") Long id) {
		taskRepository.deleteById(id);

	}

	public ResponseEntity<Task> getTaskById(Long id) {
		Task task = taskRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Task with id: " + id + " does not exist."));

		return ResponseEntity.ok(task);
	}

}
