package com.example.Kf_Malisheva_Web.Controller;

import com.example.Kf_Malisheva_Web.Entities.Njoftimet;
import com.example.Kf_Malisheva_Web.Service.INjoftimetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/njoftimet")
public class NjoftimetController {

    @Autowired
    private INjoftimetService iNjoftimetService;

    @GetMapping("/merr/njoftimet")
    public List <Njoftimet> merrNjoftimet(){
        return this.iNjoftimetService.merrNjoftimet();
    }

    @PostMapping("shto/njoftimin")
    public void shtoNjoftimin(@RequestBody Njoftimet njoftimet){
        this.iNjoftimetService.shtoNjoftimin(njoftimet.getPershkrimi(),njoftimet.getTrajneri());
    }
}
