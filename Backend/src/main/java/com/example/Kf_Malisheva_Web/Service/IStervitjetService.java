package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Stervitjet;

import java.util.List;

public interface IStervitjetService {

    List<Stervitjet> orariU11();
    List<Stervitjet> orariU13();
    List<Stervitjet> orariU15();
    List<Stervitjet> orariU17();

}
