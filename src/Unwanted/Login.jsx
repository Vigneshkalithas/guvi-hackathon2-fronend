import React from 'react';
import { useNavigate, Link} from "react-router-dom";
import TextField from '@mui/material/TextField';


function Login(){

  const navigate = useNavigate();
  

  return (
    <>
    <div className="container login-container">
      <section className="forget text-center">
       
        <div className="content-login">
          
          <h4 className="loginhead">Welcome Back !</h4>
          <div>
            <form>
              <div className="form-box">
                <div className="input-group mb-3">
                <TextField id="outlined-basic" label="Username" variant="outlined" size="small"   sx={{  width: '50ch' }} />
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
                <TextField id="outlined-basic" label="Password" variant="outlined"   size="small" sx={{ width :'50ch'}} />

                </div>

                

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-outline-primary btn-user btn-block login-form"
                    onClick={() => navigate("/dashboard")}
                  >
                    Login
                  </button>
                  </div>
                
                <div className="my-5">
                  <Link className="text-decoration-none" to="/register">
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
  )
}

export default Login