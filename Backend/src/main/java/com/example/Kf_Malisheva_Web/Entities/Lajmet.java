package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;
import javax.xml.crypto.Data;
import java.sql.Time;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Entity
public class Lajmet {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String fotografia;
    @Column
    private String titulli;
    @Column
    private String pershkrimi;
    @Column

    private Date data;
    @Column
    private Time ora;

    public Lajmet(String fotografia, String titulli, String pershkrimi,Date data, Time ora){

        this.fotografia=fotografia;
        this.titulli=titulli;
        this.pershkrimi=pershkrimi;
        this.data=data;
        this.ora=ora;
    }
    public Lajmet(){

    }

    public String getFotografia() {
        return fotografia;
    }

    public int getId() {
        return id;
    }

    public String getPershkrimi() {
        return pershkrimi;
    }

    public void setFotografia(String fotografia) {
        this.fotografia = fotografia;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public Time getOra() {
        return ora;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public void setOra(Time ora) {
        this.ora = ora;
    }

    public void setPershkrimi(String pershkrimi) {
        this.pershkrimi = pershkrimi;
    }

    public String getTitulli() {
        return titulli;
    }

    public void setTitulli(String titulli) {
        this.titulli = titulli;
    }

}
