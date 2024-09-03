package com.mvgm.snug_server.core.usecases;

import com.mvgm.snug_server.app.dtos.AuthDto;
import com.mvgm.snug_server.app.dtos.TokenDto;
import com.mvgm.snug_server.core.services.UserService;
import com.mvgm.snug_server.infra.entity.User;
import com.mvgm.snug_server.infra.persistence.UserRepositoryImp;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthUser {
    private final UserService userService;
    private final GenerateJwtToken generator;
    private final AuthenticationManager authManager;
    private final UserRepositoryImp userRepo;

    public TokenDto execute(AuthDto authDto) {
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authDto.email(),
                        authDto.password()
                )
        );
        User user = userRepo.findByEmail(authDto.email()).orElseThrow(() -> new NullPointerException("User not found"));
        String jwtToken = generator.generateToken(user);

        return TokenDto.builder()
                .token(jwtToken)
                .build();
    }

}
