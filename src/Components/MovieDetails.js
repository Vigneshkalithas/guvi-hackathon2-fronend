import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import UserContext from "./usercontext";

export function MovieDetails() {
  const [movieList, setMovieList] = useState([]);

  let movieData = useContext(UserContext);

  const { movieid } = useParams();
  const navigate = useNavigate();
  const movie = movieData.movieList[movieid];

  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name mx-2">{movie.name}</h2>
        </div>
        <p className="movie-summary mx-2">{movie.summary}</p>
        <Button
          startIcon={<ArrowBackIosIcon />}
          className="back-button mx-2 my-4"
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
