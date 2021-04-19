package lt.vtmc.project.command;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lt.vtmc.project.model.ProjectStatus;

public class ProjectCommand {

	private String projectName;
	private String projectDescription;
	@Enumerated(EnumType.STRING)
	private ProjectStatus projectStatus;

	public ProjectCommand() {
	}

	public ProjectCommand(String projectName, String projectDescription, ProjectStatus projectStatus) {
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.projectStatus = projectStatus;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}

	public ProjectStatus getProjectStatus() {
		return projectStatus;
	}

	public void setProjectStatus(ProjectStatus projectStatus) {
		this.projectStatus = projectStatus;
	}

	@Override
	public String toString() {
		return "ProjectCommand [projectName=" + projectName + ", projectDescription=" + projectDescription
				+ ", projectStatus=" + projectStatus + "]";
	}

}
