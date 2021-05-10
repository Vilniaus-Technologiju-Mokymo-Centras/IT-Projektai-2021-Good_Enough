package lt.vtmc.project.command;

import java.time.LocalDateTime;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.hibernate.annotations.UpdateTimestamp;

import lt.vtmc.project.model.TaskPriority;
import lt.vtmc.project.model.TaskStatus;

public class TaskCommand {

	private String taskName;
	private String taskDescription;
	@Enumerated(EnumType.STRING)
	private TaskPriority taskPriority;
	@Enumerated(EnumType.STRING)
	private TaskStatus taskStatus;
	private LocalDateTime taskCreated;
	@UpdateTimestamp
	private LocalDateTime taskModified = LocalDateTime.now();

	public TaskCommand() {
	}

	public TaskCommand(String taskName, String taskDescription, TaskPriority taskPriority, TaskStatus taskStatus,
			LocalDateTime taskCreated, LocalDateTime taskModified) {
		this.taskName = taskName;
		this.taskDescription = taskDescription;
		this.taskPriority = taskPriority;
		this.taskStatus = taskStatus;
		this.taskCreated = taskCreated;
		this.taskModified = taskModified;
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

	public LocalDateTime getTaskCreated() {
		return taskCreated;
	}

	public void setTaskCreated(LocalDateTime taskCreated) {
		this.taskCreated = taskCreated;
	}

	public LocalDateTime getTaskModified() {
		return taskModified;
	}

	public void setTaskModified(LocalDateTime taskModified) {
		this.taskModified = taskModified;
	}

	@Override
	public String toString() {
		return "TaskCommand [taskName=" + taskName + ", taskDescription=" + taskDescription + ", taskPriority="
				+ taskPriority + ", taskStatus=" + taskStatus + ", taskCreated=" + taskCreated + ", taskModified="
				+ taskModified + "]";
	}

}
