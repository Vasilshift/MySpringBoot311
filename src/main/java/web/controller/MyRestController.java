package web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import web.model.User;
import web.repository.RoleRepository;
import web.service.RoleService;
import web.service.UserService;


@RestController
@RequestMapping("/api")
public class MyRestController {

    private final UserService userService;
    private final RoleService roleService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public MyRestController(UserService userService, RoleService roleService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userService = userService;
        this.roleService = roleService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping("/users")
    public ResponseEntity<Iterable<User>> GetAllUsers() {
        Iterable<User> users = userService.findAll();
        return users != null
                ? new ResponseEntity<>(users, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/users/{id}")
    public User showUser(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @PostMapping("/users")
    public ResponseEntity<User> addUser(@RequestBody User user){
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        roleService.setupRoles(user);
        userService.saveUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/users")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        roleService.setupRoles(user);
        userService.saveUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable("id") Long id) {
        userService.deleteById(id);
    }

}
