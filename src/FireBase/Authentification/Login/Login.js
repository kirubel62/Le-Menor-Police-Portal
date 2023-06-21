import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
//
import { ToastContainer, toast } from "react-toastify";
//
import { useEffect } from "react";
//
import pic1 from "./images/pic1.jpg";

//<Link to="/Landing">Home</Link>

const Login = () => {
  //
  const notify = () => toast("Wow so easy !");
  //
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //
  const navigate = useNavigate();

  //method
  const handlogin = (e) => {
    e.preventDefault(); // when the form is submited it is not gating reloded
    signInWithEmailAndPassword(auth, email, password) //this function return a promise
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        const user = userCredential.user;
        const uid = user.displayName;
        console.log(uid);
        navigate("/Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        notify();
        console.log(error);
      });
  };
  //

  return (
    <>
      <div className="masterLogin">
        <div className="master1">
          <div className="left">
            <form onSubmit={handlogin} className="childdiv_c1_c1">
              <h1 className="h1">Welcome Back!</h1>
              <input
                className="inputField"
                type="email"
                placeholder="Enter Your Email Here"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <br />
              <input
                className="inputField"
                type="password"
                placeholder="Enter Your Password Here"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <br />
              <button className="btnL" type="submit">
                Login
              </button>
              <h2 className="foot">WE LOOK FORWARD TO WORKING WITH YOU</h2>
            </form>

            <p className="foot2">
              Don't have an account yet? <Link to="/">Signup</Link>
            </p>
          </div>
          <div className="rightD">
            <img className="img" src={pic1} alt="Background" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
