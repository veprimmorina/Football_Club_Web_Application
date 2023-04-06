package com.example.Kf_Malisheva_Web.Entities;


import javax.persistence.*;

@Entity
public class AkademiaEmail {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String emriPerdoruesit;
    @Column
    private String fjalkalimi;

    public AkademiaEmail(String emriPerdoruesit, String fjalkalimi) {
        this.emriPerdoruesit = emriPerdoruesit;
        this.fjalkalimi = fjalkalimi;

    }

    public AkademiaEmail() {

    }

    public int getId() {
        return id;
    }

    public String getEmriPerdoruesit() {
        return emriPerdoruesit;
    }

    public String getFjalkalimi() {
        return fjalkalimi;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setEmriPerdoruesit(String emriPerdoruesit) {
        this.emriPerdoruesit = emriPerdoruesit;
    }

    public void setFjalkalimi(String fjalkalimi) {
        this.fjalkalimi = fjalkalimi;
    }


}


