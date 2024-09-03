package com.mvgm.snug_server.core.usecases;

import com.mvgm.snug_server.core.services.TokenService;
import com.mvgm.snug_server.core.services.UserService;
import com.mvgm.snug_server.infra.entity.Token;
import com.mvgm.snug_server.infra.persistence.TokenRepositoryImp;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static com.mvgm.snug_server.utils.Logging.LOGGER;

@RequiredArgsConstructor
@Transactional
@Service
public class ConfirmToken {
    private final TokenRepositoryImp tokenRepositoryImp;
    private final TokenService tokenService;
    private final UserService userService;
    private final BuildEmail buildEmail;
    private final SendEmail sendEmail;

    public void execute(String token) {
        Token tokenToConfirm  = tokenService.getToken(token).orElseThrow(() -> new IllegalArgumentException("Invalid token"));

        if (tokenToConfirm.getConfirmedAt() != null) {
            throw new IllegalArgumentException("Token already confirmed");
        }
        LocalDateTime expiredTime = tokenToConfirm.getExpiresAt();
        if (expiredTime.isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Token already expired");
        }
        tokenToConfirm.setConfirmedAt(expiredTime);
        String userEmail = tokenToConfirm.getUser().getEmail();
        userService.enableUser(userEmail);
        sendEmail.execute(userEmail, "Confirmação de cadastro - Snug", buildEmail.thksForRegistering());
    }
}
