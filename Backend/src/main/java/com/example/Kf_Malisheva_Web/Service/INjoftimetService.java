package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Njoftimet;

import java.util.List;

public interface INjoftimetService {

    List<Njoftimet> merrNjoftimet();

    void shtoNjoftimin(String pershkrimi,String trajneri);
}
