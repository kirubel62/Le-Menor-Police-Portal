import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ChatDisplay.css";
import { useEffect } from "react";

const ChatDisplay = (props) => {
  //console.log(props);
  const [State, setState] = useState(props);
  //console.log(State);
  useEffect(() => {
    setState(props);
  }, [props]);

  return (
    <>
      <div className="ChatDis">
        {State.data.map((obj) => (
          <div className="chatsviv" key={obj.id}>
            <h1 className="Dnames">{obj.name}</h1>
            <h1 className="Dmessage">{obj.message}</h1>
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

export default ChatDisplay;
