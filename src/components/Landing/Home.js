import React from "react";
import "./Home.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Parallax } from "react-parallax";
import pica from "./image/imga.jpg";
import pich from "./image/imgh.jpg";
import picf from "./image/imgf.jpg";
import picd from "./image/imgd.jpg";
import picg from "./image/imgg.jpg";
import parallaxBgImg2 from "./image/Parrallex2.jpg";
import parallaxBgImg3 from "./image/Parrallex3.jpg";
import parallaxBgImg4 from "./image/Parallelx4.jpg";


import africa from "./image/Africa.png";

import { useEffect, useState } from "react";
import FilmList from "./FilmList";
import SearchBox from "./SearchBox";
import Feauter from "../Feauter";
//fire base
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../FireBase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  //for api
  const [films, setfilms] = useState([
    //inital
    {
      year: 2022,
      coo_id: "-",
      coo_name: "-",
      coo: "-",
      coo_iso: "-",
      coa_id: "-",
      coa_name: "-",
      coa: "-",
      coa_iso: "-",
      total: 53165720,
    },
    //
  ]);

  //making the search dynamic with state obj
  //const [searchFilm, setSearchFilm] = useState("");
  const [searchFilm, setSearchFilm] = useState("2022"); //with inital search key

  const getFilmRequest = async (searchFilm) => {
    //to make request for the api
    //const url = ` http://www.omdbapi.com/?s=${searchFilm}&apikey=1e010137`;

    //const url = `  http://www.omdbapi.com/?s=${searchFilm}&apikey=1e010137`;
    const url = `https://api.unhcr.org/population/v1/idmc/?page=&limit=&yearFrom=&yearTo=&year=${searchFilm}&download=&coo=&coa=&coo_all=&coa_all=&cf_type=`;

    const response = await fetch(url);

    //convert response to json
    const responseJson = await response.json();

    const responseJsonv2 = responseJson.items[0];
    const responseJsonv3 = responseJson.items[0];

    //to test
    //console.log(responseJsonv3);
    //console.log(responseJson.items);
    //console.log(responseJsonv2);
    //setfilms(responseJsonv3);

    if (responseJsonv3) {
      //to replace
      //console.log(responseJson);
      //setfilms(responseJsonv2.Search);
      setfilms(responseJsonv3);
      //console.log(responseJsonv3); //
    }
  };

  //call the getFilmRequest with use Effect
  // use effect use to call functions at start time
  useEffect(() => {
    //getFilmRequest(searchFilm);
    getFilmRequest(searchFilm);
  }, [searchFilm]);
  //Statistics
  const [TotalDisplacedPeople, setTotalDisplacedPeople] = useState("");
  const [TotalDisplacedPeopleMale, setTotalDisplacedPeopleMale] = useState("");
  const [TotalDisplacedPeopleFemale, setTotalDisplacedPeopleFemale] =
    useState("");

  async function Statistics() {
    var c = 0;
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      c = c + 1;
      setTotalDisplacedPeople(c);
      //console.log(c);
      //console.log(doc.id, " => ", doc.data());
    });
  }

  async function StatisticsMale() {
    var c = 0;
    const q = query(collection(db, "users"), where("gender", "==", "Male"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      c = c + 1;
      setTotalDisplacedPeopleMale(c);
    });
  }

  async function StatisticsFemale() {
    var c = 0;
    const q = query(collection(db, "users"), where("gender", "==", "Female"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      c = c + 1;
      setTotalDisplacedPeopleFemale(c);
    });
  }

  useEffect(() => {
    Statistics();
    StatisticsMale();
    StatisticsFemale();
  }, []);

  // FAQ
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const toggleContent2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleContent3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleContent4 = () => {
    setIsOpen4(!isOpen4);
  };

  const toggleContent5 = () => {
    setIsOpen5(!isOpen5);
  };

  const toggleContent6 = () => {
    setIsOpen6(!isOpen6);
  };

  const toggleContent7 = () => {
    setIsOpen7(!isOpen7);
  };

  const toggleContent8 = () => {
    setIsOpen8(!isOpen8);
  };
  //
  //get current user
  const [currentUser, setcurrentUser] = useState("");
  const [currentUserId, setcurrentUserID] = useState("");
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setcurrentUserID(uid);
        console.log("Current user id:", currentUserId);
        if (currentUserId !== null) {
          getUser();
        }
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const getUser = async () => {
    const q = query(
      collection(db, "Accounts"),
      where("userID", "==", currentUserId)
      //orderBy("date", "desc"), // Assuming "date" is the field containing the timestamp of the items
      //limit(3) // Limit the query to the three most recent items
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //setDocData(data);
    console.log("name", data);
  };

  //

  return (
    <>
      <div className="Home">
        {/* <Parallax strength={1} bgImage={picd} className="parallax">
          <div className="content">
            <div className="sub-content">
              <h1>{currentUserId}</h1>
              <h1>{currentUser}</h1>
            </div>
          </div>
        </Parallax> */}
        <Parallax strength={1} bgImage={picd} className="parallax">
          <div className="content">
            <div className="sub-content">
              <img src={africa} style={{width: '350px' , height: '350px'}}></img>
              <h1>Find real people, not ads</h1>
              <h2>
                Search for help or offer it to those who need it, no matter
                where you are now or where you are going.
              </h2>
            </div>
          </div>
        </Parallax>
        <Parallax strength={1} bgImage={parallaxBgImg2} className="parallax">
          <div className="content">
            <div className="sub-content">
              <h1>Ethiopian displaced people</h1>
              <p>
                The ICRC's long-standing work addressing internal displacement
                globally is guided by our mandate to protect the lives and
                dignity of people affected by armed conflict and other violence.
                We focus on helping internally displaced people meet their
                specific needs, in addition to addressing the negative
                consequences of their displacement on host communities and
                supporting those who are at risk of displacement.
              </p>
              <button
                className="btn1"
                role="link"
                onClick={() =>
                  openInNewTab(
                    "https://www.internal-displacement.org/countries/ethiopia#:~:text=Disasters%2C%20mostly%20floods%20and%20drought,%2C%20Oromia%2C%20Somali%20and%20SNNP."
                  )
                }
              >
                Read More
              </button>
            </div>
          </div>
        </Parallax>

        <Parallax strength={100} bgImage={picg} className="parallax">
          <div className="content">
            <div className="sub_bc">
              <div>
                <pre>
                  “It is the obligation of every person born in a safer room to
                  open the door when someone in danger knocks.” <br></br>— Dina
                  Nayeri
                </pre>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          strength={-100}
          blur={{ min: -5, max: 10 }}
          bgImage={pich}
          className="parallax"
        >
          <div className="content">
            <div className="sub-content">
              <div>
                <h1>Internal Displacement Monitoring Centre (IDMC)</h1>
                <SearchBox
                  searchFilm={searchFilm}
                  setSearchFilm={setSearchFilm}
                />
              </div>

              <div>
                <FilmList films={films} />
              </div>
            </div>
          </div>
        </Parallax>
        {/* Stat */}
        <Parallax
          strength={-100}
          blur={{ min: -5, max: 10 }}
          bgImage={parallaxBgImg3}
          className="parallax"
        >
          <div className="content">
            <div className="sub-content">
              <div className="StatContent">
                <div className="SC">
                  <h1>Total displaced people</h1>
                  <div className="circle">{TotalDisplacedPeople}</div>
                </div>

                <div className="SC">
                  <h1>Total male displaced people</h1>
                  <div className="circle">{TotalDisplacedPeopleMale}</div>
                </div>
                <div className="SC">
                  <h1>Total female displaced people</h1>
                  <div className="circle">{TotalDisplacedPeopleFemale}</div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        {/* FAQ */}
        <Parallax
          strength={-100}
          blur={{ min: -5, max: 10 }}
          bgImage={parallaxBgImg4}
          className="parallax"
        >
          <div className="content">
            <div className="sub-content">
              <div className="fac">
                <h1> Frequently Asked Questions</h1>
                <div>
                  <button onClick={toggleContent}>
                    What is a displaced person?
                  </button>
                  {isOpen && (
                    <div>
                      <p>
                        A displaced person refers to an individual or group who
                        has been forced to flee their homes due to conflict,
                        violence, persecution, or natural disasters. They are
                        unable to return to their place of origin and seek
                        refuge elsewhere.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <button onClick={toggleContent2}>
                    How many displaced people are there in Ethiopia?
                  </button>
                  {isOpen2 && (
                    <div>
                      <p>
                        {" "}
                        As of my knowledge cutoff in September 2021, Ethiopia
                        has been experiencing significant internal displacement.
                        According to the International Organization for
                        Migration (IOM), there were approximately 1.8 million
                        internally displaced persons (IDPs) in Ethiopia.
                        However, please note that the situation may have
                        changed, and it's recommended to consult up-to-date
                        sources for the most accurate information.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <button onClick={toggleContent3}>
                    What causes displacement in Ethiopia?
                  </button>
                  {isOpen3 && (
                    <div>
                      <p>
                        {" "}
                        Displacement in Ethiopia can be caused by various
                        factors. The primary drivers include inter-communal
                        conflicts, ethnic tensions, political instability, land
                        disputes, and environmental factors such as drought and
                        floods. These triggers often lead to widespread
                        displacement within the country.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <button onClick={toggleContent4}>
                    Where do displaced people in Ethiopia seek refuge?
                  </button>
                  {isOpen4 && (
                    <div>
                      <p>
                        {" "}
                        Displaced people in Ethiopia often seek refuge within
                        their own country. They may flee to neighboring regions
                        or urban areas where they hope to find safety, shelter,
                        and access to basic services. Some may also seek asylum
                        in neighboring countries, although the majority remain
                        internally displaced.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <button onClick={toggleContent5}>
                    What challenges do displaced people face in Ethiopia?
                  </button>
                  {isOpen5 && (
                    <div>
                      <p>
                        {" "}
                        Displaced people in Ethiopia face numerous challenges.
                        These include limited access to food, clean water,
                        healthcare, and education. They often lack adequate
                        shelter and may be exposed to harsh weather conditions.
                        Additionally, they may face protection risks, such as
                        gender-based violence, exploitation, and limited
                        livelihood opportunities.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <button onClick={toggleContent6}>
                    How does the Ethiopian government assist displaced people?
                  </button>
                  {isOpen6 && (
                    <div>
                      <p>
                        {" "}
                        The Ethiopian government, in collaboration with
                        international organizations and humanitarian agencies,
                        provides assistance to displaced people. This assistance
                        includes the provision of emergency shelter, food,
                        water, healthcare services, and protection support. The
                        government also works towards finding durable solutions,
                        such as voluntary return, local integration, or
                        resettlement.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <button onClick={toggleContent7}>
                    Are displaced children in Ethiopia able to access education?
                  </button>
                  {isOpen7 && (
                    <div>
                      <p>
                        {" "}
                        Displaced children in Ethiopia face significant barriers
                        to accessing education. Displacement disrupts their
                        schooling, and they may lack proper documentation or
                        face language barriers in host communities. However,
                        efforts are being made by the government and
                        humanitarian organizations to provide education
                        opportunities to displaced children through temporary
                        learning centers and catch-up programs.
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <button onClick={toggleContent8}>
                    How can I support displaced people in Ethiopia?
                  </button>
                  {isOpen8 && (
                    <div>
                      <p>
                        {" "}
                        There are several ways to support displaced people in
                        Ethiopia. You can consider donating to reputable
                        humanitarian organizations working in the region. These
                        organizations provide emergency assistance, including
                        food, water, shelter, healthcare, and protection
                        services. Additionally, raising awareness about the
                        plight of displaced people and advocating for their
                        rights can make a positive impact.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default Home;
