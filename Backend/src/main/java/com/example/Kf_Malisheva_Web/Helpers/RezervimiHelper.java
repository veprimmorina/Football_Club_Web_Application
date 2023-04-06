package com.example.Kf_Malisheva_Web.Helpers;

import java.io.Serializable;

public class RezervimiHelper implements Serializable {

    private int id;
    private  String emri;
    private String mbiemri;
    private String emailAdresa;

    public int getId(){
        return id;
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
    public void setMbiemri(String mbiemri){
        this.mbiemri=mbiemri;
    }
    public void setEmailAdresa(String emailAdresa){
        this.emailAdresa=emailAdresa;
    }
}
