package lt.vtmc.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
