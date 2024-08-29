package com.mvgm.snug_server.infra.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtConfig {
    @Value("${application.security.jwt.secret-key}")
    private String secretKey;

    public String getSecretKey() {
        return secretKey;
    }
}

