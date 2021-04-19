package lt.vtmc.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import lt.vtmc.project.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	public User findByUserEmail(@Param("userEmail") String userEmail);

}
