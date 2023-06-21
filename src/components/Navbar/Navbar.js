import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
//firebase
import { getAuth, signOut } from "firebase/auth";
//

function Navbar() {
  //
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  //
  const cheak = () => {
    const auth = getAuth();
    alert("debug");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/Login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  function SignOut() {
    const auth = getAuth();
    // navigate("/Login");
    alert("debug1");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/Login");
        alert("debug2");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <>
      <div className="navbar">
        <div className="left">
          <ul className="ul">
            <li className="Title">
              <Link to="/Home">Le መኖር</Link>
            </li>
          </ul>
        </div>

        <div className="right">
          <ul className="ul">
            {/* <li className="sub">
              <Link to="/Home">Home</Link>
            </li> */}

            <li className="sub">
              <Link to="/Services">Services</Link>
            </li>

            <li className="sub">
              <Link to="/Volunter">Volunter</Link>
            </li>

            <li className="sub">
              <Link to="/blog">Blogs</Link>
            </li>

            <li className="sub">
              <Link to="/About">About</Link>
            </li>

            <li className="sub">
              <Link to="/contact">Contact</Link>
            </li>

            <li className="sub">
              <Link to="/donation">Donation</Link>
            </li>

            <li className="sub">
              <Link to="/">Admin</Link>
            </li>

            <li className="sub">
              <button onClick={openModal}>Account</button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
              >
                <h2>Modal Title</h2>
                <p>Modal content goes here...</p>
                <button onClick={cheak}>Sign Out</button>

                <button onClick={closeModal}>Close Modal</button>
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
