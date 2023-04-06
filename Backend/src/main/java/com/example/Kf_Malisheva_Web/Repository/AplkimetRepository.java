package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Aplikimet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface AplkimetRepository extends JpaRepository<Aplikimet, Integer> {

    @Query(value = "select * from aplikimet where data_aplikimit>=:dataPrej and data_aplikimit<=:dataDeri or data_aplikimit>=dataPrej", nativeQuery = true)
    public List<Aplikimet> gjejAplikimetData(@Param("dataPrej") LocalDate dataPrej, @Param("dataDeri") LocalDate dataDeri);

    @Query(value = "select * from aplikimet where id=:id", nativeQuery = true)
    Aplikimet gjejAplikimetId(@Param("id") int id);

    @Query(value = "select * from aplikimet where emri like %:emri% or mbiemri like %:emri%", nativeQuery = true)
    List<Aplikimet> gjejAplikuesit(@Param("emri") String emri);

    @Query(value = "SELECT COUNT(*) FROM aplikimet WHERE data_aplikimit=:data", nativeQuery = true)
    long gjejAplikuesitSot(@Param("data") LocalDate data);


}
