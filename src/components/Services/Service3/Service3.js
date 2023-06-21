/* Find your lost ones page */
import React from "react";
import "./Service3.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import { useState, useEffect } from "react";
//
import Sreult from "./Sresult/Sresult";
//
// import {
//   db,
//   collection,
//   docRef,
// } from "../../../FireBase/Firebase";

import { db } from "../../../FireBase/Firebase";

import { doc, collection, where, query, getDocs, addDoc } from "firebase/firestore";

const Service3 = () => {
  const [key, setkey] = useState(null);
  const [DocDatA, setDocData] = useState([]);
  console.log(key);
  //
  const [ApplicantFName, setAFName] = useState("");
  const [ApplicantEmail, setAEmail] = useState("");
  const [ApplicantPhone, setAPhone] = useState("");
  const [ApplicantRelation, setARelation] = useState("");
  const [LostFName, setLostFName] = useState("");
  const [LostLName, setLostLName] = useState("");
  const [LostGender, setLostGender] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "users"),
        where("first", "==", key)
        //orderBy("date", "desc"), // Assuming "date" is the field containing the timestamp of the items
        //limit(3) // Limit the query to the three most recent items
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDocData(data);
      //console.log(data);
    };

    fetchData();
  }, [key]);

  const handleform = async (e) => {
    e.preventDefault(); // when the form is submited it is not gating reloded
    //
    setLostFName(document.querySelector(".lostFName").value);
    setLostLName(document.querySelector(".lostLName").value);
    //
    //console.log(LostFName);
    //
    try {
      e.preventDefault(); // when the form is submited it is not gating reloded
      console.log("debug passed");
      //
      //
      const docRef = await addDoc(collection(db, "LostRequest"), {
        //data model from the programmer side
        AppicantEmail: ApplicantEmail,
        AppicantFName: ApplicantFName,
        AppicantPhone: ApplicantPhone,
        AppicantRelation: ApplicantRelation,
        LostPLName: LostLName,
        LostPFName: LostFName,
        //documentid: docid,
      });
      console.log("Document written with ID: ", docRef.id);
      //setdocid(docRef.id);
      //console.log("debug docid", docid);
      alert("Applied Succsfully");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error adding document");
    }
    //
  };

  return (
    <div className="mapt">
      <input
        type="search"
        placeholder="Search Here"
        onChange={(e) => setkey(e.target.value)}
      ></input>

      <div className="newsMaster">
        {DocDatA.map((obj) => (
          <div className="Card" key={obj.id}>
            <img
              className="Thumbnail"
              width="140px"
              height="140px"
              src={obj.image}
              alt="Thumbnail"
            ></img>
            <h1 className="headline">First Name: {obj.first}</h1>
            <h1 className="headline">Last Name: {obj.last}</h1>
            <h1 className="headline">Gender: {obj.gender}</h1>
            <h1 className="headline">
              Home address before displacement: {obj.bdAddress}
            </h1>
            <br></br>
            <h1 className="headline">
              If you Suspect it is your lost relative fill the form
            </h1>
            <form onSubmit={handleform} className="form">
              <input
                type="text"
                placeholder="Applicant Full Name"
                onChange={(e) => setAFName(e.target.value)}
              ></input>
              <input
                type="email"
                placeholder="Applicant Email"
                onChange={(e) => setAEmail(e.target.value)}
              ></input>
              <input
                type="tel"
                placeholder="Applicant Phone"
                onChange={(e) => setAPhone(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Applicant Relation"
                onChange={(e) => setARelation(e.target.value)}
              ></input>
              {/*  */}
              <input
                type="text"
                style={{
                  visibility: "hidden",
                }}
                className="lostFName"
                value={obj.first}
              ></input>
              <input
                type="text"
                style={{
                  visibility: "hidden",
                }}
                className="lostLName"
                value={obj.last}
              ></input>

              <button type="submit">Apply</button>
            </form>
          </div>
        ))}
      </div>

      {/* <MapContainer
        center={[8.9489408, 38.74816]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "250px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[8.9489408, 38.74816]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </div>
  );
};

export default Service3;
