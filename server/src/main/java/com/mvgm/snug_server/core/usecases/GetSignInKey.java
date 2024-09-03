package com.mvgm.snug_server.core.usecases;

import com.mvgm.snug_server.infra.config.JwtConfig;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;

@RequiredArgsConstructor
@Service
public class GetSignInKey {
    private final JwtConfig jwtConfig;

    public Key execute() {
        return Keys.hmacShaKeyFor(jwtConfig.getSecretKey().getBytes(StandardCharsets.UTF_8));
    }
}

