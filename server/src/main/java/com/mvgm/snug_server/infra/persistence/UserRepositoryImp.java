package com.mvgm.snug_server.infra.persistence;

import com.mvgm.snug_server.infra.entity.User;
import com.mvgm.snug_server.core.repositories.UserRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepositoryImp extends JpaRepository<User, Long>, UserRepository {
}
