package com.EduHub.Eduhub.Controller;

import com.EduHub.Eduhub.Dto.sendOtpRequest;
import com.EduHub.Eduhub.Dto.verifyOtpRequest;
import com.EduHub.Eduhub.Service.Impl.emailService;
import com.EduHub.Eduhub.Service.Impl.otpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/otp")
public class otpController {

    @Autowired
    private emailService emailServiceObj;

    @Autowired
    private otpService otpServiceObj;



    @PostMapping("/send")
    public ResponseEntity<String> sendOtp(@RequestBody sendOtpRequest request) {
        otpServiceObj.generateAndSendOtp(request.getEmail());
        return ResponseEntity.ok("OTP sent to " + request.getEmail());
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyOtp(@RequestBody verifyOtpRequest request) {
        boolean valid = otpServiceObj.verifyOtp(request.getEmail(), request.getOtp());
        if (valid) {
            return ResponseEntity.ok("OTP Verified");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or Expired OTP");
        }
    }
}
