package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;

@Entity
public class Sponzoret {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String emri;
    @Column
    private String fotografia;


    public Sponzoret(String emri, String fotografia){
        this.emri=emri;
        this.fotografia=fotografia;
    }

    public Sponzoret(){

    }

    public int getId() {
        return id;
    }

    public String getEmri() {
        return emri;
    }

    public String getFotografia() {
        return fotografia;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setEmri(String emri) {
        this.emri = emri;
    }

    public void setFotografia(String fotografia) {
        this.fotografia = fotografia;
    }
}
