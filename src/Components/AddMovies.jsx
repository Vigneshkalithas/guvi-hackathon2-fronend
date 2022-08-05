import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import UserContext from "./usercontext";
import { Config } from "./Config";

function AddMovies() {
  const [moviesListAll, setMoviesListAll] = useState([]);
  const [isMovieEditing, setIsMovieEditing] = useState(false);
  const [currentMovie, setCurrentMovie] = useState([]);

  const [movieList, setMovieList] = useState([]);
  let movieData = useContext(UserContext);

  let fetchMovieData = async () => {
    try {
      let Allmovies = await axios.get(`${Config.api}/movies`);
      // console.log(Allmovies.data);
      setMoviesListAll(Allmovies.data);
      movieData.setMovieList(Allmovies.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  let handleEditMovie = async (id) => {
    try {
      let editmovie = await axios.get(`${Config.api}/movies/${id}`);

      formik.setValues(editmovie.data);

      setIsMovieEditing(true);
      setCurrentMovie(editmovie.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      let movieDelete = await axios.delete(`${Config.api}/movies/${id}`);
      fetchMovieData();
      toast.error(movieDelete.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  let formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      trailer: "",
      rating: "",
      screen: "",
      certificate: "",
      summary: "",
      languages: "",
    },

    validate: (values) => {
      let errors = {};

      let pattern = new RegExp(/[+-]?([0-9]*[.])?[0-9]+/);

      if (!values.name) {
        errors.name = "*required";
      }
      if (!values.poster) {
        errors.poster = "*required";
      }
      if (!values.trailer) {
        errors.trailer = "*required";
      }
      if (!values.rating) {
        errors.rating = "*required";
      } else if (!pattern.test(formik.values.rating)) {
        errors.rating = "only numbers allowed";
      }
      if (!values.screen) {
        errors.screen = "*required";
      }
      if (!values.certificate) {
        errors.certificate = "*required";
      }

      if (!values.summary) {
        errors.summary = "*required";
      }

      if (!values.languages) {
        errors.languages = "*required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        if (!isMovieEditing) {
          let result = await axios.post(`${Config.api}/movies`, values);
          fetchMovieData();
          formik.resetForm();
          toast.success(result.data.message);
        } else {
          delete values._id;
          let result = await axios.put(
            `${Config.api}/movies/${currentMovie._id}`,
            values
          );
          fetchMovieData();
          formik.resetForm();
          toast.success(result.data.message);

          setIsMovieEditing(false);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="row">
        <table className="table m-4">
          <thead>
            <tr>
              <th scope="col">Names</th>
              {/* <th scope="col">Poster</th> */}
              <th scope="col">Ratings</th>
              {/* <th scope="col">Summary</th> */}
              <th scope="col">Screen</th>
              <th scope="col">Languages</th>
              <th scope="col">Certificate</th>
              <th scope="col">Trailer</th>
            </tr>
          </thead>
          <tbody>
            {moviesListAll.map((m, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{m.name}</th>
                  <td>{m.rating}</td>
                  <td>{m.screen}</td>
                  <td>{m.languages}</td>
                  <td>{m.certificate}</td>
                  <td>{m.trailer}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm my-1 mx-1"
                      onClick={() => handleEditMovie(m._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm mx-1 my-1"
                      onClick={() => handleDeleteMovie(m._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row m-5">
        <h1 className="text-center my-4">Add Movies</h1>
        <form className="" onSubmit={formik.handleSubmit}>
          <div className="row my-3">
            <div className="col">
              <label htmlFor="inputText1">Movie Name : </label>
              <input
                type="text"
                placeholder="Movie name"
                className={`form-control my-1 ${
                  formik.errors.name ? "error-border" : ""
                }`}
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="col">
              <label htmlFor="inputText2">Movie Poster : </label>
              <input
                type="text"
                placeholder="Poster link"
                className={`form-control my-1 ${
                  formik.errors.poster ? "error-border" : ""
                }`}
                name="poster"
                onChange={formik.handleChange}
                value={formik.values.poster}
              />
              {formik.errors.poster ? (
                <div style={{ color: "red" }}>{formik.errors.poster}</div>
              ) : null}
            </div>
            <div className="col">
              <label htmlFor="inputText3">Movie Trailer : </label>

              <input
                type="text"
                placeholder="Youtube link"
                className={`form-control my-1 ${
                  formik.errors.trailer ? "error-border" : ""
                }`}
                name="trailer"
                onChange={formik.handleChange}
                value={formik.values.trailer}
              />
              {formik.errors.trailer ? (
                <div style={{ color: "red" }}>{formik.errors.trailer}</div>
              ) : null}
            </div>
          </div>

          <div className="row my-3">
            <div className="col">
              <label htmlFor="inputText4">Rating : </label>

              <input
                type="text"
                placeholder="1"
                className={`form-control my-1 ${
                  formik.errors.rating ? "error-border" : ""
                }`}
                name="rating"
                onChange={formik.handleChange}
                value={formik.values.rating}
              />
              {formik.errors.rating ? (
                <div style={{ color: "red" }}>{formik.errors.rating}</div>
              ) : null}
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Screen :</label>
                <select
                  id="exampleFormControlSelect2"
                  className={`form-control my-1 ${
                    formik.errors.screen ? "error-border" : ""
                  }`}
                  name="screen"
                  onChange={formik.handleChange}
                  value={formik.values.screen}
                >
                  <option>Dts</option>
                  <option>2D IMAX</option>
                  <option>3D DOLBY</option>
                  <option>4K IMAX</option>
                  <option>8K</option>
                </select>
                {formik.errors.screen ? (
                  <div style={{ color: "red" }}>{formik.errors.screen}</div>
                ) : null}
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect3">Certificate :</label>
                <select
                  id="exampleFormControlSelect3"
                  className={`form-control my-2 ${
                    formik.errors.certificate ? "error-border" : ""
                  }`}
                  name="certificate"
                  onChange={formik.handleChange}
                  value={formik.values.certificate}
                >
                  <option>U</option>
                  <option>A</option>
                  <option>U/A</option>
                </select>
                {formik.errors.certificate ? (
                  <div style={{ color: "red" }}>
                    {formik.errors.certificate}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col">
              <label htmlFor="inputText5">Languages : </label>
              <input
                type="text"
                placeholder="Tamil , English"
                className={`form-control my-1 ${
                  formik.errors.languages ? "error-border" : ""
                }`}
                name="languages"
                onChange={formik.handleChange}
                value={formik.values.languages}
              />
              {formik.errors.languages ? (
                <div style={{ color: "red" }}>{formik.errors.languages}</div>
              ) : null}
            </div>
          </div>

          <div className="row my-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Summary : </label>
                <textarea
                  id="exampleFormControlTextarea1"
                  rows={3}
                  className={`form-control my-2 ${
                    formik.errors.summary ? "error-border" : ""
                  }`}
                  name="summary"
                  onChange={formik.handleChange}
                  value={formik.values.summary}
                />
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col d-flex justify-content-center">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary my-2"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddMovies;
