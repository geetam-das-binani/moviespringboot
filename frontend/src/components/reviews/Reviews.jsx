import { useEffect, useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import api from "../../api/axiosConfig";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
const Reviews = () => {
  const { getMovieData, reviews, setReviews, movie } = useOutletContext();
  const { imdbId } = useParams();
  const revText = useRef();

  useEffect(() => {
    getMovieData(imdbId);
  }, [imdbId]);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews/create-review", {
        reviewBody: rev.value,
        imdbId,
      });

      if (response.status === 201) {
        const updatedReviews = [...reviews, { body: rev.value }];

        rev.value = "";

        setReviews(updatedReviews);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r,idx) => {
            return (
              <div key={idx}>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
