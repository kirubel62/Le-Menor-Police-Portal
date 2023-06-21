import React from "react";
import "./Donation.css";
//card view logs
import pic1 from "./images/pic1.png";
import hpic1 from "./images/hpic1.png";
import hpic2 from "./images/hpic2.png";
import hpic3 from "./images/hpic3.png";
import hpic4 from "./images/hpic4.png";
import hpic5 from "./images/hpic5.png";
import hpic6 from "./images/hpic6.png";
//payment qr code images
import anyBirr from "./images/any.png";
import cbe from "./images/CBE.png";
import mbirr from "./images/mbirr.png";
//
import telebirrLogo from "./images/telebirr-logo.png";
//birr amount QR codes

const Donation = () => {
  return (
    <div>
      <div className="DonationMaster">
        <div className="head">
          <h1 className="h1">
            HELP TO BREAK THE SHAKELS OF DISPLACED PEOPLE IN ETHIOPIA
          </h1>
        </div>
        <div className="div2">
          <h1>Choose Your Gift </h1>
          <h2>Powered by Telebirr</h2>
          <div className="PaymentOptions">
            <div className="qrlogo">
              <img className="telebirrLogo" src={telebirrLogo}></img>
            </div>

            <div className="PaymentOption">
              <img className="pmLogo" s src={cbe}></img>
              <h2>Bank Name: CBE</h2>
              <h2>Account Name: LE MENOR</h2>
              <h2>Account Number: 100001</h2>
            </div>

            <div className="PaymentOption">
              <img className="pmLogo" s src={mbirr}></img>
              <h2>Mobile Money Mervice: M-Birr</h2>
              <h2>Phone Number: 0900000000</h2>
            </div>
          </div>
        </div>
        <div class="grid-container">
          <div class="grid-item-card">
            <img src={hpic1} alt="pic"></img>
            <p>
              <h2 className="headerBirr">100 Birr</h2> Food and Water: Displaced
              people often struggle to access basic necessities like food and
              water. Donating funds to provide food and water can be a crucial
              support for these vulnerable individuals.
            </p>
            <img className="qr" src={anyBirr} alt="pic"></img>
          </div>
          <div class="grid-item-card">
            <img src={hpic2} alt="pic"></img>
            <p>
              <h2 className="headerBirr">3,000 Birr</h2> Many displaced people
              are without homes or live in inadequate housing. Funds donated
              towards building shelters or improving existing housing can
              provide much-needed relief.
            </p>
            <img className="qr" src={anyBirr} alt="pic"></img>
          </div>
          <div class="grid-item-card">
            <img src={hpic3} alt="pic"></img>
            <p>
              <h2 className="headerBirr">400 Birr</h2> Displaced people may have
              limited access to medical care, making them vulnerable to disease
              and illness. Donating funds to support medical clinics and provide
              necessary medications and treatments can help save lives.
            </p>
            <img className="qr" src={anyBirr} alt="pic"></img>
          </div>
          <div class="grid-item-card">
            <img src={hpic4} alt="pic"></img>
            <p>
              <h2 className="headerBirr">3,000 Birr</h2> Donating towards
              livelihood programs can help provide displaced people with the
              skills and resources necessary to generate income and rebuild
              their lives.
            </p>
            <img className="qr" src={anyBirr} alt="pic"></img>
          </div>
          <div class="grid-item-card">
            <img src={hpic5} alt="pic"></img>
            <p>
              <h2 className="headerBirr">800 Birr</h2> Displaced children often
              miss out on education and suffer long-term consequences. Donating
              towards education programs can help provide displaced children
              with access to schooling and the opportunity to break the cycle of
              poverty.
            </p>
            <img className="qr" src={anyBirr} alt="pic"></img>
          </div>

          <div class="grid-item-card">
            <img src={hpic6} alt="pic"></img>
            <p>
              <h2 className="headerBirr">Any Birr</h2> Birr Food and Water:
              Displaced people often struggle to access basic necessities like
              food and water. Donating funds to provide food and water can be a
              crucial support for these vulnerable individuals.
            </p>
            <img className="qr" src={anyBirr} alt="pic"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
