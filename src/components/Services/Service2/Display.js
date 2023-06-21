import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Display.css";

const Display = (props) => {
  //console.log(props)
  const [id, setid] = useState("");
  const handleMore = () => {
    console.log("");
  };

  return (
    <>
      <div>
        {props.data.map((obj) => (
          <div key={obj.id}>
            <h2>{obj.born}</h2>
            <p>{obj.full}</p>
            <img src={obj.image} width="100px" height="100px"></img>
            {/* <button
              onClick={() => (window.location.href = `/myPage/${obj.id}`)}
            >
              More
            </button> */}
            <Link to={`/More/${obj.id}`}>More</Link>
          </div>
        ))}
      </div>

      {/* {props.documents.map((did, index) => (
        <div className="card">
          <div className="data">
            <p>{did.born}</p>
            <p>{did.full}</p>
            <p>{did.<p>{obj.full}</p>}</p>
            //<img src={did.image} alt="error"></img>
            <Link to={`/more/${did}`}>
              <button>More</button>
            </Link>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default Display;
