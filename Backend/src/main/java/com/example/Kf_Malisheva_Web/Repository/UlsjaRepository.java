package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Ulesja;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UlsjaRepository extends JpaRepository<Ulesja, Integer> {

    @Query(value = "SELECT COUNT(*) FROM ulesja WHERE e_lire=0 ",nativeQuery = true)
    long getNumriRezervuar();
}
