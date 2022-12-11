import { React, useLayoutEffect } from "react";
import image from '../Image/prostate-cancer.jpg';
import image2 from '../Image/varicocele1.jpg';
import Footer from './Footer'
import $ from "jquery";
import { Link } from "react-router-dom";
const Varicocele = () => {
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
              <h2>Varicocele</h2>
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
                <h2>Varicocele</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      Varicocele is an abnormal & tortuous dilatation of the veins of the pampiniform plexus of the spermatic cord and is most commonly diagnosed by physical exam, (feeling of a bag of worms) or color duplex Doppler ultrasound (where vein measurement and blood flow patterns are observed).  Varicocele rarely becomes clinically evident before early adolescence.  Once present, they are not thought to regress. </p>
                  </li>
                  <li>
                    <p>
                      15% of all men and 40% of infertility patients are found to have a varicocele. Approximately 90% are left side sided and 10% are bilateral. </p>
                  </li>
                  <li>
                    <p>
                      Typical varicocele symptoms are mild and many do not require treatment. Treatment may be necessary if the varicocele is causing discomfort or any of the other problems listed below.  </p>
                  </li>
                  <li>
                    <p>
                      There are many theories as to the reason varicocele occur: 1) The left internal spermatic vein is 8-10 centimeters longer than the right and acts as a hydrostatic column with increased pressure in the upright position. 2) There are 40% fewer valves in the left spermatic veins as compared with 23% fewer on the right. 3) "Nutcracker Phenomenon" (compression of the left renal vein between major blood vessels) with increased pressure in the left internal spermatic vein. </p>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img src={image} alt="About company" />
              </div>
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img src={image2} alt="About company" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceDetails">
        <h2 className="serviceCeterTittle">
          Problems Caused by Varicocele
        </h2>
        {/* <p>The major known risk factors for prostate cancer are</p> */}
        <div className="container d-flex justify-content-center align-items-center mt-md-5 mt-0">
          <div className="row d-flex justify-content-center align-items-center">
            <div>
              <ol>
                <li>
                  <p>
                    Elevated scrotal temperatures alter development maturation of sperm.   </p>
                </li>
                <li>
                  <p>
                    Elevated scrotal temperatures alter development maturation of sperm. </p>
                </li>
                <li>
                  <p>
                    Stagnation of blood around the testicles.  </p>
                </li>
                <li>
                  <p>
                    Loss of testicular mass at the microscopic level.   </p>
                </li>
                <li>
                  <p>
                    A varicocele on one side can deleteriously affect that testicle as well as the opposite testicle.  </p>
                </li>
                {/* <li>
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
              <h2>Signs of Varicocele</h2>
              <ul className="mt-3">
                <li>
                  <p><b>Pain:</b>
                    One of the signs of varicocele is an aching pain when the individual has been standing or sitting for an extended time and pressure builds up in the affected veins. Heavy lifting or exercising in a gym may make varicocele symptoms worse and, in some cases, can even cause varicocele to form. Usually (but not always) painful varicocele are prominent in size.
                  </p>
                </li>
                <li>
                  <p><b>Fertility Problems:</b>
                    There is an association between varicocele and infertility or sub fertility, but it is difficult to be certain if a varicocele is the cause of fertility problems in any one case. In one study, as many as 40 percent of men, who were subfertile were found to have a varicocele. Other signs of varicocele can be a decreased sperm count; decreased motility, or movement, of sperm; and an increase in the number of deformed sperm. It is not known for sure how varicocele contributes to these problems, but a common theory is that the condition raises the temperature of the testicles and affects sperm production. Studies have shown that from 50 percent to 70 percent of men with fertility problems will have a significant improvement in the quality and/or quantity of sperm production after they have undergone varicocele repair. </p>
                </li>
                <li>
                  <p><b>Testicular Atrophy:</b>
                    Atrophy, or shrinking, of the testicles is another of the signs of varicocele. The condition is often diagnosed in adolescent boys during a sports physical exam. When the affected testicle is smaller than the other, repair of the varicocele is often recommended. The repaired testicle will return to normal size in many cases.
                  </p>
                </li>

              </ul>
            </div>




          </div>

        </div>
      </section>
      <section style={{ backgroundColor: "aliceblue" }} className="servicePageSection">
        <div className="container">
          <div className="row">
            <div className="servicePageText">
              <h2>Treatment of Varicocele</h2>
              <ul className="mt-3">
                <li>
                  <p><b>Surgical Varicocelectomy ( Inguinal and Sub inguinal Ligation)
                  </b>
                    Inguinal Approach is most preferred to prevent recurrence and magnification during the surgery is a must to save the testicular artery.
                    : </p>
                </li>
                <li>
                  <p><b>Reccomendations after Surgery</b>
                    <ol>
                      <li>No heavy  weight  lifting  for 30 days</li>
                      <li>No sexual activity for four week</li>
                    </ol>
                    Hence, Micro surgery is the ideal surgery for ligation of varicocele.
                  </p>
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

export default Varicocele