package com.EduHub.Eduhub.Service;

import org.springframework.http.ResponseEntity;

public interface OtpService {

  ResponseEntity<String> verifyOtp(String email, String otp);

    String generateOtp(String email);
}
