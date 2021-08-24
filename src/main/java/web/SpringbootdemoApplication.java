package web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import web.model.Role;
import web.model.User;
import web.repository.RoleRepository;
import web.service.RoleService;
import web.service.UserService;

import javax.annotation.PostConstruct;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class SpringbootdemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootdemoApplication.class, args);
	}

//    private final RoleRepository roleRepository;
//    private final UserService userService;
//    private final RoleService roleService;
//    private BCryptPasswordEncoder bcryptpasswordEncoder;
//
//    @Autowired
//    public SpringbootdemoApplication(RoleRepository roleRepository, UserService userService, RoleService roleService, BCryptPasswordEncoder bcryptpasswordEncoder) {
//        this.roleRepository = roleRepository;
//        this.userService = userService;
//		this.roleService = roleService;
//		this.bcryptpasswordEncoder = bcryptpasswordEncoder;
//    }
//
//    @PostConstruct
//    public void initServiceImpl() {
//        User user = new User();
//        User user1 = new User();
//            Role adminRole = new Role(1L, "ROLE_ADMIN");
//            Role userRole = new Role(2L, "ROLE_USER");
//            roleService.addRole(adminRole);
//            roleService.addRole(userRole);
//            user.setUsername("admin");
//            user1.setUsername("user");
//            user.setPassword(bcryptpasswordEncoder.encode("admin"));
//            user1.setPassword(bcryptpasswordEncoder.encode("user"));
//            user.setAge(25);
//            user1.setAge(65);
//            user.setEmail("admin@mail.ru");
//            user1.setEmail("user@mail.ru");
//            Set<Role> roles = new HashSet<>();
//            roles.add(roleRepository.findRoleByName("ROLE_ADMIN"));
//            Set<Role> roles1 = new HashSet<>();
//            roles1.add(roleRepository.findRoleByName("ROLE_USER"));
//            user.setRoles(roles);
//            user1.setRoles(roles1);
//            userService.saveUser(user);
//            userService.saveUser(user1);
//    }

}
