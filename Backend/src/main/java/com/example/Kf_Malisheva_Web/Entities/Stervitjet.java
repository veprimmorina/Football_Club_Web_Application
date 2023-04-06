package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
public class Stervitjet {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private Date data;
    @Column
    private Time ora;
    @Column
    private String dita;
    @Column
    private String lokacioni;
    @Column
    private String grupmosha;
    @Column
    private String grupi;

    public Stervitjet(Date data, Time ora, String dita, String lokacioni,String grupmosha,String grupi){
        this.data=data;
        this.ora=ora;
        this.dita=dita;
        this.lokacioni=lokacioni;
        this.grupmosha=grupmosha;
        this.grupi=grupi;
    }

    public Stervitjet(){

    }

    public String getGrupmosha() {
        return grupmosha;
    }

    public Time getOra() {
        return ora;
    }

    public Date getData() {
        return data;
    }

    public int getId() {
        return id;
    }

    public String getDita() {
        return dita;
    }

    public String getLokacioni() {
        return lokacioni;
    }

    public String getGrupi() {
        return grupi;
    }

    public void setGrupmosha(String grupmosha) {
        this.grupmosha = grupmosha;
    }

    public void setLokacioni(String lokacioni) {
        this.lokacioni = lokacioni;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setOra(Time ora) {
        this.ora = ora;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public void setDita(String dita) {
        this.dita = dita;
    }

    public void setGrupi(String grupi) {
        this.grupi = grupi;
    }
}
