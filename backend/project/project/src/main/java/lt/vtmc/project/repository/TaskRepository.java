package lt.vtmc.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.vtmc.project.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
