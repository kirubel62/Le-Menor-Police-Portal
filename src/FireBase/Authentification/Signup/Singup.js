//
import React, { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import pic1 from "./images/pic1.jpg";
//
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { useEffect } from "react";
import { paste } from "@testing-library/user-event/dist/paste";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserID, setUserID] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        const user = userCredential.user;
        const uid = user.uid;
        console.log("user ID:", uid);
        setUserID(uid);
        console.log("userID work:", UserID);
        // toast.success("Toast message!", { position: toast.POSITION.TOP_RIGHT });
        if (UserID !== null) {
          AddAccount();
        }

        //AddAccount();
        if (UserID !== null) {
          navigate("/Home");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        toast.error(error.message, { position: toast.POSITION.TOP_RIGHT });
      });
    //
  };

  async function AddAccount() {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Accounts"), {
      name: name,
      email: email,
      password: password,
      userID: UserID,
    });
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <div
      className="signincontainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className="signupcontainer_c1">
        <div className="left">
          <form onSubmit={signUp} className="signincontainer_c2">
            <h1>Create Account</h1>
            <input
              className="ip"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <input
              className="ip"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="ip"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className="btn1" type="submit">
              Sign Up
            </button>
            <p className="p1">
              Already have an account yet? <Link to="/Login">Sign In</Link>
            </p>
          </form>
        </div>
        <div className="rightD">
          <img className="img" src={pic1} alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
