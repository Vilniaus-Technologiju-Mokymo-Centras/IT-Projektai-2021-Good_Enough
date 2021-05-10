package lt.vtmc.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Component
@Table(name = "tasks")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "task_id")
	private Long id;
	@Column(name = "task_name")
	private String taskName;
	@Column(name = "task_description")
	private String taskDescription;
	@Enumerated(EnumType.STRING)
	@Column(name = "task_priority")
	private TaskPriority taskPriority;
	@Enumerated(EnumType.STRING)
	@Column(name = "task_status")
	private TaskStatus taskStatus;

	public Task() {
	}

	public Task(Long id, String taskName, String taskDescription, TaskPriority taskPriority, TaskStatus taskStatus) {
		this.id = id;
		this.taskName = taskName;
		this.taskDescription = taskDescription;
		this.taskPriority = taskPriority;
		this.taskStatus = taskStatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public String getTaskDescription() {
		return taskDescription;
	}

	public void setTaskDescription(String taskDescription) {
		this.taskDescription = taskDescription;
	}

	public TaskPriority getTaskPriority() {
		return taskPriority;
	}

	public void setTaskPriority(TaskPriority taskPriority) {
		this.taskPriority = taskPriority;
	}

	public TaskStatus getTaskStatus() {
		return taskStatus;
	}

	public void setTaskStatus(TaskStatus taskStatus) {
		this.taskStatus = taskStatus;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", taskName=" + taskName + ", taskDescription=" + taskDescription + ", taskPriority="
				+ taskPriority + ", taskStatus=" + taskStatus + "]";
	}

}
