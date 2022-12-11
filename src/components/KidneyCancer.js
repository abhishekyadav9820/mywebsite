import { React, useLayoutEffect } from "react";
import "../CSS/Page.css";
import image2 from "../Image/kidney cancer/KidneyCancer.jpg";
import redi from "../Image/kidney cancer/radi.png";
import dilip from "../Image/kidney cancer/dilipraja.png";
import stage from "../Image/kidney cancer/kidneycancerstages.png";
import ct from "../Image/kidney cancer/angiography.jpg";
import Footer from "../components/Footer";
import $ from "jquery";
import { Link } from "react-router-dom";
const KidneyCancer = () => {
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
              <h2>Kidney Cancer</h2>
              <p></p>
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
                <h2>Who is Effected?</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      Any Kidney Tumour whether it is benign or cancerous,
                      evolve from a disruption of gene cells one or more in DNA.
                      The genetics cell multiplications are normally under
                      control but when they go out of control, they form a mass
                      of a tissue which is called a Tumour. Approximately 85% of
                      all kidney cancers are renal cell carcinoma (RCC).
                      Transitional cell cancer (TCC) of the renal pelvis is less
                      common accounting for about 8% of diagnosed cancers. About
                      5% to 7% tumours could be benign tumours of Kidney.{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="servicePageText">
                <h2>Cause</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      The exact causes of kidney cancer are not well understood.
                      Kidney cancer is not contagious; no one can "catch" any
                      type of cancer from another person.
                    </p>
                  </li>
                  <li>
                    <p>
                      Scientists have learned other major risk factor for kidney
                      cancer: -
                      <br />
                      <ul>
                        <li> Smoking</li>
                        <li>Certain Occupational Hazards</li>
                        <li>Coke Oven workers & asbestos workers</li>
                        <li>Obesity</li>
                      </ul>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-lg-5 mt-2">
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img src={image2} alt="About company" />
              </div>
              <div className="servicePageText">
                <h2>Symtoms of Kidney cancer</h2>
                <div>
                  <ul>
                    <li><p>Persistent Fatigue</p></li>
                    <li><p>Unexplained Weight loss</p></li>
                    <li><p>Recurrent Fevers and sometimes high Blood Pressure</p></li>
                    <li><p>Blood in urine with or without clots</p></li>
                    <li><p>Lump or a mass felt in the kidney region</p></li>
                    <li> <p>Dull ache on the side of the tumour</p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceDetails">
        <h2 className="serviceCeterTittle">Investigation for kidney cancer</h2>
        <div className="container  mt-md-5 mt-0">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex  justify-content-center">

              <ul>
                <li><p>Urine Analysis</p></li>
                <li><p>Creatinine</p></li>
                <li><p>Ultrasound</p></li>
                <li><p>Intravenous Urogram</p></li>
              </ul>
            </div>
            <div className="col-lg-6 col-12  d-flex  justify-content-center">
              <ul>
                <li> <p>CT Urography</p></li>
                <li><p>MRI</p></li>
                <li><p>Renal Angiography</p></li>
                <li><p>Chest X ray and Bone Scan</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "aliceblue" }}>
        <div className="container">
          <div className="row">
            <div className="servicePageText">
              <h2>Treatments/Surgery:</h2>
              <ol className="mt-3">
                <li>
                  <p>
                    If these tests suggest that a tumour is present, it is
                    important to know the extent, or stage, of the disease.
                    Because kidney cancer can spread to the bones, lungs, liver,
                    or brain, staging procedures may include special x-rays and
                    tests to check these organs.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    Ideal treatment for Kidney Cancer is surgery which can be
                    Partial Nephrectomy or Radical Nephrectomy. These may
                    require additional chemotherapy, immune therapy etc
                    depending of extent of the disease or the recurrence of the
                    cancer.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    These surgeries can be achieved either by Open surgery,
                    Laparoscopic or Robotic surgery. Dr. Dilip Raja (Urologist
                    Andrologist) will decide on the mode of the treatment based
                    on various facts. Please discuss during consultation with
                    Dr. Dilip Raja.{" "}
                  </p>
                </li>
              </ol>

              <div className="row mt-lg-5 mt-2">
                <div className="col-lg-6 col-12">
                  <div className="surgImg">
                    <img src={redi} alt="" />
                    <h6>Radical Nephrectomy</h6>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="surgImg">
                    <img src={dilip} alt="" />
                    <h6>Dr. Dilip Raja</h6>
                  </div>
                </div>
                <div className='col-lg-6  col-12 pt-lg-5 pt-lg-2'>
                  <div className='surgImg'>
                    <img src={stage} alt="" />
                    <h6>Kidney Cancer - Stages</h6>
                  </div>
                </div>
                <div className="col-lg-6 col-12 pt-lg-5 pt-lg-2">
                  <div className="surgImg">
                    <img src={ct} alt="" />
                    <h6>CT Angiography</h6>
                  </div>
                </div>
              </div>

              <div className="row mt-lg-5 mt-2">

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

export default KidneyCancer;
