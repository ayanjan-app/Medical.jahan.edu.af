import React from "react";
import "../Components/Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Services1() {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="services2">
        <div className="container">
          <h4 className="serviceheading text-center mb-5">MD Program Semester Plan</h4>
          
          {/* First Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">First Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Medical Physics</li>
                      <li>Chemistry</li>
                      <li>Biostatistics</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Biophysics</li>
                      <li>Islamic Culture (History of Islam)</li>
                      <li>Computer</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Biology</li>
                      <li>English</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Second Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Anatomy (1)</li>
                      <li>Biochemistry (1)</li>
                      <li>Physiology (1)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Histology (1)</li>
                      <li>Islamic Culture (Biography of Prophet Muhammad, Peace Be Upon Him)</li>
                      <li>First Aid</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>General Psychology</li>
                      <li>Elective Subject</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Third Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Anatomy (2)</li>
                      <li>Biochemistry (2)</li>
                      <li>Physiology (2)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Histology (2)</li>
                      <li>Islamic Culture (Islamic Ethics)</li>
                      <li>Sociology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Fourth Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Anatomy (3)</li>
                      <li>Biochemistry (3)</li>
                      <li>Physiology (3)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Histology (3)</li>
                      <li>Islamic Culture (Islamic Society System)</li>
                      <li>Embryology (1)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Fifth Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Microbiology (1)</li>
                      <li>Pathology (1)</li>
                      <li>Pharmacology (1)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Parasitology (1)</li>
                      <li>Islamic Culture (Political System of Islam)</li>
                      <li>Internal Medicine (1)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sixth Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Sixth Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Pathology (2)</li>
                      <li>Pharmacology (2)</li>
                      <li>Microbiology (2)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Internal Medicine (2)</li>
                      <li>Islamic Culture (Islamic Economic System)</li>
                      <li>Medical Ethics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seventh Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Seventh Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Internal Medicine (3)</li>
                      <li>Pediatrics (1)</li>
                      <li>Surgery (1)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Gynecology (1)</li>
                      <li>Ophthalmology (1)</li>
                      <li>Psychiatry</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Islamic Culture (Qur'an and Contemporary Sciences)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eighth Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Eighth Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Internal Medicine (4)</li>
                      <li>Pediatrics (2)</li>
                      <li>Surgery (2)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Gynecology (2)</li>
                      <li>Ophthalmology (2)</li>
                      <li>Community Medicine (1)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Islamic Culture (Islamic Political System)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ninth Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Ninth Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Internal Medicine (5)</li>
                      <li>Pediatrics (3)</li>
                      <li>Surgery (3)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Gynecology (3)</li>
                      <li>Community Medicine (2)</li>
                      <li>Forensic Medicine & Toxicology</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Islamic Culture (Contemporary History of Afghanistan)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tenth Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Tenth Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Internal Medicine (6)</li>
                      <li>Pediatrics (4)</li>
                      <li>Surgery (4)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Gynecology (4)</li>
                      <li>Community Medicine (3)</li>
                      <li>Radiology</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>ENT (Ear, Nose, Throat)</li>
                      <li>Orthopedics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eleventh Semester */}
          <div className="row mb-4">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <div className="semester-card">
                <h3 className="semester-title">Eleventh Semester</h3>
                <div className="row">
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Internal Medicine (7)</li>
                      <li>Pediatrics (5)</li>
                      <li>Surgery (5)</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Gynecology (5)</li>
                      <li>Community Medicine (4)</li>
                      <li>Dermatology</li>
                    </ul>
                  </div>
                  <div className="col-md-3 subject-col">
                    <ul className="subject-list">
                      <li>Neurology</li>
                      <li>Elective Subjects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services1;