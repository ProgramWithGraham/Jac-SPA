// package com.ctrlaltelite.fun.controller;

// import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.ctrlaltelite.fun.entity.Fun;
// import com.ctrlaltelite.fun.service.FunService;
// import org.springframework.web.bind.annotation.RequestMapping;

// @RestController
// @RequestMapping("/api/fun")
// @CrossOrigin(origins = "*", allowedHeaders = "*")

// public class FunController {

//     @Autowired
//     private FunService funServ;

//     // used as a way to make sure mapping is working
//     @GetMapping("/ping")
//     public String pingPong() {
//         return "pong";
//     }

//     // save a Fun fact
//     @PostMapping()
//     public void saveFunFact(@RequestBody Fun fun) {
//         this.funServ.saveFunFact(fun);
//     }

//     // this allows us to get all
//     @GetMapping()
//     public List<Fun> findAllFunFacts() {
//         return this.funServ.getAllFunFacts();
//     }

// }
