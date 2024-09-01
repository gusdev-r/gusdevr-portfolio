CREATE TABLE tb_token (
                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                       token VARCHAR(255) NOT NULL,
                       created_at DATETIME NOT NULL,
                       expires_at DATETIME NOT NULL,
                       confirmed_at DATETIME,
                       user_id BIGINT NOT NULL,
                       FOREIGN KEY (user_id) REFERENCES tb_user(id)
);
