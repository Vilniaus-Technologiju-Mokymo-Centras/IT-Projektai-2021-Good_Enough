package lt.vtmc.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.vtmc.project.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
