package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.AkademiaEmail;
import com.example.Kf_Malisheva_Web.Entities.Futbollisti;
import com.example.Kf_Malisheva_Web.Repository.AkademiaEmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmailService implements IEmailService{

    @Autowired
    private AkademiaEmailRepository akademiaEmailRepository;

    @Override
    public void shtoPerdoruesin(int id,String emri, String fjalkalimi) {
        this.akademiaEmailRepository.ruajRegjistrimin(id,emri,fjalkalimi);
    }

    @Override
    public List<AkademiaEmail> gjejAdministratoret() {
        String admin="ADMIN";
        return this.akademiaEmailRepository.gjejAdministratoret(admin);
    }

    @Override
    public AkademiaEmail login(String username, String fjalkalimi) {
        return this.akademiaEmailRepository.login(username, fjalkalimi);
    }

    @Override
    public long numriRegjistruar() {
        return this.akademiaEmailRepository.count();
    }

    @Override
    public void ndryshoFjalkalimin(String fjalkalimi, String emri) {
        this.akademiaEmailRepository.ndryshoFjalkalimin(fjalkalimi,emri);
    }
}
