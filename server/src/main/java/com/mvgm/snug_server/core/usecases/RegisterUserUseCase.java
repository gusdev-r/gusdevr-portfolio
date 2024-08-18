package com.mvgm.snug_server.core.usecases;

import com.mvgm.snug_server.core.entity.User;
import com.mvgm.snug_server.core.service.UserValidationService;
import com.mvgm.snug_server.infra.persistence.UserRepositoryImp;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestParam;

@RequiredArgsConstructor
public class RegisterUserUseCase {
    private final UserRepositoryImp userRepositoryImp;
    private final UserValidationService userValidationService;

    public User execute (@RequestParam String email, @RequestParam String username, @RequestParam String password) {
        userValidationService.validateEmail(email);
        userValidationService.validateEmailExists(email);
        userValidationService.validateUsernameExists(username);
        userValidationService.validatePassword(password);

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(password);
        if(!encoder.matches(password, encodedPassword)) {
            throw new IllegalArgumentException("Invalid password");
        }
        User user = new User();
        user.setEmail(email);
        user.setUsername(username);
        user.setPassword(encodedPassword);
        //TODO: send email ; jwt ; 2auth; etc;
        userRepositoryImp.save(user);
        return user;
    }
}
