package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;

@Entity
public class Kodi {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column
    private String emaili;

    @Column
    private int kodiPerdoruesit;

    @Column
    private boolean kodiSakt;
    public Kodi(String emaili, int kodiPerdoruesit){
        this.kodiPerdoruesit=kodiPerdoruesit;
        this.id=id;
        this.emaili=emaili;
        this.kodiSakt=false;
    }

    public Kodi(){

    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public int getKodiPerdoruesit() {
        return kodiPerdoruesit;
    }

    public void setKodi(int kodiPerdoruesit) {
        this.kodiPerdoruesit = kodiPerdoruesit;
    }

    public String getEmaili() {
        return emaili;
    }

    public void setEmaili(String emaili) {
        this.emaili = emaili;
    }

    public boolean getKodiSakt() {
        return kodiSakt;
    }

    public void setKodiSakt(boolean kodiSakt) {
        this.kodiSakt = kodiSakt;
    }
}
