package web.service;

import web.model.Role;
import java.util.Set;

public interface RoleService {
    Set<Role> updateRoles(String[] roleView);

    void addRole(Role role);
}
