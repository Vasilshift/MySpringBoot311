package web.controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import web.model.User;
import web.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import web.service.UserService;
import java.util.ArrayList;
import java.util.List;

@Controller
public class AdminController {

    private final UserService userService;
    private final BCryptPasswordEncoder bcryptpasswordEncoder;

    @Autowired
    public AdminController(UserService userService, BCryptPasswordEncoder bcryptpasswordEncoder) {
        this.userService = userService;
        this.bcryptpasswordEncoder = bcryptpasswordEncoder;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String printWelcome(Model model) {
        List<String> messages = new ArrayList<>();
        messages.add("Hello!");
        messages.add("I'm Spring MVC application");
        messages.add("5.2.0 version by sep'19 ");
        model.addAttribute("messages", messages);
        return "index";
    }

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String findAll(){
        return "user-list";
    }

}
