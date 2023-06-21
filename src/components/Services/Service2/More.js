import React from "react";
//
import { useEffect, useState } from "react";
import { db } from "../../../FireBase/Firebase";

const More = (props) => {
  //
  const [obj, setObj] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //const db = firebase.firestore();
      const snapshot = await db
        .collection("users")
        .doc(props.match.params.id)
        .get();
      const data = { id: snapshot.id, ...snapshot.data() };
      setObj(data);
    };

    fetchData();
  }, [props.match.params.id]);
  //
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default More;
