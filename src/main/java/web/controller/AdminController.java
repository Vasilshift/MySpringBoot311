package web.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import java.util.ArrayList;
import java.util.List;

@Controller
public class AdminController {

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
