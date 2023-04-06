package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Aplikimet;
import com.example.Kf_Malisheva_Web.Entities.Lajmet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LajmetRepository extends JpaRepository<Lajmet, Integer> {


    @Query(value = "select top 3 * from lajmet order by id desc", nativeQuery = true)
    List<Lajmet> lajmetEFundit();

    @Query(value = "select * from lajmet where id=:id", nativeQuery = true)
    Lajmet gjejLajmin(@Param("id") int id);

    @Query(value = "select * from lajmet order by id desc", nativeQuery = true)
    List<Lajmet> gjejGjith();

    @Query(value = "select * from lajmet where pershkrimi like %:titulli%", nativeQuery = true)
    List<Lajmet> gjejLajmet(@Param("titulli") String titulli);
}
