package com.mvgm.snug_server.infra.persistence;

import com.mvgm.snug_server.infra.entity.Token;
import com.mvgm.snug_server.core.repositories.TokenRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepositoryImp extends JpaRepository<Token, Long>, TokenRepository {
}
