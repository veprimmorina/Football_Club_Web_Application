package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Ndeshja;
import com.example.Kf_Malisheva_Web.Entities.Rezervimi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface NdeshjaRepository extends JpaRepository<Ndeshja, Integer> {

    @Query(value = "select top 1 * from ndeshja order by id desc", nativeQuery = true)
    Ndeshja gjejNdeshjenEFundit();

    @Query(value = "select top 1 * from ndeshja where statusi=:statusi order by id desc", nativeQuery = true)
    Ndeshja gjejNdeshjenEFunditStatus(@Param("statusi") String statusi);
}
