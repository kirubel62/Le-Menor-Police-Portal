import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Display.css";
//map
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import customIcon from "../images/Marker.png";
//
//import Modal from "./Modal";
import Modal from "react-modal";
Modal.setAppElement("#root");
//

const Display = (props) => {
  //console.log(props)
  const [id, setid] = useState("");
  const handleMore = () => {
    console.log("");
  };

  //
  const [modalIsOpen, setModalIsOpen] = useState(props.data.map(() => false));
  const { data } = props;

  function openModal(id) {
    const index = data.findIndex((obj) => obj.id === id);
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = true;
    setModalIsOpen(newModalIsOpen);
  }

  function closeModal(id) {
    const index = data.findIndex((obj) => obj.id === id);
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = false;
    setModalIsOpen(newModalIsOpen);
  }

  return (
    <>
      <div className="asdis">
        {data.map((obj) => (
          <div className="DPCard" key={obj.id}>
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              src={obj.image}
              alt="User Photo"
            ></img>
            <div className="DPcardItem">
              <label>First Name</label>
              <h3>{obj.first}</h3>
            </div>
            <div>
              <label>Last Name</label>
              <h3>{obj.last}</h3>
            </div>
            {/*  */}
            <button onClick={() => openModal(obj.id)}>Update</button>
            <Modal
              isOpen={modalIsOpen[data.findIndex((o) => o.id === obj.id)]}
              onRequestClose={() => closeModal(obj.id)}
            >
              <h2>Modal Title</h2>
              <div className="DPcardItem">
                <label>Nationality</label>
                <h3>{obj.nationality}</h3>
              </div>
              <div className="DPcardItem">
                <label>Gender</label>
                <h3>{obj.gender}</h3>
              </div>
              <div className="DPcardItem">
                <label>Home address before displacement</label>
                <h3>{obj.bdAddress}</h3>
              </div>
              <div className="DPcardItem">
                <label>Any specific needs or concerns</label>
                <h3>{obj.specificNeed}</h3>
              </div>
              <button onClick={() => closeModal(obj.id)}>Close Modal</button>
              {/* Map */}
              <MapContainer
                center={[obj.latitude, obj.longitude]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "350px", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[obj.latitude, obj.longitude]}>
                  <Popup>Near {obj.geocoding}</Popup>
                </Marker>
              </MapContainer>
              {/*  */}
            </Modal>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
