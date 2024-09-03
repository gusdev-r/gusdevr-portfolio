package com.mvgm.snug_server.core.services;

import com.mvgm.snug_server.infra.entity.User;
import com.mvgm.snug_server.infra.persistence.UserRepositoryImp;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepositoryImp userRepositoryImp;

    public User findById (Long id) {
        return userRepositoryImp.findById(id).orElseThrow();
    }
    public List<User> findAll() {
        return userRepositoryImp.findAll();
    }
    public User findByEmail (String email) {
        return userRepositoryImp.findByEmail(email).orElseThrow();
    }
    public void deleteById (Long id) {
        userRepositoryImp.deleteById(id);
    }
    public void enableUser(String email) {
        userRepositoryImp.enabledUser(email);
    }
    public void updateUser(User user, Long id) {
        User userFound = userRepositoryImp.findById(id).orElseThrow();
        User userToUpdate = new User();

        BeanUtils.copyProperties(userFound, userToUpdate);
        userToUpdate.setId(id);
        userToUpdate.setCreatedAt(userFound.getCreatedAt());
        userRepositoryImp.save(userToUpdate);
    }

}
