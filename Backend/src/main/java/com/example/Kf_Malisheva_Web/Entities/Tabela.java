package com.example.Kf_Malisheva_Web.Entities;


import javax.persistence.*;

@Entity
public class Tabela {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column
    private String fotografia;
    @Column
    private int pozita;
    @Column
    private String emri;
    @Column
    private int ndeshje;
    @Column
    private int golatEShenuar;
    @Column
    private int golatEPesuar;
    @Column
    private int piket;

    public Tabela(int pozita, String fotografia,String emri, int ndeshje, int golatEShenuar, int golatEPesuar, int piket){
        this.pozita=pozita;
        this.fotografia=fotografia;
        this.emri=emri;
        this.ndeshje=ndeshje;
        this.golatEShenuar=golatEShenuar;
        this.golatEPesuar=golatEPesuar;
        this.piket=piket;
    }

    public Tabela(){

    }

    public String getEmri() {
        return emri;
    }

    public void setEmri(String emri) {
        this.emri = emri;
    }

    public int getGolatEPesuar() {
        return golatEPesuar;
    }

    public int getId() {
        return id;
    }

    public int getGolatEShenuar() {
        return golatEShenuar;
    }

    public int getNdeshje() {
        return ndeshje;
    }

    public int getPiket() {
        return piket;
    }

    public int getPozita() {
        return pozita;
    }

    public void setGolatEPesuar(int golatEPesuar) {
        this.golatEPesuar = golatEPesuar;
    }

    public void setGolatEShenuar(int golatEShenuar) {
        this.golatEShenuar = golatEShenuar;
    }

    public void setNdeshje(int ndeshje) {
        this.ndeshje = ndeshje;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setPiket(int piket) {
        this.piket = piket;
    }

    public void setPozita(int pozita) {
        this.pozita = pozita;
    }

    public String getFotografia() {
        return fotografia;
    }

    public void setFotografia(String fotografia) {
        this.fotografia = fotografia;
    }
}
