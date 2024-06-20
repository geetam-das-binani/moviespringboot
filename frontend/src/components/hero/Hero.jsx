import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Hero = ({ movies }) => {
  const navigate = useNavigate();
  return (
    <div className="movie-carousel-container">
      {movies.length > 0 ? (
        <Carousel>
          {movies?.map((movie) => (
            <Paper key={movie.imdbId}>
              <div className="movie-card-container">
                <div
                  className="movie-card"
                  //   style={{ "--img": `url(${movie.backdrops[0]})` }}
                  style={{
                    backgroundImage: `url(${movie.backdrops[0]})`,
                  }}
                >
                  <div className="movie-detail">
                    <div className="movie-poster">
                      <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                    <div className="movie-buttons-container">
                      <Link
                        to={`/trailer/${movie.trailerLink.slice(
                          movie.trailerLink.length - 11
                        )}`}
                      >
                        <div className="play-button-icon-container">
                          <FontAwesomeIcon
                            icon={faCirclePlay}
                            className="play-button-icon"
                          />
                        </div>
                      </Link>
                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          onClick={() =>
                            navigate(`/reviews/${movie.imdbId}`)
                          }
                        >
                          Review
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          ))}
        </Carousel>
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
};

export default Hero;
