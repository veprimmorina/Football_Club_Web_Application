package com.example.Kf_Malisheva_Web.Service;
import com.example.Kf_Malisheva_Web.Entities.AkademiaEmail;
import com.example.Kf_Malisheva_Web.Entities.Aplikimet;
import com.example.Kf_Malisheva_Web.Entities.Futbollisti;
import com.example.Kf_Malisheva_Web.Entities.Kodi;
import com.example.Kf_Malisheva_Web.Repository.AplkimetRepository;
import com.example.Kf_Malisheva_Web.Repository.KodiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AplikimetService implements IAplikimetService{

    @Autowired
    private AplkimetRepository aplkimetRepository;

    @Autowired
    private KodiRepository kodiRepository;
    @Override
    public void shtoAplikimin(String emri, String mbiemri, short mosha, String pozita) {
        Aplikimet aplikimet=new Aplikimet(emri,mbiemri, mosha, pozita);
        this.aplkimetRepository.save(aplikimet);
    }

    @Override
    public List<Aplikimet> merrAplikimet() {
        return this.aplkimetRepository.findAll();
    }

    @Override
    public List<Aplikimet> merrAplikimetData(LocalDate prej, LocalDate deri) {

        return this.aplkimetRepository.gjejAplikimetData(prej,deri);
    }

    @Override
    public void ruajKodin(Kodi kodi) {
        this.kodiRepository.save(kodi);
    }

    @Override
    public Kodi gjejKodin(int kodi) {
        return this.kodiRepository.merrKodin(kodi);
    }

    @Override
    public void verifiko(int id) {
        Kodi kodi=kodiRepository.verifikoKodin(id);
         kodi.setKodiSakt(true);
         this.kodiRepository.save(kodi);
    }

    @Override
    public List<Kodi> merrKodet() {
        return this.kodiRepository.findAll();
    }

    @Override
    public Aplikimet merrAplikiminId(int id) {
        return this.aplkimetRepository.gjejAplikimetId(id);
    }
    public void ndryshoRegjistro(Aplikimet aplikimet){
        this.aplkimetRepository.save(aplikimet);
    }

    @Override
    public Kodi merrEmail(String email) {
        return this.kodiRepository.merrKodin(email);
    }

    @Override
    public List<String> gjejEmailat() {
        return this.kodiRepository.gjejEmailat();
    }

    @Override
    public Kodi[] gjejEmail() {
        return this.kodiRepository.gjejGjith();
    }

    @Override
    public List<Aplikimet> gjejAplikimet(String emri) {
        return this.aplkimetRepository.gjejAplikuesit(emri);
    }

    @Override
    public long numriAplikuesve() {
        return this.aplkimetRepository.count();
    }

    @Override
    public long aplikuesitSot() {
        LocalDate data=LocalDate.now();
        return this.aplkimetRepository.gjejAplikuesitSot(data);
    }


}
