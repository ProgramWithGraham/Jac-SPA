package com.ctrlaltelite.nasa.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ctrlaltelite.nasa.entity.Nasa;
import com.ctrlaltelite.nasa.service.NasaService;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/nasa")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class NasaController {

    @Autowired
    private NasaService nasaServ;

    // used as a way to make sure mapping is working
    @GetMapping("/ping")
    public String pingPong() {
        return "pong";
    }

    // save a Nasa fact
    @PostMapping()
    public void saveNasaFact(@RequestBody Nasa nasa) {
        this.nasaServ.saveNasaFact(nasa);
    }

    // this allows us to get all
    @GetMapping()
    public List<Nasa> findAllNasaFacts() {
        return this.nasaServ.getAllNasaFacts();
    }

    // this allows us to find a facts by it Id
    @GetMapping("/{id}")
    public Nasa findNasaFactById(@PathVariable long id) {
        return this.nasaServ.getNasaFactById(id);
    }

    // this allows us to delete a fact based on its Id
    @DeleteMapping("/{id}")
    public void removeNasaFact(@PathVariable long id) {
        this.nasaServ.deleteNasaFact(id);
    }
}
