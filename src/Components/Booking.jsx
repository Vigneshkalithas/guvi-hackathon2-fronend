import MovieCreationOutlined from "@mui/icons-material/MovieCreationOutlined";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { Field, Form, Formik, FormikProps } from "formik";
import Swal from "sweetalert2";
import UserContext from "./usercontext";
import { Config } from "./Config";

// CommonJS

function Booking() {
  const [movieList, setMovieList] = useState([]);

  let movieData = useContext(UserContext);

  const { movieid } = useParams();
  console.log(movieid);
  const movie = movieData.movieList[movieid];

  const Swal = require("sweetalert2");

  const [theatre, setTheatre] = useState([]);
  const [theatreA, setTheatreA] = useState([]);
  const [seats, setSeats] = useState([]);
  const [timing, setTiming] = useState([]);

  const handleSelectTheatre = (e) => {
    setTheatreA(e);
  };
  const handleSelectSeats = (e) => {
    setSeats(e);
  };
  const handleSelectTiming = (e) => {
    setTiming(e);
  };

  let num = seats.length && theatre.length && timing.length;

  let fetchData = async () => {
    try {
      let result = await axios.get(`${Config.api}/theatres`, {
        // headers : {
        //   'Authorization': `Bearer ${localStorage.getItem('react_app_token')}`
        // }
      });
      setTheatre(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <div className="row">
          <div className="card mb-3" style={{ maxWidth: "550px" }}>
            <div className="row no-gutters">
              <div className="col">
                <img src={movie.poster} className="card-img" alt={movie.name} />
              </div>
              <div className="col">
                <div className="card-body">
                  <h3 className="card-title">{movie.name}</h3>
                  <p className="card-text my-4">
                    <span className="f-b">Screen : </span>
                    {movie.screen}
                  </p>
                  <p className="card-text my-4">
                    <span className="f-b">Languages : </span>
                    {movie.languages}
                  </p>
                  <p className="card-text my-4">
                    <span className="f-b">Certificate : </span>
                    {movie.certificate}
                  </p>
                  <p className="card-text my-4">
                    <span className="f-b">Rating : </span>
                    {movie.rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="seatBody">
          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>Available</small>
            </li>
            <li>
              <div className="seat selected"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat sold"></div>
              <small>Sold</small>
            </li>
          </ul>
          <div className="containerSeat">
            <div className="screen"></div>
            <div className="rowSeat">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="rowSeat">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat sold" />
              <div className="seat sold" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="rowSeat">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat sold" />
              <div className="seat sold" />
            </div>
            <div className="rowSeat">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="rowSeat">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat sold" />
              <div className="seat sold" />
              <div className="seat sold" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
            </div>
            <div className="rowSeat">
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat" />
              <div className="seat sold" />
              <div className="seat sold" />
              <div className="seat sold" />
              <div className="seat sold" />
              <div className="seat" />
            </div>
          </div>
          <p className="textSeat">
            You have selected <span id="count">{seats}</span> seat for a price
            of RS.<span id="total">{seats * 100}</span>
          </p>
        </div>

        <div className="container my-5 bg-book">
          <div className="booking-dropDowns">
            <div>
              <Dropdown onSelect={handleSelectTheatre}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select Theatre
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {theatre.map((t, index) => {
                    return (
                      <Dropdown.Item
                        eventKey={t.theatrename}
                        key={index}
                        href=""
                      >
                        {t.theatrename}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div>
              <Dropdown onSelect={handleSelectTiming}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Show time
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="8.00 AM" href="">
                    8.00 AM
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="10.30 AM" href="">
                    10.30 AM
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2.00 PM" href="">
                    2.00 PM
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="5.00 PM" href="">
                    5.00 PM
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="10.00 PM" href="">
                    10.00 PM
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div>
              <Dropdown onSelect={handleSelectSeats}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Select Seats
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1" href="">
                    1
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2" href="">
                    2
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3" href="">
                    3
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="4" href="">
                    4
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="5" href="">
                    5
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col d-flex justify-content-center">
              {!num == 0 ? (
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    Swal.fire({
                      icon: "success",
                      title: "Ticket Booked Succesfully",
                      html: `<h4>Price : ${seats * 100}</h4>
               <p>Booked seats :${seats}</p>
               <p>Timing :${timing} </p>
               <p>Theatre : ${theatreA}</p>`,
                    })
                  }
                >
                  Book Now
                </button>
              ) : (
                <button
                  className="btn btn-danger ms-3"
                  onClick={() =>
                    Swal.fire({
                      icon: "error",
                      title: "No tickets booked",
                      text: "Please book your tickets",
                    })
                  }
                >
                  book now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
