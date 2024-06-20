import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import api from "../api/axiosConfig";
import Header from "../components/header/Header";

const Layout = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");

      if (response.status === 200) {
        setMovies(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  const getMovieData = async (imdbId) => {
    try {
      const response = await api.get(`/api/v1/movies/${imdbId}`);
      if (response.status === 200) {
        setMovie(response.data);

        setReviews(response.data.reviewIds);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Header />
      <Outlet context={{ movies, getMovieData, movie, reviews, setReviews }} />
    </div>
  );
};

export default Layout;
