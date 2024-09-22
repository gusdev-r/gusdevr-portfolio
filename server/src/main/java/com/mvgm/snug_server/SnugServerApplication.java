package com.mvgm.snug_server;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SnugServerApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.load();
        if (Boolean.parseBoolean((dotenv.get("DEV")))) {
//        	Development config .env
			System.setProperty("DB_DRIVER", dotenv.get("DB_DRIVER"));
			System.setProperty("DB_URL", dotenv.get("DB_URL"));
			System.setProperty("DB_USER", dotenv.get("DB_USER"));
			System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
			System.setProperty("DEV", dotenv.get("DEV"));
			System.setProperty("SPRING_PROFILES_ACTIVE", "dev");
        }
		System.setProperty("SECRET_KEY_JWT", dotenv.get("SECRET_KEY_JWT"));
		System.setProperty("EMAIL_ORIGIN", dotenv.get("EMAIL_ORIGIN"));
		System.setProperty("EMAIL_PASSWORD", dotenv.get("EMAIL_PASSWORD"));


		SpringApplication.run(SnugServerApplication.class, args);
	}

}

