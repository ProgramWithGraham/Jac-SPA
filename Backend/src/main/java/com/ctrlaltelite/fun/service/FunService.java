package com.ctrlaltelite.fun.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ctrlaltelite.fun.entity.Fun;
import com.ctrlaltelite.fun.repository.FunRepository;

@SuppressWarnings("null")
@Service
public class FunService {

    @Autowired
    private FunRepository funRepo;

    /*
     * saves Fun Fact to the repository (db)
     */
    public void saveFunFact(Fun fun) {
        this.funRepo.save(fun);
    }

    /*
     * Gets all the Fun facts that were saved (db)
     */
    public List<Fun> getAllFunFacts() {
        return this.funRepo.findAll();
    }

}
