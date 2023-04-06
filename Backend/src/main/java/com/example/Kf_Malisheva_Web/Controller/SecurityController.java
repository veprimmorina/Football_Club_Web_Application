package com.example.Kf_Malisheva_Web.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {

    @GetMapping("/admin")
    public String admin(){
        return "This is admin page";
    }
}
