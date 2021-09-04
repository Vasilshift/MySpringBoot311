//package web.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//import web.model.Role;
//import web.model.User;
//import web.repository.RoleRepository;
//
//import javax.annotation.PostConstruct;
//import java.util.Collections;
//
//@Service
//public class DBInitImpl {
//
//    private final RoleRepository roleRepository;
//    private final UserService userService;
//    private BCryptPasswordEncoder bcryptpasswordEncoder;
//
//    @Autowired
//    public DBInitImpl(RoleRepository roleRepository, UserService userService, BCryptPasswordEncoder bcryptpasswordEncoder) {
//        this.roleRepository = roleRepository;
//        this.userService = userService;
//        this.bcryptpasswordEncoder = bcryptpasswordEncoder;
//    }
//
//    @PostConstruct
//    public void init() {
//        Role roleAdmin = new Role();
//        roleAdmin.setName("ROLE_ADMIN");
//        roleRepository.save(roleAdmin);
//
//        Role roleUser = new Role();
//        roleUser.setName("ROLE_USER");
//        roleUser.setId(2L);
//        roleRepository.save(roleUser);
//
//        User user1 = new User();
//        user1.setUsername("admin");
//        user1.setPassword(bcryptpasswordEncoder.encode("admin"));
//        user1.setAge(34);
//        user1.setEmail("admin@mail.ru");
//        user1.setRoles(Collections.singleton(roleRepository.findRoleByName("ROLE_ADMIN")));
//        userService.saveUser(user1);
//
//        User user2 = new User();
//        user2.setUsername("user");
//        user2.setPassword(bcryptpasswordEncoder.encode("user"));
//        user2.setAge(56);
//        user2.setEmail("user@mail.ru");
//        user2.setRoles(Collections.singleton(roleRepository.findRoleByName("ROLE_USER")));
//        userService.saveUser(user2);
//    }
//}
