package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.AkademiaEmail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface AkademiaEmailRepository extends JpaRepository<AkademiaEmail, Integer> {

    @Query(value = "insert into akademia_email (id,emri_perdoruesit,fjalkalimi) values (:id,:emri,:fjalkalimi)", nativeQuery = true)
    public void ruajRegjistrimin(@Param("id") int id,@Param("emri")String emri, @Param("fjalkalimi") String fjalkalimi);

    @Query(value = "select * from akademia_email where roli=:admin", nativeQuery = true)
    List<AkademiaEmail> gjejAdministratoret(@Param("admin") String admin);

    @Query(value = "select * from akademia_email where emri_perdorue0.sit=:emri AND fjalkalimi=:fjalkalimi", nativeQuery = true)
    AkademiaEmail login(@PathVariable("emri") String emri, @PathVariable("fjalkalimi") String fjalkalimi);

    @Query(value = "select * from akademia_email where emriPerdoruesit=:username", nativeQuery = true)
    AkademiaEmail gjejUsername(@PathVariable("username") String username);

    @Query(value = "update akademia_email set fjalkalimi=:fjalkalimi where emri_perdoruesit=:emri", nativeQuery = true)
    void ndryshoFjalkalimin(@PathVariable("fjalkalimi") String fjalkalimi, @PathVariable("emri") String emri);




}
