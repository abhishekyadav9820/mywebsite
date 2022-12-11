import { React } from "react";
import "../CSS/Page.css";
import image from "../Image/services/Varicocele.jpg";
import Footer from "../components/Footer";
import $ from "jquery";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import imp2 from '../Image/impotence/surgical.jpg';
import imp1 from '../Image/impotence/topical.jpg';
import imp3 from '../Image/impotence/surgical2.jpg';

const impotence = () => {

  const formSubmit = () => {
    var custName;
    var custEmail;
    var custPhone;
    var custMessage;

    if ($(".custName").val() !== "") {
      custName = $(".custName").val();
    } else {
    }
    if ($(".custPhone").val() !== "") {
      custPhone = $(".custPhone").val();
    } else {
    }

    if ($(".custEmail").val() !== "") {
      custEmail = $(".custEmail").val();
    } else {
    }

    if ($(".custMessage").val() !== "") {
      custMessage = $(".custMessage").val();
    } else {
    }

    var body =
      '<!DOCTYPE html><html><head><title>Dr. Dilip Raja - Urologist &amp; Andrologist MS,MNAMS,FICS, DNBE(Urology)</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"><tr><td align="center" style="background-color:#eee" bgcolor="#eeeeee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#164388"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"><a href="tel:+91" style="text-decoration:none;color:#fff;font-family:serif;font-size:16px">Leade Generate for Dr Dilip Raja</a></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:120px;height:120px" src="" alt=""></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#164388"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center"><h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#fff">Client Enquiry Details</h1></td></tr></table></div></td></tr><tr><td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"><tr><td width="100%" align="center" valign="top" style="font-size:0"><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Name:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custName +
      '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Number:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custPhone +
      '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Email:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custEmail +
      '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Message:</p><p style="font-size:14px;font-weight:500;color:#111">' +
      custMessage +
      '</p></td></tr></table></div></td></tr></table></td></tr><tr><td width="100%" align="center" bgcolor="#164388" style="padding:10px 0"><p style="color:#fff;font-weight:500;font-size:1rem;padding:0;margin:0">© Copyright 2022 Dr Dilip Raja</p></td></tr></table></td></tr></table></body></html>';

    $.post(
      "https://skdm.in/server/v1/send_lead_mail.php",
      {
        toEmail: "drdilipraja@gmail.com",
        fromEmail: "drdilipraja@gmail.com",
        bccMail: "skdmlead@gmail.com",
        mailSubject: "New Lead genration",
        mailBody: body,
        accountName: "drraja",
        accountLeadSource: "https://dilipraja.com/",
        accountLeadName: custName,
        accountLeadPhone: custPhone,
        accountLeadEmail: custEmail,
        accountLeadMsgs: custMessage,
      },

      function (dataa, status) {
        console.log("data :" + dataa);
        console.log("name:" + custName);
      }
    );

    alert("Your Form has Submitted Our team will contact with You  soon.");

    window.location.reload();

    return false;
  };

  return (


    <div>
      <Helmet>
        <title>Dilip Raja impotence</title>
        <meta name="description" content="Description of your page" />
      </Helmet>
      <div
        className="whoWeareBanner"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0, 0, 0, .6), rgb(0, 0, 0, .6)), url(https://www.docibclinic.com/assets/images/docib-our-services-urology.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Impotence</h2>
              <p>Know More about Impotence</p>
            </div>
            <div className="col-md-6" />
          </div>
        </div>
      </div>

      <section className="servicePageSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="servicePageText">
                <h2>What is Erectile Dysfunction/Impotence?</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      Inability to achieve and maintain an erection sufficient
                      for vaginal penetration to the mutual benefit for both
                      partners.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="servicePageText">
                <p>
                  <b> Classifications of Male Sexual Dysfunction?</b>
                </p>
                <ol className="mt-3">
                  <li>
                    <p>Sexual desire disorder</p>
                  </li>
                  <li>
                    <p>Erectile dysfunction</p>
                  </li>
                  <li>
                    <p>Male orgasmic disorder</p>
                  </li>
                </ol>
              </div>
              <div className="servicePageText">
                <p>
                  <b>Premature ejaculation </b>
                </p>

                <ul className="mt-3">
                  <li>
                    <p>
                      Early discharge or Premature Ejaculation is a complex
                      problem. It can ruin your sex life and also destroy
                      relationships. But it is curable.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="servicePageText">
                <h2>Signs and Symptoms of Erectile Dysfunction</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      Aside from difficulty getting and sustaining an erection,
                      erectile dysfunction may be accompanied by other problems
                      such as reduced sexual desire, low testosterone levels and
                      premature or delayed ejaculation.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-lg-5 mt-2">
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img src={image} alt="About company" />
              </div>
              <div className="servicePageText mt-lg-3 mt-2">
                <p>
                  <b>
                    {" "}
                    Erectile dysfunction also has an emotional impact,
                    including:
                  </b>
                </p>

                <ol className="mt-3">
                  <li>
                    <p>Lack of intimacy</p>
                  </li>
                  <li>
                    <p>Low self-esteem</p>
                  </li>
                  <li>
                    <p>Difficulty getting your partner pregnant</p>
                  </li>
                  <li>
                    <p>Stress</p>
                  </li>
                  <li>
                    <p>Depression</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceDetails">
        <h2 className="serviceCeterTittle">CAUSES OF ERECTILE DYSFUNCTION</h2>
        <div className="container  mt-md-5 mt-0">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <ol>
                <li>
                  <p>
                    <b>Psychogenic Causes:</b>
                    <ul>
                      <li>Anxiety</li>
                      <li>Depression</li>
                      <li>Fatigue</li>
                      <li>Guilt</li>
                      <li>Stress</li>
                      <li>Marital Discord</li>
                      <li>Excessive alcohol consumption</li>
                    </ul>
                  </p>
                </li>
              </ol>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ol>
                <li>
                  <p>
                    <b> Organic Causes</b>
                  </p>
                  <ul>
                    <li>Cardiovascular disease</li>
                    <li>Diabetes mellitus</li>
                    <li>Surgery on colon, bladder, prostate</li>
                    <li>Neurologic causes (lumbar disc, MS, CVA)</li>
                    <li>Priapism</li>
                    <li>Hormonal deficiency</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ol>
                <li>
                  <p>
                    <b>Neurologic Causes</b>
                  </p>
                  <ul>
                    <li>Hormone Deficiency</li>
                    <li>End Organ Failure</li>
                    <li>Blockage of Blood </li>
                    <li>Vessels</li>
                    <li>Venous Leak</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: "aliceblue" }}
        className="servicePageSection"
      >
        <div className="container">
          <div className="row">
            <div className="servicePageText">
              <h2>EVALUATION OF MEN WITH ERECTILE DYSFUNCTION (ED) :</h2>
              <ol className="mt-3">
                <li>
                  <p>Medical History</p>
                </li>
                <li>
                  <p>Cardiovascular history</p>
                </li>
                <li>
                  <p>Endocrine history</p>
                </li>
                <li>
                  <p>Sexual history/questionnaire</p>
                </li>
              </ol>
            </div>
            <div className="servicePageText mt-4">
              <h2>INVESTIGATIONS FOR ERECTILE DYSFUNCTION:</h2>

              <ul className="mt-3">
                <li>
                  <p>
                    A medical history review and physical exam are typically
                    enough for a urologist to diagnose erectile dysfunction.
                    Sometimes, further tests are recommended:
                  </p>
                </li>
                <li>
                  <p>
                    <b> Blood Tests –</b> Detect signs of diabetes, heart
                    disease, hormonal imbalance, low testosterone and other
                    health issues.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Urinalysis –</b> Detect sugar, testosterone and protein
                    levels in the urine for possible signs of diabetes, hormonal
                    imbalance and kidney problems.
                  </p>
                </li>

                <li>
                  <p>
                    <b> Ultrasound – </b> Detect any anatomical or health issues
                    that cause problems in the way blood flows in and out the
                    penis and the testes.
                  </p>
                </li>
                <li>
                  <p>
                    <b> Psychosocial Assessment – </b> Diagnose mental
                    conditions like anxiety and depression.
                  </p>
                </li>
              </ul>
            </div>

            <div className="servicePageText mt-4">
              <h2>PHYSICAL EXAMINATION :</h2>

              <ol className="mt-3">
                <li>
                  <p>Blood pressure</p>
                </li>
                <li>
                  <p>Examine penis (Peyronie’s disease)</p>
                </li>
                <li>
                  <p>Focused vascular exam/peripheral pulses</p>
                </li>
                <li>
                  <p>Focused neurologic exam</p>
                </li>
              </ol>
            </div>

            <div className="servicePageText mt-4">
              <h2>TREATMENT FOR ERECTILE DYSFUNCTION</h2>
              <div className="row">
                <div className="col-md-6 col-12">
                  <ol className="mt-3">
                    <li>
                      <p>Lifestyle changes</p>
                    </li>
                    <li>
                      <p>Oral agents</p>
                    </li>
                    <li>
                      <p>Penile injection</p>
                    </li>
                    <li>
                      <p>Urethral suppositories</p>
                    </li>
                    <li>
                      <p>External vacuum devices</p>
                    </li>
                    <li>
                      <p>Topical cream</p>
                    </li>
                    <li>
                      <p>Surgical intervention</p>
                    </li>
                  </ol>
                </div>
                <div className="col-md-6 col-12">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="impImg">'
                        <img src={imp1} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="impImg">'
                        <img src={imp2} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-12 mt-2">
                      <div className="impImg">'
                        <img src={imp3} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-12 mt-2">
                      <div className="impImg">'
                        {/* <img src="" alt="" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="servicePageText mt-4">
              <h2>PENILE IMPLANTS / PENILE PROSTHESIS</h2>

              <ul className="mt-3">
                <li>
                  <p>
                    Penile Implants are artificial rods. These silicon rods can
                    be placed inside the penis. These rods provide hardness to
                    the penis.
                  </p>
                </li>
                <li>
                  <p>
                    Penile Implants are also called as Penile Prosthesis. They
                    provide completely natural feeling erections.
                  </p>
                </li>
              </ul>
              <p>
                <b>Indications:</b>
              </p>
              <ol className="mt-3">
                <li>
                  <p>Patients who have failed other therapies</p>
                </li>
                <li>
                  <p>Peyronie’s disease</p>
                </li>
                <li>
                  <p>Severe vasculogenic disease </p>
                </li>
              </ol>
              <p>
                <b>Penile Prosthesis advantages :</b>
              </p>

              <ol className="mt-3">
                <li>
                  <p>Low-morbidity</p>
                </li>
                <li>
                  <p>Low-mortality surgery</p>
                </li>
                <li>
                  <p>Low complication rates</p>
                </li>
                <li>
                  <p>High success rates – 5% malfunction rate at 5 years</p>
                </li>
                <li>
                  <p>High satisfaction rate – 87%</p>
                </li>
                <li>
                  <p>High partner satisfaction rate</p>
                </li>
                <li>
                  <p>Good rigidity</p>
                </li>{" "}
                <li>
                  <p>Freedom from medications</p>
                </li>
                <li>
                  <p>Outpatient/24HR surgery</p>
                </li>
                <li>
                  <p>Resume sexual activity 4-6 weeks</p>
                </li>
                <li>
                  <p> No loss of ability to ejaculate or achieve orgasm</p>
                </li>
              </ol>
              <p>
                <b>Penile Prosthesis Disadvantages :</b>
              </p>

              <ol className="mt-3">
                <li>
                  <p>Surgery</p>
                </li>
                <li>
                  <p>Expensive</p>
                </li>
                <li>
                  <p>Possible mechanical failure</p>
                </li>
              </ol>
              <p><b> Erectile dysfunction and Premature Ejaculation</b> may be a distressing condition, but treatable ones. At Dr Dilip Raja’s Urology and Andrology Centre, we provide personalized care to all our patients for optimal results. For consultation and assessment, contact Urologist & Andrologist - Dr Dilip Raja at +91 98200 74649 today.</p>

            </div>

          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#eee" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form" method="post">
                <h2>Get in Touch</h2>

                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="text"
                        className="form-control custName"
                        placeholder="Your Name"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field ">
                      <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        required=""
                        className="form-control custEmail"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12 col-xs-12 p-0">
                    <div className="single-input-field">
                      <input
                        type="number"
                        className="form-control custPhone"
                        placeholder="Phone Number"
                        name="phone"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <textarea
                        placeholder="Write Your Message"
                        name="message"
                        spellCheck="false"
                        className="form-control custMessage"
                        defaultValue={""}
                        required
                      />
                    </div>
                  </div>
                  <div className="single-input-fieldsbtn">
                    <input
                      type="submit"
                      onClick={formSubmit}
                      defaultValue="Send Now"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="col-md-6 d-flex justify-content-start align-items-center">
                <div className="contactPersonDetail">
                  <h2>Dr. Raja's Urology & Andrology</h2>
                  <span></span>
                  <ul>
                    <li>
                      <Link href="mailto:drdilipraja@gmail.com">
                        <span className="material-symbols-outlined">mail</span>
                        <span>drdilipraja@gmail.com</span>
                      </Link>
                      /{" "}
                      <Link href="mailto:drdilipraja@yahoo.com">
                        <span>drdilipraja@yahoo.com</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <span className="material-symbols-outlined">
                          pin_drop
                        </span>
                        <span>
                          404, Sagar Fortune 184, Waterfield Road Opposite
                          National College, Bandra (W),Mumbai 400 050 India.
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link href="tel:+91 2226452007">
                        <span className="material-symbols-outlined">
                          contacts
                        </span>
                        <span>+91 22 2645 2007</span>
                      </Link>
                      /
                      <Link href="tel:+91 26452008">
                        <span>+91 2645 2008</span>
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      {" "}
                      <Link href="">
                        <span className="material-symbols-outlined">
                          schedule
                        </span>
                        <span>Monday To Saturday: 12pm – 7pm.</span>
                      </Link>
                    </li>

                    <li className="socialMediaLink">
                      <Link href="">
                        <i className="fa fa-facebook" aria-hidden="true" />{" "}
                      </Link>
                      <Link href="">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </Link>
                      <Link href="">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </Link>
                      <Link href="">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default impotence;
