package com.mvgm.snug_server.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "tb_user")
@Entity
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(unique = true, nullable = false, length = 30)
    private String username;
    @Column(unique = true, nullable = false, length = 100)
    private String email;
    @Column(unique = true, nullable = false, length = 100)
    private String password;
//    @Enumerated(EnumType.STRING)
    @Column(name = "user_role", unique = true, nullable = false, length = 100)
    private String userRole;
    @Column(name = "created_at", nullable = false, length = 70)
    private LocalDateTime createdAt;
    @Column(name = "updated_at", nullable = false, length = 70)
    private LocalDateTime updatedAt;

    private Boolean locked;

    private Boolean enabled;

    public User(String username, String email, String password, String userRole) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.userRole = null;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return UserDetails.super.isEnabled();
    }
}
