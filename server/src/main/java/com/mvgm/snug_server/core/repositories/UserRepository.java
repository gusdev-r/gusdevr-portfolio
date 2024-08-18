package com.mvgm.snug_server.core.repositories;

import com.mvgm.snug_server.core.entity.User;

import java.util.Optional;

public interface UserRepository {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}
