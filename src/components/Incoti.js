import { React, useLayoutEffect } from "react";
import image from '../Image/incoti.jpg';
import Footer from './Footer'
import $ from "jquery";
import { Link } from "react-router-dom";
const Incoti = () => {
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
              <h2>Incontinence</h2>
              <p>
                Loss of bladder to control urine is called urinary incontinence. </p>
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
                <h2>Incontinence</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      Many people with bladder control problems hide the problem from everyone, even from their doctor. There is no need to do that. In most cases urinary incontinence can be controlled and treated. If you are having bladder control problems, don’t suffer in silence. Talk to your doctor.  </p>
                  </li>
                  <li>
                    <p>
                      urinary incontinence is the inability to control urination. The term may be used interchangeably with Over Active Bladder (OAB). People who suffer from overactive bladder, or urinary incontinence, can't hold their urine - they wet themselves. It is often temporary, and it always results from an underlying medical condition.  </p>
                  </li>
                  <li>
                    <p>
                      Leaking urine is normal only in infants; it is not a normal result of aging. If you have this problem, you may be too embarrassed or upset to ask for help.
                    </p>
                  </li>


                </ul>
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
        <h2 className="serviceCeterTittle">
          Incidence
        </h2>
        {/* <p>The major known risk factors for prostate cancer are</p> */}
        <div className="container d-flex justify-content-center align-items-center mt-md-5 mt-0">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="servicePageText">
              <ul>
                <li>
                  <p>
                    Incontinence affects all ages, both sexes, and people of every social and economic level. It is also estimated that 15 to 30 percent of people over the age of 60 have incontinence. Women are twice as likely, than men to have this condition. Pregnancy and childbirth, menopause, and the structure of the female urinary tract account for this difference. But both women and men can become incontinent from neurologic injury, birth defects, strokes, multiple sclerosis, and physical problems associated with aging.    </p>
                </li>
                <li>
                  <p>
                    Older women more often than younger women, experience incontinence. But incontinence is not inevitable with age. Incontinence is treatable and often curable at all ages.
                    Incontinence is classified by the symptoms of or circumstances occurring at the time of urine leakage.   </p>
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
              <h2>Treatment </h2>
              <ul className="mt-3">
                <li>
                  <p><b>Pelvic Muscle Exercises:&nbsp;</b>
                    Pelvic muscle exercises are intended to tone pelvic muscles and prevent leakage. Kegel exercises to strengthen or retrain the pelvic floor muscles and sphincter muscles can reduce or cure stress leakage.
                  </p>
                </li>
                <li>
                  <p><b> Timed Voiding or Bladder Training:&nbsp;</b>

                    Timed voiding (urinating) and bladder training are techniques that use biofeedback. In timed voiding, you fill in a chart of voiding and leaking. From the patterns that appear in your chart, you can plan to empty your bladder before you would otherwise leak. </p>
                </li>
                <li>
                  <p><b> Implants:&nbsp;</b>
                    Implants are substances injected into tissues around the urethra. The implant adds bulk and helps to close the urethra to reduce stress incontinence. Implants can be injected by a doctor in about half an hour using local anesthesia.
                  </p>
                </li>
                <li>
                  <p><b>Catheterization :&nbsp;</b>If you are incontinent because your bladder never empties completely (overflow incontinence) or your bladder cannot empty because of poor muscle tone, past surgery, or spinal cord injury, you might use a catheter to empty your bladder. A catheter is a tube that you can learn to insert through the urethra into the bladder to drain urine. Catheters may be used once in a while or on a constant basis, in which case the tube connects to a bag that you can attach to your leg. </p>

                </li>
                <li>
                  <p><b>Electrical Stimulation:&nbsp;</b>Brief doses of electrical stimulation can strengthen muscles in the lower pelvis in a way similar to exercising the muscles. Electrodes are temporarily placed in the vagina or rectum to stimulate nearby muscles. This will stabilize overactive muscles and stimulate contraction of urethral muscles. Electrical stimulation can be used to reduce both stress incontinence and urge incontinence.</p>

                </li>
                <li>
                  <p><b>Medications:&nbsp;</b>Medications that may be taken as infrequently as once daily may be prescribed to treat overactive bladder. Some drugs inhibit contractions of an overactive bladder. Others relax muscles, leading to more complete bladder emptying during urination. Some drugs tighten muscles at the bladder neck and urethra, preventing leakage. And some, especially hormones such as estrogen, are believed to cause muscles involved in urination to function normally.</p>

                </li>
                <li>
                  <p><b>Surgery:&nbsp;</b>Doctors usually suggest surgery to alleviate incontinence only after other treatments have been tried. Many surgical options have high rates of success.</p>

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

export default Incoti