package com.EduHub.Eduhub.Repository;

import com.EduHub.Eduhub.Entity.otpRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OtpRepository extends JpaRepository<otpRecord, Long> {
    Optional<otpRecord> findTopByEmailOrderByCreatedAtDesc(String email);
}
