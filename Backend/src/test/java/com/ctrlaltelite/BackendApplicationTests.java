package com.ctrlaltelite;

import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;

import com.ctrlaltelite.nasa.entity.Nasa;
import com.ctrlaltelite.nasa.repository.NasaRepository;

public class BackendApplicationTests {

    @Autowired
    private NasaRepository nasaRepository;

    @Before(value = "")
    public void setupTestData() {
        // Insert test data into the database
        nasaRepository.save(new Nasa("1988-09-22", "This is an expo", "null", "null", "null", "null"));
    }

}
