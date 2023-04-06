package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Njoftimet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NjoftimetRepository extends JpaRepository<Njoftimet,Integer> {

    @Query(value="select top 4 * from njoftimet order by id desc", nativeQuery = true)
    public List<Njoftimet> merrNjoftimet();

}
