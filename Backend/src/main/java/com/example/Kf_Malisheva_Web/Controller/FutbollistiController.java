package com.example.Kf_Malisheva_Web.Controller;


import com.example.Kf_Malisheva_Web.Entities.Futbollisti;
import com.example.Kf_Malisheva_Web.Service.IFutbollistiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/api/futbollistet")
public class FutbollistiController {

    @Autowired
    private IFutbollistiService iFutbollistiService;
    @GetMapping("/get/all")
    public List<Futbollisti> getAllFutbollistet(){
        return this.iFutbollistiService.gjejGjithFutbollistet();
    }

    @GetMapping("/gjej/gjith/ekipin")
    public List<Futbollisti> gjejGjithEkipin(){
        return this.iFutbollistiService.gjejGjithEkipin();
    }

    @GetMapping("/get/all/top")
    public List<Futbollisti> gjejTopFutbollistet(){
        return this.iFutbollistiService.gjejTopFutbollistet();
    }
    @PostMapping("/get/futbollisti/{name}")
    public  List <Futbollisti> getSearchedFutbollisti(@PathVariable("name") String name){
        return this.iFutbollistiService.findByName(name);
    }

    @GetMapping("/get/goals")
    public List<Futbollisti> getFutbollistet(){
        return this.iFutbollistiService.findByGoal();
    }

    @GetMapping("/ruaj/futbollistin/{id}/{emri}")
    public void ruajFutbollistin(@PathVariable("id") int id, @PathVariable("emri") String emri)
    {
        this.iFutbollistiService.ruajId(id,emri);
    }

    @PostMapping("/shto/futbollistin")
    public void shtoFutbollistin(@RequestBody Futbollisti futbollisti){
   this.iFutbollistiService.shtoFutbollistin(futbollisti.getFigura(), futbollisti.getEmri(), futbollisti.getMbiemri(), futbollisti.getNumri(), futbollisti.getMosha(), futbollisti.getPozita(), futbollisti.getGolat(), futbollisti.getAsistimet(), futbollisti.getShtetesia());
    }

    @GetMapping("/fshij/futbollistin/{id}")
    public void fshijFutbollistin(@PathVariable("id") int id){
        this.iFutbollistiService.fshijFutbollistin(id);
    }

    @GetMapping("/merr/numri/futbollisteve")
    public long numriFutbollisteve(){
        return this.iFutbollistiService.numriLojtareve();
    }
}
