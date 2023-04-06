package com.example.Kf_Malisheva_Web.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
public class Ndeshja {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column
    private String ekipiVendas;
    @Column
    private String ekipiMysafir;
    @Column
    private Date dataENdeshjes;
    @Column
    private Time oraENdeshjes;
    @Column
    private String kategoria;
    @Column
    private String xhirojaNumer;
    @Column
    private String statusi;
    @Column
    private String fotografiaVendas;
    @Column
    private String fotografiaMusafir;

    @Column
    private short rezultatiVendas;
    @Column
    private short rezultatiMusafir;

    @Column
    private String golashenuesitVendas;

    @Column
    private String golashenuesitMusafir;


    public Ndeshja(String ekipiVendas,String ekipiMysafir, Date dataENdeshjes,Time oraENdeshjes, String kategoria, String xhirojaNumer,String statusi,String fotografiaVendas, String fotografiaMusafir,short rezultatiVendas, short rezultatiMusafir, String golashenuesitVendas, String golashenuesitMusafir){
        this.ekipiVendas=ekipiVendas;
        this.ekipiMysafir=ekipiMysafir;
        this.dataENdeshjes=dataENdeshjes;
        this.oraENdeshjes=oraENdeshjes;
        this.kategoria=kategoria;
        this.xhirojaNumer=xhirojaNumer;
        this.statusi=statusi;
        this.fotografiaVendas=fotografiaVendas;
        this.fotografiaMusafir=fotografiaMusafir;
        this.rezultatiVendas=rezultatiVendas;
        this.rezultatiMusafir=rezultatiMusafir;
        this.golashenuesitVendas=golashenuesitVendas;
        this.golashenuesitMusafir=golashenuesitMusafir;
    }

    public Ndeshja (){

    }

    public int getId(){
        return this.id;
    }
    public String getEkipiVendas(){
        return this.ekipiVendas;

    }
    public String getEkipiMysafir(){
        return this.ekipiMysafir;

    }
    public Date getDataENdeshjes(){
        return this.dataENdeshjes;

    }
    public Time getOraENdeshjes(){
        return this.oraENdeshjes;

    }
    public String getKategoria(){
        return this.kategoria;

    }
    public String getXhirojaNumer(){
        return this.xhirojaNumer;

    }

    public String getStatusi() {
        return statusi;
    }

    public String getFotografiaVendas() {
        return this.fotografiaVendas;
    }

    public String getFotografiaMusafir() {
        return this.fotografiaMusafir;
    }

    public short getRezultatiVendas() {
        return rezultatiVendas;
    }

    public short getRezultatiMusafir() {
        return rezultatiMusafir;
    }

    public String getGolashenuesitVendas() {
        return golashenuesitVendas;
    }

    public String getGolashenuesitMusafir() {
        return golashenuesitMusafir;
    }

    public void setGolashenuesitMusafir(String golashenuesitMusafir) {
        this.golashenuesitMusafir = golashenuesitMusafir;
    }

    public void setGolashenuesitVendas(String golashenuesitVendas) {
        this.golashenuesitVendas = golashenuesitVendas;
    }

    public void setId(int id){
        this.id=id;
    }
    public void setEkipiVendas(String ekipiVendas){
        this.ekipiVendas=ekipiVendas;
    }
    public void setEkipiMysafir(String ekipiMysafir){
        this.ekipiMysafir=ekipiMysafir;
    }
    public void setDataENdeshjes(Date dataENdeshjes){
        this.dataENdeshjes=dataENdeshjes;
    }
    public void setOraENdeshjes(Time oraENdeshjes){
        this.oraENdeshjes=oraENdeshjes;
    }
    public void setKategoria(String kategoria){
        this.kategoria=kategoria;
    }
    public void setXhirojaNumer(String xhirojaNumer){
        this.xhirojaNumer=xhirojaNumer;
    }

    public void setStatusi(String statusi) {
        this.statusi = statusi;
    }

    public void setFotografiaVendas(String fotografiaVendas) {
        this.fotografiaVendas = fotografiaVendas;
    }

    public void setFotografiaMusafir(String fotografiaMusafir) {
        this.fotografiaMusafir = fotografiaMusafir;
    }

    public void setRezultatiVendas(short rezultatiVendas) {
        this.rezultatiVendas = rezultatiVendas;
    }

    public void setRezultatiMusafir(short rezultatiMusafir) {
        this.rezultatiMusafir = rezultatiMusafir;
    }
}
