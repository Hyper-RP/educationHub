package com.EduHub.Eduhub.Dto;

import jdk.jfr.Timestamp;
import lombok.Data;


@Data
public class RegisterStudentRequest {
    private String name;
    private String email;
    private String password;
}
