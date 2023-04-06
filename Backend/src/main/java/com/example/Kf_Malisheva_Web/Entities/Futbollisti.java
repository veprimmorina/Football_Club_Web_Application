package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;

@Entity
public class Futbollisti {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String emri;
    @Column
    private String mbiemri;
    @Column
    private int numri;
    @Column
    private String pozita;
    @Column
    private int mosha;
    @Column
    private String figura;
    @Column
    private String shtetesia;
    @Column
    private int golat;
    @Column
    private int asistimet;

    public Futbollisti(String emri, String mbiemri, int numri, String pozita, int mosha, String figura, String shtetesia, int golat, int asistimet){
        this.emri=emri;
        this.mbiemri=mbiemri;
        this.numri=numri;
        this.mosha=mosha;
        this.pozita=pozita;
        this.figura=figura;
        this.shtetesia=shtetesia;
        this.golat=golat;
        this.asistimet=asistimet;
    }

    public Futbollisti(){

    }

    public int getId() {
        return id;
    }

    public String getEmri(){
        return this.emri;
    }
    public String getMbiemri(){
        return this.mbiemri;
    }
    public String getPozita(){
        return this.pozita;
    }
    public String getFigura(){
        return this.figura;
    }
    public int getMosha(){
        return this.mosha;
    }
    public  int getNumri(){
        return this.numri;
    }
    public String getShtetesia(){
        return this.shtetesia;
    }
    public int getGolat(){
        return this.golat;
    }
    public int getAsistimet(){
        return this.asistimet;
    }
    public void setEmri(String emri){
        this.emri=emri;
    }
    public void setMbiemri(String mbiemri){
        this.mbiemri=mbiemri;
    }
    public void setNumri(int numri){
        this.numri=numri;
    }
    public void setPozita(String pozita){
        this.pozita=pozita;
    }
    public void setMosha(int mosha){
        this.mosha=mosha;
    }
    public void setFigura(String figura){
        this.figura=figura;
    }
    public void setShtetesia(String shtetesia){
        this.shtetesia=shtetesia;
    }
    public void setGolat(int golat){
        this.golat=golat;
    }
    public void setAsistimet(int asistimet){
        this.asistimet=asistimet;
    }

    public void setId(int id) {
        this.id = id;
    }
}
