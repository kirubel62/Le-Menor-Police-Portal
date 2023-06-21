import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PDisplay.css";
//
import { db } from "../../FireBase/Firebase";
import {
  collection,
  addDoc,
  getDoc,
  where,
  query,
  getDocs,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";
//
//import Modal from "./Modal";
import Modal from "react-modal";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
Modal.setAppElement("#root");

const PDisplay = (props) => {
  //console.log(props)
  const [id, setid] = useState("");
  const handleMore = () => {
    console.log("");
  };
  //
  //
  const [modalIsOpen, setModalIsOpen] = useState(props.data.map(() => false));
  const { data } = props;

  function openModal(id) {
    const index = data.findIndex((obj) => obj.id === id);
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = true;
    setModalIsOpen(newModalIsOpen);
  }

  function closeModal(id) {
    const index = data.findIndex((obj) => obj.id === id);
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = false;
    setModalIsOpen(newModalIsOpen);
  }
  //
  const [OfficerName, setOfficerName] = useState("");
  const [Report, setReport] = useState("");
  const [SuspectFName, setSuspectFName] = useState("");
  const [SuspectLName, setSuspectLName] = useState("");
  const [SuspectPhoto, setSuspectPhoto] = useState("");
  const [SuspectDocID, setSuspectDocID] = useState("");
  const handleform = async (e) => {
    e.preventDefault(e); // when the form is submited it is not gating reloded
    //
    setSuspectFName(document.querySelector(".SuspectFName").value);
    setSuspectLName(document.querySelector(".SuspectLName").value);
    setSuspectPhoto(document.querySelector(".SuspectPhoto").value);
    setSuspectDocID(document.querySelector(".SuspectDocid").value);
    //
    try {
      e.preventDefault(); // when the form is submited it is not gating reloded
      console.log("debug passed");
      //
      //
      const docRef = await addDoc(collection(db, "InvestigationReport"), {
        //data model from the programmer side
        firstName: SuspectFName,
        lastName: SuspectLName,
        image: SuspectPhoto,
        docid: SuspectDocID,
        offficer: OfficerName,
        recordResult: Report,
      });
      console.log("Document written with ID: ", docRef.id);
      //setdocid(docRef.id);
      //console.log(Docid);
      //console.log("debug docid", docid);

      //
      alert("Registred Succsfully");
      // setdocid("");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error adding document");
    }
    //
  };

  //

  return (
    <>
      <div className="DVservise">
        {props.data.map((obj) => (
          <div className="VolunterCard" key={obj.id}>
            <div className="cardItem">
              <label className="label">images</label>
              <img
                src={obj.image}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              ></img>
            </div>
            <div className="cardItem">
              <label className="label">First Name</label>
              <h2 className="value">{obj.first}</h2>
            </div>
            <div className="cardItem">
              <label className="label">Last Name</label>
              <h2 className="value">{obj.last}</h2>
            </div>
            <div className="cardItem">
              <label className="label">Before Displacement Address</label>
              <h2 className="value">{obj.bdAddress}</h2>
            </div>
            <div className="cardItem">
              <label className="label">Gender</label>
              <h2 className="value">{obj.gender}</h2>
            </div>
            {/*  */}
            <button className="moreButton" onClick={() => openModal(obj.id)}>
              More
            </button>
            <Modal
              isOpen={modalIsOpen[data.findIndex((o) => o.id === obj.id)]}
              onRequestClose={() => closeModal(obj.id)}
              className="modalContainer"
              overlayClassName="modalOverlay"
            >
              <div className="modalContent">
                <h2 className="modalTitle">Record Report Form</h2>
                <div>
                  <label className="modalLabel">Born:</label>
                  <h3>{obj.Born}</h3>
                </div>
                <div>
                  <label className="modalLabel">No of family members</label>
                  <h3>{obj.familyNo}</h3>
                </div>
                <div>
                  <label className="modalLabel">resonofdisplacement</label>
                  <h3>{obj.resonofdisplacement}</h3>
                </div>

                {/* peer to peer message */}
                <div>
                  <form onSubmit={handleform} className="form">
                    <input
                      type="text"
                      placeholder="Reecord Investigation Result"
                      className="DPIB"
                      onChange={(e) => setReport(e.target.value)}
                      required
                    ></input>
                    <input
                      type="text"
                      placeholder="Officer Name"
                      className="DPIB"
                      onChange={(e) => setOfficerName(e.target.value)}
                      required
                    ></input>
                    {/*  */}
                    <input
                      type="text"
                      style={{
                        visibility: "hidden",
                      }}
                      className="SuspectFName"
                      value={obj.first}
                    ></input>

                    <input
                      type="text"
                      style={{
                        visibility: "hidden",
                      }}
                      className="SuspectLName"
                      value={obj.last}
                    ></input>

                    <input
                      type="text"
                      style={{
                        visibility: "hidden",
                      }}
                      className="SuspectPhoto"
                      value={obj.image}
                    ></input>

                    <input
                      type="text"
                      style={{
                        visibility: "hidden",
                      }}
                      className="SuspectDocid"
                      value={obj.documentid}
                    ></input>

                    <button type="submit">SEND Report</button>
                  </form>
                </div>
                {/*  */}
                <button
                  className="modalButton"
                  onClick={() => closeModal(obj.id)}
                >
                  Close Modal
                </button>
              </div>
            </Modal>
          </div>
        ))}
      </div>

      {/* {props.documents.map((did, index) => (
        <div className="card">
          <div className="data">
            <p>{did.born}</p>
            <p>{did.full}</p>
            <p>{did.<p>{obj.full}</p>}</p>
            //<img src={did.image} alt="error"></img>
            <Link to={`/more/${did}`}>
              <button>More</button>
            </Link>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default PDisplay;
