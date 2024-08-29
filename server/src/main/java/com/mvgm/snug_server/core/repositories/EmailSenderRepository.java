package com.mvgm.snug_server.core.repositories;

public interface EmailSenderRepository {
    void send(String to, String subject, String body);
}
