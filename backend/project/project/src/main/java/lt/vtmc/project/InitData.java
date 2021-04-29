package lt.vtmc.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import lt.vtmc.project.command.ProjectCommand;
import lt.vtmc.project.model.ProjectStatus;
import lt.vtmc.project.model.User;
import lt.vtmc.project.repository.UserRepository;
import lt.vtmc.project.service.ProjectService;

@Component
public class InitData implements CommandLineRunner {

	@Autowired
	PasswordEncoder enc;

	@Autowired
	UserRepository repo;

	@Autowired
	ProjectService projectService;

	@Override
	public void run(String... args) throws Exception {

		User u = new User();
		u.setUserName("adminas");
		u.setUserEmail("admin@mail.com");
		u.setUserPassword(enc.encode("password"));
		repo.save(u);
		for (int i = 1; i < 6; i++) {
			ProjectCommand pc = new ProjectCommand();
			pc.setProjectName("Project Nr." + i);
			pc.setProjectDescription("Description fo project nr. " + 1);
			pc.setProjectStatus(ProjectStatus.ACTIVE);
			projectService.createProject(pc);
		}

	}
}