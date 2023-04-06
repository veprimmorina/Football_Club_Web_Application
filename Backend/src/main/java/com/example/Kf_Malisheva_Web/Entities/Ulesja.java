package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.*;

@Entity
public class Ulesja {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private double cmimi;
    @Column
    public boolean eLire;

    public Ulesja(int id, double cmimi, boolean eLire){
        this.id=id;
        this.cmimi=cmimi;
        this.eLire=eLire;
    }

    public Ulesja(){

    }

    public int getId(){
        return id;
    }
    public double getCmimi(){
        return cmimi;
    }
    public boolean getELire(){
        return this.eLire;
    }

    public void setCmimi(double cmimi){
        this.cmimi=cmimi;
    }
    public void setELire(boolean eLire){
        this.eLire=eLire;
    }


}
