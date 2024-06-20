package movieapp.movies.controllers;

import org.springframework.web.bind.annotation.RestController;
import movieapp.movies.Movie;
import movieapp.movies.services.MovieServices;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/movies")
public class MovieControllers {

    @Autowired
    private MovieServices movieServices;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<List<Movie>>(movieServices.allMovies(), HttpStatus.OK);

    }

     @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId) {

        return new ResponseEntity<Optional<Movie>>(movieServices.singleMovie(imdbId), HttpStatus.OK);
        
    }

}
