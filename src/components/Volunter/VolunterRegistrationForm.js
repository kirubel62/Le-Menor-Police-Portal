import React from "react";
import "./VRForm.css";
import { useState } from "react";
//
import { db } from "../../FireBase/Firebase";
import { collection, addDoc , doc , updateDoc } from "firebase/firestore";

const VolunterRegistarationForm = () => {
  //
  const [OrgName, setOrgName] = useState("");
  const [CPersonName, setCPersonName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [SubCity, setSubCity] = useState("");
  const [Country, setCountry] = useState("");
  const [WebSite, setWebSite] = useState("");
  const [Service, setService] = useState("");
  const [ServiceDescription, setServiceDescription] = useState("");
  const [ADays, setADays] = useState("");
  const [ATime, setATime] = useState("");
  const [Qualifications, setQualifications] = useState("");
  const [Confirm, setConfirm] = useState("");
  const [Docid, setdocid] = useState("");

  //
  const handleform = async (e) => {
    e.preventDefault(); // when the form is submited it is not gating reloded
    //
    //console.log(LostFName);
    //
    try {
      e.preventDefault(); // when the form is submited it is not gating reloded
      console.log("debug passed");
      //
      //
      const docRef = await addDoc(collection(db, "volunter"), {
        //data model from the programmer side
        OrgName: OrgName,
        CPersonName: CPersonName,
        Phone: Phone,
        Email: Email,
        Address: Address,
        City: City,
        SubCity: SubCity,
        Country: Country,
        WebSite: WebSite,
        Service: Service,
        ServiceDescription: ServiceDescription,
        ADays: ADays,
        ATime: ATime,
        Qualifications: Qualifications,
        Confirm: Confirm,
        documentid: "",
      });
      console.log("Document written with ID: ", docRef.id);
      setdocid(docRef.id);
      //setdocid(docRef.id);
      //console.log("debug docid", docid);

      //
      //
      const AddDocID = doc(db, "volunter", Docid);
      // Set the "capital" field of the city 'DC'
      await updateDoc(AddDocID, {
        documentid: Docid,
      });
      //
      //

      alert("Applied Succsfully");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error adding document");
    }
    //
  };
  //
  return (
    <div className="VForm">
      <form onSubmit={handleform} className="form">
        <div>
          <p>
            Thank you for your interest in providing volunteer services for
            displaced people. Please fill out the following information to
            register as a service provider:
          </p>

          <div className="ver">
            <label className="lable">Organization/Individual Name: </label>
            <input
              className="input"
              type="text"
              onChange={(e) => setOrgName(e.target.value)}
            ></input>
          </div>

          <div className="ver">
            <label className="lable">Contact Person: </label>
            <input
              type="text"
              className="input"
              onChange={(e) => setCPersonName(e.target.value)}
            ></input>
          </div>

          <div className="ver">
            <lable className="lable">Phone Number:</lable>
            <input
              type="text"
              className="input"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>

          <div className="ver">
            <lable className="lable">Email: </lable>
            <input
              type="text"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="ver">
            <lable className="lable">Address:</lable>
            <input
              type="text"
              className="input"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>

          <div className="ver">
            <label>City:</label>
            <input
              type="text"
              className="input"
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>

          <div className="ver">
            <label>Sub-City:</label>
            <input
              type="text"
              className="input"
              onChange={(e) => setSubCity(e.target.value)}
            ></input>
          </div>

          <div className="ver">
            <label>Country:</label>
            <input
              type="text"
              className="input"
              onChange={(e) => setCountry(e.target.value)}
            ></input>
          </div>

          <div className="ver">
            <lable>Website (if applicable): </lable>
            <input
              type="text"
              className="input"
              onChange={(e) => setWebSite(e.target.value)}
            ></input>
          </div>

          <div className="ver">
            <lable>Service Offered:</lable>
            <select
              className="input"
              defaultValue={null}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="Food and water:">Food and water:</option>
              <option value="Shelter">Shelter</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Legal aid">Legal aid</option>
              <option value="Psychosocial support">Psychosocial support</option>
              <option value="Livelihood support">Livelihood support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="ver">
            <lable>
              Please provide a brief description of the service you are offering
              to displaced people:
            </lable>
            <br></br>
            <textarea
              style={{
                width: "350px",
                height: "100px",
              }}
              onChange={(e) => setServiceDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="ver">
            <lable>Availability:</lable>
            <lable>
              Please indicate the days and times you are available to provide
              volunteer services:
            </lable>
            <br></br>
            <label>Day(s) of the Week:</label>
            <input
              type="text"
              className="input"
              onChange={(e) => setADays(e.target.value)}
            ></input>
            <lable>Time(s) of Day: </lable>
            <input
              type="text"
              className="input"
              onChange={(e) => setATime(e.target.value)}
            ></input>
          </div>

          <div>
            <lable>
              Please list any skills or qualifications you have that may be
              relevant to providing volunteer services for displaced people:
            </lable>
            <br></br>
            <input
              type="text"
              className="input"
              onChange={(e) => setQualifications(e.target.value)}
            ></input>
          </div>

          <div>
            <lable>
              By signing below, I confirm that the information provided is true
              and accurate to the best of my knowledge. I understand that
              providing false information may result in the revocation of my
              registration.
            </lable>
            <br></br>
            <input
              type="checkbox"
              onChange={(e) => setConfirm(e.target.value)}
            ></input>
            <br></br>
            <label>
              Thank you for your interest in providing volunteer services for
              displaced people. We will review your application and be in touch
              with you shortly.
            </label>
          </div>
        </div>
        <button
          type="submit"
          style={{
            color: "white",
            backgroundColor: "black",
            width: "500px",
            height: "50px",
            fontSize: 32,
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default VolunterRegistarationForm;
