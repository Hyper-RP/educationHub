package com.EduHub.Eduhub.Service.Impl;

import com.EduHub.Eduhub.Dto.LoginAdminRequest;
import com.EduHub.Eduhub.Entity.AdminEntity;
import com.EduHub.Eduhub.Repository.AdminRepo;
import com.EduHub.Eduhub.Service.AdminService;
import jakarta.validation.constraints.Email;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminServiceImp implements AdminService {

    @Autowired
    private final AdminRepo adminRepo;

    @Override
    public String loginAdmin(LoginAdminRequest request) {
      AdminEntity admin = adminRepo.findByAdminEmailAndAdminPassword(request.getAdminEmail(), request.getAdminPassword())
              .orElseThrow(() -> new RuntimeException("Admin not found"));
        return "Login Seccessfully";
    }
}
