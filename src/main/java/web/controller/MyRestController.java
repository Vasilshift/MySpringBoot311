package web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private final RoleRepository roleRepository;

    @Autowired
    public MyRestController(UserService userService, RoleService roleService, RoleRepository roleRepository) {
        this.userService = userService;
        this.roleService = roleService;
        this.roleRepository = roleRepository;
    }

//    @PostConstruct
//    public void firstinit() {
//        DBInitImpl.init();
//    }

    @GetMapping("/users")
    public ResponseEntity<Iterable<User>> apiGetAllUsers() {
        Iterable<User> users = userService.findAll();
        return users != null
                ? new ResponseEntity<>(users, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/users/{id}")
    public User showUser(@PathVariable("id") Long id) {
        User user = userService.findById(id);
        return user;
    }

    @PostMapping("/users")
    public ResponseEntity<User> add(@RequestBody User user){
        roleService.setupRoles(user);
        userService.saveUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/users")
    public ResponseEntity<User> update(@RequestBody User user){
        //roleService.setupRoles(user);
        userService.saveUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable("id") Long id) {
//        User user = userService.get(id);
//        if(user == null){
//            throw new NoSuchUserException("There is no user with id "+ id);
//        }
        userService.deleteById(id);
    }

}
