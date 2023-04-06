package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Tabela;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface TabelaRepository extends JpaRepository<Tabela, Integer> {

    @Query(value = "update tabela set piket=:piketPlus where id=:id", nativeQuery = true)
    public void shtoPiketFitore();

    @Query(value = "select * from tabela where id=:id", nativeQuery = true)
    public Tabela findId(@Param("id") int id);

    @Query(value = "SELECT * FROM tabela order by piket desc", nativeQuery = true)
    public List <Tabela> rendit();
}
