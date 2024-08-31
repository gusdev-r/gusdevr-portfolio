package com.mvgm.snug_server.core.usecases.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class GenerateJwtTokenUseCase {

    private final GetSignInKeyUseCase getSignInKey;

    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails, long jwtExpiration
    ) {
        return buildToken(extraClaims, userDetails, jwtExpiration);
    }

    public String buildToken(Map<String, Object> extraClaims,
                              UserDetails userDetails, long jwtExpiration) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(getSignInKey.execute(), SignatureAlgorithm.HS256)
                .compact();
    }

}
