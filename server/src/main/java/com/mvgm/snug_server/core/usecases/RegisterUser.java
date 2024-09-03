package com.mvgm.snug_server.core.usecases;

import com.mvgm.snug_server.core.domain.enums.UserRole;
import com.mvgm.snug_server.core.services.TokenService;
import com.mvgm.snug_server.core.services.UserValidationService;
import com.mvgm.snug_server.infra.entity.User;
import com.mvgm.snug_server.infra.persistence.UserRepositoryImp;
import com.mvgm.snug_server.utils.Constants;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterUser {

    private final UserValidationService userValidation;
    private final GenerateJwtToken generator;
    private final SendEmail sendEmail;
    private final BuildEmail buildEmail;

    public String execute(User user) {
        userValidation.emailIsRegistered(user.getEmail());
        userValidation.usernameIsRegistered(user.getUsername());
        userValidation.validateEmail(user.getEmail());
        userValidation.validatePassword(user.getPassword());

        User userToRegister = User.builder()
                .userRole(UserRole.USER)
                .username(user.getUsername())
                .email(user.getEmail())
                .password(user.getPassword())
                .build();

        String token = generator.generateTokenFromUser(userToRegister);
        String link = Constants.TOKEN_URL + token;
        sendEmail.execute(user.getEmail(), "Confirmar cadastro - Snug" , buildEmail.confirmAcc(userToRegister.getUsername() ,link));
        return token;
    }
}
