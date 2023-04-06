package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Njoftimet;
import com.example.Kf_Malisheva_Web.Repository.NjoftimetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NjoftimetService implements INjoftimetService{

    @Autowired
    private NjoftimetRepository njoftimetRepository;


    @Override
    public List<Njoftimet> merrNjoftimet() {
        return this.njoftimetRepository.merrNjoftimet();
    }

    @Override
    public void shtoNjoftimin(String pershkrimi, String trajneri) {
        Njoftimet njoftimi=new Njoftimet(pershkrimi,trajneri);
        this.njoftimetRepository.save(njoftimi);
    }
}
