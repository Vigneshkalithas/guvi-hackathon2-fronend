import "./App.css";
import { Router, Route, Routes } from "react-router";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminRegister from "./Components/AdminRegister";
import UserRegister from "./Components/UserRegister";
import Dashboard from "./Components/Dashboard";
import Movies from "./Components/Movies";
import { useNavigate, Link } from "react-router-dom";
import { MovieDetails } from "./Components/MovieDetails";
import ResponsiveAppBar from "./Components/AppBar";
import Booking from "./Components/Booking";
import AdminThings from "./Components/AdminThings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Components/usercontext";

//   {
//     name: "RRR",
//     poster:
//       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//     rating: 8.8,
//     summary:
//       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
//     screen : "2D IMAX",
//     languages:"Tamil | Telugu",
//     certificate:"U/A",
//   },
//   {
//     name: "Iron man 2",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     rating: 7,
//     summary:
//       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military.",
//     trailer: "https://www.youtube.com/embed/wKtcmiifycU",
//     screen : "2D IMAX",
//     languages:"Tamil | Telugu",
//     certificate:"U/A",
//   },
//   {
//     name: "Ncfom",
//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     rating: 8.1,
//     summary:
//       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer.",
//     trailer: "https://www.youtube.com/embed/38A__WT3-o0",
//     screen : "2D IMAX",
//     languages:"Tamil | Telugu",
//     certificate:"U/A",
//   },
//   {
//     name: "Jai Bhim",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     summary:
//       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     rating: 8.8,
//     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
//     screen : "2D IMAX",
//     languages:"Tamil | Telugu",
//     certificate:"U/A",
//   },
//   {
//     name: "Avengers",
//     rating: 8,
//     summary:
//       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel.",
//     poster:
//       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
//     screen : "2D IMAX",
//     languages:"Tamil | Telugu",
//     certificate:"U/A",
//   },
//   {
//     name: "Interstellar",
//     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     rating: 8.6,
//     summary:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers.",
//     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
//     screen : "2D IMAX",
//     languages:"Tamil | Telugu",
//     certificate:"U/A",
//   },
//   {
//     name: "Baahubali",
//     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     rating: 8,
//     summary:
//       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
//     screen : "2D IMAX",
//     languages:"Tamil | Telugu",
//     certificate:"U/A",
//   },
//   {
//     name: "Ratatouille",
//     poster:
//       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     rating: 8,
//     summary:
//       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
//     screen : "2D IMAX",
//     languages:"Tamil | Telugu",
//     certificate:"U/A",
//   },
//   {
//     name: "Legend",
//     poster:
//       "https://popcornusa.s3.amazonaws.com/movies/650/10528-40341-TheLegen",
//     rating : 3,
//     summary :"The story revolves around Dr. Saravanan, an apparently world-renowned scientist who has revolutionised the antibiotics field, who chooses to work from his village for the sake of his people.",
//     trailer:"https://youtu.be/WQsdzg27pl4",
//     screen : "2D IMAX",
//     languages:"Tamil | Telugu",
//     certificate:"U/A",
//   },
// ];

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <ResponsiveAppBar />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieid" element={<MovieDetails />} />
          <Route path="/booking/:movieid" element={<Booking />} />

          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/adminregister" element={<AdminRegister />} />

          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/onlyadmin" element={<AdminThings />} />
        </Routes>
      </UserProvider>

      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
