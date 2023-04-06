package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;


@Entity
public class Aplikimet {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String emri;
    @Column
    private String mbiemri;
    @Column
    private short mosha;
    @Column
    private String pozita;
    @Column
    private String dataAplikimit;
    @Column
    private boolean iRegjistruar;

    public Aplikimet (String emri, String mbiemri, short mosha, String pozita){
        this.emri=emri;
        this.mbiemri=mbiemri;
        this.mosha=mosha;
        this.pozita=pozita;
        this.dataAplikimit=String.valueOf(java.time.LocalDate.now());

    }

    public Aplikimet(){

    }

    public String getEmri() {
        return emri;
    }

    public int getId() {
        return id;
    }

    public short getMosha() {
        return mosha;
    }

    public String getMbiemri() {
        return mbiemri;
    }

    public String getPozita() {
        return pozita;
    }

    public String getDataAplikimit() {
        return dataAplikimit;
    }

    public boolean isiRegjistruar() {
        return iRegjistruar;
    }

    public void setDataAplikimit(String dataAplikimit) {
        this.dataAplikimit = dataAplikimit;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setEmri(String emri) {
        this.emri = emri;
    }

    public void setPozita(String pozita) {
        this.pozita = pozita;
    }

    public void setMbiemri(String mbiemri) {
        this.mbiemri = mbiemri;
    }

    public void setMosha(short mosha) {
        this.mosha = mosha;
    }

    public void setIRegjistruar(boolean iRegjistruar) {
        this.iRegjistruar = iRegjistruar;
    }
}
