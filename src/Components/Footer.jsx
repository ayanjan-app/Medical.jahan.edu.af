import React from "react";
import "react-icons/";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faYenSign,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import {
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className="footerbackground">
        <footer className="row footer  h6">
          <div className="col-md-2 footer-col">
            <h4>About us</h4>
            <p>
           The Faculty of Medicine (MD program) at Jahan University, using modern facilities and a specialized teaching staff, has provided the opportunity for young people who are interested in studying medical sciences to study in this field. 
              <FontAwesomeIcon
                icon={faYoutube}
                size="xl"
                style={{
                  marginTop: "25px",
                }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                size="xl"
                style={{
                  marginLeft: "10px",
                }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                style={{
                  marginLeft: "10px",
                }}
              />
            </p>
          </div>

          <div className="col-md-2 footer-col">
            <p className="h4">Contact Details</p>

            <div>
              <FontAwesomeIcon icon={faPhone} />

              <span
                style={{
                  marginTop: "25px",
                  marginLeft: "0px",
                }}
              >
                {" "}
           00000000
              </span>
            </div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span
              style={{
                marginLeft: "10px",
              }}
            >
             Kabul, Afghanistan
            </span>
            <br />
            <FontAwesomeIcon icon={faEnvelope} />
            <span
              style={{
                marginLeft: "10px",
              }}
            >
             info@jahan.edu.af
            </span>
          </div>
          <div className="col-md-2 footer-col">
            <p className="h4">Terms and conditions</p>
            <p>
              FAQ's? contact-Us <br />
              Terms and usage
            </p>
          </div>
          <div className="col-md-2 footer-col ">
            <p className="h4">Opening timings</p>
            <p>
              
            </p>
          </div>
        </footer>
        <p
          style={{
            color: "white",
            backgroundColor: "orange",
            textAlign: "center",
          }}
        >
          Copyright @ 2025. Rafiullah Ahmadzai. All Right Reserved.</p>
      </div>
      <Outlet />
    </>
  );
}

export default Footer;
