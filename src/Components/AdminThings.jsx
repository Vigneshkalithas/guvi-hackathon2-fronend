import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Config } from "./Config";
import AddMovies from "./AddMovies";

function AdminThings() {
  const [theatrelist, setTheatreList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTheatre, setcurrentTheatre] = useState([]);

  let fetchMovieData = async () => {
    try {
      let Allmovies = await axios.get(`${Config.api}/movies`);
      setMoviesList(Allmovies.data);
    } catch (error) {
      console.log(error);
    }
  };

  let fetchTheatres = async function () {
    try {
      let alltheatres = await axios.get(`${Config.api}/theatres`);
      setTheatreList(alltheatres.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTheatres();
  }, []);

  let formik = useFormik({
    initialValues: {
      theatrename: "",
    },

    validate: (values) => {
      let errors = {};

      if (!values.theatrename) {
        errors.theatrename = "*required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        if (!isEditing) {
          let result = await axios.post(`${Config.api}/theatres`, values);
          fetchTheatres();
          formik.resetForm();
          toast.success(result.data.message);
        } else {
          delete values._id;
          let result = await axios.put(
            `${Config.api}/theatres/${currentTheatre._id}`,
            values
          );
          fetchTheatres();
          formik.resetForm();
          toast.success(result.data.message);

          setIsEditing(false);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleEdit = async (id) => {
    try {
      let theat = await axios.get(`${Config.api}/theatres/${id}`);

      formik.setValues(theat.data);
      setIsEditing(true);
      setcurrentTheatre(theat.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let result = await axios.delete(`${Config.api}/theatres/${id}`);
      fetchTheatres();
      toast.error(result.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 25 }} color="text.dark" gutterBottom>
          Add Theatres
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group my-1">
            <label htmlFor="exampleInputname my-2">Theatre name :</label>
            <input
              type="text"
              className={`form-control my-2 ${
                formik.errors.theatrename ? "error-border" : ""
              }`}
              placeholder="Enter theatre name"
              name="theatrename"
              onChange={formik.handleChange}
              value={formik.values.theatrename}
            />
          </div>
          {formik.errors.theatrename ? (
            <div style={{ color: "red" }}>{formik.errors.theatrename}</div>
          ) : null}
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary my-2"
          />
        </form>
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
      <div className="container-fluid  bg-grey-admin">
        <div className="row my-2">
          <h1 className="text-center">Add Theatres</h1>
          <div className="col my-5">
            <Box sx={{ minWidth: 200 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </div>

          <div className="col my-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Theatre Names</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {theatrelist.map((t, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{t._id}</th>
                      {/* <td>{user.email}</td> */}
                      <td>{t.theatrename}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm my-1 mx-1"
                          onClick={() => handleEdit(t._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm mx-1 my-1"
                          onClick={() => handleDelete(t._id)}
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
        </div>

        <div className="row my-3">
          <h1 className="text-center my-5">Movies Lists</h1>
          <div className="col">
            <Box sx={{ minWidth: 200 }}>
              <Card variant="outlined">
                <AddMovies />
              </Card>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminThings;
