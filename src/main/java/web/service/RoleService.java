package web.service;

import web.model.Role;
import web.model.User;

import java.util.Set;

public interface RoleService {

    Set<Role> updateRoles(String[] roleView);

    String saveRole(String role);

    void addRole(Role role);

    void setupRoles(User user);
}
