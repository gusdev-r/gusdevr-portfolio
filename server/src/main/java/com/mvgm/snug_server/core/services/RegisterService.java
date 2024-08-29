package com.mvgm.snug_server.core.services;

import com.mvgm.snug_server.core.domain.entity.Token;
import com.mvgm.snug_server.core.domain.entity.User;
import com.mvgm.snug_server.core.usecases.TokenUseCase;
import com.mvgm.snug_server.infra.persistence.UserRepositoryImp;
import com.mvgm.snug_server.utils.Constants;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RegisterService {

    private final UserRepositoryImp userRepo;
    private final UserValidationService userValidation;
    private final TokenUseCase confirmToken;
    private final EmailService emailService;

    public String generateTokenFromUser (User userDto) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(userDto.getPassword());
        if(!encoder.matches(userDto.getPassword(), encodedPassword)) {
            throw new IllegalArgumentException("Invalid password");
        }

        User user = new User();
        user.setEmail(userDto.getEmail());
        user.setUsername(userDto.getUsername());
        user.setPassword(encodedPassword);
        userRepo.save(user);

        String tokenToConfirm = UUID.randomUUID().toString();
        Token token = Token.builder()
                .token(tokenToConfirm).user(user)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(20))
                .build();

        confirmToken.save(token);
        return tokenToConfirm;
    }

    public String registerUser (User userDto) {
        userValidation.emailIsRegistered(userDto.getEmail());
        userValidation.usernameIsRegistered(userDto.getUsername());
        userValidation.validateEmail(userDto.getEmail());
        userValidation.validatePassword(userDto.getPassword());

        User userToRegister = User.builder().build();

        String token = generateTokenFromUser(userToRegister);
        String link = Constants.TOKEN_URL + token;t
        emailService.send(userDto.getEmail(), "Snug" ,link);
        return token;
    }

    public String confirmToken(String token) {
        return "";
    }
}
