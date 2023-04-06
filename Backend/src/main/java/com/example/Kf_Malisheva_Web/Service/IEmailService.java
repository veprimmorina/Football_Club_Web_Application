package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.AkademiaEmail;

import java.util.List;

public interface IEmailService {

    public void shtoPerdoruesin(int id,String emri, String fjalkalimi);

    public List<AkademiaEmail> gjejAdministratoret();

    public AkademiaEmail login(String usename, String password);

    long numriRegjistruar();

    void ndryshoFjalkalimin(String fjalkalimi, String emri);
}
