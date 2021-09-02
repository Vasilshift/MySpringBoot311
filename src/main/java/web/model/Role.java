package web.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import javax.persistence.*;
import java.util.*;

@Getter
@Setter
@Entity
@Table(name = "roles")
public class Role implements GrantedAuthority{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "role")
    private String name;

    public Role(Long id, String name) {
        this.id = id;
        this.name = name;

    }

    @Transient
    @ManyToMany(mappedBy = "roles")
    private Set<User> users;

    public Role() { }

    @Override
    public String getAuthority() {
        return name;
    }

    @Override
    public String toString() {
        return name.substring(5);
    }

}
