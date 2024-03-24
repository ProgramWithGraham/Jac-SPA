package com.ctrlaltelite.nasa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ctrlaltelite.nasa.entity.Nasa;

@Repository
public interface NasaRepository extends JpaRepository<Nasa, Long> {

}
