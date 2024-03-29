package com.ctrlaltelite.nasa.controller;

import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ctrlaltelite.nasa.entity.Nasa;
import com.ctrlaltelite.nasa.service.NasaService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/nasa")

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
    public void saveFact(@RequestBody Nasa nasa) {
        nasaServ.saveFact(nasa);
    }

    // this allows us to get all
    @GetMapping("/all")
    public List<Nasa> findAllNasaFacts() {
        return (List<Nasa>) this.nasaServ.getAllNasaFacts();
    }

    // this allows us to find a facts by it Id
    @GetMapping("/{id}")
    public Nasa findNasaFactByDate(@PathVariable long id) {
        return this.nasaServ.getNasaFactByDate(id);
    }

    // this allows us to delete a fact based on its Id
    @DeleteMapping("/{id}")
    public void removeNasaFact(@PathVariable long id) {
        this.nasaServ.deleteNasaFact(id);
    }

    @GetMapping(params = "/date")
    public String localDate(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") final LocalDate date) {
        return date.toString();
    }

}
