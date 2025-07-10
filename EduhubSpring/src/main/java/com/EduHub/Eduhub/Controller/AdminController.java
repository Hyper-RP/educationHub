package com.EduHub.Eduhub.Controller;

import com.EduHub.Eduhub.Dto.LoginAdminRequest;
import com.EduHub.Eduhub.Service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/Admin")
@RequiredArgsConstructor
public class AdminController {

    @Autowired
    public final AdminService adminService;

    @PostMapping("/adminLogin")
    public ResponseEntity<String> LoginAdmin(@RequestBody LoginAdminRequest request){
        return ResponseEntity.ok(adminService.loginAdmin(request));
    }
}
