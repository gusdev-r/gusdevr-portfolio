package com.mvgm.snug_server.core.service;

import com.mvgm.snug_server.infra.persistence.UserRepositoryImp;
import com.mvgm.snug_server.utils.Regex;
import lombok.RequiredArgsConstructor;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RequiredArgsConstructor
public class UserValidationService {
    private final UserRepositoryImp userRepositoryImp;

    public void validateEmail(String email) {
        if(email.isEmpty()) {
            throw new NullPointerException("Empty email field");
        }
        if(!Pattern.matches(Regex.EMAIL_REGEX, email)) {
            throw new IllegalArgumentException("Invalid email format");
        }
    }
    public void validatePassword(String password) {
        if(password.isEmpty()) {
            throw new NullPointerException("Empty password field");
        }
        if(!Pattern.matches(Regex.PASSWORD_REGEX, password)) {
            throw new IllegalArgumentException("Invalid password format");
        }
    }

    public void validateEmailExists(String email) {
        if (userRepositoryImp.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("Email was already taken.");
        }
    }
    public void validateUsernameExists(String username) {
        if (userRepositoryImp.findByUsername(username).isPresent()) {
            throw new IllegalArgumentException("Username was already taken.");
        }
    }

}
