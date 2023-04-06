package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;
import java.util.Date;

@Entity
public class TePergjithshme {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String kategoria;
    @Column
    private int kapaciteti;
    @Column
    private String lokacioni;
    @Column
    private String madhesiaEFushes;
    @Column
    private Date dataENdertimit;
    @Column
    private String emri;
    @Column
    private String fotografia;

    public  TePergjithshme(String kategoria, int kapaciteti, String lokacioni, String madhesiaEFushes, Date dataENdertimit,String emri,String fotografia){
        this.kategoria=kategoria;
        this.kapaciteti=kapaciteti;
        this.lokacioni=lokacioni;
        this.madhesiaEFushes=madhesiaEFushes;
        this.dataENdertimit=dataENdertimit;
        this.emri=emri;
        this.fotografia=fotografia;
    }

    public TePergjithshme(){

    }
    public int getKapaciteti(){
        return kapaciteti;
    }

    public String getLokacioni(){
        return lokacioni;
    }
    public String getKategoria(){
        return kategoria;
    }
    public String getMadhesiaEFushes(){
        return madhesiaEFushes;
    }
    public Date getDataENdertimit(){
        return dataENdertimit;
    }
    public void setKategoria(String kategoria){
        this.kategoria=kategoria;
    }

    public String getFotografia() {
        return fotografia;
    }

    public String getEmri() {
        return emri;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setDataENdertimit(Date dataENdertimit) {
        this.dataENdertimit = dataENdertimit;
    }

    public void setKapaciteti(int kapaciteti) {
        this.kapaciteti = kapaciteti;
    }

    public void setLokacioni(String lokacioni) {
        this.lokacioni = lokacioni;
    }

    public void setMadhesiaEFushes(String madhesiaEFushes) {
        this.madhesiaEFushes = madhesiaEFushes;
    }

    public void setEmri(String emri) {
        this.emri = emri;
    }

    public void setFotografia(String fotografia) {
        this.fotografia = fotografia;
    }
}
