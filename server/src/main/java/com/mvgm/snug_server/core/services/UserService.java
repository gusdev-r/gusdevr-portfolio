package com.mvgm.snug_server.core.services;

import com.mvgm.snug_server.core.domain.entity.User;
import com.mvgm.snug_server.infra.persistence.UserRepositoryImp;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepositoryImp userRepositoryImp;

    public User findById (UUID id) {
        return userRepositoryImp.findById(id).orElseThrow();
    }
    public List<User> findAll() {
        return userRepositoryImp.findAll();
    }
    public User findByEmail (String email) {
        return userRepositoryImp.findByEmail(email).orElseThrow();
    }
    public void deleteById (UUID id) {
        userRepositoryImp.deleteById(id);
    }

}
