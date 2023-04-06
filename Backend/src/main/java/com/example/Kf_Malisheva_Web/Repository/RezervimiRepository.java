package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Rezervimi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RezervimiRepository extends JpaRepository<Rezervimi, Integer> {

    @Query(value = "SELECT TOP 1 * FROM rezervimi ORDER BY ID DESC", nativeQuery = true)
    Rezervimi gjejRezerviminEFundit();




}
