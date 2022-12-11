import { React, useLayoutEffect } from "react";
import logo from "../Image/logo.png";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <footer className="fooetrSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 order-lg-1 order-md-1 order-1">
              <div className="footerAbout">
                <div className="companyDetail">
                  <img src={logo} alt="" />
                  <h5>
                    Dr. Dilip Raja – Urologist & Andrologist MS,MNAMS,FICS,
                    DNBE(Urology)
                  </h5>
                  {/* <p>
                    Surgimedicart is a brand in the pharmaceutical industry that
                    uses an extremely cutting-edge module to do business.
                    Surgimedcat is a top-tier pharmaceutical distributor that is
                    WHO-GDP recognised and ISO 9001:2005 accredited.
                  </p> */}
                </div>
                {/* <div className="footerSocialIcon">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/surgimedcart/">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/surgimedcart/">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/surgimedcart/">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    {/* <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li> 
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-4 order-lg-2 order-md-3 order-2 d-flex justify-content-lg-center">
              <div className="listofLinks">
                <h4>Quick Links</h4>
                <ul>
                  <Link to="/Service">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="index.php">KIDNEY STONE</a>
                    </li>
                  </Link>

                  <Link to="/ProstateGland">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="whoWeAre.php">PROSTATE GLAND</a>
                    </li>
                  </Link>

                  <Link to="/ProstateCancer">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="whatWeDo.php">PROSTATE CANCER</a>
                    </li>
                  </Link>

                  <Link to="/BloodUrine">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="contact.php">BLOOD IN URINE</a>
                    </li>
                  </Link>

                  <Link to="/KidneyCancer">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="contact.php">KIDNEY CANCER</a>
                    </li>
                  </Link>

                  <Link to="/BladderC">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="contact.php"> BLADDER CANCER</a>
                    </li>
                  </Link>

                  {/* <Link to="/Endouro">
                  <li>
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                    <a href="contact.php">UROLOGY</a>
                  </li>
                  </Link> */}

                  <Link to="/PenisCancer">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="contact.php">PENIS CANCER</a>
                    </li>
                  </Link>

                  <Link to="/Impotence">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="contact.php">IMPOTENCE</a>
                    </li>
                  </Link>

                  <Link to="/UrinaryTract">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="contact.php">URINARY TRACT INFECTION</a>
                    </li>
                  </Link>

                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mt-4 order-lg-3 order-md-4 order-3 d-flex justify-content-lg-center">
              <div className="listofLinks">
                <h4>Others Links</h4>
                <ul>
                  <Link to="/Incoti">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="partner.php?name=Manufacturing">INCONTINENCE</a>
                    </li>
                  </Link>

                  <Link to="/UrinaryTract">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="career.php">URINARY INCONTINENCE</a>
                    </li>
                  </Link>

                  <Link to="/Infert">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="media.php?name=news">INFERTILITY</a>
                    </li>
                  </Link>

                  <Link to="/Endouro">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="media.php?name=news">ENDO UROLOGY</a>
                    </li>
                  </Link>

                  <Link to="/KidneyTrans">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="media.php?name=news">KIDNEY TRANSPLANT</a>
                    </li>
                  </Link>

                  <Link to="/AgingM">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="media.php?name=news">AGING MALE</a>
                    </li>
                  </Link>

                  <Link to="/PenisEn">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="media.php?name=news">PENIS ENLARGEMENT</a>
                    </li>
                  </Link>

                  <Link to="/Varicocele">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="media.php?name=news">VARICOCELE</a>
                    </li>
                  </Link>

                  <Link to="/Robot">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="media.php?name=news">ROBOTIC SURGERY</a>
                    </li>
                  </Link>

                  <Link to="/Andro">
                    <li>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                      <a href="media.php?name=news">ANDROLOGY</a>
                    </li>
                  </Link>

                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 order-lg-4 order-md-2 order-4 d-flex justify-content-center">
              <div className="footerContact">
                <h4>Contact Info</h4>
                <ul>
                  <li>
                    <span className="material-symbols-outlined">pin_drop</span>
                    <a href="https://g.page/besturologistmumbaidrdilipraja?share">
                      {" "}
                      404 Sagar Fortune 184 Waterfield Road Bandra (W), Mumbai -
                      400050
                    </a>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">call</span>
                    <a href="tel:+91 2226452007">+91 22 2645 2007</a>
                    <span>/</span>
                    <a href="tel:+91 2226452008">+91 22 2645 2008</a>
                  </li>
                  <li>
                    <span className="material-symbols-outlined">mail</span>
                    <Link href="mailto:drdilipraja@gmail.com">
                      drdilipraja@gmail.com
                    </Link>
                    <Link href="mailto:drdilipraja@yahoo.com">
                      / drdilipraja@yahoo.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            {" "}
            © Copyright{" "}
            <strong>
              <span style={{ color: "#fff" }} />
            </strong>
            . All Rights Reserved{" "}
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="https://skdm.in/" style={{ color: "#fff" }}>
              Shree Krishna Digital Marketing
            </a>{" "}
          </div>
        </div>
      </footer>


      <div className="floatingText">
        <p>Contact here</p>
      </div>
      <div className="floattingButton">
        <a className="float" id="menu-share">
          <i className="fa fa-link my-float"></i>
        </a>
        <ul>
          <li>
            <a href="tel:+91 2226452007">
              <i className="fa fa-phone my-float"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+91 9820074649?text=">
              <i className="fa fa-whatsapp my-float"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
