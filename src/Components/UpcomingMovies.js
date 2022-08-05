import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const upcomingmovies = [
  {
    name: "PS-1",
    poster:"https://www.thehindu.com/entertainment/movies/wq3joo/article65183588.ece/alternates/FREE_435/ps1.jpeg",
    languages : "Tamil | Telugu | Hindi",
    date : "Sep, 2022",
  },
  {
    name: "Avatar 2",
    poster:"https://static.toiimg.com/photo/msid-61968452/61968452.jpg?91674",
    languages : "English | Tamil |Telugu",
    date : "Sep, 2022",


  },
  {
    name: "Saalar",
    poster:"https://m.media-amazon.com/images/M/MV5BZGE5N2QyOGQtYjc4ZC00YTRhLWFiZDMtMmUzNWFmNjdiMzVkXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg",
    languages : "Telugu | Tamil | Malayalam",
    date : "April, 2023",


  },
];

function UpcomingMovies() {
  const [upmovieList, setUpMovieList] = useState(upcomingmovies);

  return (
    <>
      <div className="movie-list">
        {upmovieList.map((movie, index) => (
          <Card className="movie-container" key={index}>
            <img
              className="movie-poster"
              src={movie.poster}
              alt={movie.name}
            ></img>

            <CardContent>
              <div className="content">
                <div className="movie-specs">
                  <h3 className="movie-name">{movie.name}</h3>
                </div>
                <div>
                  <p>Languages : {movie.languages}</p>
                  <p>Date : {movie.date}</p>
                </div>
              </div>
            </CardContent>
           
          </Card>
        ))}
      </div>
    </>
  );
}

export default UpcomingMovies;
