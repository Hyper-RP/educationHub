package com.EduHub.Eduhub.Controller;

import com.EduHub.Eduhub.Dto.LoginRequest;
import com.EduHub.Eduhub.Entity.StudentEntity;
import com.EduHub.Eduhub.Dto.RegisterStudentRequest;
import com.EduHub.Eduhub.Service.Impl.otpService;
import com.EduHub.Eduhub.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/students")  // root path
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private otpService otpServiceObj;

    @PostMapping("/RegisterStudent")
    public ResponseEntity<StudentEntity> registerStudent(@RequestBody RegisterStudentRequest request) {
        StudentEntity student = studentService.createStudent(request);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }

    @GetMapping("/getAllStudents")
    public ResponseEntity<List<StudentEntity>> getAllStudents() {
        List<StudentEntity> students = studentService.getAllStudents();
        return new ResponseEntity<>(students, HttpStatus.ACCEPTED);
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<List<StudentEntity>> getUserById(@PathVariable Long id) {
        List<StudentEntity> student = studentService.getStudent(id);
        return new ResponseEntity<>(student,HttpStatus.ACCEPTED);
    }

    @PostMapping("/Login")
    public String LoginStudent(@RequestBody LoginRequest request){
        studentService.loginStudent(request);
        return "Student Login Successfully";
    }

    @PostMapping("/student/send-otp")
    public ResponseEntity<String> sendOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        return otpServiceObj.generateAndSendOtp(email);
    }


    @PostMapping("/student/verify-otp")
    public boolean verifyOtp(@RequestParam String email, @RequestParam String otp) {
        return otpServiceObj.verifyOtp(email, otp);
    }

    @PostMapping("/student/reset-password")
    public ResponseEntity<String> resetPassword(@RequestParam String email, @RequestParam String newPassword) {
        return studentService.resetPassword(email, newPassword);
    }
}
