package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.TePergjithshme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TePergjithshmeRepository extends JpaRepository<TePergjithshme, Integer> {

    @Query(value = "select * from te_pergjithshme where kategoria=:kategoria", nativeQuery = true)
    TePergjithshme gjejKategorine(@Param("kategoria") String kategoria);




}
