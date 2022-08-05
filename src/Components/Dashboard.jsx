import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoveItems from "./Carousel";
import { MovieList } from "../Unwanted/MovieList";
import UpcomingMovies from "./UpcomingMovies";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import customer from "../Assets/customer-support.svg";
import ticket from "../Assets/ticket1.svg";
import mail from "../Assets/mail.svg";

// const INTIAL_MOVIE_LIST = [
//   {
//     name: "RRR",
//     poster:
//       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//     rating: 8.8,
//     summary:
//       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
//   },
//   {
//     name: "Iron man 2",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     rating: 7,
//     summary:
//       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military.",
//     trailer: "https://www.youtube.com/embed/wKtcmiifycU",
//   },
//   {
//     name: "Ncfom",
//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     rating: 8.1,
//     summary:
//       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer.",
//     trailer: "https://www.youtube.com/embed/38A__WT3-o0",
//   },
//   {
//     name: "Jai Bhim",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     summary:
//       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     rating: 8.8,
//     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
//   },
//   {
//     name: "Avengers",
//     rating: 8,
//     summary:
//       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel.",
//     poster:
//       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
//   },
//   {
//     name: "Interstellar",
//     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     rating: 8.6,
//     summary:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers.",
//     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
//   },
//   {
//     name: "Baahubali",
//     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     rating: 8,
//     summary:
//       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
//   },
//   {
//     name: "Ratatouille",
//     poster:
//       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     rating: 8,
//     summary:
//       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
//   },
// ];

const StreamMovies = [
  {
    name: "Legend",
    poster:
      "https://popcornusa.s3.amazonaws.com/movies/650/10528-40341-TheLegen",
    languages: "Tamil | Hindi | Telugu",
    imdb: "2.7 / 10",
    genre: "Action , Drama , Romance",
  },
  {
    name: "Vikram",
    poster:
      "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/227915/Vikram-posterart.jpg",
    languages: "Tamil | Hindi | Telugu",
    imdb: "8 / 10",
    genre: "Action , Adventure , Thriller",
  },
  {
    name: "Gulu Gulu",
    poster:
      "https://popcornusa.s3.amazonaws.com/movies/650/10529-0-GuluGulujpg",
    languages: "Tamil | Hindi | Telugu",
    imdb: "7 / 10",
    genre: "Action , Comedy , Fantasy",
  },
];
function Dashboard() {
  const navigate = useNavigate();
  // const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST);

  return (
    <>
      {/* carousel */}

      <MoveItems />

      {/* upcoming movies */}
      
        <div className="container my-5">
        <div className="row">
          <div>
            <h1 className="text-center">Up coming movies</h1>
          </div>
          <div className="my-2">
            <UpcomingMovies />
          </div>
        </div>
      </div>

      {/* streaming Movies */}
      <div className="container my-5">
        <div className="row">
          <div>
            <h1 className="text-center">Now streaming on</h1>
          </div>
          <div className="movie-list my-4">
            {StreamMovies.map((movie, index) => (
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
                      <p>
                        <span className="f-b">Languages</span> :{" "}
                        {movie.languages}
                      </p>
                      <p>
                        <span className="f-b">Genre</span> : {movie.genre}
                      </p>
                      <p>
                        <span className="f-b">IMDB</span> : {movie.imdb}
                      </p>
                    </div>
                  </div>
                </CardContent>
                {/* <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <button className="btn btn-danger" onClick={()=>navigate()}>Book Now</button>
                </CardActions> */}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* support  */}

      <div className="container-support my-2">
        <div className="row-support text-white text-center">
          <div className="">
            <img src={customer} className="img-fluid" />
            <p className="my-1 mt-2">24/7 CUSTOMER CARE</p>
          </div>
          <div className="">
            <img src={ticket} className="img-fluid" />
            <p className="my-1">RESEND BOOKING CONFIRMATION</p>
          </div>
          <div className="">
            <img src={mail} className="img-fluid" />
            <p className="my-1">SUBSCRIBE TO THE NEWSLETTER</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
