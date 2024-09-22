package com.mvgm.snug_server.infra.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

//@Configuration
@Getter
@Component
public class JwtConfig {
    @Value("${application.security.jwt.secret-key}")
    private String secretKey;
}

