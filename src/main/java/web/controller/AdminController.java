package web.controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import web.model.User;
import web.service.RoleService;
import web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.List;

@Controller
public class AdminController {

    private final UserService userService;
    private final RoleService roleService;
    private final BCryptPasswordEncoder bcryptpasswordEncoder;

    @Autowired
    public AdminController(UserService userService, RoleService roleService, BCryptPasswordEncoder bcryptpasswordEncoder) {
        this.userService = userService;
        this.roleService = roleService;
        this.bcryptpasswordEncoder = bcryptpasswordEncoder;
    }

    @GetMapping(value = "/")
    public String printWelcome(Model model) {
        List<String> messages = new ArrayList<>();
        messages.add("Hello!");
        messages.add("I'm Spring MVC application");
        messages.add("5.2.0 version by sep'19 ");
        model.addAttribute("messages", messages);
        return "index";
    }

    @GetMapping("/admin")
    public String findAll(Model model){
        List<User> users = userService.findAll();
        model.addAttribute("users", users);
        return "user-list";
    }

    @GetMapping("/user-create")
    public String createUserForm(@ModelAttribute("user") User user){
        return "user-create";
    }

    @PostMapping("/user-create")
    public String createUser(User user,
                             @RequestParam("roleView") String[] roleView) {
        userService.addRolesToUser(user, roleView);
        userService.saveUser(user);
        return "redirect:/admin";
    }

    @RequestMapping(value = "/user-delete/{id}", method={RequestMethod.DELETE, RequestMethod.GET})
    public String deleteUser(@PathVariable("id") Long id) {
        userService.deleteById(id);
        return "redirect:/admin";
    }

    @GetMapping("/user-update/{id}")
    public String updateUserForm(@PathVariable("id") Long id, Model model) {
        User user = userService.findById(id);
        model.addAttribute("user", user);
        return "user-update";
    }

    @PostMapping("/user-update")
    public String updateUser(@ModelAttribute("user") User user,
                             @RequestParam("roleView") String[] roleView) {
        user.setPassword(bcryptpasswordEncoder.encode(user.getPassword()));
        userService.addRolesToUser(user, roleView);
        userService.saveUser(user);
        return "redirect:/admin";
    }
}
