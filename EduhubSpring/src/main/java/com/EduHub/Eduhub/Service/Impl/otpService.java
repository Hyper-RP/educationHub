package com.EduHub.Eduhub.Service.Impl;

import com.EduHub.Eduhub.Entity.otpRecord;
import com.EduHub.Eduhub.Repository.OtpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service

public class otpService {
    @Autowired
    private OtpRepository otpRepo;

    @Autowired
    private emailService emailService;

//    @Autowired
//    private otpRecord record;

    public void generateAndSendOtp(String email) {
        String otp = String.valueOf((int)((Math.random() * 900000) + 100000));
        otpRecord record = new otpRecord();
        record.setEmail(email);
        record.setOtp(otp);
        record.setCreatedAt(LocalDateTime.now());
        otpRepo.save(record);

        emailService.sendOtpEmail(email, otp);
    }

    public boolean verifyOtp(String email, String otp) {
        Optional<otpRecord> recordOpt = otpRepo.findTopByEmailOrderByCreatedAtDesc(email);
        if (recordOpt.isPresent()) {
            otpRecord record = recordOpt.get();
            boolean isValid = record.getOtp().equals(otp);
            boolean isNotExpired = record.getCreatedAt().plusMinutes(5).isAfter(LocalDateTime.now());
            return isValid && isNotExpired;
        }
        return false;
    }
}
