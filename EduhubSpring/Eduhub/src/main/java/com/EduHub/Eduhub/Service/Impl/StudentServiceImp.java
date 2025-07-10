package com.EduHub.Eduhub.Service.Impl;

import com.EduHub.Eduhub.Dto.LoginRequest;
import com.EduHub.Eduhub.Dto.RegisterStudentRequest;
import com.EduHub.Eduhub.Entity.StudentEntity;
import com.EduHub.Eduhub.Repository.StudentRepo;
import com.EduHub.Eduhub.Service.OtpService;
import com.EduHub.Eduhub.Service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImp implements StudentService {

    @Autowired
    public final StudentRepo studentRepo;

    @Autowired
    private OtpService otpService;

    @Override
    public StudentEntity createStudent(RegisterStudentRequest request) {
        if(studentRepo.findByEmail(request.getEmail()).isPresent()){
            throw new RuntimeException("Student Already Exists");
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        if (request.getPassword() == null) {
            throw new IllegalArgumentException("Password cannot be null");
        }
        String hashedPassword = encoder.encode(request.getPassword());

        StudentEntity student = new StudentEntity();
        student.setName(request.getName());
        student.setEmail(request.getEmail());
        student.setPassword(hashedPassword);


        return studentRepo.save(student);

    }

    @Override
    public List<StudentEntity> getAllStudents() {
        return studentRepo.findAll();
    }

    @Override
    public List<StudentEntity> getStudent(Long id) {
        StudentEntity student = studentRepo.findById(id)
                .orElseThrow(() ->  new RuntimeException("User is not Exists"));
        return Collections.singletonList(student);
    }

    @Override
    public String loginStudent(LoginRequest request) {
        StudentEntity student =  studentRepo.findByEmail(request.getEmail())
                .orElseThrow(()->  new RuntimeException("Invalid Email" + request.getEmail()));

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        if( !encoder.matches(request.getPassword(), student.getPassword())){
            return "Invalid Password";
        }

        return "User Login Successfully" + student.getName();
    }

    @Override
    public ResponseEntity<String> sendOtpToEmail(String email) {
        if (!studentRepo.existsByEmail(email)) {
            return ResponseEntity.badRequest().body("Email not found");
        }

        String otp = otpService.generateOtp(email);

        // Simulate sending email (or later integrate email service)
        System.out.println("OTP for " + email + " is: " + otp);

        return ResponseEntity.ok("OTP sent to your email");
    }

    @Override
    public ResponseEntity<String> verifyOtp(String email, String otp) {
        return otpService.verifyOtp(email, otp);
    }

    @Override
    public ResponseEntity<String> resetPassword(String email, String newPassword) {
        StudentEntity student = studentRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Student not found with email: " + email));

        if (newPassword == null || newPassword.trim().isEmpty()) {
            throw new IllegalArgumentException("New password must not be empty");
        }

        String encodedPassword = new org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder().encode(newPassword);
        student.setPassword(encodedPassword);
        studentRepo.save(student);

        return ResponseEntity.ok("Password updated successfully");
    }

}
