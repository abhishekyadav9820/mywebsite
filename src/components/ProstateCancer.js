import { React, useLayoutEffect } from "react";
import image from "../Image/prostate-cancer/prostatecancer.jpg";
import Footer from "./Footer";
import afterSurg from "../Image/prostate-cancer/prostate-diet.jpg";
import stage from "../Image/prostate-cancer/Prostate-Cancer2.jpg";
// import invest from "../Image/prostate-cancer/investigation.jpg";
import PSA from "../Image/prostate-cancer/psatest.jpg";
import dre1 from "../Image/prostate-cancer/normal.jpg";
import dre2 from "../Image/prostate-cancer/tenderness.jpg";
import dre3 from "../Image/prostate-cancer/symmetricalenlarged.jpg";
import dre4 from "../Image/prostate-cancer/asymmetrical.jpg";
import dre5 from "../Image/prostate-cancer/induction.jpg";
import dre6 from "../Image/prostate-cancer/nodularity.jpg";
import $ from "jquery";
import { Link } from "react-router-dom";
const ProstateCancer = () => {
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
              <h2>Prostate Cancer</h2>
              <p>
                – like any other cancer develops from a abnormal growth and
                division of some cells leading to the formation of a tumour.
              </p>
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
                <h2>Prostate cancer</h2>
                <p>
                  <ul className="mt-3">
                    <li>
                      <p>
                        The prostate gland is found only in males and is a part
                        of male reproductive system.
                      </p>
                    </li>
                    <li>
                      <p>
                        The prostate is a walnut-sized gland that forms part of
                        the male reproductive system. The gland is made up of
                        two lobes or regions enclosed by an outer layer of
                        tissue. It is located in front of the rectum and just
                        below the urinary bladder which is the storage organ for
                        urine. The prostate gland surrounds the urethra, the
                        canal through which urine passes out of the body.
                      </p>
                    </li>
                    <li>
                      <p>
                        The size of the gland varies with the age. In adult men,
                        a typical prostate is about 3 cm thick and 4 cm wide and
                        weighs about 20 grams, as the age advances, the prostate
                        gland increases in size and can be anything between 40
                        grams to 100 grams or more.
                      </p>
                    </li>
                  </ul>
                </p>
              </div>
              <div className="servicePageText">
                <h2>Functions</h2>
                <p>
                  <ul className="mt-3">
                    <li>
                      <p>
                        Prostate gland squeezes the fluid into the urethra as
                        sperm move through during the sexual climax. This fluid,
                        which helps make up semen, energizes the sperm and makes
                        the vaginal canal less acidic.
                      </p>
                    </li>
                    <li>
                      <p>
                        It also plays a part in controlling the flow of urine.
                      </p>
                    </li>
                  </ul>
                </p>
              </div>
              <div className="servicePageText">
                <h2>Prostate Cancer</h2>
                <p>
                  <ul className="mt-3">
                    <li>
                      <p>
                        Prostate cancer can be more virulent or aggressive if
                        found in younger individual.. Older the age of a man
                        slower is the growth of prostate hence, it is important
                        to screen further prostate regularly after the age of
                        50.
                      </p>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img src={image} alt="About company" />
              </div>
              <div className="servicePageText pt-5">
                <h2>Symptoms of Prostate Cancer</h2>
                <ul className="mt-3">
                  <li>
                    <p>Difficulty urinating</p>
                  </li>
                  <li>
                    <p>Hesitancy </p>
                  </li>
                  <li>
                    <p>Frequent urination</p>
                  </li>
                  <li>
                    <p>Sense of incomplete voiding</p>
                  </li>
                  <li>
                    <p>Taking a long time to pass urine</p>
                  </li>
                  <li>
                    <p>Blood in the urine.</p>
                  </li>
                  <p>
                    These symptoms may or may not be present in early stage of
                    prostate cancer. Hence, the regular screening is required.
                    If the Prostate Cancer is detected and treated early the
                    survival chances are greatly increase.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceDetails">
        <h2 className="serviceCeterTittle">
          Investigations for Prostate Cancer
        </h2>
        {/* <p>The major known risk factors for prostate cancer are</p> */}
        <div className="container d-flex justify-content-center align-items-center mt-md-5 mt-0">
          <div className="row d-flex justify-content-center align-items-center">
            <div>
              <ol>
                <li>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <p>
                        <b> The digital rectal exam (DRE): </b> The most common
                        prostate cancer test is the PSA, or prostate-specific
                        antigen test. This is a simple blood test that measures
                        the presence of prostate-specific antigen, or PSA,
                        circulating in your bloodstream. This test is usually
                        the first step in any prostate cancer diagnosis. The PSA
                        test is also used to track the effects of prostate
                        cancer treatment such as surgery, radiation, hormone
                        therapy and chemotherapy. PSA level 0.4 is normal, 0 -10
                        is alarming stage and more than 10 is significant of
                        cancer detection. Once DRE and PSA are suspicious of
                        prostate cancer, the next step is to do MRI of the
                        prostate before doing Prostate Biopsy.
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                          <div className="dreImg">
                            <img src={dre1} alt="" />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div className="dreImg">
                            <img src={dre2} alt="" />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div className="dreImg">
                            <img src={dre3} alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                          <div className="dreImg">
                            <img src={dre4} alt="" />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div className="dreImg">
                            <img src={dre5} alt="" />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                          <div className="dreImg">
                            <img src={dre6} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
              <ol></ol>

              <ol>
                <li>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <p>
                        <b> The PSA test:</b>More African-American men develop
                        prostate cancer than Caucasian-American men. Asian men
                        living in Asia have the lowest incidence.
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="dreImg">
                        <img src={PSA} alt=""></img>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <p>
                    <b>MRI: </b>MRI test will not only detect the irregularity
                    of prostate but also give ….local extension of the prostate
                    cancer if present. MRI will also give us a clue of the
                    prostate spreading outside ccapsule of the prostate or into
                    the lymph nodes.
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      {" "}
                      Transrectal Ultrasonography (TRUS) of the prostate :{" "}
                    </b>
                    The prostate needle biopsy is done under local anaesthesia
                    in a radiology suite. TRUS rectal ultrasound of prostate is
                    used to take 12 – 16 cores of prostatic tissue through a
                    needle inserted under the guidance of ultrasound
                    professional. The tissue taken is sent for histopathology
                    examination.
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      {" "}
                      Transrectal Ultrasonography (TRUS) of the prostate: &nbsp;
                    </b>
                    The prostate needle biopsy is done under local anaesthesia
                    in a radiology suite. TRUS rectal ultrasound of prostate is
                    used to take 12 – 16 cores of prostatic tissue through a
                    needle inserted under the guidance of ultrasound
                    professional. The tissue taken is sent for histopathology
                    examination.
                  </p>
                </li>
                <li>
                  <p>
                    <b> Grading of prostate cancer:</b>The histopathology
                    examination not only gives the diagnosis of prostate cane
                    but it also grades the severity of prostate disease. This
                    grading is called Gleason’s score.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Gleason’s score : </b>The Gleason’s score not only keeps
                    plant the disease but also can predict the prognosis of
                    prostate cancer.
                  </p>
                  <ul>
                    <li>
                      <b>The score upto 0 - 6:</b> The cancer could be slow
                      growing tumour and many a times a conservative approach
                      may be taken and if the cancer is small and localised,
                      patient can be kept under wait and watch policy and the
                      prostate cancer my not be virulent.
                    </li>
                    <li>
                      <b>The score upto 7:</b> This kind of prostate cancer
                      grows and spreads and it is important to treat rather than
                      wait and watch.
                    </li>
                    <li>
                      <b>The score upto 8 – 10:</b> The cancer is likely to grow
                      and spread fast and may have already spread to other
                      organs. The disease can be quite aggressive and further
                      evaluation may be necessary to check on the spread of the
                      cancer called metastasis.
                    </li>
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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="servicePageText">
                <h2>Staging of prostate cancer</h2>

                <ul className="mt-3">
                  <li>
                    <p>
                      {" "}
                      The staging of prostate cane is determined by the
                      knowledge of spread of the cancer. The following diagram
                      will aptly describe the staging of the prostate cancer.
                    </p>
                  </li>
                  <li>
                    <p>Further, PET CT scan or PSMA PET Scan can also be done to
                      evaluate extent of the disease from head to toe.</p>

                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="afterImg">
                <img src={stage} alt=""></img>
              </div>
            </div>

            <div className="servicePageText mt-4">
              <h2>Treatment of prostate cancer</h2>

              <ul className="mt-3">
                <li>
                  <p>
                    <b>Radical Prostatectomy: </b>
                    This is a surgical removal of prostate gland primary to
                    remove entire growth of prostate cancer. This can be
                    achieved by open Laparoscopic and Robotic surgery.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Active Surveillance : </b>
                    Active surveillance is recommended if the prostate cancer
                    is small and of low grade. During the surveillance the
                    patient is asked to do repeat PSA test at variable
                    intervals along with DRE examinations sometimes repeat
                    biopsy may require.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Radiation therapy-External beam:</b>
                    This therapy gives the radiation to the localised area to
                    kill the prostate cancer cells. This is generally
                    undertaken if the surgery is too risky because of their
                    medical conditions like stroke, bypass, poor general
                    health of patient or any other contra indications.
                    Generally, radiation therapy takes more than 30 – 35
                    sessions and treatment spread over period of 03 months.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Radiation therapy-Brachytherapy :</b>
                    This therapy involves insertion of low dose seed implant
                    brachy therapy or high dose rate brachy therapy (HRD).
                  </p>
                  <p>
                    Low-dose seed implant brachytherapy - The seeds are
                    inserted through the skin in the perineum (the area
                    between the anus and scrotum). Procedure is performed
                    under either general or spinal anaesthesia and lasts
                    approximately 1 hour.
                  </p>
                  <p>
                    HDR - Under anaesthesia, approximately 15 needles are
                    inserted through the perineum. These needles are wired to
                    the radiation source that delivers a high radiation dose
                    to the prostate. The needles are then removed. The
                    treatment takes 10–20 minutes.
                  </p>
                </li>
              </ul>

            </div>
            <div className="servicePageText mt-4">
              <h2>Treatment of advanced prostate cancer</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ul className="mt-3">
                <li>
                  <p>
                    <b>Hormone therapy :</b>
                    This therapy is generally used if prostate cancer has spread
                    outside or recurrence of prostate cancer after any other
                    mode of therapy used in the past.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Bilateral Subcapsular Orchidectomy :</b>
                    Bilateral subcapsular orchidectomy is performed to remove
                    the substance of the testicles which in turn stimulates
                    growth of the prostate cancer cells. This is called surgical
                    orchidectomy. Once again if the surgery is contradictory,
                    medical orchidectomy can be done.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Chemotherapy</b>
                  </p>
                </li>
              </ul>
              <p>
                Further, the specific anti-cancer drugs are used in advanced,
                metastatic or recurrent cancer where even hormone therapy also
                failed. The urologist doctor will decide on the drugs to be used
                with combination or any other treatment.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-7 col-md-6 col-12">
                <div className="servicePageText mt-4">
                  <h2>
                    After successful Treatment – What happens after treatment?
                  </h2>
                  <p>
                    Treatment for prostate cancer is often successful in
                    removing cancer cells and tumors. This is both exciting and
                    relieving, but can also be scary and stressful. Many men
                    worry about the cancer returning and how to get back into
                    their daily routines.
                  </p>
                  <ul className="mt-3">
                    <li>
                      <p>Follow up care</p>
                    </li>
                    <li>
                      <p>Fatigue</p>
                    </li>

                    <li>
                      <p>Good Nutrition</p>
                    </li>

                    <li>
                      <p>Physical Activity</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <div className=" afterImg">
                  <img src={afterSurg} alt="" />
                </div>
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

export default ProstateCancer;
