import React from "react";
import "./Story.css";
//
//
//firebase
import { db } from "../../../../FireBase/Firebase";
import { storage } from "../../../../FireBase/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
//
import { async } from "@firebase/util";
import { useState } from "react";
//
const Story = () => {
  //user input handling use states
  const [Headline, setHeadline] = useState("");
  const [Summary, setSummary] = useState("");
  const [Video, setVideo] = useState("");
  const [Date, setDate] = useState("");
  const [VideoUrl, setVideoUrl] = useState("");
  const [docid, setdocid] = useState("");
  const [Progress, setProgress] = useState(0);

  //
  const handleVideoSelect = (event) => {
    setVideo(event.target.files[0]);
  };
  //
  const HandleVideoUpload = () => {
    // Create a storage reference from our storage service
    const storageRef = ref(storage, `/video/${Video.name}`);
    const uploadTask = uploadBytesResumable(storageRef, Video);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        //alert(progress);
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
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
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //console.log("File available at", downloadURL);
          setVideoUrl(downloadURL);
          console.log("use state worked", VideoUrl);
        });
      }
    );

    //console.log(selectedFile);
    //const uploadTask = uploadBytesResumable(storageRef, file, selectedFile);
  };
  //
  const HandleForm = async (e) => {
    //
    e.preventDefault(); // when the form is submited it is not gating reloded
    HandleVideoUpload();
    try {
      e.preventDefault(); // when the form is submited it is not gating reloded
      if (VideoUrl !== null) {
        console.log("use state worked", VideoUrl);
        //e.preventDefault(); // when the form is submited it is not gating reloded
        //console.log("debug passed");
        const docRef = await addDoc(collection(db, "StoryBlog"), {
          //data model from the programmer side
          headline: Headline,
          Summary: Summary,
          video: VideoUrl,
          date: Date,
          //documentid: docid,
        });
        console.log("Document written with ID: ", docRef.id);
        setdocid(docRef.id);
        console.log("debug docid", docid);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  //
  return (
    <div className="MStotyMaster">
      <div className="child">
        <form className="form" onSubmit={HandleForm}>
          <div>
            <label className="label">Headline:</label>
            <input
              className="input"
              type="text"
              onChange={(e) => setHeadline(e.target.value)}
            ></input>
          </div>

          <div>
            <label className="label">Summary:</label>
            <input
              className="input"
              type="text"
              onChange={(e) => setSummary(e.target.value)}
            ></input>
          </div>

          <div>
            <label className="label">Date:</label>
            <input
              className="input"
              type="text"
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>

          <div>
            <label className="label">Video:</label>
            <input
              className="input"
              type="file"
              onChange={handleVideoSelect}
            ></input>
          </div>

          <div>
            <button className="btn" type="submit">
              submit
            </button>
          </div>
        </form>
        {/*  */}
        <h1 className="Progress">{Progress}%</h1>
        {/*  */}
      </div>
    </div>
  );
};

export default Story;
