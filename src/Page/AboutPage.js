import Footer from "../components/Footer";
import AboutImage from "../Image/sc.jpg";
// import "../CSS/AboutPage.css";
import aboutDr from "../Image/aboutUs.jpg";
import aboutCenter from "../Image/clinic.jpg";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <>
      <div
        className="whoWeareBanner"
        style={{
          background:
            "linear-gradient(to right, rgb(0, 0, 0, .5), rgb(0, 0, 0, .5)), url(" +
            { AboutImage } +
            ")",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>Know More about DR Dilip Raja</p>
            </div>
            <div className="col-md-6" />
          </div>
        </div>
      </div>

      <section className="aboutPageSection" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-2 mt-5">
              <div className="aboutPageText">
                {/* <h5>About Us</h5> */}
                <h2>
                  DR. DILIP RAJA – UROLOGIST &amp; ANDROLOGIST
                  MS, MNAMS, FICS, DNB(Urology)
                </h2>
                <ul>
                  <li>
                    <p>
                      Dr. Dilip Raja is a practicing Urologist and Andrologist for more than 35 years at Mumbai,
                      India. He is a Gold Medallist and recipient of various scholarships during his under and post-
                      graduate training.
                    </p>
                  </li>
                  <li>
                    <p>
                      He has been trained extensively in his speciality at St. Peter’s Hospital at Leuven, Belgium,
                      Mayo Clinic, USA and at Australia.
                    </p>
                  </li>
                  <li>
                    <p>
                      Dr. Dilip Raja has done pioneering work in the field of treating kidney stone patients by Extra
                      Corporeal Shock Wave Lithotripsy (ESWL).
                    </p>
                  </li>
                  <li>
                    <p>
                      He has large experience in treating stone patients with all the modalities like Per-Cutaneous
                      Lithotripsy (PCNL), Mini PCNL, Ureterorenoscopy (URS) and Retrograde Intrarenal Surgery
                      (RIRS) as a complete management of stone disease.
                    </p>
                  </li>
                  <li>
                    <p>
                      He is also one of the first few Urologists and Andrologist to start newer technologies like
                      Electro-vaporization of prostate, Penile Implants, Microsurgery in Urology etc in India. Endo-
                      Urology, Stones, Prostate, Impotence are his all-time favourites.
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Dr. Raja has a large number of national and international publications to his credit. He has
                      delivered many Guest lectures, conducted surgical workshops and has been instrumental in
                      setting up Kidney Units at national and international levels.
                    </p>
                  </li>
                  <li>
                    <p>
                      At present he is a senior consultant Urologist and Andrologist &amp; affiliated with Lilavati
                      Hospital Bandra (W), P.D Hinduja Hospital (Khar), Saifee Hospital Charni Road at Mumbai,
                      Breach Candy Hospital and Wockhardt Hospital India. He has his Urology &amp; Andrology
                      Centres at Bandra west in Mumbai, India.
                    </p>
                  </li>
                  <li>
                    <p>
                      He is a member of Mumbai Urology Society, Urology Society of India, National Academy of
                      Medical Sciences, American Urology Association, Endo-Urology Association, USA, Société`
                      Internationale d`Urologie and almost all the prestigious international urology and andrology
                      societies in the world.
                    </p>
                  </li>
                  {/* <li>
                    Dr. Dilip Raja attended Robotic training and certification
                    from da Vinci Surgical System Off Site Training Programme
                    for a da Vinci Console Surgeon on May 12, 2016 at
                    US:Intuitive Surgical Headquarters, Sunnyvale, California,
                    USA.
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-6 order-1 mt-3">
              <div className="aboutPageImg1">
                <img
                  src={aboutDr}
                  alt="About company"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "aliceblue" }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center p-2 p-lg-4">
            <h2 className="aboutCeterTittle">
              Dr. Raja’s Urology &amp; Andrology Centre, Bandra West, Mumbai, India
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="aboutPageText">
                <ul>
                  <li>
                    <p>
                      Over the years, the field of Urology &amp; Andrology has seen mammoth developments, which were
                      previously unimaginable.
                    </p>
                  </li>
                  <li>
                    <p>
                      These are times when 90% of Urological cases can be taken care of by Endoscopic surgery.
                    </p>
                  </li>
                  <li>
                    <p>
                      Dr. Raja’s Urology &amp; Andrology Centre is one of its kind that provide knowledge and help on Urology
                      &amp; Andrology problems.
                    </p>
                  </li>
                  <li>
                    <p>
                      The Centre will primarily focus on utmost patient care with the latest modalities available with deep
                      human care &amp; compassion.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="aboutImageCenter">
                <img src={aboutCenter} alt="about company" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="aboutCeterTittle">Honors and Awards</h2>
              <div className="aboutPageText">
                <ul>
                  <li>
                    Godrej Karai Surgical Research Fellowship from1981-82 from Association of Surgeons of India.
                    Rameshwardas Birla Smarak Kosh Scholarship for research project at Bombay Hospital in 1985-86.

                    <p>Gold Medal at M.S. Exam, Calcutta University 1983.</p>
                  </li>
                  <li>
                    <p>
                      Dr. Anungo Mohan Sen Memorial Gold Medal from Association of Surgeons of India 1983
                    </p>
                  </li>
                  <li>
                    <p>
                      Dr. A. K. Nandy Post Graduate Research Scholarship in Medical Sciences for 1981-83 from Calcutta
                      University.
                    </p>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="m-lg-5 m-2">
                The following subspecialties will be treated at the center &
                others prominent hospital in the city.
              </p>

              <ul className="aboutCenterDetails m-0 m-lg-5">
                <Link to="/Service"> <li>ESWL, PCNL, Mini PCNL, URS, RIRS</li></Link>
                <Link to="/"><li>Uro-oncology</li></Link>
                <Link to="/Endouro"> <li>Endo-urology</li></Link>
                <Link to="/ProstateCaner"><li>Prostate disorders</li></Link>
                <Link to="/Impotence"><li>Impotence/Erectile dysfunction</li></Link>
                <Link to="/Inconti"><li>Urinary Incontinence</li></Link>
                <Link to="/Infert"><li>Male Infertility</li></Link>
                <Link to="/KidneyTrans"><li>Kidney Transplants</li></Link>
                <Link to="/AgingM"><li>Ageing Male</li></Link>
                <Link to="/Andro"><li>Female Urology</li></Link>
                <Link to=""><li>Neuro-urology</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
