package com.EduHub.Eduhub.Dto;


import lombok.Data;
@Data
public class verifyOtpRequest {
    private String email;
    private String otp;
}