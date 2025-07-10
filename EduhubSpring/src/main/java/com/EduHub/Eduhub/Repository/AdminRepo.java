package com.EduHub.Eduhub.Repository;

import com.EduHub.Eduhub.Entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepo extends JpaRepository<AdminEntity,Long> {

    Optional<AdminEntity> findByAdminEmailAndAdminPassword(String adminEmail,String adminPassword);

}
