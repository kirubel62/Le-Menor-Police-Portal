import React from "react";
import "./AdminAuth.css";
import { useState } from "react";
//
import { db } from "../../../FireBase/Firebase";
import { auth } from "../../../FireBase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//

const AdminAuth = () => {
  //
  //
  const [email, setemail] = useState("");
  const [AID, setAID] = useState("");
  const [password, setpassword] = useState("");
  //
  const navigate = useNavigate();
  //
  const handlogin = (e) => {
    e.preventDefault(); // when the form is submited it is not gating reloded
    signInWithEmailAndPassword(auth, email, password) //this function return a promise
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        const user = userCredential.user;
        const uid = user.displayName;
        const id = user.uid;
        setAID(id);
        console.log(id);
        // console.log("auth=",uid);
        // console.log("auth=", user.id);
        // if (AID == "Dizm62fRVLSE90Wks3yuM1gEUK33") {
          navigate("/admin");
        // } else {
          alert("error");
        // }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
      });
  };
  //

  return (
    <div className="body">
      <section>
        <div className="signin">
          <div className="content">
            <h2>Police</h2>
            <div className="form">
              <form onSubmit={handlogin}>
                <div className="inputBox">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                  <i>Username</i>
                </div>
                <div className="inputBox">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                  />
                  <i>Password</i>
                </div>
                <div className="inputBox">
                  <input type="submit" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminAuth;
