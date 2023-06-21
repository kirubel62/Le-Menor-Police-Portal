import React from "react";
import "./Service4.css";
import { useState, useEffect } from "react";
import ChatDisplay from "./ChatDisplay";
//
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  query,
} from "firebase/firestore";
import { db } from "../../../FireBase/Firebase";

const Service4 = () => {
  //user input handling use states
  const [Name, setName] = useState("");
  const [Message, setmessage] = useState("");
  const [docid, setdocid] = useState("");

  //read
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [refresh, setrefresh] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      //const db = firebase.firestore();
      //const snapshot = await db.collection("users").get();
        //static method
      //const snapshot = await getDocs(collection(db, "chat"));
      //const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      //setdata(data);
      //console.log(data);
      //real time update method
      const q = query(collection(db, "chat"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setdata(data);
        console.log("Current data",data);
      });
      //
    };
    fetchData();
  }, [refresh]);
  //write
  const handleform = async (e) => {
    try {
      e.preventDefault(); // when the form is submited it is not gating reloded
      //console.log("debug passed");
      //
      const docRef = await addDoc(collection(db, "chat"), {
        //data model from the programmer side
        name: Name,
        message: Message,
      });
      //console.log("Document written with ID: ", docRef.id);
      setdocid(docRef.id);
      console.log("debug docid", docid);
      setrefresh("refreshed");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  //
  return (
    <div className="Chatmaster">
      <div className="Chatchild1">
        <ChatDisplay className="display" data={data} />
      </div>
      <div className="Chatchild2">
        <form onSubmit={handleform}>
          <input
            type="text"
            className="Sname"
            placeholder="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            className="Smessage"
            placeholder="Write Something"
            value={Message}
            onChange={(e) => setmessage(e.target.value)}
          ></input>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Service4;
