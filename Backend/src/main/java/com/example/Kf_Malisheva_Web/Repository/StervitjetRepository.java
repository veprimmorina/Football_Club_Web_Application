package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Stervitjet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StervitjetRepository extends JpaRepository<Stervitjet,Integer> {

    @Query(value = "select top 2 * from stervitjet where grupmosha='U11'", nativeQuery = true)
    List<Stervitjet> stervitjetU11();

    @Query(value = "select top 2 * from stervitjet where grupmosha='U13'", nativeQuery = true)
    List<Stervitjet> stervitjetU13();

    @Query(value = "select top 2 * from stervitjet where grupmosha='U15'", nativeQuery = true)
    List<Stervitjet> stervitjetU15();

    @Query(value = "select top 2 * from stervitjet where grupmosha='U17'", nativeQuery = true)
    List<Stervitjet> stervitjetU17();

}
