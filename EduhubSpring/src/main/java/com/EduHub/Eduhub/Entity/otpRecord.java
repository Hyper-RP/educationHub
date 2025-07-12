package com.EduHub.Eduhub.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "otp_records")
@Data                     // Generates getters, setters, toString, equals, hashCode
@NoArgsConstructor        // Default constructor
@AllArgsConstructor       // Constructor with all fields
public class otpRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(length = 6, nullable = false)
    private String otp;

    @Column(nullable = false)
    private LocalDateTime createdAt;
}