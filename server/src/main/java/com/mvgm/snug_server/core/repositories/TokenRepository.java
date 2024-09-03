package com.mvgm.snug_server.core.repositories;


import com.mvgm.snug_server.infra.entity.Token;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.Optional;

public interface TokenRepository {
    Optional<Token> findByToken(String token);
    @Modifying
    @Query("UPDATE Token t SET t.confirmedAt = :confirmedAt WHERE t.token = :tokenCode")
    void updateConfirmedAt(String tokenCode, LocalDateTime confirmedAt);
}
