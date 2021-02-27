package com.example.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.springboot.model.User;
import com.example.springboot.repository.UserRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("Kaushik", "Yelne", "kaushikyelne111@gmail.com"));
		this.userRepository.save(new User("Kunal", "Yelne", "kunalyelne111@gmail.com"));
		this.userRepository.save(new User("Tushar", "Yelne", "tusharyelne111@gmail.com"));
	}

}
