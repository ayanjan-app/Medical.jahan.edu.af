import React, { useState, useEffect } from "react";
import "./LatestNews.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

function LatestNews() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample news data - you can replace with your actual data
  const newsData = [
 {
      id: 1,
      title: "The Jahan University of Curative Medicine Faculty proudly celebrated the White Coat Ceremony ",
      image: "/Images/jahan.jpg", // Replace with your image path
      text: `The Jahan University of Curative Medicine Faculty proudly celebrated the White Coat Ceremony for the Class of 1st year and first semester, held under the patronage of His Excellency Chancellor, Dr. A. Hakim Noori. The event was attended by the Honorable Vice Chancellor, Dr. Mohammad Salim Hamidi, the Dean of of Medical Faculty, Assistant Prof. Dr. Mohammad Yaseen Hakimi, Para Clinical Sciences department chief Assistant Prof. Dr. Abdulbasit Aryan, Clinical sciences department. chief Assistant Prof. Dr. Wafiullah Rauf in the presence of many other university officials and faculty members.
In his opening remarks, Chancellor Dr. A. Hakim Noori welcomed attendees and emphasized the significance of this ceremony as a key moment in the students’ professional journeys in medicine. He remarked that wearing the white coat symbolizes a commitment to uphold the highest standards of ethics and a profound responsibility towards patients and the community. 
Dean Assistant Professor Dr. Mohammed Yaseen Hakimi expressed pride in celebrating the 1st anniversary of the white coat tradition. He highlighted that this year is particularly special as the Medical Program (MD) has received Authority letter and License from Ministry of Higher Education. Assistant Professor Hakimi urged students to embody the values represented by the white coat—responsibility, compassion, and excellence—as they embark on their medical careers.
The ceremony featured a motivational speech by Assistant Prof. Dr. Abdulbasit and Wafiullah rauf, Chiefs of departments, who congratulated students on reaching this important milestone. They reminded them that donning the white coat marks the beginning of their commitment to serve humanity and encouraged them to prioritize kindness and understanding in their patient interactions.
During the ceremony, 74 students were presented with their white coats by distinguished guests and faculty members. Following this, they took the medical oath pledging to practice medicine with conscience, dignity, and integrity while maintaining high standards of professional conduct. The event concluded with a special recognition of clinical faculty from partner health institutions and affiliate hospitals for their invaluable contributions to training and mentoring future doctors.
In the ending, one of students shared his opinions towards Medical Faculty of Jahan University as below.
The White Coat Ceremony represents a defining moment in the professional journey of our medical students. It signifies their formal entrance into the field of medicine and the assumption of responsibilities that accompany the pursuit of healing and ethical practice. The white coat stands as a universal symbol of purity, professionalism, and dedication to patient care.
Through this ceremony,  held by Jahan medical school Authority, students publicly affirm their commitment to uphold the highest standards of medical ethics, compassion,  continuous medical education and lifelong learning. It reminds them that the privilege of wearing the white coat carries the duty to serve humanity with respect, humility, and integrity.
Moreover, the event bridges the transition from academic study to clinical experience, reinforcing the importance of empathy and human connection in medical practice. In essence, the White Coat Ceremony is not merely a tradition but a solemn pledge to honor the science and art of medicine throughout one’s professional life.
We thankful of our medical directorate committee who are trying their best what ever they can do for the welfare and prosperity of their students, we are thankful from  Jahan group that investing alot in the field of medicine for students and in health care services for people
`,
      date: "  ",
      type: "image"
    },

    {
      id: 2,
      title: "   محصلینو ته د جهان ګروپ ادارو د پېژندنې پروګرام ترسره شو",
      image: "/Images/jahan1.jpg", // Replace with your image path
      text: "نن د دوشنبې ورځ چې د تلې ۱۴ نیټې سره برابره ده محصلینو ته د جهان ګروپ د ټولو اړوندو ادارو او تدریسي روغتون د پېژندنې په پار بعد له درسي ټایم څخه علمي سیر ورکړل شو، چې پکې د جهان پوهنتون د طب پوهنځي محترم ریس پوهنیار دوکتور محمد یاسین حکیمي محصلینو ته د جهان ګروپ ټول ادارات معرفي کړل او د جهان ګروپ د ټولو اړونده اداراتو درنو آمرینو د محصلینو سره د هر رنګه همکاري ډاډ ورکړو. ",
      date: " ",
      type: "image"
    },
    {
      id: 3,
      title: "سخنرانی محصل سمستر جریان تجلیل از روز چپن سفید",
      video: "/Images/WhatsApp Video 2025-10-11 at 11.43.41_47b0f581.mp4", // Replace with your video path
      text: "سخنرانی محصل سمستر جریان تجلیل از روز چپن سفید",
      date: " ",
      type: "video"
    },
    {
      id: 4,
      title: "جریان توزیع یوزر ای دی",
      image: "/Images/jahan2.jpg", // Replace with your image path
      text: "جریان توزیع یوزر ای دی برای محصلین ساعت آلبوم چهار شنبه  مورخ ۲/۷/۱۴۰۴",
      date: " ",
      type: "image"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const openNewsModal = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const closeNewsModal = () => {
    setShowModal(false);
    setSelectedNews(null);
  };

  return (
    <>
      <div className="backgroundNews">
        <p className="h1 heading">Latest News & Updates</p>
      </div>

      <div className="NewsSection container-fluid py-5">
        <h2 className="text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
          Recent Updates from Medical Faculty
        </h2>

        <div className="row justify-content-center">
          {newsData.map((news, index) => (
            <div 
              key={news.id} 
              className="col-12 col-md-6 col-lg-3 mb-4"
              data-aos="fade-up" 
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              <div className="newscard h-100" onClick={() => openNewsModal(news)}>
                <div className="news-image-container">
                  {news.type === "video" ? (
                    <div className="video-thumbnail">
                      <video className="news-thumbnail" muted>
                        <source src={news.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="play-icon">▶</div>
                    </div>
                  ) : (
                    <img
                      src={news.image}
                      alt={news.title}
                      className="news-thumbnail"
                    />
                  )}
                  <div className="news-type-badge">
                    {news.type === "video" ? "Video" : "Article"}
                  </div>
                </div>
                <div className="news-content p-3">
                  <h5 className="news-title">{news.title}</h5>
                  <p className="news-date text-muted">{news.date}</p>
                  <p className="news-excerpt">
                    {news.text.substring(0, 100)}...
                  </p>
                  <button className="btn btn-primary btn-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {showModal && selectedNews && (
        <div className="news-modal-overlay" onClick={closeNewsModal}>
          <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="news-modal-close" onClick={closeNewsModal}>
              ×
            </button>
            
            <div className="modal-body">
              <h3 className="modal-title">{selectedNews.title}</h3>
              <p className="modal-date text-muted">{selectedNews.date}</p>
              
              <div className="modal-media">
                {selectedNews.type === "video" ? (
                  <video className="modal-video" controls autoPlay>
                    <source src={selectedNews.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="modal-image"
                  />
                )}
              </div>
              
              <div className="modal-text">
                <p>{selectedNews.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LatestNews;