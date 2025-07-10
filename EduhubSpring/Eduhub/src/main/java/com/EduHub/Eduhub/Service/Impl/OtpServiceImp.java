package com.EduHub.Eduhub.Service.Impl;

import com.EduHub.Eduhub.Service.OtpService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpServiceImp implements OtpService {
    private final Map<String, String> otpStorage = new ConcurrentHashMap<>();

    @Override
    public String generateOtp(String email) {
        return String.format("%06d", new Random().nextInt(999999));
    }

    @Override
    public ResponseEntity<String> verifyOtp(String email, String otp) {
        return null;
    }

}
