import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Landing from "./components/Landing/Landing";
import Home from "./components/Landing/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Donation from "./components/Donation/Donation";
import Blog from "./components/Blog/Blog";
//User Blog Section
import UNewsSection from "./components/Blog/NewsSection/UNewsSection";
import UStorySection from "./components/Blog/UStorySection/UStorySection";
//
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./FireBase/Authentification/Login/Login";
import Signup from "./FireBase/Authentification/Signup/Singup";
//services
import Service1 from "./components/Services/Service1/Service1";
import Service2 from "./components/Services/Service2/Service2";
import Service3 from "./components/Services/Service3/Service3";
import Service4 from "./components/Services/Service4/Service4";
import Service5 from "./components/Services/Service5/Service5";
import Service6 from "./components/Services/Service6/Service6";
import Service7 from "./components/Services/Service7/Service7";
import Service8 from "./components/Services/Service8/Service8";
//
import Volunter from "./components/Volunter/Volunter";
import VolunterRegistarationForm from "./components/Volunter/VolunterRegistrationForm";
import Nearby from "./components/Volunter/NearBy/Nearby";
import VolunteerOpportunities from "./components/Volunter/VolunteerOpportunities/VolunteerOpportunities";
//
import AdminAuth from "./components/Admin/AdminAuth/AdminAuth";
import Admin from "./components/Admin/Admin";
import UpadateAccount from "./components/Admin/ManageAccount/UpadateAccount/UpadateAccount";
import ManageAccount from "./components/Admin/ManageAccount/ManageAccount";
import More from "./components/Services/Service2/More";
import MangeBlog from "./components/Admin/MangageBlog/ManageBlog";
import News from "./components/Admin/MangageBlog/News/News";
import Story from "./components/Admin/MangageBlog/Story/Story";
//
import PrivacyPolicy from "./components/Footer/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./components/Footer/TermOfUse/TermOfUse";

import { useState, useEffect } from "react";
//different loaders
import ClimbingBoxLoader from "react-spinners/ClipLoader";
import ClipLoader from "react-spinners/ClipLoader";
import BounceLoader from "react-spinners/BounceLoader";
// import { useNavigate } from "react-router-dom";
//
import { Navigate } from "react-router-dom";
import { useNavigate, useHistory } from "react-router-dom";

//firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  //
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Modern browsers require this line to display a prompt
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  //
  //for Protected routes
  // const navigate = useNavigate();
  const [isAuthenticated, setisAuthenticated] = useState(true);
  // useEffect(() => {
  //   observer();
  // }, []);
  // function observer() {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const uid = user.uid;
  //       // ...
  //       setisAuthenticated(true);
  //     } else {
  //       // User is signed out
  //       // ...
  //       setisAuthenticated(false);
  //     }
  //   });
  // }
  // useEffect(() => {
  //   const observer = () => {
  //     const auth = getAuth();
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         setisAuthenticated(true);
  //       } else {
  //         setisAuthenticated(false);
  //       }
  //     });
  //   };

  //   observer();
  // }, []);
  //
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 8000);
  // }, []);

  // const override: CSSProperties = {
  //   display: "flex",
  //   margin: "15% auto",
  //   borderColor: "red",
  //   bgColor: "black",
  // };

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize, []]);
  //

  //

  return (
    <div className="App">
      <Navbar className="Navbar" />
      
      

      <Routes>

      <Route path="/" element={<AdminAuth />} />

        {/* <Route
          path="/Home"
          element={
            isAuthenticated ? (
              <Home windowSize={windowSize} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        /> */}
        {/* <Route path="/Home" element={<Home windowSize={windowSize} />} /> */}
        {/*  */}
        {/* <Route
          path="/About"
          element={isAuthenticated ? <About /> : <Navigate to="/" replace />}
        /> */}
        {/* <Route path="/About" element={<About />} /> */}
        {/*  */}
        {/* <Route
          path="/Donation"
          element={isAuthenticated ? <Donation /> : <Navigate to="/" replace />}
        /> */}
        {/* <Route path="/Donation" element={<Donation />} /> */}
        {/*  */}
        {/* <Route
          path="/Blog"
          element={isAuthenticated ? <Blog /> : <Navigate to="/" replace />}
        /> */}
        {/* <Route path="/Blog" element={<Blog />} /> */}
        {/* user blog section */}
        {/* <Route path="/UNewsSection" element={<UNewsSection />} />
        <Route path="/UStorySection" element={<UStorySection />} /> */}
        {/*  */}
        {/* <Route
          path="/Services"
          element={isAuthenticated ? <Services /> : <Navigate to="/" replace />}
        /> */}
        {/* <Route path="/Services" element={<Services />} /> */}
        {/*  */}
        {/* <Route
          path="/Volunter"
          element={isAuthenticated ? <Volunter /> : <Navigate to="/" replace />}
        /> */}
        {/* <Route path="/Volunter" element={<Volunter />} /> */}
        {/*  */}
        {/* <Route
          path="/admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/" replace />}
        /> */}

        {/* <Route
          path="/admin"
          element={ <Admin />}
        /> */}


        <Route path="/admin" element={<Admin />} />
        <Route path="/ManageBlog" element={<MangeBlog />} />
        <Route path="/UpadateAccount" element={<UpadateAccount />} />
        <Route path="/ManageAccount" element={<ManageAccount />} />
        <Route path="/News" element={<News />} />
        <Route path="/Story" element={<Story />} />


        {/* volunters routes  */}

        {/* <Route
          path="/VolunterRegistarationForm"
          element={<VolunterRegistarationForm />}
        /> */}
        {/* <Route path="/Nearby" element={<Nearby />} /> */}

        {/* <Route path="/More/:id" component={More} /> */}
        {/* <Route
          path="/Contact"
          element={isAuthenticated ? <Contact /> : <Navigate to="/" replace />}
        /> */}
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/Login" element={<Login windowSize={windowSize} />} />
        {/* <Route path="/" element={<Signup windowSize={windowSize} />} /> */}
        <Route path="/Landing" element={<Landing />} />
        {/* <Route exact path="/Index" element={<Home />} /> */}
        {/* Services routes  */}

        {/* <Route path="/Service1" element={<Service1 />}></Route>
        <Route path="/Service2" element={<Service2 />}></Route>
        <Route path="/Service3" element={<Service3 />}></Route>
        <Route path="/Service4" element={<Service4 />}></Route>
        <Route path="/Service5" element={<Service5 />}></Route>
        <Route path="/Service6" element={<Service6 />}></Route>
        <Route path="/Service7" element={<Service7 />}></Route>
        <Route path="/Service8" element={<Service8 />}></Route> */}


        {/*  */}
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/TermsOfUse" element={<TermsOfUse />}></Route>

        {/* <Route
          path="/VolunteerOpportunities"
          element={<VolunteerOpportunities />}
        ></Route> */}

      </Routes>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
