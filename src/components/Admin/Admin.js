import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
//icons
import logo1 from "./images/Blog.png";
import logo2 from "./images/Account.png";
import logo3 from "./images/TechnicalSupport.png";
import logo4 from "./images/Find.png";
//
import PDisplay from "./PDisplay"
//
import { useState, useEffect } from "react";
//
import { db } from "../../FireBase/Firebase";
 
import { collection, getDocs, where, query } from "firebase/firestore";

const Admin = () => {
  //
//
const [data, setData] = useState([]);
const [Key, setKey] = useState("");
console.log(Key);

useEffect(() => {
  const fetchData = async () => {
    //const db = firebase.firestore();
    //const snapshot = await db.collection("users").get();

    //Mode 1 not for serarh
    // const snapshot = await getDocs(collection(db, "volunter"),where("Service", "==", Key));
    // const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    // setData(data);
    // console.log(data);

    //Mode 2
    const q = query(
      collection(db, "PoliceRecord"),
      where("Service", "==", Key)
      //orderBy("date", "desc"), // Assuming "date" is the field containing the timestamp of the items
      //limit(3) // Limit the query to the three most recent items
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setData(data);
    //console.log(data);
  };

  fetchData();
}, [Key]);
//
useEffect(() => {
  const fetchData = async () => {
    //const db = firebase.firestore();
    //const snapshot = await db.collection("users").get();

    //Mode 1 not for serarh
    const snapshot = await getDocs(collection(db, "PoliceRecord"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setData(data);
    console.log(data);
  };

  fetchData();
}, []);
//
  //
  return (
    <div>
      <PDisplay data={data} />
    </div>
  );
};

export default Admin;
