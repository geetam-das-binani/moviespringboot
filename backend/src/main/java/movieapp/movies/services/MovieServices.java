package movieapp.movies.services;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import movieapp.movies.Movie;
import movieapp.movies.repository.MovieRepository;

@Service
public class MovieServices {

    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies() {
        return movieRepository.findAll();

    }

    public Optional<Movie> singleMovie(String imdbId) {

        return movieRepository.findMovieByImdbId(imdbId);
    }

}
