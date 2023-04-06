package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Tabela;
import com.example.Kf_Malisheva_Web.Repository.TabelaRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface ITabelaService {

   public List<Tabela> gjejEkipet();

   public void shtoFitoren(int id);
   public void shtoBarazimin(int id);
   public void shtoHumbjen(int id);
   public void shtoGolat(int id);
   public void shtoGolatPesuar(int id);
}
