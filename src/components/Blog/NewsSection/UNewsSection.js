import React from "react";
import "./UNewsSection.css";
//
import { useState } from "react";
import { useEffect } from "react";
//FIRE BASE
import { db } from "../../../FireBase/Firebase";
import { collection, getDocs } from "firebase/firestore";
//
const UNewsSection = () => {
  //
  const [data, setData] = useState([]);
  //
  useEffect(() => {
    const fetchData = async () => {
      //const db = firebase.firestore();
      //const snapshot = await db.collection("users").get();
      const snapshot = await getDocs(collection(db, "NewsBlog"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="newsMaster">
        {data.map((obj) => (
          <div className="NewsCard" key={obj.id}>
            <div className="NewsCardHead">
              <label>Headline</label>
              <h1 className="headline">{obj.headline}</h1>
              <h1 className="date">{obj.date}</h1>
            </div>
            <img
              className="Thumbnail"
              max-width="240px"
              max-height="240px"
              src={obj.image}
              alt="Thumbnail"
            ></img>
            <p className="Summary">{obj.summary}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UNewsSection;
