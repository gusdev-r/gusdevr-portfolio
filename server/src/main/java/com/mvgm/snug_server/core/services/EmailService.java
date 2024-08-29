package com.mvgm.snug_server.core.services;

import com.mvgm.snug_server.core.repositories.EmailSenderRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;

@RequiredArgsConstructor
@Service
public class EmailService implements EmailSenderRepository {

    private final JavaMailSender mailSender;

    @Override
    public void send(String to, String subject, String body) {
        MimeMessage mimeMsg = mailSender.createMimeMessage();
        MimeMessageHelper msg = new MimeMessageHelper(mimeMsg, "utf-8");
        try {
            msg.setText(body, true);
            msg.setTo(to);
            msg.setSubject(subject);
            msg.setFrom("gusdev.testcode@gmail.com");
            mailSender.send(mimeMsg);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
}
