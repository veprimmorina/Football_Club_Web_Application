package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Futbollisti;

import java.util.List;

public interface IFutbollistiService {

    public List<Futbollisti> gjejTopFutbollistet();
    public List<Futbollisti> gjejGjithFutbollistet();

    public List<Futbollisti> gjejGjithEkipin();
    public  List<Futbollisti> findByName(String name);

    public List<Futbollisti> findByGoal();

    public void ruajId(int id, String emri);

    public void shtoFutbollistin(String photoPath, String emri, String mbiemri,int numri, int mosha, String pozita, int gola, int asistime, String shtetesia);

    public void fshijFutbollistin(int id);

    public long numriLojtareve();
}
