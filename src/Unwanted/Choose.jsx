import React from "react";
import Button from "@mui/material/Button";
import { RiAdminLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";


function Choose() {
  const navigate = useNavigate();
  return (
    <>
       <div className="container chooseContainer">
        <div className="row chooseRow">
          <div className="col chooseColumnImage">
            <div className="choose-image">
              <img
                className="img-fluid"
                // src="https://cdn.dribbble.com/users/755664/screenshots/5509493/film-web.gif"
                src="https://i.pinimg.com/originals/f0/73/f1/f073f1bdf9ff96b15b443563e45788dc.gif"
              ></img>
            </div>
          </div>
          <div className="col chooseColumnText">
            <div>
              <h2 className="text-center">Welcome Back!</h2>
              {/* <h2 className="text-center">Right Now</h2> */}
            </div>
             <div className="my-3">
             <div className="my-4"><Button variant="outlined" size="large" color="success" onClick={()=> navigate("/adminlogin")} startIcon={<RiAdminLine />}>Admin</Button></div>
             <div className="my-4"><Button variant="outlined" size="large" onClick={()=> navigate("/userlogin")} startIcon={<FiUsers />}>Users</Button></div>
                
              
            </div>
          </div>
        </div>
      </div> 






    </>
  );
}

export default Choose;

