package com.mvgm.snug_server.core.usecases;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordEncoder {

    public String execute (String password) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(password);
            if(!encoder.matches(password, encodedPassword)) {
                throw new IllegalArgumentException("Invalid password");
            }
        return encodedPassword;
    }
}
