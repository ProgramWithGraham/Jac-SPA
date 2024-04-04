package com.ctrlaltelite.fun.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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

    // delete a saved Fun fact per selected Id
    public void deleteFunFact(long id) {
        this.funRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Fact not found: " + id));
        this.funRepo.deleteById(id);
    }

    /*
     * Gets a specific Fun Fact by its date
     */
    public Fun getFunFactById(long id) {
        return this.funRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Fact not found: " + id));
    }
}
