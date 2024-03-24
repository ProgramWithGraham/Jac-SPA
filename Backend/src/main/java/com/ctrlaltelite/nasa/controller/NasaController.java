package com.ctrlaltelite.nasa.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ctrlaltelite.nasa.entity.Nasa;
import com.ctrlaltelite.nasa.service.NasaService;
import com.ctrlaltelite.nasa.repository.NasaRepository;

import org.springframework.web.bind.annotation.RequestMapping;

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

    // add a new pet
    @PostMapping("/save")
    public void saveFact(@RequestBody Nasa nasa) {
    nasaServ.saveFact(nasa);
    }

    // this allows us to get all pets
    @GetMapping("/all")
    public List<VirtualPet> findAllVirtualPets() {
        return this.nasaServ.getAllVirtualPets();
    }

    // this allows us to find a pet by it Id
    //@GetMapping("/{date}")
    //public Nasa findNasaFactByDate(@PathVariable String date) {
        //return this.nasaServ.getVirtualPetById(id);
    

    // this allows user to change a current pet based on id selected
    //@PutMapping("/{id}")
    //public VirtualPet modifyUser(@PathVariable long id, @RequestBody VirtualPet updatedVirtualPet) {
        //return this.nasaServ.updateVirtualPet(id, updatedVirtualPet);
    

    // this allows us to delete a pet based on its ID
    @DeleteMapping("/{id}")
    public void removeVirtualPet(@PathVariable long id) {
        this.nasaServ.deleteVirtualPet(id);
    }
}
