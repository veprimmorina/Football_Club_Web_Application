package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Futbollisti;
import com.example.Kf_Malisheva_Web.Entities.Tabela;
import com.example.Kf_Malisheva_Web.Repository.FutbollistiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class FutbollistiService implements IFutbollistiService{
 @Autowired
 private FutbollistiRepository futbollistiRepository;


    @Override
    public List<Futbollisti> gjejTopFutbollistet() {
        return this.futbollistiRepository.gjejKryesoret();
    }

    @Override
    public List<Futbollisti> gjejGjithFutbollistet() {
        return this.futbollistiRepository.findByGoals();
    }

    @Override
    public List<Futbollisti> gjejGjithEkipin() {
        return this.futbollistiRepository.gjejEkipin();
    }

    @Override
    public List<Futbollisti> findByName(String name) {
        return null;
    }

    @Override
    public List<Futbollisti> findByGoal() {
        return this.futbollistiRepository.findByGoals();
    }

    @Override
    public void ruajId(int id, String emri) {
            Futbollisti futbollisti=this.futbollistiRepository.findId(id);
            futbollisti.setEmri(emri);
            this.futbollistiRepository.save(futbollisti);
    }

    @Override
    public void shtoFutbollistin(String photoPath, String emri, String mbiemri, int mosha, int numri, String pozita, int gola, int asistime, String shtetesia) {
        Futbollisti futbollisti=new Futbollisti(emri, mbiemri, numri, pozita, mosha, photoPath, shtetesia, gola, asistime);
        this.futbollistiRepository.save(futbollisti);
    }

    @Override
    public void fshijFutbollistin(int id) {
        this.futbollistiRepository.deleteById(id);
    }

    @Override
    public long numriLojtareve() {
        return this.futbollistiRepository.count();
    }
}
