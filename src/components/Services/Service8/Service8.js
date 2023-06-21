import React from "react";
import "./Service8.css";
import { useState, useEffect } from "react";
//
import { db } from "../../../FireBase/Firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
//
import Display from "./Display";
//
//import Modal from "./Modal";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Service8 = () => {
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
        collection(db, "volunter"),
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
      const snapshot = await getDocs(collection(db, "volunter"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);
  //
  return (
    <div className="">
      <div className="filter">
        <h1>Filter</h1>
        <div className="FOptions">
          <button className="Fitem" onClick={(e) => setKey("Food and water")}>
            Food and water
          </button>
          <button className="Fitem" onClick={(e) => setKey("Shelter")}>
            Shelter
          </button>
          <button className="Fitem" onClick={(e) => setKey("Healthcare")}>
            Healthcare
          </button>
          <button className="Fitem" onClick={(e) => setKey("Education")}>
            Education:
          </button>
          <button className="Fitem" onClick={(e) => setKey("Legal aid")}>
            Legal aid
          </button>
          <button
            className="Fitem"
            onClick={(e) => setKey("Psychosocial support")}
          >
            Psychosocial support
          </button>
          <button
            className="Fitem"
            onClick={(e) => setKey("Livelihood support")}
          >
            Livelihood support
          </button>
          <button className="Fitem" onClick={(e) => setKey("Other")}>
            Other
          </button>
        </div>
      </div>
      <Display data={data} />
    </div>
  );
};

export default Service8;
