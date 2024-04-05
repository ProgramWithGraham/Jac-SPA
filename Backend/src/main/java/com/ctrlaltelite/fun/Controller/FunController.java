package com.ctrlaltelite.fun.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ctrlaltelite.fun.entity.Fun;
import com.ctrlaltelite.fun.service.FunService;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/fun")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class FunController {

    @Autowired
    private FunService funServ;

    // used as a way to make sure mapping is working
    @GetMapping("/ping")
    public String pingPong() {
        return "pong";
    }

    // save a Fun fact
    @PostMapping()
    public void saveFunJoke(@RequestBody Fun fun) {
        this.funServ.saveFunJoke(fun);
    }

    // this allows us to get all
    @GetMapping()
    public List<Fun> findAllFunJokes() {
        return this.funServ.getAllFunJokes();
    }

    // this allows us to find a facts by it Id
    @GetMapping("/{id}")
    public Fun findFunJokeById(@PathVariable long id) {
        return this.funServ.getFunJokeById(id);
    }

    // this allows us to delete a fact based on its Id
    @DeleteMapping("/{id}")
    public void removeFunJoke(@PathVariable long id) {
        this.funServ.deleteFunJoke(id);
    }
}
