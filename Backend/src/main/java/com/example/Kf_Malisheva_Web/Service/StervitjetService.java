package com.example.Kf_Malisheva_Web.Service;

import com.example.Kf_Malisheva_Web.Entities.Stervitjet;
import com.example.Kf_Malisheva_Web.Repository.StervitjetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StervitjetService implements IStervitjetService{

    @Autowired
    private StervitjetRepository stervitjetRepository;

    @Override
    public List<Stervitjet> orariU11() {
        return this.stervitjetRepository.stervitjetU11();
    }

    @Override
    public List<Stervitjet> orariU13() {
        return this.stervitjetRepository.stervitjetU13();
    }

    @Override
    public List<Stervitjet> orariU15() {
        return this.stervitjetRepository.stervitjetU15();
    }

    @Override
    public List<Stervitjet> orariU17() {
        return this.stervitjetRepository.stervitjetU17();
    }
}
