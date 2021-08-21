package web.service;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import web.model.Role;
import web.model.User;
import web.repository.RoleRepository;
import web.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public interface UserService  {

    User findById(Long id);

    List<User> findAll();

    void addRolesToUser(User user, String[] roleView);

    User saveUser(User user);

    void deleteById(Long id);

    User loadUserByUsername(String username);


}
