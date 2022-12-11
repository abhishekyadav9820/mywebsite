import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import "../CSS/contact.css";
import ourMission from "../Image/about.jpg";
import contactImag from '../Image/contact.jpg';
import $ from "jquery";


const Contact = () => {
  const formSubmit = () => {
    var custName;
    var custEmail;
    var custPhone;
    var custMessage;



    if ($(".custName").val() !== '') {
      custName = $(".custName").val();
    } else {


    }
    if ($(".custPhone").val() !== '') {
      custPhone = $(".custPhone").val();
    } else {

    }

    if ($(".custEmail").val() !== '') {
      custEmail = $(".custEmail").val();
    } else {


    }

    if ($(".custMessage").val() !== '') {
      custMessage = $(".custMessage").val();
    } else {


    }





    var body = '<!DOCTYPE html><html><head><title>Dr. Dilip Raja - Urologist &amp; Andrologist MS,MNAMS,FICS, DNBE(Urology)</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"><tr><td align="center" style="background-color:#eee" bgcolor="#eeeeee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#164388"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"><a href="tel:+91" style="text-decoration:none;color:#fff;font-family:serif;font-size:16px">Leade Generate for Dr Dilip Raja</a></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:120px;height:120px" src="" alt=""></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#164388"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center"><h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#fff">Client Enquiry Details</h1></td></tr></table></div></td></tr><tr><td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"><tr><td width="100%" align="center" valign="top" style="font-size:0"><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Name:</p><p style="font-size:14px;font-weight:500;color:#111">' + custName + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Number:</p><p style="font-size:14px;font-weight:500;color:#111">' + custPhone + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Email:</p><p style="font-size:14px;font-weight:500;color:#111">' + custEmail + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Message:</p><p style="font-size:14px;font-weight:500;color:#111">' + custMessage + '</p></td></tr></table></div></td></tr></table></td></tr><tr><td width="100%" align="center" bgcolor="#164388" style="padding:10px 0"><p style="color:#fff;font-weight:500;font-size:1rem;padding:0;margin:0">© Copyright 2022 Dr Dilip Raja</p></td></tr></table></td></tr></table></body></html>';

    $.post("https://skdm.in/server/v1/send_lead_mail.php", {

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
      accountLeadMsgs: custMessage


    },

      function (dataa, status) {
        console.log('data :' + dataa);
        console.log("name:" + custName);

      });

    alert("Your Form has Submitted Our team will contact with You  soon.");

    window.location.reload();

    return false;

  }
  return (
    <div>
      <div className="whoWeareBanner"
        style={{
          background:
            "linear-gradient(to right, rgb(0, 0, 0, .4), rgb(0, 0, 0, .4)), url(" + { contactImag } + ")",
        }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Contact Us</h2>
              {/* <p>Know More about</p> */}
            </div>
            <div className="col-md-6" />
          </div>
        </div>

      </div>

      <section className="contactUs">
        <div className="container">
          <div className="titleSection">
            <span>Contact Us</span>
            <h2>Meet Our Contact Person</h2>

          </div>
          <div className="row mt-5 d-flex justify-content-start">
            <div className="col-md-4 d-flex justify-content-start">
              <div className="contactImg">
                <img
                  src={ourMission}
                  alt=""
                />
              </div>
            </div>
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
      </section>
      <section style={{ backgroundColor: "aliceblue" }}>
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
              <div className="contact-page-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15084.102839230341!2d72.8343239!3d19.0626072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x794e329a07c2dfbf!2sDr.%20Dilip%20Raja%20Best%20Urologist%20Andrologist%20Uro-Oncologist%2C%20Mumbai%2C%20Dr%20Dilip%20Raja%20Bandra%20west%20Gold%20Medalist!5e0!3m2!1sen!2sin!4v1666771603959!5m2!1sen!2sin"
                  width="100%"
                  title="myFrame"
                  height={400}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>

  )
}

export default Contact
