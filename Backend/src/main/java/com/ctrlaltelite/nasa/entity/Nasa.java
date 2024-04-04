package com.ctrlaltelite.nasa.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "\"nasa\"")

public class Nasa {

    public Nasa(String hdurl, String url, String date, String explanation, String mediaType, String title) {
        this.hdurl = hdurl;
        this.url = url;
        this.date = date;
        this.explanation = explanation;
        this.mediaType = mediaType;
        this.title = title;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;

    @Column(name = "hdurl")
    private String hdurl;

    @Column(name = "url")
    private String url;

    @Column(name = "date")
    private String date;

    @Column(name = "explanation", length = 1024)
    private String explanation;

    @Column(name = "media_type")
    private String mediaType;

    @Column(name = "title")
    private String title;

    public Nasa() {
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getExplanation() {
        return this.explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getHdurl() {
        return this.hdurl;
    }

    public void setHdurl(String hdurl) {
        this.hdurl = hdurl;
    }

    public String getMediaType() {
        return this.mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
