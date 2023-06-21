import React from "react";
import "./UpadateAccount.css";
import Display from "./Display";
import { useState , useEffect } from "react";
//
import { db } from "../../../../FireBase/Firebase";
import { collection , getDocs } from "firebase/firestore";
//

const UpadateAccount = () => {
  //
  const [data, setData] = useState([]);
  const [Key, setKey] = useState("");
  //
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
  //
  return (
    <div className="UpadateAccount">
      <Display data={data} />
    </div>
  );
};

export default UpadateAccount;
