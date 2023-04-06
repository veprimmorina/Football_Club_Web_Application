package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.*;

import java.util.List;

public interface IStadiumiService {

     List <Ulesja> getAll();
     void regjistroRezervimin(int id, String emri, String mbiemri, String emailAdresa);

     Rezervimi ktheRezerviminEFundit();

     Ndeshja gjejNdeshjenEFundt();

     TePergjithshme gjejKategorine(String kategoria);

     List<Sponzoret> gjejSponzoret();

     void fshijSponzorin(int id);
     Ndeshja gjejNdeshjenEFunditStatus();

     void setELire();

     long numriRezervimeve();

     List<Ndeshja> gjejNdeshjet();

     long getNumriRezervuar();
}
