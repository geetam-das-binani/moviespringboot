package movieapp.movies.services;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import movieapp.movies.Movie;
import movieapp.movies.Review;
import movieapp.movies.repository.ReviewRepository;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    // *another way of interacting with database using a template

    public Review createReview(String reviewBody, String imdbId) {
        ObjectId objectId = new ObjectId(new Date(1718531079));
        System.out.println(objectId.toHexString());
        Review review = reviewRepository.insert(new Review(reviewBody));

        // * important here update operation */
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;

    }

}
