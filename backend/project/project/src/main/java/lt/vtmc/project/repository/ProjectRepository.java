package lt.vtmc.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lt.vtmc.project.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
