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
		u.setUserPassword(enc.encode("Password!1"));
		repo.save(u);
		for (int i = 1; i < 6; i++) {
			ProjectCommand pc = new ProjectCommand();
			pc.setProjectName("Project Nr." + i);
			pc.setProjectDescription("Description fo project nr. " + i);
			pc.setProjectStatus(ProjectStatus.ACTIVE);
			projectService.createProject(pc);
				for (int j = 1; j < 6; j++) {
				TaskCommand tk = new TaskCommand();
				tk.setTaskName("Task Nr." + j);
				tk.setTaskDescription("Description for task nr. " + j);
				tk.setTaskPriority(null);
				tk.setTaskStatus(TaskStatus.TO_DO);
				taskService.createTask(tk); }

		}

	}
}