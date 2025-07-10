package com.EduHub.Eduhub.WebConfig;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class webConfig {
    public WebMvcConfigurer corsConfigurer(){
        return request->request.addMapping("/**").allowedOrigins("http://localhost:3000");
    }
}
