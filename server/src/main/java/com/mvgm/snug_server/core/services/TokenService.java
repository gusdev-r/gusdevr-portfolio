package com.mvgm.snug_server.core.usecases;

import com.mvgm.snug_server.infra.entity.Token;
import com.mvgm.snug_server.infra.persistence.TokenRepositoryImp;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class TokenUseCase {

    private final TokenRepositoryImp tokenRepo;

    public void save(Token token) {
        tokenRepo.save(token);
    }
    public Optional<Token> getToken(String token) {
        return tokenRepo.findByToken(token);
    }
    public void confirmedAt(String token) {
        tokenRepo.updateConfirmedAt(token, LocalDateTime.now());
    }
}
