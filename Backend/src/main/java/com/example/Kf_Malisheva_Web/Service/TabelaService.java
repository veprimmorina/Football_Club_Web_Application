package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Tabela;
import com.example.Kf_Malisheva_Web.Repository.TabelaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TabelaService implements ITabelaService{

    @Autowired
    private TabelaRepository tabelaRepository;

    @Override
    public List<Tabela> gjejEkipet() {
        return this.tabelaRepository.rendit();
    }

    @Override
    public void shtoFitoren(int id) {
        Tabela ekipi=this.tabelaRepository.findId(id);
        ekipi.setPiket(ekipi.getPiket()+3);
        ekipi.setNdeshje(ekipi.getNdeshje()+1);
     this.tabelaRepository.save(ekipi);
    }

    @Override
    public void shtoBarazimin(int id) {
        Tabela ekipi=this.tabelaRepository.findId(id);
        ekipi.setPiket(ekipi.getPiket()+1);
        ekipi.setNdeshje(ekipi.getNdeshje()+1);
        this.tabelaRepository.save(ekipi);
    }

    @Override
    public void shtoHumbjen(int id) {
        Tabela ekipi=this.tabelaRepository.findId(id);
        ekipi.setNdeshje(ekipi.getNdeshje()+1);
        this.tabelaRepository.save(ekipi);
    }

    @Override
    public void shtoGolat(int id) {
        Tabela ekipi=this.tabelaRepository.findId(id);
        ekipi.setGolatEShenuar(ekipi.getGolatEShenuar()+1);
        this.tabelaRepository.save(ekipi);
    }

    @Override
    public void shtoGolatPesuar(int id) {
        Tabela ekipi=this.tabelaRepository.findId(id);
        ekipi.setGolatEPesuar(ekipi.getGolatEPesuar()+1);
        this.tabelaRepository.save(ekipi);
    }

}
