package com.mvgm.snug_server.core.repositories;

public interface EmailSenderRepository {
    void execute(String to, String subject, String body);
}
