package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Futbollisti;
import com.example.Kf_Malisheva_Web.Entities.Ulesja;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StadiumiRepository extends JpaRepository<Ulesja, Integer> {

    @Query(value = "select * from ulesja",nativeQuery = true)
    List<Ulesja> find();

    @Query(value = "select * from ulesja where id=:id",nativeQuery = true)
    Ulesja findId(@Param("id") int id);

    @Query(value = "update ulesja set e_lire='true'",nativeQuery = true)
    void setELire();


}
