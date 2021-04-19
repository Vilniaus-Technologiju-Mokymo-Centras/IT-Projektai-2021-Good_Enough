package lt.vtmc.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Projects")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "projekto_id")
	private Long id;
	@Column(name = "projekto_pavadinimas")
	private String projectName;
	@Column(name = "projekto_aprasymas")
	private String projectDescription;
	@Enumerated(EnumType.STRING)
	@Column(name = "projekto_busena")
	private ProjectStatus projectStatus;

	public Project() {
	}

	public Project(Long id, String projectName, String projectDescription, ProjectStatus projectStatus) {
		this.id = id;
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.projectStatus = projectStatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
		return "Projects [id=" + id + ", projectName=" + projectName + ", projectDescription=" + projectDescription
				+ "]";
	}

}