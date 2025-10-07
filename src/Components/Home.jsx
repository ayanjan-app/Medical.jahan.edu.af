import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Home() {
  const redirectdocpage = useNavigate();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    const handleScroll = () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    };
    
    window.addEventListener("scroll", handleScroll, false);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function navtodoc() {
    redirectdocpage("/DoctorProfile");
  }

  return (
    <>
      <div className="backgroundHome">
        <p className="h1 heading">Faculty of Medicine (MD program) at Jahan University</p>
      </div>

      <div className="Services">
        <div className="container-fluid">
          <h2 className="text-center mb-4" data-aos="fade-up" data-aos-duration="1000">
            Introduction to Medical Faculty (MD Program)
          </h2>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper slider"
            data-aos="fade-up" 
            data-aos-duration="2000"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30
              }
            }}
          >
            <SwiperSlide>
              <div className="swiper-image-container">
                <img
                  src="Images/r.png"
                  alt="Medical facility"
                  className="swiper-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-image-container">
                <img
                  src="/Images/hos.png"
                  alt="Hospital"
                  className="swiper-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-image-container">
                <img
                  src="Images/hos1.png"
                  alt="Hospital building"
                  className="swiper-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-image-container">
                <img
                  src="Images/hos2.png"
                  alt="Medical equipment"
                  className="swiper-image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="Services container-fluid py-5" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-center mb-5"></h2>

        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="servicecard text-center" data-aos="flip-right" data-aos-duration="2000">
              <div className="whyussubcard mx-auto">
                <img src="/Images/skin.png" alt="Urology" className="service-icon" />
              </div>
              <div className="servicetxt mt-2">
                <h5>Urology</h5>
              </div>
            </div>
          </div>
          
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="servicecard text-center" data-aos="flip-right" data-aos-duration="2000">
              <div className="whyussubcard mx-auto">
                <img src="../Images/head.png" alt="ENT" className="service-icon" />
              </div>
              <div className="servicetxt mt-2">
                <h5>ENT</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="servicecard text-center" data-aos="flip-right" data-aos-duration="2000">
              <div className="whyussubcard mx-auto">
                <img src="/Images/irritation.png" alt="Dermatology" className="service-icon" />
              </div>
              <div className="servicetxt mt-2">
                <h5>Dermatology</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="servicecard text-center" data-aos="flip-right" data-aos-duration="2000">
              <div className="whyussubcard mx-auto">
                <img src="/Images/heart.png" alt="Cardiology" className="service-icon" />
              </div>
              <div className="servicetxt mt-2">
                <h5>Cardiology</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="servicecard text-center" data-aos="flip-right" data-aos-duration="2000">
              <div className="whyussubcard mx-auto">
                <img src="/Images/neurology.png" alt="Neurology" className="service-icon" />
              </div>
              <div className="servicetxt mt-2">
                <h5>Neurology</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="servicecard text-center" data-aos="flip-right" data-aos-duration="2000">
              <div className="whyussubcard mx-auto">
                <img src="/Images/stomach (1).png" alt="Gastrologist" className="service-icon" />
              </div>
              <div className="servicetxt mt-2">
                <h5>Gastrologist</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="servicecard text-center" data-aos="flip-right" data-aos-duration="2000">
              <div className="whyussubcard mx-auto">
                <img src="./Images/arthritis.png" alt="Orthopedic" className="service-icon" />
              </div>
              <div className="servicetxt mt-2">
                <h5>Orthopedic</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="servicecard text-center" data-aos="flip-right" data-aos-duration="2000">
              <div className="whyussubcard mx-auto">
                <img src="/Images/teeth.png" alt="Dental" className="service-icon" />
              </div>
              <div className="servicetxt mt-2">
                <h5>Dental</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Doctors container-fluid py-5" data-aos="fade-up" data-aos-duration="1000">
        <h3 className="docheading text-center mb-5">Our Specialists</h3>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="doctorcard h-100" data-aos="flip-right" data-aos-duration="2000">
              <div className="row align-items-center mb-3">
                <div className="col-4">
                  <img
                    src="/Images/doctor1.png"
                    alt="Dr. P.Subramani"
                    className="doctorimg img-fluid rounded-circle"
                  />
                </div>
                <div className="col-8">
                  <h5 className="docname">Dr. </h5>
                  <p className="mb-0">Chief Doctor</p>
                </div>
              </div>
              <p className="flex-grow-1">
               
              </p>
              <button className="btn btn-primary mt-auto" onClick={navtodoc}>
                Read more
              </button>
            </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="doctorcard h-100" data-aos="flip-right" data-aos-duration="2000">
              <div className="row align-items-center mb-3">
                <div className="col-4">
                  <img
                    src="/Images/doctor1.png"
                    alt="Dr. P.Subramani"
                    className="doctorimg img-fluid rounded-circle"
                  />
                </div>
                <div className="col-8">
                  <h5 className="docname">Dr. </h5>
                  <p className="mb-0">Chief Doctor</p>
                </div>
              </div>
              <p className="flex-grow-1">
             
              </p>
              <button className="btn btn-primary mt-auto" onClick={navtodoc}>
                Read more
              </button>
            </div>
          </div>
          
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="doctorcard h-100" data-aos="flip-right" data-aos-duration="2000">
              <div className="row align-items-center mb-3">
                <div className="col-4">
                  <img
                    src="/Images/doctor1.png"
                    alt="Dr. P.Manikandan"
                    className="doctorimg img-fluid rounded-circle"
                  />
                </div>
                <div className="col-8">
                  <h5 className="docname">Dr.</h5>
                  <p className="mb-0">Chief Doctor</p>
                </div>
              </div>
              <p className="flex-grow-1">
               
              </p>
              <button className="btn btn-primary mt-auto" onClick={navtodoc}>
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="whychoseus container-fluid py-5" data-aos="fade-up" data-aos-duration="1000">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h2>Why choose Us?</h2>
            <p className="mb-4">
              First and foremost, we take immense pride in providing
              high-quality medical care. Our experienced and skilled staff,
              including doctors, nurses, specialists, and support personnel,
              are dedicated to delivering the best possible treatment to every
              patient.
            </p>
            
            <div className="row">
              <div className="col-6 col-md-3 mb-3 text-center">
                <div className="whyussubcard mx-auto mb-2">
                  <img
                    src="/Images/hospital.png"
                    alt="Hospitals"
                    className="whyuslogo img-fluid"
                  />
                </div>
                <h4 style={{ color: "rgb(0, 124, 157)" }}>
                   <br /> Hospitals
                </h4>
              </div>
              
              <div className="col-6 col-md-3 mb-3 text-center">
                <div className="whyussubcard mx-auto mb-2">
                  <img
                    src="/Images/medical-team.png"
                    alt="Doctors"
                    className="whyuslogo img-fluid"
                  />
                </div>
                <h4 style={{ color: "rgb(0, 124, 157)" }}>
                  50+ <br />
                  Doctors
                </h4>
              </div>
              
              <div className="col-6 col-md-3 mb-3 text-center">
                <div className="whyussubcard mx-auto mb-2">
                  <img
                    src="/Images/syringe.png"
                    alt="Pharmacies"
                    className="whyuslogo img-fluid"
                  />
                </div>
                <h4 style={{ color: "rgb(0, 124, 157)" }}>
                  70+ <br />
                  Pharmacies
                </h4>
              </div>
              
              <div className="col-6 col-md-3 mb-3 text-center">
                <div className="whyussubcard mx-auto mb-2">
                  <img
                    src="/Images/ambulance.png"
                    alt="Emergency Services"
                    className="whyuslogo img-fluid"
                  />
                </div>
                <h4 style={{ color: "rgb(0, 124, 157)" }}>
                  30+ <br />
                  Emergency Services
                </h4>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <img
              src="/Images/hos6.png"
              className="whyusimg img-fluid rounded"
              alt="Hospital facilities"
            />
          </div>
        </div>
      </div>

      <div className="Hospitalfeature container-fluid py-5" data-aos="fade-up" data-aos-duration="1000">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0" data-aos="fade-right" data-aos-duration="2000">
            <img
              src="/Images/young-handsome-physician-medical-robe-with-stethoscope.jpg"
              alt="Medical professional"
              className="Hospitalfeatureimg img-fluid rounded"
            />
          </div>
          <div className="col-12 col-md-6" data-aos="fade-left" data-aos-duration="2000">
            <h3>Goals</h3>
            <p>
              "The primary goal of the MD program is to train doctors according to national and international standards.
              Training professional and committed doctors who are capable of serving in clinics and hospitals.
              Developing scientific and practical research skills in students.
              Strengthening leadership, teamwork, and communication skills in students.
              Training doctors with strong ethics and social responsibility.
              Contributing to improving healthcare services in Afghanistan."
            </p>
            <img
              src="/Images/five-stars.png"
              alt="Five star rating"
              className="testimonialimg img-fluid"
              style={{maxWidth: "150px"}}
            />
          </div>
        </div>
      </div>
      
      <div className="Testimonials container-fluid py-5" data-aos="fade-up" data-aos-duration="1000">
  <h2 className="text-center mb-5">MD Program Testimonials</h2>
  <div className="row justify-content-center">

    <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-right" data-aos-duration="2000">
      <div className="testtimonialtext p-4 h-100">
        <p className="mb-3">
          "The MD program provided me with an excellent foundation in both theory and practice. 
          The faculty support and resources truly exceeded my expectations."
        </p>
        <img
          src="/Images/five-stars.png"
          alt="Five stars"
          className="testimonialimg img-fluid mb-3"
          style={{ maxWidth: "100px" }}
        />
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-duration="2000">
      <div className="testtimonialtext p-4 h-100">
        <p className="mb-3">
          "Studying in the MD program gave me valuable clinical experience and confidence to 
          serve my community as a doctor."
        </p>
        <img
          src="/Images/five-stars.png"
          alt="Five stars"
          className="testimonialimg img-fluid mb-3"
          style={{ maxWidth: "100px" }}
        />
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-left" data-aos-duration="2000">
      <div className="testtimonialtext p-4 h-100">
        <p className="mb-3">
          "The curriculum is well-structured, and the internship year helped me gain 
          hands-on skills that are essential for real medical practice."
        </p>
        <img
          src="/Images/five-stars.png"
          alt="Five stars"
          className="testimonialimg img-fluid mb-3"
          style={{ maxWidth: "100px" }}
        />
      </div>
    </div>

  </div>
</div>

    </>
  );
}

export default Home;