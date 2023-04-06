package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.*;
import com.example.Kf_Malisheva_Web.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StadiumiService implements IStadiumiService{
@Autowired
private StadiumiRepository stadiumiRepository;

@Autowired
private RezervimiRepository rezervimiRepository;

@Autowired
private NdeshjaRepository ndeshjaRepository;
@Autowired
private TePergjithshmeRepository tePergjithshmeRepository;

@Autowired
private SponzoretRepository sponzoretRepository;

@Autowired
private UlsjaRepository ulsjaRepository;

    @Override
    public List <Ulesja> getAll() {
        return this.stadiumiRepository.findAll();
    }

    @Override
    public void regjistroRezervimin(int id, String emri, String mbiemri, String emailAdresa) {
        Ulesja ulesja=this.stadiumiRepository.findId(id);
        ulesja.setELire(false);
        Rezervimi rezervimi=new Rezervimi(id,emri,mbiemri,emailAdresa);
        this.rezervimiRepository.save(rezervimi);

    }

    @Override
    public Rezervimi ktheRezerviminEFundit() {
        return this.rezervimiRepository.gjejRezerviminEFundit();
    }

    @Override
    public Ndeshja gjejNdeshjenEFundt() {
        return this.ndeshjaRepository.gjejNdeshjenEFundit();
    }

    @Override
    public TePergjithshme gjejKategorine(String kategoria) {
        return this.tePergjithshmeRepository.gjejKategorine(kategoria);
    }

    @Override
    public List<Sponzoret> gjejSponzoret() {
      return this.sponzoretRepository.findAll();
    }

    @Override
    public void fshijSponzorin(int id) {
        this.sponzoretRepository.deleteById(id);
    }

    @Override
    public Ndeshja gjejNdeshjenEFunditStatus() {
        return this.ndeshjaRepository.gjejNdeshjenEFunditStatus("Perfunduar");
    }

    @Override
    public void setELire() {
        this.stadiumiRepository.setELire();
    }

    @Override
    public long numriRezervimeve() {
        return this.rezervimiRepository.count();
    }

    @Override
    public List<Ndeshja> gjejNdeshjet() {
        return this.ndeshjaRepository.findAll();
    }

    @Override
    public long getNumriRezervuar() {
        return this.ulsjaRepository.getNumriRezervuar();
    }


}
