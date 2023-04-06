package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Futbollisti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FutbollistiRepository extends JpaRepository<Futbollisti,Integer> {


    @Query(value = "select * from futbollisti where id=:id", nativeQuery = true)
    public Futbollisti findId(@Param("id") int id);

    @Query(value = "select * from futbollisti where pozita not like 'Trajner' and pozita not like 'Zevendes Trajner' and pozita not like 'Portier' order by golat desc", nativeQuery = true)
    public List<Futbollisti>gjejKryesoret();
    @Query(value = "SELECT top 8 * FROM futbollisti where pozita not like 'Trajner' and pozita not like 'Zevendes Trajner' order by golat desc", nativeQuery = true)
    public List<Futbollisti> findByGoals();

    @Query(value = "select * from futbollisti order by numri", nativeQuery = true)
    public List<Futbollisti> gjejEkipin();


}
