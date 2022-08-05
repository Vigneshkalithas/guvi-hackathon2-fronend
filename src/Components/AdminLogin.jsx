import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Login from "./Login";
import { useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Config } from "./Config";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";

function AdminLogin() {
  // let admin = [{
  //   title : "Hi Admin",
  //   link : "Not Admin ? Click here to login as a user",
  // }]

  // let user = [{
  //   title : "Hi User",
  //   link : "Not User ? Click here to admin"
  // }]

  const navigate = useNavigate();

  const validationSchema = yup.object({
    username: yup.string("Enter username").required("Username is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const adminlogin = await axios.post(`${Config.api}/adminlogin`, values);
        localStorage.setItem("react-app-token", adminlogin.data.token);
        
        if (adminlogin.data.error) {
          toast.error("Error: " + adminlogin.data.error);
        } else {
          toast.success(adminlogin.data.message);
          navigate("/onlyadmin");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="container login-container">
        <section className="forget text-center">
          <div className="content-login">
            <h4 className="loginhead">Hi Admin !</h4>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="form-box">
                  <div className="input-group mb-3">
                    <TextField
                      id="outlined-basic"
                      label="Username"
                      variant="outlined"
                      size="small"
                      sx={{ width: "52ch" }}
                      type={"text"}
                      error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                      }
                      helperText={
                        formik.touched.username && formik.errors.username
                      }
                      name={"username"}
                      value={formik.values.username}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      size="small"
                      sx={{ width: "52ch" }}
                      type={"text"}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      name={"password"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div className="d-grid gap-2">
                    {/* <button
                    className="btn btn-outline-primary btn-user btn-block login-form"
                    onClick={() => navigate("/onlyadmin")}
                  >
                    Login
                    
                  </button> */}
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>

                  <div className="my-5">
                    <Link className="text-decoration-none" to="/adminregister">
                      Create an account | Sign up ?
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AdminLogin;
