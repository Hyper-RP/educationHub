package com.EduHub.Eduhub.Repository;

import com.EduHub.Eduhub.Entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepo extends JpaRepository<StudentEntity,Long> {
//    boolean existsByRollNumber(Long rollNumber);

    Optional<StudentEntity> findByEmail(String email);

    boolean existsByEmail(String email);
}
