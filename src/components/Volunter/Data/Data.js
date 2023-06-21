import React from "react";
import "./Display.css";
import { useState, useEffect } from "react";
//
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../FireBase/Firebase";
//component
import Display from "./Display";

const Service2 = () => {
  //
  //const [documents, setdocuments] = useState([]);
  //Method 2
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //const db = firebase.firestore();
      //const snapshot = await db.collection("users").get();
      const snapshot = await getDocs(collection(db, "users"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  //Method 1
  // const getDocumenst = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   const data = [];
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     //console.log(doc.id, " => ", doc.data());
  //     data.push(doc.data());
  //   });
  //   setdocuments(data);
  //   //console.log(documents);
  // };

  // useEffect(() => {
  //   //getFilmRequest(searchFilm);
  //   getDocumenst();
  // }, []);

  //
  return (
    <div className="masterdisplay">
      <Display data={data} />
    </div>
  );
};

export default Service2;
