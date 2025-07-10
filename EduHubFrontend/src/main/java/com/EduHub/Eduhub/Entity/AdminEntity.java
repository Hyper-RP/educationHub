package com.EduHub.Eduhub.Entity;

//import jakarta.persistence.Column;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "admins")
public class AdminEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false , name= "admin_email")
    private String adminEmail;

    @Column(name = "admin_password")
    private String adminPassword;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
