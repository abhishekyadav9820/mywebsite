import { React, useLayoutEffect } from "react";
import "../CSS/HomePage.css";
import Footer from "../components/Footer";
import ourMission from "../Image/about.jpg";
import aboutUS from "../Image/aboutUs1.jpg";
import Service from "../Image/services/KidneyStone.jpg";
import Service1 from "../Image/services/UrinStone.jpg";
import Service2 from "../Image/services/BladderStone.jpg";
import Service3 from "../Image/services/ProstateGland.jpg";
import Service4 from "../Image/services/Impotence.jpg";
import Service5 from "../Image/services/BladderCancer.png";
import Service6 from "../Image/services/Infertility.jpg";
import Service7 from "../Image/services/ProstateCancer.jpg";
import Service8 from "../Image/services/EndoUrology.jpg";
import Service9 from "../Image/services/PenisEnlargement.jpg";
import Service10 from "../Image/services/Varicocele.jpg";
import Service11 from "../Image/services/Robotic.jpg";
import { Link } from "react-router-dom";
import Testimonial1 from "../Image/testimonialImage/1.png";

import Testimonial2 from "../Image/testimonialImage/3.png";

import Testimonial3 from "../Image/testimonialImage/4.png";

import Testimonial4 from "../Image/testimonialImage/5.png";

import Testimonial5 from "../Image/testimonialImage/6.png";

import Testimonial6 from "../Image/testimonialImage/7.png";

import Testimonial7 from "../Image/testimonialImage/8.jpg";

import Testimonial8 from "../Image/testimonialImage/9.jpg";

import Testimonial9 from "../Image/testimonialImage/10.jpg";

import Testimonial10 from "../Image/testimonialImage/11.jpg";
import Testimonial11 from "../Image/testimonialImage/2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import "./styles.css";



const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <>

      <div className="homeSection">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" id="firstSlide">
              <div className="carousel-caption">
                <h1 className="slideInRight">
                  Urologist & Andrologist
                </h1>
                <p className="slideInRight">MS,MNAMS,FICS,
                  DNBE(Urology)</p>
              </div>
            </div>
            <div className="carousel-item" id="secondSlide">
              <div className="carousel-caption">
                <h1 className="slideInRight">
                  Urologist & Andrologist
                </h1>
                <p className="slideInRight">MS,MNAMS,FICS,
                  DNBE(Urology)</p>
              </div>
            </div>

            {/*  <div className="carousel-item" id="thirdSlide">
              <div className="carousel-caption">
                <h1 className="slideInRight">
                  Urologist & Andrologist
                </h1>
                <p className="slideInRight">Lorem, ipsum dolor sit amet</p>
              </div> 
            </div>*/}
          </div>
        </div>
      </div>
      <section className="aboutPageSection" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-2 d-flex justify-content-center align-items-center mt-5">
              <div className="aboutPageText">
                {/* <h5>About Us</h5> */}
                <h2>
                  Dr. Dilip Raja – Urologist & Andrologist MS,MNAMS,FICS,
                  DNBE(Urology)
                </h2>
                <ul>
                  <li>
                    <p>
                      Dr. Dilip Raja is a practicing Urologist and Andrologist
                      for more than 30 years at Mumbai, India. He is a Gold
                      Medalist and recipient of various scholarships during his
                      under and post-graduate training.
                    </p>
                  </li>
                  <li>
                    <p>
                      He has been trained extensively in his speciality at St.
                      Peter’s Hospital at Leuven, Belgium, Mayo Clinic, USA and
                      at Australia.
                    </p>
                  </li>
                  <li>
                    <p>
                      Dr. Dilip Raja has done pioneering work in the field of
                      treating kidney stone patients by Extra Corporeal Shock
                      Wave Lithotripsy (ESWL).
                    </p>
                  </li>
                  <li>
                    <p>
                      He has large experience in treating stone patients with
                      all the modalities like Per-Cutaneous Lithotripsy (PCNL)
                      and ureterorenoscopy (URS) as a complete management of
                      stone disease.
                    </p>
                  </li>
                </ul>
                <Link to="AboutUs">
                  <button className="btn">View More</button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 order-1 d-flex justify-content-center align-items-center">
              <div
                className="aboutPageImg">
                <img
                  src={aboutUS}
                  alt="about company"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="catogerySection"
        id="catogery"
        style={{ backgroundColor: "aliceblue" }}
      >
        <div className="container">
          <div className="titleSection">
            {/* <span>Our Services</span> */}
            <h2>Services Offered</h2>
            <p>
              See our all product categories as per your business requirement.
            </p>
          </div>
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mt-4">
            <div className="col mt-4">
              <div className="catogeryCard">
                <div className="catogeryIcon">
                  <img
                    src={Service}
                    alt=""
                  />
                </div>
                <Link to="/Service">
                  <div className="catogeryTitle">
                    <h3>Kidney Stone</h3>
                  </div>
                </Link>
                <div className="catogeryText">
                  <p>
                    {/* Chemotherapy is a type of cancer treatment that uses one or
                    more anti-cancer drugs as part of a standardized
                    chemotherapy regimen. */}
                    The kidneys are solid; bean shaped, reddish brown-paired structure,
                    which lie behind the abdominal cavity one on either side of the vertebral column
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <Link to="/Service"></Link>
              <div className="catogeryCard">
                <div className="catogeryIcon">
                  <img
                    src={Service1}
                    alt=""
                  />
                </div>
                <div className="catogeryTitle">
                  <h3>Ureteric Stone</h3>
                </div>
                <div className="catogeryText">
                  <p>
                    The kidney stone disease is widespread particularly in countries with dry, hot climate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <Link to="/BladderC">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service2}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Bladder Stone</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      The Urinary Bladder stones are generally formed as an effect of primary pathology. It is important to take care of primary pathology..
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mt-4">
              <Link to="ProstateCancer">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service3}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Prostate-Enlargement</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      The prostate is a walnut-sized gland that forms part of the male reproductive system.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mt-4">
              <Link to="Impotence">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service4}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Erectile Dysfunction</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      Medical professionals often use the term "Erectile Dysfunction" to describe ....
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mt-4">
              <Link to="BladderC">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service5}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Bladder Cancer</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      Bladder cancer is cancer affecting the urinary bladder. Bladder cancer is a fairly common form of cancer and men are affected two to three times more than women.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mt-4">
              <Link to="Infert">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service6}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Male Infertility</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      Infertility is the failure of a couple to become pregnant after one year of regular...
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mt-4">
              <Link to="ProstateCancer">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service7}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Prostate Cancer</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      Each year, more than 120,000 new cases of prostate cancer occurs in USA and more than 30,000 deaths are caused annually by this disease.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mt-4">
              <Link to="Endouro">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service8}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Endo-Urology</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      The prostate is a walnut-sized gland that forms part of the male reproductive system.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mt-4">
              <Link to="PenisEn">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service9}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Penis Enlargement</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      There has always been a great demand for penile enlargement and dissatisfaction about the length and the girth of the penis in each individual.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mt-4">
              <Link to="Varicocele">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service10}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Varicocele</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      Varicocele is an abnormal & tortuous dilatation of the veins of the pampiniform plexus of the spermatic cord.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mt-4">
              <Link to="Robot">
                <div className="catogeryCard">
                  <div className="catogeryIcon">
                    <img
                      src={Service11}
                      alt=""
                    />
                  </div>
                  <div className="catogeryTitle">
                    <h3>Robotic Surgery</h3>
                  </div>
                  <div className="catogeryText">
                    <p>
                      Using robots in the operating room to assist the surgeon in performing surgery.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="whatWeDoSection">
        <div className="container">
          <div className="row mt-0 mt-md-5 mt-lg-0 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="whatWeDoImg">
                <img
                  src={ourMission}
                  alt="What We Do"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="whatWeDoText">
                <div className="whatWeDoTitle">
                  <h2>Our Mission</h2>
                </div>
                <p>
                  As the practice of Urology and Andrology is constantly
                  changing, the cornerstone of good Urological and Andrological
                  care remains that of mutual understanding, respect and trust
                  between the patient and the Urologist.
                </p>
                <p>
                  Our aim is to offer the highest standards of Urological &
                  Andrological treatment for our patients suffering from Kidney
                  stones, Ureteric stone, Bladder stone,Enlargement of Prostate,
                  Kidney Cancer, Bladder Cancer, Prostate Cancer, Erectile
                  Dysfunction & Impotence, Male Infertility amongst other
                  Urinary Disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="weLookingFor"
        style={{ backgroundColor: "aliceblue" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 mt-2 mb-2 d-flex justify-content-center align-items-center">
              <div className="whyChoosseTile">
                <span>Why Choose Us</span>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="partnerCard">
                <div className="partnerCradImg">
                  <img
                    src="https://www.dranupramani.com/wp-content/themes/opal_main/images/traveling.png"
                    alt=""
                  />
                </div>
                <div className="partnerCardTitle mt-3">
                  <h3>Outstation Patients</h3>
                </div>
                <div className="partnerCardText">
                  <p>
                    We would be happy to cooperate with you if you are a
                    registered business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="partnerCard">
                <div className="partnerCradImg">
                  <img
                    src="https://www.dranupramani.com/wp-content/themes/opal_main/images/nautre.png"
                    alt=""
                  />
                </div>
                <div className="partnerCardTitle mt-3">
                  <h3>International Patients</h3>
                </div>
                <div className="partnerCardText">
                  <p>
                    We would be happy to cooperate with you if you are a
                    registered business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="partnerCard">
                <div className="partnerCradImg">
                  <img
                    src="https://www.dranupramani.com/wp-content/themes/opal_main/images/people.png"
                    alt=""
                  />
                </div>
                <div className="partnerCardTitle mt-3">
                  <h3>Underprivileged Patients</h3>
                </div>
                <div className="partnerCardText">
                  <p>
                    We would be happy to cooperate with you if you are a
                    Registered business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" className="p-3">
        <div className="container">
          <div className="titleSection p-2">
            {/* <span>Our Services</span> */}
            <h2>Testimonial</h2>
            <p>
              Our Patients words which they have experience after treatment.
            </p>
          </div>
          <div className="row mt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Mr. Joaquim D'Silva
                    - The best treatment was provided to
                    me by Dr. Dilip Raja at Dubai as well as at Mumbai. From my
                    1st consultation to complete process of treatment for my
                    urological problem, I was at ease, very comfortable with Dr.
                    Raja as he was able to understand me well. Very experienced
                    and talented surgeon.
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial1}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Rajan Kapoor : Dr. Dilip Raja was great and I got rid of my Prostate enlargement problem. Excellent surgeon for all prostate related issues.The staff at the clinic is very helpful, co-operative and was patient as I was very late for my appointment.
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial2}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>

              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Mrs. Noorjehan S :Dr. Dilip Raja is one of the best surgeon and is very friendly in nature. He treated me for my Kidney disease and was operated by Dr. Raja.  He is very cooperative and kind. I am now feeling better after my surgery.					{" "}
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial4}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Mr. Dhirendra Patel: I am fully satisfied by the treatment given to me by Dr. Dilip Raja sir. He is the best Uro-Surgeon for prostate and Kidney diseases.  I will recommend to all my family and friends for any Urological issues.					{" "}
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial5}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Mr. Dilip Nundy:My experience has been great in the way Dr. Dilip Raja has looked at my reports and patiently explained the results. Highly professional surgeon in Mumbai.
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial6}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Abel and Mary Nkoreki :My wife Mary and I (Abel) are so grateful to Dr. Raja for the care and warm welcome accorded to us by Dr. Dilip Raja combined with extremely good care and treatment provided to us.
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial7}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Pratik Bhagat :Since I was suffering from pain in my lower abdomen so I consulted Dr. Dilip Raja. Very soon I was treated with good investigations and I was been operated for the same and recovered very well from the surgery.
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial8}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Alex Onzima and family East Africa : Dr. Dilip Raja, is truly professional and responsible consultant urologist and andrologist with a loving human heart which perfects his professionalism and competence.
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial9}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Giri Rao : My experience from the entry to the exit was very pleasant and courteous one. The front office was very helpful in guiding through the whole process of investigations and collection of the reports.
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial10}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Sajid Mansoori: I met Dr. Dilip Raja as an emergency and was operated immediately for my kidney stone. I was treated very efficiently by the best surgeon and Urologist in Mumbai. Now I am stone free and back to my routine life.
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial11}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure className="snip1192">
                  <blockquote>
                    Mr. Hussain Shaikh: I am suffering from Prostate enlargement problem since years. Suddenly on February 28, 2019 morning, I was unable to urinate since midnight. I immediately was rushed to the nearby hospital as an emergency and called Dr. Dilip Raja as I came to know that Dr. Raja is the only one and the best Urologist. He asked me not to panic and to do few investigations immediately and to send the reports of my USG. I was been prescribed a medicine by Dr. Dilip Raja and within half an hour of taking that medicine I was able to urinate. Thank you Dr. Raja, God Bless You!!!					{" "}
                  </blockquote>
                  <div className="author">
                    <img
                      src={Testimonial3}
                      alt="sq-sample1"
                    />
                    <h5>
                      Pelican Steve <span> LittleSnippets</span>
                    </h5>
                  </div>
                </figure>
              </SwiperSlide>{" "}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
