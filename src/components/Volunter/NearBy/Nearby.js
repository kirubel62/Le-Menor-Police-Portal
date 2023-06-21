import React from "react";
import "./Nearby.css";
import { useState, useEffect } from "react";
//
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../FireBase/Firebase";
//component
import Display from "./Display";

const Nearby = () => {
  const [data, setData] = useState([]);
  const [Key, setKey] = useState("");
  //
  //
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
        collection(db, "users"),
        where("geoSubCity", "==", Key)
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
      const snapshot = await getDocs(collection(db, "users"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);
  //
  return (
    <div>
      <div className="NearByDisplay">
        <div className="filter">
          <h1>Filter</h1>
          <div className="FOptions">
            <button className="Fitem" onClick={(e) => setKey("Addis Ketema")}>
              Addis Ketema
            </button>
            <button className="Fitem" onClick={(e) => setKey("Akaky Kaliti")}>
              Akaky Kaliti
            </button>
            <button className="Fitem" onClick={(e) => setKey("Arada")}>
              Arada
            </button>
            <button className="Fitem" onClick={(e) => setKey("Bole")}>
              Bole
            </button>
            <button className="Fitem" onClick={(e) => setKey("Gullele")}>
              Gullele
            </button>
            <button className="Fitem" onClick={(e) => setKey("Kirkos")}>
              Kirkos
            </button>
            <button className="Fitem" onClick={(e) => setKey("Kolfe Keranio")}>
              Kolfe Keranio
            </button>
            <button className="Fitem" onClick={(e) => setKey("Lideta")}>
              Lideta
            </button>
            <button
              className="Fitem"
              onClick={(e) => setKey("Nifas Silk-Lafto")}
            >
              Nifas Silk-Lafto
            </button>
            <button className="Fitem" onClick={(e) => setKey("Yeka")}>
              Yeka
            </button>
          </div>
        </div>
        <Display data={data} />
      </div>
    </div>
  );
};

export default Nearby;
