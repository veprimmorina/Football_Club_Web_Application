package com.example.Kf_Malisheva_Web.Repository;

import com.example.Kf_Malisheva_Web.Entities.Kodi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface KodiRepository extends JpaRepository<Kodi, Integer> {

    @Query(value = "Select * from kodi where kodi_perdoruesit=:id", nativeQuery = true)
    Kodi merrKodin(@Param("id") int id);

    @Query(value = "select * from kodi where id=:id", nativeQuery = true)
    Kodi verifikoKodin(@Param("id") int id);

    @Query(value = "Select * from kodi where emaili=:email", nativeQuery = true)
    Kodi merrKodin(@Param("email") String email);

    @Query(value = "Select emaili from kodi", nativeQuery = true)
    List<String> gjejEmailat();

    @Query(value = "select * from kodi", nativeQuery = true)
    Kodi [] gjejGjith();
}
