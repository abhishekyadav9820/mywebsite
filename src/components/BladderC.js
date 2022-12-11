import { React, useLayoutEffect } from "react";
import image from "../Image/bladder.jpg";
import image1 from "../Image/aboutUs.jpg";
import image2 from "../Image/Bladder Cancer/1.jpg";
import image3 from "../Image/Bladder Cancer/2.jpg";
import image4 from "../Image/Bladder Cancer/3.jpg";
import image5 from "../Image/Bladder Cancer/treament.jpg";
import Footer from "./Footer";
import $ from "jquery";
import { Link } from "react-router-dom";
const BladderC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
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
        fromEmail: "skdmlead@gmail.com",
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
              <h2>Bladder Cancer</h2>
              {/* <p>
              Prostate cancer occurs when cells within the prostate grow uncontrollably, creating small tumors. 
              </p> */}
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
                <h2>Bladder Cancer</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      Bladder cancer is a fairly common form of cancer and men
                      are affected two to three times more than women. Most
                      bladder cancers occur after the age of 55. The disease is
                      not contagious.
                    </p>
                  </li>
                </ul>
                {/* <h2 className='mt-5'>Risk Factors</h2> */}
                <div className="servicePageText">
                  <h2>Risk Factors:-</h2>
                  <ul className="mt-3">
                    <li>
                      <p>Smoking</p>
                    </li>
                    <li>
                      <p>Occupational Hazards</p>
                    </li>
                    <li>
                      <p>Workers in Rubber, Chemical & Industries</p>
                    </li>
                    <li>
                      <p>
                        Hairstylists, Machinists, Metal Workers, Printers,
                        Painters, Textile Workers
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img src={image} alt="About company" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceDetails">
        <h2 className="serviceCeterTittle" style={{ color: "white" }}>
          Symptoms
        </h2>
        <p>The most common symptom of Bladder Cancer </p>
        <div className="container d-flex justify-content-center align-items-center mt-md-5 mt-0">

          <div className="row">
            {/* <div className="col-md-6"> */}


            <div className="col-md-6 col-12 d-flex justify-content-center">
              <ul className="mt-3">
                <li>
                  <p>Blood in urine with or without clots</p>
                </li>
                <li>
                  <p>Increased frequency of urine</p>
                </li>
                <li>
                  <p>
                    Feeling the need to urinate many times specially at night
                    and sometimes not able to pass urine.
                  </p>
                </li>


              </ul>
            </div>


            <div className="col-md-6 col-12 d-flex justify-content-center">
              <ul>
                <li>
                  <p>Painful urination (Dysuria)</p>
                </li>
                <li>
                  <p>Urgency and Urge Incontinence</p>
                </li>
                <li>
                  <p>Weight Loss</p>
                </li>
                <li>
                  <p>Fatigue</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
        {/* </div> */}
      </section>
      <section
        style={{ backgroundColor: "aliceblue" }}
        className="servicePageSection pt-lg-5 pt-2"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="servicePageText">
                <h2 className="">Diagnosis/Investigations</h2>

                <ul className="mt-5">
                  <li>
                    <p>
                      Urine Analysis reveals presence of blood, pus cells in the
                      urine
                    </p>
                  </li>
                  <li>
                    <p>Ultrasonography of KUB</p>
                  </li>
                  <li>
                    <p>Intravenous Urography ( IVU)</p>
                  </li>
                  <li>
                    <p>CT Urography.</p>
                  </li>
                </ul>
                <p>
                  Subsequently, biopsy through cystoscopy will confirm the
                  definitive diagnosis of Bladder Cancer.<br></br>
                  Once biopsy confirms presence of Transitional Carcinoma,
                  stages and grading of cancer can be done.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12 mt-2">
              <div className="afterImg">
                <img src={image1} alt=""></img>
              </div>
              <p className="text-start">
                <b>Dr. Dilip Raja </b>
              </p>
            </div>
            <div className="col-md-3 col-12 mt-2">
              <div className="afterImg">
                <img src={image4} alt=""></img>
              </div>
              <p className="text-start">
                <b>
                  {" "}
                  Bladder Tumor X ray pic enlarged showing only tumor portion
                </b>
              </p>
            </div>
          </div>

          <div className="row mt-lg-5 mt-2">
            <div className="col-md-3 col-12 mt-2">
              <div className="afterImg">
                <img src={image2} alt=""></img>
              </div>
              <p className="text-start">
                <b> Endoscopic view of Bladder Tumor Before TURBT surgery</b>
              </p>
            </div>

            <div className="col-md-3 col-12 mt-2">
              <div className="afterImg">
                <img src={image3} alt=""></img>
              </div>
              <p className="text-start">
                <b>Endoscopic view of Bladder Tumor After TURBT surgery</b>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="servicePageText">
                <h2>Treatment:</h2>
                <p className="mt-5">
                  Treatment of the bladder cancer depends on a number of
                  factors. These are
                </p>
                <ul className="mt-2">
                  <li>
                    <p>How quickly the cancer is growing?</p>
                  </li>
                  <li>
                    <p>The number, size, and location of the tumors.</p>
                  </li>
                  <li>
                    <p>Whether the cancer has spread to other organs?</p>
                  </li>
                  <li>
                    <p>The patient's age and general health.</p>
                  </li>
                </ul>
                {/* <ul className="mt-3">
                  <li>
                    <p>
                      The cancer is in the lining of the bladder only and has
                      not spread.
                    </p>
                  </li>
                  <li>
                    <p>
                      The cancer goes through the bladder lining, but does not
                      reach the bladder muscle.
                    </p>
                  </li>

                  <li>
                    <p>The cancer spreads to the bladder muscle</p>
                  </li>

                  <li>
                    {" "}
                    <p>
                      The cancer spreads past the bladder into the fatty tissue
                      surrounding it
                    </p>
                  </li>

                  <li>
                    {" "}
                    <p> The cancer has spread to nearby structures</p>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <div className="servicePageText">
                <h2 className="">Stages of bladder cancer</h2>

                <ul className="mt-2">
                  <li>
                    <p><b>Stage 0:&nbsp;</b>
                      The cancer is in the lining of the bladder only and has not spread.
                    </p>
                  </li>
                  <li>
                    <p><b>Stage 1:&nbsp;</b>The cancer goes through the bladder lining, but does not reach the bladder muscle.</p>
                  </li>
                  <li>
                    <p><b>Stage 2:&nbsp;</b>The cancer spreads to the bladder muscle</p>
                  </li>
                  <li>
                    <p><b>Stage 3:&nbsp;</b>The cancer spreads past the bladder into the fatty tissue surrounding it</p>
                  </li>
                  <li>
                    <p><b>Stage 4:&nbsp;</b>The cancer has spread to nearby structures such as the prostate
                      gland, uterus, vagina, rectum, abdominal wall, or pelvic wall</p>
                  </li>

                </ul>

              </div>
            </div>
            <div className="col-md-6 col-12 mt-2">
              <div className="afterImg">
                <img src={image5} alt="" />
              </div>

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

export default BladderC;
