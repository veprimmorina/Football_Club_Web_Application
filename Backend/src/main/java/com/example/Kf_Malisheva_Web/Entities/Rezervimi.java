package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;

@Entity
public class Rezervimi {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private int numriIUleses;
    @Column
    private String emri;
    @Column
    private String mbiemri;
    @Column
    private String emailAdresa;

    public Rezervimi(int numriIUleses, String emri, String mbiemri, String emailAdresa){
        this.numriIUleses=numriIUleses;
        this.emri=emri;
        this.mbiemri=mbiemri;
        this.emailAdresa=emailAdresa;
    }

    public Rezervimi(){

    }

    public int getId(){
        return id;
    }
    public int getNumriIUleses(){
        return numriIUleses;
    }
    public String getEmri(){
        return emri;
    }
    public String getMbiemri(){
        return mbiemri;
    }
    public String getEmailAdresa(){
        return emailAdresa;
    }

    public void setEmri(String emri){
        this.emri=emri;
    }
    public void setNumriIUleses(int numriIUleses){
        this.numriIUleses=numriIUleses;
    }
    public void setMbiemri(String mbiemri){
        this.mbiemri=mbiemri;
    }
    public void setEmailAdresa(String emailAdresa){
        this.emailAdresa=emailAdresa;
    }
}
