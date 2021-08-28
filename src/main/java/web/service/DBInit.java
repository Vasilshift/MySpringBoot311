package web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import web.model.Role;
import web.model.User;
import web.repository.RoleRepository;

import javax.annotation.PostConstruct;
import java.util.Collections;

@Component
public class DBInit {

     private final RoleRepository roleRepository;
     private final UserService userService;
     private final BCryptPasswordEncoder bcryptpasswordEncoder;

    @Autowired
    public DBInit(RoleRepository roleRepository, UserService userService, BCryptPasswordEncoder bcryptpasswordEncoder) {
        this.roleRepository = roleRepository;
        this.userService = userService;
        this.bcryptpasswordEncoder = bcryptpasswordEncoder;
    }

    @PostConstruct
    public void init() {
        Role roleAdmin = new Role();
        roleAdmin.setName("ROLE_ADMIN");
        roleRepository.save(roleAdmin);

        Role roleUser = new Role();
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
