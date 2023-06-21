import React from "react";
import "./UStorySection.css";
//
import { useState } from "react";
import { useEffect } from "react";
//FIRE BASE
import { db } from "../../../FireBase/Firebase";
import { collection, getDocs } from "firebase/firestore";
//
const UStorySection = () => {
  //
  const [data, setData] = useState([]);
  //
  useEffect(() => {
    const fetchData = async () => {
      //const db = firebase.firestore();
      //const snapshot = await db.collection("users").get();
      const snapshot = await getDocs(collection(db, "StoryBlog"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="StoryMaster">
        {data.map((obj) => (
          //   
          <div className="SBCard" key={obj.id}>
            <div className="CardHead">
              <label>headline: </label>
              <h1 className="headline">{obj.headline}</h1>
              <h1 className="date">{obj.date}</h1>
            </div>

            <video className="video" width="320" height="240" controls>
              <source src={obj.video} type="video/mp4" />
            </video>

            <p className="Summary">{obj.Summary}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UStorySection;
