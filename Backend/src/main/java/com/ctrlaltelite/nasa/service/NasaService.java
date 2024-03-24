package com.ctrlaltelite.nasa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.server.ResponseStatusException;

import com.ctrlaltelite.nasa.entity.Nasa;
import com.ctrlaltelite.nasa.repository.NasaRepository;

@SuppressWarnings("null")
@Service
public class NasaService {

    @Autowired
    private NasaRepository nasaRepo;

    /*
     * Adds a new Pet to the repository (db)
     */
    public void saveFact( Nasa nasa) {
        nasaRepo.save(nasa);
        nasaRepo.
    }

    /*
     * Gets all the pets in the repo (db)
     */
    public List<VirtualPet> getAllVirtualPets() {
        return this.virtualPetRepo.findAll();
    }

    // delete a pet per selected Id
    public void deleteVirtualPet(long id) {
        this.virtualPetRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pet not found: " + id));
        this.virtualPetRepo.deleteById(id);
    }

    /*
     * Gets a specific Pet by its Id
     */
    //public Nasa getNasaFactByDate(String date) {
        //return this.nasaRepo.findByDate(date)
               // .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pet not found: " + id));
    

    /*
     * Updates an existing Pet
     */
    public VirtualPet updateVirtualPet(long id, VirtualPet updatedVirtualPet) {
        VirtualPet existingVirtualPet = this.virtualPetRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pet not found: " + id));

        // Updating Pet Profile
        existingVirtualPet.setPetName(updatedVirtualPet.getPetName());
        existingVirtualPet.setPetDescription(updatedVirtualPet.getPetDescription());
        existingVirtualPet.setHungerLevel(updatedVirtualPet.getHungerLevel());
        existingVirtualPet.setThirstLevel(updatedVirtualPet.getThirstLevel());
        existingVirtualPet.setBoredomLevel(updatedVirtualPet.getBoredomLevel());
        this.virtualPetRepo.save(existingVirtualPet);
        return existingVirtualPet;
    }
}
