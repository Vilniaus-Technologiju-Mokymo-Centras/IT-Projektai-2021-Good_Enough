package lt.vtmc.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import lt.vtmc.project.command.UserCommand;
import lt.vtmc.project.model.User;

import lt.vtmc.project.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {

	private UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();

	}

	public void createUser(UserCommand createdUser) {
		User user = new User();
		user.setUserName(createdUser.getUserName());
		user.setUserEmail(createdUser.getUserEmail());
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		user.setUserPassword(encoder.encode(createdUser.getUserPassword()));
		userRepository.save(user);
	}

	public void deleteUser(@PathVariable("id") Long id) {
		userRepository.deleteById(id);

	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepository.findByUserEmail(email);
		if (user == null)
			throw new UsernameNotFoundException(email + " not found.");
		return new org.springframework.security.core.userdetails.User(user.getUserEmail(), user.getUserPassword(),
				AuthorityUtils.createAuthorityList("vartotojas"));
	}

	@Transactional(readOnly = true)
	public User findByEmail(String email) {
		return userRepository.findByUserEmail(email);
	}
}
