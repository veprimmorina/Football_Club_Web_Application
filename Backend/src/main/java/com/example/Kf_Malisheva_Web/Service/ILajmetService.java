package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Lajmet;

import java.sql.Time;
import java.util.Date;
import java.util.List;

public interface ILajmetService {

    public List <Lajmet> getLajmet();

    public Lajmet gjejLajmin(int id);

    public List<Lajmet> gjejLajmet();

    public void ruajLajmin(String fotografia, String pershkrimi, String titulli, Date data, Time ora);

    public List<Lajmet> gjejLajmetTitulli(String titulli);
}
