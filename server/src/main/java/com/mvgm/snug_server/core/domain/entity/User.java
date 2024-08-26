package com.mvgm.snug_server.core.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "tb_user")
public class User {

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

    public User(String username, String email, String password, String userRole) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.userRole = null;
    }

}
