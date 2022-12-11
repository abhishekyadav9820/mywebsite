import { React, useLayoutEffect } from "react";
import image from "../Image/robotic.jpg";
import Footer from "../components/Footer";
import $ from "jquery";
import { Link } from "react-router-dom";
const Robot = () => {
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
              <h2>Robotic Surgery</h2>
              {/* <p>
                Synonyms - (Benign Prostatic Enlargement, BPH, Enlargement of
                Prostate, Benign Hyperplasia)
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
                <h2> Robotic  Surgery</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      Using robots in the operating room to assist the surgeon in performing surgery. The surgeon views the patient via a terminal and manipulates robotic surgical instruments via a control panel. Views of the organs being worked on are transmitted from tiny cameras inserted into the body.
                    </p>
                  </li>
                  <li>
                    <p>
                      Such robots are considerably less invasive than normal operating room procedures because the instruments can be inserted into much smaller incisions in the human body. This type of "laparoscopic" surgery means less pain and less scarring, and patients recover much faster.
                    </p>
                  </li>
                  <li>
                    <p>
                      Since the patient and surgeon are separated by an electronic console, it also enables "telesurgery," which allows the surgeon to perform the operation in a remote location.
                    </p>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-lg-5  mt-2">
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img src={image} alt="About company" />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="serviceDetails">
        <h2 className="serviceCeterTittle">
          How does the Robotic Surgical System work?
        </h2>
        <div className="container d-flex justify-content-center align-items-center mt-md-5 mt-0">
          <div className="row d-flex justify-content-center align-items-center">
            <div>
              <ol>
                <li>
                  <p>
                    To operate using the Robotic system, the surgeon makes tiny incisions in your body and inserts miniaturized instruments and a high-definition three-dimensional camera, and sometimes skin incisions are not required at all. Then, from a nearby console, the surgeon manipulates those instruments to perform the operation.
                  </p>
                </li>
                <li>
                  <p>
                    Think of the Robotic system, system like a video game. When you play a video game, you move a control button, and the machine translates your movements into real-time, mimicking your moves precisely on the screen. During a Robotic-assisted procedure, the surgeon uses master controls to manipulate the instruments, and the instruments translate surgeon's movements into precise movements inside your body. The surgeon is in control the whole time; the surgical system responds to the direction he provides.    </p>
                </li>
                {/* <li>
                                    <p>
                                        <strong>Stage III: </strong>Cancer cells are found in the penis and have spread to nearby lymph nodes in the groin. (Lymph nodes are small bean-shaped structures that are found throughout the body; they produce and store infection-fighting cells).

                                        Treatment may be amputation of the penis, followed by removal of lymph nodes on both sides of the groin or amputation of the penis followed by radiation therapy.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Stage IV: </strong> Cancer cells are found throughout the penis and the lymph nodes in the groin and/or have spread to other parts of the body.

                                        Treatment will be designed to reduce symptoms and may include wide local excision, microsurgery, amputation of the penis, or radiation therapy.
                                    </p>
                                </li> */}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "aliceblue" }} className="servicePageSection">
        <div className="container">
          <div className="row">
            <div className="servicePageText">
              <h2>Recovery</h2>
              <ul className="mt-3">
                <li>
                  <p><b>How many days will I miss from work?&nbsp;</b>
                    Every patient is different and you should discuss your recovery with the Urologist. In general, patients may stay in the hospital one to two nights and then return home. Most patients find they have recovered fully within two to four weeks of surgery. </p>
                </li>
                <li>
                  <p><b>Pain management options: &nbsp;</b>
                    We take pain management after surgery very seriously. Our teams research effective pain management techniques for use after surgery, including robotic surgery. They will work with you to make sure your pain is managed well before, during and after the surgery. As we know people's pain can continue when they return home, we will also help develop a pain treatment plan for you for when you leave the hospital.
                  </p>
                </li>

              </ul>
            </div>
            <div className="servicePageText mt-4">
              <h2>Advantages</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ul className="mt-3">
                <li>
                  <p>
                    Fewer complications, such as surgical site infection  </p>
                </li>
                <li>
                  <p>
                    Less pain and blood loss  </p>
                </li>
                <li>
                  <p>
                    Quicker recovery </p>
                </li>
                <li>
                  <p>
                    Smaller, less noticeable scars  </p>
                </li>

              </ul>
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
                      <input type="text" className="form-control custName" placeholder="Your Name" name="name" required />
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
                      <input type="number" className="form-control custPhone" placeholder="Phone Number" name="phone" required />
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
                    <input type="submit" onClick={formSubmit} defaultValue="Send Now" />
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

                      / <Link href="mailto:drdilipraja@yahoo.com">

                        <span>drdilipraja@yahoo.com</span>

                      </Link>

                    </li>
                    <li>
                      <Link href="">
                        <span className="material-symbols-outlined">pin_drop</span>
                        <span>
                          404, Sagar Fortune
                          184, Waterfield Road
                          Opposite National College,
                          Bandra (W),Mumbai 400 050
                          India.
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link href="tel:+91 2226452007">
                        <span className="material-symbols-outlined">contacts</span>
                        <span>+91 22 2645 2007</span>
                      </Link>/
                      <Link href="tel:+91 26452008">

                        <span>+91 2645 2008</span>
                      </Link>
                    </li>
                    <li>

                    </li>
                    <li>
                      {" "}
                      <Link href="">
                        <span className="material-symbols-outlined">schedule</span>
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
  )
}

export default Robot