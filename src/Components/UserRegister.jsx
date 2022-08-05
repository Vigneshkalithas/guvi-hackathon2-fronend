import React from 'react';
import { useNavigate, Link} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useFormik } from "formik";
import * as yup from 'yup';
import { Config } from "./Config";
import { toast } from "react-toastify";



function UserRegister() {

  const navigate = useNavigate();

  const validationSchema = yup.object({
    username : yup
    .string('Enter username')
    .required('Username is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });


  const formik = useFormik({

    initialValues: {
      username: "",
      email :"",
      password: "",
    },

    // validate : (values) => { 
    //   let errors = {}

    //   if(!values.username){
    //     errors.username="please enter username"
    //   } 

    //   if(!values.email){
    //     errors.email="please enter email"
    //   }
      
    //    if(!values.password){
    //     errors.password="please enter password"
    //   }
    
    //   return errors

    // },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const login = await axios.post(`${Config.api}/usersregister`, values);
        toast.success(login.data.message);
        formik.resetForm();
        navigate("/userlogin");


        // console.log(login.data.token);
        // localStorage.setItem("react_app_token", login.data.token);
        // navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
      // alert("hi")
    },
  });


  return (
    <div className="container login-container">
    <section className="forget text-center">
      {/* <div className="image-login"></div> */}
      <div className="content-login">
        
        <h4 className="loginhead">Register User !</h4>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-box">
              <div className="input-group mb-3">
              <TextField id="outlined-basic" label="Username" variant="outlined" size="small" 
                sx={{  width: '52ch' }} 
                type={"text"}
                // placeholder={"Username"}
                // className={"form-control"}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                name={"username"}
                value={formik.values.username}
                onChange={formik.handleChange}  />
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username" /> */}
              </div>
              <div className="input-group mb-3">
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Password" /> */}
              <TextField id="outlined-basic" label="Email" variant="outlined"   size="small" sx={{ width :'52ch'}}
              type={"text"}
              // placeholder={"Username"}
              // className={"form-control"}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              name={"email"}
              value={formik.values.email}
              onChange={formik.handleChange} />

              </div>
              <div className="input-group mb-3">
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Password" /> */}
              <TextField id="outlined-basic" label="Password" variant="outlined"   size="small" sx={{ width :'52ch'}} 
              type={"text"}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              // placeholder={"Username"}
              // className={"form-control"}
              name={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              />

              </div>

              

              <div className="d-grid gap-2 my-3">
                {/* <input type={"submit"} className="btn btn-outline-primary btn-user btn-block login-sform"} /> */}
            {/* <input type={"submit"} className={"btn btn-primary"} /> */}
            <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>

                 
              
                </div>
              
              <div className="my-5">
                <Link className="text-decoration-none" to="/userlogin">
                  Already have an account ? | Sign in ?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
  )
}

export default UserRegister