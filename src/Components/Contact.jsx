import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();
  const sucess = useRef(null);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a6i9rdn",
        "template_r4fcuct",
        form.current,
        "9gp63uOgs5b5UhWcD"
      )
      .then(
        (result) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Mail sent successfully",
          });
          console.log(result.text);
          console.log("success message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Embedded CSS styles
  const styles = `
    .contactus {
      background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
      padding: 40px 20px;
      margin: 0;
      min-height: 500px;
    }
    
    .contactuscoltxt {
      padding: 30px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 15px;
      margin: 20px 0;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
    
    .contactuscoltxt h2 {
      font-size: 2.5rem;
      margin-bottom: 30px;
      text-align: center;
      text-decoration: underline;
      text-underline-offset: 8px;
    }
    
    .contacttxt {
      font-size: 1.1rem;
      margin-bottom: 10px;
      color: #f8f9fa;
      line-height: 1.6;
    }
    
    .mapdiv {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    
    .map {
      width: 100%;
      max-width: 775px;
      height: 450px;
      border-radius: 15px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
      border: 5px solid #fff;
    }
    
    .enquirefrom {
      background-color: #f8f9fa;
      border-radius: 15px;
      margin: 40px auto;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      padding: 30px;
    }
    
    .enquirefrom h3 {
      color: #1a2a6c;
      margin-bottom: 25px;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }
    
    .enquire1 {
      margin-bottom: 20px;
    }
    
    .form-floating {
      position: relative;
    }
    
    .form-control {
      height: 60px;
      border-radius: 10px;
      border: 2px solid #ced4da;
      padding: 16px;
      font-size: 1.1rem;
      transition: all 0.3s;
    }
    
    .form-control:focus {
      border-color: #1a2a6c;
      box-shadow: 0 0 0 0.25rem rgba(26, 42, 108, 0.25);
    }
    
    textarea.form-control {
      height: auto;
      min-height: 150px;
      resize: vertical;
    }
    
    label {
      padding: 16px;
      font-size: 1.1rem;
      color: #6c757d;
    }
    
    .enquirebtn {
      background: linear-gradient(135deg, #1a2a6c, #b21f1f);
      color: white;
      padding: 12px 30px;
      border: none;
      border-radius: 50px;
      font-size: 1.2rem;
      font-weight: bold;
      transition: all 0.3s;
      display: block;
      margin: 30px auto 0;
      width: 200px;
    }
    
    .enquirebtn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background: linear-gradient(135deg, #b21f1f, #1a2a6c);
    }
    
    @media (max-width: 992px) {
      .contactus {
        flex-direction: column;
      }
      
      .map {
        width: 100%;
        height: 350px;
      }
      
      .contactuscoltxt {
        margin-bottom: 30px;
      }
    }
    
    @media (max-width: 768px) {
      .contactuscoltxt h2 {
        font-size: 2rem;
      }
      
      .map {
        height: 300px;
      }
      
      .enquirefrom {
        padding: 20px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="row contactus">
        <div className="col-md-4 contactuscoltxt">
          <h2 className="text-light">Contact us</h2>
          <p className="h4 text-white mt-4">Phone number</p>
          <p className="contacttxt">91+ 00000 00000</p>
          <p className="contacttxt">91+ 00000 00000</p>
          
          <p className="h4 text-white mt-4">E-mail</p>
          <p className="contacttxt">   info@jahan.edu.af</p>
          <p className="contacttxt">   info@jahan.edu.af</p>
          
          <p className="h4 text-white mt-4">Address</p>
          <p className="contacttxt">
             <br />
          <br />
           <br />
            Country.
          </p>
        </div>

        <div className="mapdiv col-md-8">
          <iframe
            src=""
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>

      <div className="enquirefrom container">
        <h3>Enquire Form</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-floating enquire1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="user_name"
              required
              id="nameInput"
            />
            <label htmlFor="nameInput">Name</label>
          </div>

          <div className="form-floating enquire1">
            <input
              type="email"
              className="form-control"
              name="user_email"
              placeholder="Enter Email"
              required
              id="emailInput"
            />
            <label htmlFor="emailInput">Enter E-mail address</label>
          </div>
          
          <div className="form-floating enquire1">
            <input
              type="number"
              className="form-control"
              placeholder="Phone number"
              id="phoneInput"
            />
            <label htmlFor="phoneInput">Phone number</label>
          </div>
          
          <div className="form-floating enquire1">
            <textarea
              name="message"
              className="form-control"
              placeholder="Subject"
              style={{ height: "150px" }}
              id="subjectInput"
            ></textarea>
            <label htmlFor="subjectInput">Subject</label>
          </div>

          <input type="submit" value="Send" className="btn enquirebtn" />
        </form>
      </div>
    </>
  );
}

export default Contact;