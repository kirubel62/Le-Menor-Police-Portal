import React, { useState } from "react";
import "./News.css";
//
//firebase
import { db } from "../../../../FireBase/Firebase";
import { storage } from "../../../../FireBase/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
//
import { async } from "@firebase/util";

const News = () => {
  //user input handling use states
  const [Headline, setHeadline] = useState("");
  const [Date, setDate] = useState("");
  const [Summary, setSummary] = useState("");
  const [Image, setImage] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [docid, setdocid] = useState("");
  //
  const handleImageSelect = (event) => {
    setImage(event.target.files[0]);
  };
  //
  const HandleImageUpload = () => {
    // Create a storage reference from our storage service
    const storageRef = ref(storage, `/images/${Image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, Image);
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
          setImageUrl(downloadURL);
          console.log("use state worked", ImageUrl);
        });
      }
    );

    //console.log(selectedFile);
    //const uploadTask = uploadBytesResumable(storageRef, file, selectedFile);
  };
  //
  const HandleForm = async (e) => {
    //
    HandleImageUpload();
    try {
      e.preventDefault(); // when the form is submited it is not gating reloded
      //console.log("debug passed");
      const docRef = await addDoc(collection(db, "NewsBlog"), {
        //data model from the programmer side
        headline: Headline,
        date: Date,
        summary: Summary,
        image: ImageUrl,
        //documentid: docid,
      });
      console.log("Document written with ID: ", docRef.id);
      setdocid(docRef.id);
      console.log("debug docid", docid);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  //
  return (
    <div className="MNewsmaster">
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
          <label className="label">Date:</label>
          <input
            className="input"
            type="text"
            onChange={(e) => setDate(e.target.value)}
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
          <label className="label">Image:</label>
          <input
            className="input"
            type="file"
            onChange={handleImageSelect}
          ></input>
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default News;
