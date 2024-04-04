package com.ctrlaltelite.fun.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "\"fun\"")

public class Fun {

    public Fun(String type, String setup, String punchline) {
        this.type = type;
        this.setup = setup;
        this.punchline = punchline;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @Column(name = "type")
    private String type;

    @Column(name = "setup", length = 1024)
    private String setup;

    @Column(name = "punchline")
    private String punchline;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSetup() {
        return this.setup;
    }

    public void setSetup(String setup) {
        this.setup = setup;
    }

    public String getPunchline() {
        return this.punchline;
    }

    public void setPunchline(String punchline) {
        this.punchline = punchline;
    }

}