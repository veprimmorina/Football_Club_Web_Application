package com.example.Kf_Malisheva_Web.Controller;


import com.example.Kf_Malisheva_Web.Entities.Tabela;
import com.example.Kf_Malisheva_Web.Service.ITabelaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tabela")
public class TabelaController {

    @Autowired
    private ITabelaService iTabelaService;

    @GetMapping("/get")
    public List<Tabela> gjejEkipet(){
        return this.iTabelaService.gjejEkipet();
    }

    @GetMapping("/shto/piket/{id}")
    public void shtoFitoren(@PathVariable("id") int id){
        this.iTabelaService.shtoFitoren(id);
    }

    @GetMapping("/shto/barazimin/{id}")
    public void shtoBarazimin(@PathVariable("id") int id){
        this.iTabelaService.shtoBarazimin(id);
    }
    @GetMapping("/shto/humbjen/{id}")
    public void shtoHumbjen(@PathVariable("id") int id){
        this.iTabelaService.shtoHumbjen(id);
    }
    @GetMapping("/shto/golat/{id}")
    public void shtoGolat(@PathVariable("id") int id){
        this.iTabelaService.shtoGolat(id);
    }

    @GetMapping("/shto/golat/pesuar/{id}")
    public void shtoGolatPesuar(@PathVariable("id") int id){
        this.iTabelaService.shtoGolatPesuar(id);
    }
}
