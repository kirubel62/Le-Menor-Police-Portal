// Registeration Page
import React from "react";
import "./Service1.css";
import { useRef } from "react";

import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../FireBase/Firebase";
import { storage } from "../../../FireBase/Firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
//
import { useState, useEffect } from "react";
import { isEmpty } from "@firebase/util";
//geolocation and reverse geo coding
import Geocode from "react-geocode";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Popup } from "react-leaflet";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
//
import { Camera } from "react-camera-pro";
import { set } from "firebase/database";
//

const Service1 = () => {
  const [Docid, setdocid] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [Location, setLocation] = useState({});
  const [Latitude, setLatitude] = useState("");
  const [Longitude, setLongitude] = useState("");
  const [Geocoding, setGeocoding] = useState([]);
  const position = [Latitude, Longitude];
  //user input handling use states
  //  Information
  const [FullName, setFullName] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [DOB, setDOB] = useState("");
  const [Nationality, setNationality] = useState("");
  const [Gender, setGender] = useState("");
  const [AddressBD, setAddressBD] = useState("");
  const [AddressAD, setAddressAD] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [EmergencyCP, setEmegencyCP] = useState("");
  const [EmergencyCN, setEmegencyCN] = useState("");
  const [FamilyNo, setFamilyNo] = useState("");
  const [FamilyR, setFamilyR] = useState("");
  const [DOD, setDOD] = useState("");
  const [ROD, setROD] = useState("");
  const [POO, setPOO] = useState("");
  const [GeoCountry, setGeoCountry] = useState("");
  const [GeoSubCity, setGeoSubCity] = useState("");
  const [Need1, setNeed1] = useState("");
  const [Need2, setNeed2] = useState("");
  const [Need3, setNeed3] = useState("");
  const [Need4, setNeed4] = useState("");
  const [Need5, setNeed5] = useState("");
  const [Need6, setNeed6] = useState("");
  const [Need7, setNeed7] = useState("");
  const [MedicalCondition, setMedicalCondition] = useState("");
  const [SpecificNeed, setSpecificNeed] = useState("");
  //
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [ImgPreview, setImgPreview] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    const selected = event.target.files[0];
    setImgPreview(URL.createObjectURL(selected));
    // setImage(event.target.files[0]);
    //setImage(URL.createObjectURL(selectedFile));
  };

  const handleTakePhoto = async (e) => {
    e.preventDefault();
    const imageData = await camera.current.takePhoto();

    const blob = await fetch(imageData).then((res) => res.blob());
    const timestamp = Date.now();
    const fileName = `userimg${timestamp}.png`;
    const selectedFile = new File([blob], fileName);

    setSelectedFile(selectedFile);
    setImgPreview(URL.createObjectURL(selectedFile));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setSelectedFile(null);
    setImgPreview(null);
  };

  const getUserLocation = (e) => {
    e.preventDefault(); // when the form is submited it is not gating reloded
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setLatitude(position.coords.latitude);
      console.log(Latitude);
      setLongitude(position.coords.longitude);
      console.log(Longitude);
      //console.log(position.coords.latitude);
      //console.log(position.coords.longitude);
      //console.log(Location);
      //
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${Latitude}+${Longitude}&key=dd3edc0f73ce46199d9397a9df74f88a`
      )
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          console.log(responseData.results[0].components.country);
          setGeoCountry(responseData.results[0].components.country);
          console.log(responseData.results[0].components.county);
          setGeoSubCity(responseData.results[0].components.county);
          setGeocoding(responseData.results[0].formatted);
          console.log(responseData.results[0].formatted);
        });
      //
    }); //
  };

  // useEffect(() => {
  //   fetch(
  //     `https://api.opencagedata.com/geocode/v1/json?q=${Latitude}+${Longitude}&key=dd3edc0f73ce46199d9397a9df74f88a`
  //   ).then((response) => response.json())
  //   .then((responseData) => {
  //     console.log(responseData)
  //   })
  // },[]);

  //
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=false&key=AIzaSyBUxKrprMaCVbaTOSB4iGYXXVLRWXtfgZ0`
  //     )
  //       .then((response) => response.json())
  //       .then((responseData) => {
  //         setGeocoding(responseData);
  //         console.log(Geocoding);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   });
  // }, [Location]);
  //

  const handleupload = () => {
    // Create a storage reference from our storage service
    const storageRef = ref(storage, `/images/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            alert("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            alert("User doesn't have permission to access the object");
            break;
          case "storage/canceled":
            // User canceled the upload
            alert("User canceled the upload");
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            alert("Unknown error occurred, inspect error.serverResponse");
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //console.log("File available at", downloadURL);
          setimgurl(downloadURL);
          console.log("use state worked", imgurl);
        });
      }
    );

    //console.log(selectedFile);
    //const uploadTask = uploadBytesResumable(storageRef, file, selectedFile);
  };

  //
  const handleform = async (e) => {
    // e.preventDefault();
    handleupload();
    try {
      e.preventDefault(); // when the form is submited it is not gating reloded
      console.log("debug passed");
      //
      //
      const docRef = await addDoc(collection(db, "users"), {
        //data model from the programmer side
        first: FName,
        last: LName,
        born: DOB,
        nationality: Nationality,
        gender: Gender,
        bdAddress: AddressBD,
        adAddress: AddressAD,
        image: imgurl,
        phone: Phone,
        email: Email,
        emergencyCP: EmergencyCP,
        emergencyCN: EmergencyCN,
        familyNo: FamilyNo,
        familyR: FamilyR,
        dateofdisplaced: DOD,
        resonofdisplacement: ROD,
        origin: POO,
        latitude: Latitude,
        longitude: Longitude,
        geocoding: Geocoding,
        geoCountry: GeoCountry,
        geoSubCity: GeoSubCity,
        need1: Need1,
        need2: Need2,
        need3: Need3,
        need4: Need4,
        need5: Need5,
        need6: Need6,
        need7: Need7,
        medicalCondition: MedicalCondition,
        specificNeed: SpecificNeed,
        documentid: "",
      });
      console.log("Document written with ID: ", docRef.id);
      setdocid(docRef.id);
      console.log(Docid);
      //console.log("debug docid", docid);

      //
      const AddDocID = doc(db, "users", Docid);
      // Set the "capital" field of the city 'DC'
      await updateDoc(AddDocID, {
        documentid: Docid,
      });
      //
      alert("Registred Succsfully");
      // setdocid("");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error adding document");
    }
    //

    //
  };
  //
  const positionm = [51.505, -0.09];
  //
  return (
    <div className="bgdiv">
      <div className="c1">
        <form onSubmit={handleform} className="form">
          <h1 className="header">Personal Information</h1>

          <div className="form-cd">
            <label className="label">first name:</label>
            <input
              className="input"
              name="fname"
              type="text"
              //value={FullName}
              onChange={(e) => setFName(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">last name:</label>
            <input
              className="input"
              name="fname"
              type="text"
              //value={FullName}
              onChange={(e) => setLName(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Date of birth:</label>
            <input
              className="input"
              type="date"
              onChange={(e) => setDOB(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Nationality:</label>
            <select
              className="input"
              defaultValue={null}
              onChange={(e) => setNationality(e.target.value)}
            >
              g<option value="Afhanistan">Afghanistan</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands
              </option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, The Democratic Republic of The">
                Congo, The Democratic Republic of The
              </option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'ivoire">Cote D'ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">
                Falkland Islands (Malvinas)
              </option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-bissau">Guinea-bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands">
                Heard Island and Mcdonald Islands
              </option>
              <option value="Holy See (Vatican City State)">
                Holy See (Vatican City State)
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">
                Iran, Islamic Republic of
              </option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">
                Korea, Democratic People's Republic of
              </option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">
                Lao People's Democratic Republic
              </option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">
                Libyan Arab Jamahiriya
              </option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia, The Former Yugoslav Republic of">
                Macedonia, The Former Yugoslav Republic of
              </option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">
                Micronesia, Federated States of
              </option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">
                Northern Mariana Islands
              </option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">
                Palestinian Territory, Occupied
              </option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Pierre and Miquelon">
                Saint Pierre and Miquelon
              </option>
              <option value="Saint Vincent and The Grenadines">
                Saint Vincent and The Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and The South Sandwich Islands">
                South Georgia and The South Sandwich Islands
              </option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">
                Svalbard and Jan Mayen
              </option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">
                Tanzania, United Republic of
              </option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-leste">Timor-leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">
                Turks and Caicos Islands
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">
                United States Minor Outlying Islands
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="Virgin Islands, British">
                Virgin Islands, British
              </option>
              <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>

          <div className="form-cd">
            <label className="label">Gender:</label>
            <select
              className="input"
              defaultValue={null}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-cd">
            <label className="label">Home address before displacement:</label>
            <input
              className="input"
              type="text"
              onChange={(e) => setAddressBD(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">
              Current address (if different from above):
            </label>
            <input
              className="input"
              type="text"
              onChange={(e) => setAddressAD(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Upload Photo</label>
            <input
              className="input"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
            ></input>
            <div className="camera">
              <div className="Left">
                <Camera aspectRatio={4 / 3} className="camera" ref={camera} />
                {/* <button
                  className="btn"
                  onClick={() => setSelectedFile(camera.current.takePhoto())}
                >
                  Take photo
                </button> */}
                <button className="btn" onClick={handleTakePhoto}>
                  Take photo
                </button>

                <button className="btn" onClick={handleReset}>
                  Reset
                </button>
              </div>
              <div className="Right">
                {/* <img className="CameraPreview" width="200px" height="200px" src={image} alt="CameraPreview" /> */}
                {ImgPreview && (
                  <img
                    src={ImgPreview}
                    width="200px"
                    height="200px"
                    alt="selected"
                  />
                )}
              </div>
            </div>
          </div>

          <h1 className="header">Contact Information</h1>

          <div className="form-cd">
            <label className="label">Phone number:</label>
            <input
              className="input"
              type="tel"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="+2519-00-00-00-00"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Email:</label>
            <input
              className="input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">
              Emergency contact name and relationship:
            </label>
            <input
              className="input"
              type="text"
              onChange={(e) => setEmegencyCP(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Emergency contact phone number:</label>
            <input
              className="input"
              type="tel"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="+2519-00-00-00-00"
              onChange={(e) => setEmegencyCN(e.target.value)}
            ></input>
          </div>

          <h1 className="header"> Family Information </h1>

          <div className="form-cd">
            <label className="label">Number of family members:</label>
            <input
              className="input"
              type="number"
              onChange={(e) => setFamilyNo(e.target.value)}
            ></input>
          </div>

          {/* <div className="form-cd">
            <label className="label">Names and ages of family members:</label>
            <input className="input"></input>
          </div> */}

          <div className="form-cd">
            <label className="label">
              Relationship to the head of the household:
            </label>
            <input
              className="input"
              type="text"
              onChange={(e) => setFamilyR(e.target.value)}
            ></input>
          </div>

          <h1 className="header">Displacement Information</h1>

          <div className="form-cd">
            <label className="label">Date of displacement:</label>
            <input
              className="input"
              type="date"
              onChange={(e) => setDOD(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Reason for displacement:</label>
            <input
              className="input"
              type="text"
              onChange={(e) => setROD(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Place of origin:</label>
            <input
              className="input"
              type="text"
              onChange={(e) => setPOO(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Current location:</label>
            <button onClick={getUserLocation}>get Current Location</button>
            <h1>{Geocoding}</h1>
          </div>

          <h1>Needs Assessment</h1>

          <div className="form-cd">
            <label className="label">Food and water:</label>
            <input
              className="input"
              type="checkbox"
              onChange={(e) => setNeed1(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Shelter:</label>
            <input
              className="input"
              type="checkbox"
              onChange={(e) => setNeed2(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Healthcare:</label>
            <input
              className="input"
              type="checkbox"
              onChange={(e) => setNeed3(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Education:</label>
            <input
              className="input"
              type="checkbox"
              onChange={(e) => setNeed4(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Legal aid:</label>
            <input
              className="input"
              type="checkbox"
              onChange={(e) => setNeed5(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Psychosocial support:</label>
            <input
              className="input"
              type="checkbox"
              onChange={(e) => setNeed6(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Livelihood support:</label>
            <input
              className="input"
              type="checkbox"
              onChange={(e) => setNeed7(e.target.value)}
            ></input>
          </div>

          <h1 className="header">Additional Information</h1>

          <div className="form-cd">
            <label className="label">
              Any medical conditions or disabilities:
            </label>
            <input
              className="input"
              type="text"
              onChange={(e) => setMedicalCondition(e.target.value)}
            ></input>
          </div>

          <div className="form-cd">
            <label className="label">Any specific needs or concerns:</label>
            <input
              className="input"
              type="text"
              onChange={(e) => setSpecificNeed(e.target.value)}
            ></input>
          </div>

          <pre className="pre">
            By signing below, I certify that the information provided is
            accurate and true to the best of my knowledge.
          </pre>
          <label className="label">Signature:</label>

          <label className="label">Date:</label>
          <pre className="pre">
            Note: This form can be modified based on the specific needs and
            circumstances of the displaced population being registered. It's
            important to ensure that the form is designed in a way that is
            culturally appropriate and accessible to all individuals.
            Additionally, appropriate measures should be taken to ensure the
            privacy and confidentiality of the information provided.
          </pre>
          <h1>#################################</h1>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
        <div
          className="map"
          style={{
            height: "200px",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* <div className="map">
            <MapContainer
              center={[8.9489408, 38.74816]}
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[8.9489408, 38.74816]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Service1;
