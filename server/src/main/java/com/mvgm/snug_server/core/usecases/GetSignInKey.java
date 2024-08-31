package com.mvgm.snug_server.core.usecases.jwt;

import com.mvgm.snug_server.infra.config.JwtConfig;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;

@Service
public class GetSignInKeyUseCase {
    private final JwtConfig jwtConfig;

    public GetSignInKeyUseCase(JwtConfig jwtConfig) {
        this.jwtConfig = jwtConfig;
    }

    public Key execute() {
        return Keys.hmacShaKeyFor(jwtConfig.getSecretKey().getBytes(StandardCharsets.UTF_8));
    }
}

