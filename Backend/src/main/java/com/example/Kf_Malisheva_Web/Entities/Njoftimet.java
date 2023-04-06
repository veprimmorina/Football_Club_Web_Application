package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Njoftimet {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String pershkrimi;
    @Column
    private String trajneri;
    @Column
    private LocalDate data;
    @Column
    private LocalTime ora;

    public Njoftimet(String pershkrimi, String trajneri){
        this.pershkrimi=pershkrimi;
        this.trajneri=trajneri;
        data=LocalDate.now();
        ora=LocalTime.now();
    }

    public Njoftimet(){

    }

    public int getId() {
        return id;
    }

    public String getPershkrimi() {
        return pershkrimi;
    }

    public LocalDate getData() {
        return data;
    }

    public LocalTime getOra() {
        return ora;
    }

    public String getTrajneri() {
        return trajneri;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public void setOra(LocalTime ora) {
        this.ora = ora;
    }

    public void setPershkrimi(String pershkrimi) {
        this.pershkrimi = pershkrimi;
    }

    public void setTrajneri(String trajneri) {
        this.trajneri = trajneri;
    }
}
