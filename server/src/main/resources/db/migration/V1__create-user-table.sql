CREATE TABLE tb_user (
                         id BIGINT AUTO_INCREMENT PRIMARY KEY,
                         username VARCHAR(30) NOT NULL UNIQUE,
                         email VARCHAR(100) NOT NULL UNIQUE,
                         password VARCHAR(100) NOT NULL,
                         user_role VARCHAR(30) NOT NULL,
                         created_at DATETIME NOT NULL,
                         updated_at DATETIME,
                         locked TINYINT(1),
                         enabled TINYINT(1)
);
