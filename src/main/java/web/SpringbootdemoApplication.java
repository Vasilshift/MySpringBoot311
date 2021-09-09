package web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

@SpringBootApplication
public class SpringbootdemoApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(SpringbootdemoApplication.class, args);

	}

}
