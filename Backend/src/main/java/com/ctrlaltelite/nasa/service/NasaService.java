package com.ctrlaltelite.nasa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.ctrlaltelite.nasa.entity.Nasa;
import com.ctrlaltelite.nasa.repository.NasaRepository;

@SuppressWarnings("null")
@Service
public class NasaService {

    @Autowired
    private NasaRepository nasaRepo;

    /*
     * saves Nasa Fact to the repository (db)
     */
    public void saveNasaFact(Nasa nasa) {
        this.nasaRepo.save(nasa);
    }

    /*
     * Gets all the Nasa facts that were saved (db)
     */
    public List<Nasa> getAllNasaFacts() {
        return this.nasaRepo.findAll();
    }

    // delete a saved Nasa fact per selected Id
    public void deleteNasaFact(long id) {
        this.nasaRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Fact not found: " + id));
        this.nasaRepo.deleteById(id);
    }

    /*
     * Gets a specific Nasa Fact by its date
     */
    public Nasa getNasaFactByDate(long id) {
        return this.nasaRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Fact not found: " + id));
    }
}
