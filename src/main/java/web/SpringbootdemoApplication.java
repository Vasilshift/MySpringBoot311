package web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import web.model.Role;
import web.model.User;
import web.repository.RoleRepository;
import web.service.UserService;

import javax.annotation.PostConstruct;
import java.util.Collections;

@SpringBootApplication
public class SpringbootdemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootdemoApplication.class, args);
	}

	private UserService userService;
	private BCryptPasswordEncoder bcryptpasswordEncoder;
	private RoleRepository roleRepository;

	@Autowired
	public SpringbootdemoApplication(UserService userService, BCryptPasswordEncoder bcryptpasswordEncoder, RoleRepository roleRepository) {
		this.userService = userService;
		this.bcryptpasswordEncoder = bcryptpasswordEncoder;
		this.roleRepository = roleRepository;
	}

	@PostConstruct
	void init(){

		Role roleAdmin = new Role();
		roleAdmin.setId(1L);
		roleAdmin.setName("ROLE_ADMIN");
		roleRepository.save(roleAdmin);

		Role roleUser = new Role();
		roleUser.setId(2L);
		roleUser.setName("ROLE_USER");
		roleRepository.save(roleUser);

		User user1 = new User();
		user1.setUsername("admin");
		user1.setPassword(bcryptpasswordEncoder.encode("admin"));
		user1.setRoles(Collections.singleton(roleRepository.findRoleByName("ROLE_ADMIN")));
		userService.saveUser(user1);

		User user2 = new User();
		user2.setUsername("user");
		user2.setPassword(bcryptpasswordEncoder.encode("user"));
		user2.setRoles(Collections.singleton(roleRepository.findRoleByName("ROLE_USER")));
		userService.saveUser(user2);
	}

}
