package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Lajmet;
import com.example.Kf_Malisheva_Web.Repository.LajmetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.util.Date;
import java.util.List;
@Service
public class LajmetService implements ILajmetService{
    @Autowired
    private LajmetRepository lajmetRepository;


    @Override
    public List<Lajmet> getLajmet() {
        return lajmetRepository.lajmetEFundit();
    }

    @Override
    public Lajmet gjejLajmin(int id) {
        return this.lajmetRepository.gjejLajmin(id);
    }

    @Override
    public List<Lajmet> gjejLajmet() {
        return this.lajmetRepository.gjejGjith();
    }

    @Override
    public void ruajLajmin(String fotografia, String pershkrimi, String titulli, Date data, Time ora) {
        Lajmet lajmet=new Lajmet(fotografia,pershkrimi,titulli,data,ora);
        this.lajmetRepository.save(lajmet);
    }

    @Override
    public List<Lajmet> gjejLajmetTitulli(String titulli) {
        return this.lajmetRepository.gjejLajmet(titulli);
    }
}
