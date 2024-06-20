package movieapp.movies.repository;

import org.springframework.stereotype.Repository;
import movieapp.movies.Movie;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
  Optional<Movie>  findMovieByImdbId(String imdbId);
}
