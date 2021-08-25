package web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import web.model.Role;
import web.model.User;
import web.repository.RoleRepository;
import java.util.HashSet;
import java.util.Set;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Transactional
    @Override
    public Set<Role> updateRoles(String[] roleView) {
        Set<Role> roleList = new HashSet<>();
        for (String role : roleView) {
            if (role.equals("ROLE_ADMIN")) {
                roleList.add(roleRepository.findRoleByName("ROLE_ADMIN"));
            } else if (role.equals("ROLE_USER")) {
                roleList.add(roleRepository.findRoleByName("ROLE_USER"));
            }
        }
        return roleList;
    }

    @Transactional
    @Override
    public String saveRole(String role) {
        if (role.equals("ROLE_ADMIN")) {
            role = "ROLE_ADMIN";
        } else if (role.equals("ROLE_USER")) {
            role = "ROLE_USER";
        } return role;
    }

    @Transactional
    @Override
    public void addRole(Role role) {
        roleRepository.save(role);
    }

    @Override
    public void setupRoles(User user){
        Set<Role> rolesSet = new HashSet<>();

        if (user.getRoles().contains(roleRepository.findRoleByName("ROLE_ADMIN"))) {
            rolesSet.add(roleRepository.findRoleByName("ROLE_ADMIN"));
        }
        if (user.getRoles().contains(roleRepository.findRoleByName("ROLE_USER"))) {
            rolesSet.add(roleRepository.findRoleByName("ROLE_USER"));
        }
    }
}
