package lt.vtmc.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.vtmc.project.command.TaskCommand;
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

}
