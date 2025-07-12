package com.EduHub.Eduhub.Service.Impl;

import com.EduHub.Eduhub.Entity.otpRecord;
import com.EduHub.Eduhub.Repository.OtpRepository;
import com.EduHub.Eduhub.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service

public class otpService {
    @Autowired
    private OtpRepository otpRepo;

    @Autowired
    private emailService emailService;

    @Autowired
    private StudentRepo studentRepoObj;

//    @Autowired
//    private otpRecord record;

    public ResponseEntity<String> generateAndSendOtp(String email) {
        if (!studentRepoObj.existsByEmail(email)) {
            return ResponseEntity.badRequest().body("Email not found");
        }
        else {
            String otp = String.valueOf((int)((Math.random() * 900000) + 100000));
            otpRecord record = new otpRecord();
            record.setEmail(email);
            record.setOtp(otp);
            record.setCreatedAt(LocalDateTime.now());
            otpRepo.save(record);
            emailService.sendOtpEmail(email, otp);
            return ResponseEntity.ok("otp sent successfully to "+email);
        }


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
