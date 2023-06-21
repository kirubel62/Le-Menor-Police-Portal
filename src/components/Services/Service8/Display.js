import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Display.css";
//
import { db } from "../../../FireBase/Firebase";
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

const Display = (props) => {
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
  const [DPName, setDPName] = useState("");
  const [DPMessage, setDPMessage] = useState("");
  const [ORGName, setORGName] = useState("");
  const [ORGID, setORGID] = useState("");
  const [ORGdocRef, setORGdocRef] = useState("");
  const handleform = async (e) => {
    e.preventDefault(e); // when the form is submited it is not gating reloded
    //
    setORGName(document.querySelector(".orgName").value);
    //
    // try {
    //   e.preventDefault(); // when the form is submited it is not gating reloded
    //   console.log("debug passed");
    //   //
    //   //
    //   const docRef = await addDoc(collection(db, "volunter"), {
    //     //data model from the programmer side
    //     Message: {
    //       dpMessage: DPMessage,
    //       dpName: DPName,
    //     },
    //     //documentid: docid,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    //   //setdocid(docRef.id);
    //   //console.log("debug docid", docid);
    //   alert("In BoxMessage Succsfully Sended");
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    //   alert("Error adding document");
    // }
    //

    ///It updates but not add new
    // const q = query(
    //   collection(db, "volunter"),
    //   where("OrgName", "==", ORGName)
    // );
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   //console.log(doc.id, " => ", doc.data());
    //   setORGID(doc.id);
    // });
    // console.log(ORGID);
    // //
    // // Construct a valid document reference using the collection name and document ID
    // const docRef = doc(db, "volunter", ORGID);
    // console.log(docRef);
    // setORGdocRef(docRef);

    // //
    // //console.log({ ORGID });
    // // up a new document in collection "cities"
    // const washingtonRef = doc(db, "volunter", ORGID);

    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //   Message: {
    //     dpMessage: DPMessage,
    //     dpName: DPName,
    //   },
    // });

    try {
      //
      const q = query(
        collection(db, "volunter"),
        where("OrgName", "==", ORGName)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        setORGID(doc.id);
      });
      //
      // Retrieve the document
      const documentRef = doc(db, "volunter", ORGID);
      const documentSnapshot = await getDoc(documentRef);

      if (documentSnapshot.exists()) {
        // Get the current map field data
        const messageField = documentSnapshot.data().Message || {};

        // Add the new field to the map field
        const updatedMessageField = {
          ...messageField,
          ["dpName"]: DPName,
          ["dpMessage"]: DPMessage,
        };

        // // Update the document with the updated map field
        await updateDoc(documentRef, {
          Message: updatedMessageField,
        });

        console.log("Field added successfully.");
      } else {
        console.log("Document does not exist.");
      }
    } catch (error) {
      console.error("Error adding field to map:", error);
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
              <label className="label">Organization/Individual Name</label>
              <h2 className="value">{obj.OrgName}</h2>
            </div>
            <div className="cardItem">
              <label className="label">Phone Number</label>
              <h2 className="value">{obj.Phone}</h2>
            </div>
            <div className="cardItem">
              <label className="label">Email</label>
              <h2 className="value">{obj.Email}</h2>
            </div>
            <div className="cardItem">
              <label className="label">Service</label>
              <h2 className="value">{obj.Service}</h2>
            </div>
            <div className="cardItem">
              <label className="label">WebSite</label>
              <h2 className="value">{obj.WebSite}</h2>
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
                <h2 className="modalTitle">More Data of The Volunter</h2>
                <div>
                  <label className="modalLabel">Contact Person:</label>
                  <h3>{obj.CPersonName}</h3>
                </div>
                <div>
                  <label className="modalLabel">City</label>
                  <h3>{obj.City}</h3>
                </div>
                <div>
                  <label className="modalLabel">Sub-City:</label>
                  <h3>{obj.SubCity}</h3>
                </div>
                <div>
                  <label className="modalLabel">Country:</label>
                  <h3>{obj.Country}</h3>
                </div>
                <div>
                  <label className="modalLabel">
                    {" "}
                    a brief description of the service{" "}
                  </label>
                  <p>{obj.ServiceDescription}</p>
                </div>
                <h1>Availability:</h1>
                <div>
                  <label className="modalLabel">Days of the Week::</label>
                  <h3>{obj.ADays}</h3>
                </div>
                <div>
                  <label className="modalLabel">Time of Day</label>
                  <h3>{obj.ATime}</h3>
                </div>
                {/* peer to peer message */}
                <div>
                  <form onSubmit={handleform} className="form">
                    <input
                      type="text"
                      placeholder="Displaced Person Full Name"
                      className="DPIB"
                      onChange={(e) => setDPName(e.target.value)}
                    ></input>
                    <input
                      type="text"
                      placeholder="Displaced Person Message"
                      className="DPIB"
                      onChange={(e) => setDPMessage(e.target.value)}
                    ></input>
                    {/*  */}
                    <input
                      type="text"
                      style={{
                        visibility: "hidden",
                      }}
                      className="orgName"
                      value={obj.OrgName}
                    ></input>

                    <button type="submit">SEND MESSAGE</button>
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

export default Display;
