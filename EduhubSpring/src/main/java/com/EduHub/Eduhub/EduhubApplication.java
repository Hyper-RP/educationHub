package com.EduHub.Eduhub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class EduhubApplication {

	public static void main(String[] args) {
		SpringApplication.run( EduhubApplication.class, args);
	}

}
