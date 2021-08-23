package web.service;//package com.example.rest.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//
//import java.util.Collections;
//
//@Service
//public class DBInitialisationImpl implements web.service.DBInitialization {
//
//    private final UserService userService;
//    private final RoleService roleService;
//    private BCryptPasswordEncoder bcryptpasswordEncoder;
//
//    @Autowired
//    public DBInitialisationImpl(UserService userService, RoleService roleService, BCryptPasswordEncoder bcryptpasswordEncoder) {
//        this.userService = userService;
//        this.roleService = roleService;
//        this.bcryptpasswordEncoder = bcryptpasswordEncoder;
//    }
//
//    @Override
//    public void init() {
//        Role roleAdmin = new Role();
//        roleAdmin.setName("ROLE_ADMIN");
//        roleService.save(roleAdmin);
//
//        Role roleUser = new Role();
//        roleUser.setName("ROLE_USER");
//        roleService.save(roleUser);
//
//        User user1 = new User();
//        user1.setUsername("admin");
//        user1.setPassword(bcryptpasswordEncoder.encode("admin"));
//        user1.setLastname("adminov");
//        user1.setAge("34");
//        user1.setEmail("admin@mail.ru");
//        user1.setRoles(Collections.singleton(roleService.findRoleByName("ROLE_ADMIN")));
//        userService.saveUser(user1);
//
//        User user2 = new User();
//        user2.setUsername("user");
//        user2.setPassword(bcryptpasswordEncoder.encode("user"));
//        user2.setLastname("userov");
//        user2.setAge("34");
//        user2.setEmail("user@mail.ru");
//        user2.setRoles(Collections.singleton(roleService.findRoleByName("ROLE_USER")));
//        userService.saveUser(user2);
//    }
//}
