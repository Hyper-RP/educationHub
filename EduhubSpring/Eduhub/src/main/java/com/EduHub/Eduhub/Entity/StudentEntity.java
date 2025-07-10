package com.EduHub.Eduhub.Entity;

import jakarta.persistence.*;
import jdk.jfr.Timestamp;
import lombok.*;
import org.aspectj.bridge.Message;
import org.aspectj.lang.annotation.RequiredTypes;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "students")
public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true)
    private Long id;

    private String name;
    private String email;
    private String password;

}

