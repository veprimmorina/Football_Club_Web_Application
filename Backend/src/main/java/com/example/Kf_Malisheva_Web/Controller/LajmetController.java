package com.example.Kf_Malisheva_Web.Controller;


import com.example.Kf_Malisheva_Web.Entities.Lajmet;
import com.example.Kf_Malisheva_Web.Service.ILajmetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/lajmet")
public class LajmetController {

    @Autowired
    private ILajmetService iLajmetService;

    @GetMapping("/merr/lajmet")
    public List <Lajmet> merrLajmetEFundit(){
        return this.iLajmetService.getLajmet();
    }

    @GetMapping("/gjej/lajmin/{id}")
    public Lajmet gjejLajmin(@PathVariable("id") int id){
        return this.iLajmetService.gjejLajmin(id);
    }

    @GetMapping("gjej/lajmet")
    public List<Lajmet> gjejLajmet(){
        return this.iLajmetService.gjejLajmet();
    }

    @PostMapping("/regjistro/lajmin")
    public void ruajLajmin(@RequestBody Lajmet lajmet){

    }

    @GetMapping("/gjej/lajmet/titulli/{titull}")
    public List<Lajmet> gjejLajmetTitulli(@PathVariable("titull") String titull){
       return this.iLajmetService.gjejLajmetTitulli(titull);
    }
}
