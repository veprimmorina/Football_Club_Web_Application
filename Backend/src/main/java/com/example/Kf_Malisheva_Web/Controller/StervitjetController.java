package com.example.Kf_Malisheva_Web.Controller;


import com.example.Kf_Malisheva_Web.Entities.Stervitjet;
import com.example.Kf_Malisheva_Web.Service.IStervitjetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/stervitjet")
public class StervitjetController {

    @Autowired
    private IStervitjetService iStervitjetService;

    @RequestMapping("/merr/orarin")
    public List<Stervitjet> merrOrarinU11(){

        List<Stervitjet> stervitjet=this.iStervitjetService.orariU11();
        List <Stervitjet> stervitja=new ArrayList<>();
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
        for(int i=0;i<stervitjet.size();i++){
            System.out.println(stervitjet.get(i).getData().toString());
            String data = dateFormatter.format(stervitjet.get(i).getData());
            Stervitjet s=stervitjet.get(i);
            //s.setData();
            stervitja.add(s);
        }
        return stervitja;
    }
    @RequestMapping("/merr/orarin/U13")
    public List<Stervitjet> merrOrarinU13(){
       return this.iStervitjetService.orariU13();
    }
    @RequestMapping("/merr/orarin/U15")
    public List<Stervitjet> merrOrarinU15(){
        return this.iStervitjetService.orariU15();
    }
    @RequestMapping("/merr/orarin/U17")
    public List<Stervitjet> merrOrarinU17(){
        return this.iStervitjetService.orariU17();
    }

}
