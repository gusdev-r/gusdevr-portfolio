package com.mvgm.snug_server.core.usecases;

import com.mvgm.snug_server.core.services.TokenService;
import com.mvgm.snug_server.infra.config.JwtConfig;
import com.mvgm.snug_server.infra.entity.Token;
import com.mvgm.snug_server.infra.entity.User;
import com.mvgm.snug_server.infra.persistence.UserRepositoryImp;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.mvgm.snug_server.utils.Logging.LOGGER;

@RequiredArgsConstructor
@Service
public class GenerateJwtToken {

    private final GetSignInKey getSignInKey;
    private final UserRepositoryImp userRepo;
    private final TokenService tokenService;
    private final JwtConfig jwtConfig;
    private final PasswordEncoder passwordEncoder;
    @Value("${application.security.jwt.expiration}")
    private long jwtExpiration;

    public String generateTokenFromUser (User userToRegister) {
        String encodedPassword = passwordEncoder.execute(userToRegister.getPassword());

        User user = new User();
        user.setUsername(userToRegister.getUsername());
        user.setEmail(userToRegister.getEmail());
        user.setPassword(encodedPassword);
        user.setUserRole(userToRegister.getUserRole());
        user.setCreatedAt(LocalDateTime.now());
        userRepo.save(user);

        String tokenToConfirm = generateToken(userToRegister);
        Token token = Token.builder()
                .token(tokenToConfirm).user(user)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(20))
                .build();

        tokenService.save(token);
        return tokenToConfirm;
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return buildToken(extraClaims, userDetails, jwtExpiration);
    }

    public String buildToken(Map<String, Object> extraClaims,
                             UserDetails userDetails, long jwtExpiration) {
        User user = (User) userDetails;
        extraClaims.put("username", user.getUsername());

        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(((User) userDetails).getEmail())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(getSignInKey.execute(), SignatureAlgorithm.HS256)
                .compact();
    }

}
