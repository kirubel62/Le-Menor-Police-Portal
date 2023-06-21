import React from "react";
import "./Contact.css";
import { useState } from "react";
//
import { db } from "../../FireBase/Firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  //
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      e.preventDefault(); // when the form is submited it is not gating reloded
      console.log("debug passed");
      //
      //
      const docRef = await addDoc(collection(db, "CustomerSupport"), {
        //data model from the programmer side
        name: Name,
        email: Email,
        subject: Subject,
        message: Message,
        //documentid: docid,
      });
      console.log("Document written with ID: ", docRef.id);
      //setdocid(docRef.id);
      //console.log("debug docid", docid);
      alert("Sended Succsfully");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error adding document");
    }
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>Have a question or want to get involved? Reach out to us!</p>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: info@supportorganization.org</p>
        <p>Phone: +123456789</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
