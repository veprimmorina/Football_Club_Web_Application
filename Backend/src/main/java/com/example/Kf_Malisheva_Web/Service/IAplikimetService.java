package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.AkademiaEmail;
import com.example.Kf_Malisheva_Web.Entities.Aplikimet;
import com.example.Kf_Malisheva_Web.Entities.Kodi;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface IAplikimetService {

    public void shtoAplikimin(String emri, String mbiemri, short mosha, String pozita);

    public List<Aplikimet> merrAplikimet();

    public List<Aplikimet> merrAplikimetData(LocalDate prej, LocalDate deri);

    void ruajKodin(Kodi kodi);

    Kodi gjejKodin(int kodi);

    void verifiko(int id);

    List<Kodi> merrKodet();

     Aplikimet merrAplikiminId(int id);

     void ndryshoRegjistro(Aplikimet aplikimet);

     Kodi merrEmail(String email);

     List<String> gjejEmailat();

     Kodi [] gjejEmail();

     List<Aplikimet> gjejAplikimet(String emri);

     long numriAplikuesve();

     long aplikuesitSot();


}
