


import React from "react";
import "./vsionAndMission.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

function VisionAndMission() {
  // Initialize AOS animation library
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="vision-hero">
        <div className="container">
          <h1 className="vision-heading">Our Guiding Principles</h1>
          <p className="vision-subheading">Faculty of Medicine (MD program) at Jahan University</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 mb-5" data-aos="fade-up" data-aos-duration="1000">
            <div className="vision-card h-100">
              <div className="vision-icon-container">
            
              </div>
              <h2 className="vision-title">Vision</h2>
              <p className="vision-text">
                The Medical Faculty (MD program) of Jahan University aims to become one of the leading medical 
                faculties in the country by training skilled, committed, and ethical medical doctors who can 
                serve society. This faculty seeks to promote the quality of health services and medical education 
                in Afghanistan, aligned with national and international standards.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="vision-card h-100">
              <div className="vision-icon-container">
               
              </div>
              <h2 className="vision-title">Mission</h2>
              <p className="vision-text">
                The mission of the Medical Faculty (MD program) is to train professional doctors with Islamic 
                values, medical ethics, and scientific commitment, so that they can serve society and fulfill 
                the healthcare needs of the people. The program strives to create doctors with specialized 
                knowledge, strong practical skills, and the ability to provide quality medical services.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="vision-card h-100">
              <div className="vision-icon-container">
               
              </div>
              <h2 className="vision-title">Values</h2>
              <ul className="values-list">
                <li>Respecting and adhering to Islamic and national values.</li>
                <li>Commitment to academic integrity and professional ethics.</li>
                <li>Honesty and transparency in scientific and administrative affairs.</li>
                <li>Teamwork and mutual respect.</li>
                <li>Accountability and responsibility.</li>
                <li>Fairness and justice in all areas.</li>
                <li>Creativity and innovation in academic and medical activities.</li>
                <li>Sensitivity towards social and cultural values.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid commitment-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
              <h2 className="commitment-heading">Our Commitment to Excellence</h2>
              <p className="commitment-text">
                At Jahan University's Medical Faculty, we are dedicated to creating an environment that 
                fosters academic excellence, ethical practice, and compassionate patient care. Our MD program 
                combines rigorous academic training with practical clinical experience to prepare the next 
                generation of medical professionals.
              </p>
              <p className="commitment-text">
                We believe that medicine is both a science and an art, requiring not only knowledge and technical 
                skill but also empathy, cultural sensitivity, and ethical integrity.
              </p>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
              <img 
                src="/Images/medical-education.jpg" 
                alt="Medical Education" 
                className="img-fluid rounded commitment-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisionAndMission;