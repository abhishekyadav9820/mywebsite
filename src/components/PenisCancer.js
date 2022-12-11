import Footer from '../components/Footer';
import { React, useLayoutEffect } from "react";
import image from '../Image/penisc.jpg';
import $ from "jquery";
import { Link } from "react-router-dom";
const PenisCancer = () => {
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
              <h2>Penis Cancer</h2>
              <p>Know More about DR Dilip Raja</p>
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
                <h2>
                  What is Penis Cancer?
                </h2>
                <ul className='mt-3'>
                  <li>
                    <p>
                      Cancer of the penis is a disease in which malignant cells originate in the tissues of the penis. Cancer of the penis is, fortunately, rare. Men who are not circumcised at birth have a higher risk for developing cancer of the penis.
                    </p>
                  </li>
                  <li>
                    <p>
                      A doctor should be seen if there are any of the following problems: growths or sores on the penis, any unusual liquid coming from the penis (abnormal discharge), or bleeding.
                    </p>
                  </li>
                  <li>
                    <p>
                      If the penis does not look normal or if the doctor feels any lumps, a small sample of tissue (a biopsy) is removed from the penis and looked at under a microscope to detect any cancer cells.
                    </p>
                  </li>
                  <li>
                    <p>
                      If cancer of the penis is found, more tests are done to find out if the cancer has spread from the penis to other parts of the body (staging - hyper linked). A doctor needs to know the stage of the disease to plan treatment.
                    </p>
                  </li>


                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-lg-5">
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img
                  src={image}
                  alt="About company"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='serviceDetails'>
        <h2 className="serviceCeterTittle">
          Stage of Disease

        </h2>
        <div className="container d-flex justify-content-center align-items-center mt-md-5 mt-0">
          <div className="row d-flex justify-content-center align-items-center">
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Stage I: </strong>  Cancer cells are found only on the surface of the head of the penis (glans) and on the foreskin (the loose skin that covers the head of the penis).
                    If the cancer is limited to the foreskin, treatment will probably be wide local excision and circumcision. If the cancer begins in the glans and does not involve other tissues, treatment may involve fluorouracil cream and/or microsurgery.
                    If the tumor begins in the glans and involves other tissues, treatment may involve: microsurgery or amputation of the penis (partial penectomy); the lymph nodes in the groin may also be removed; external radiation therapy.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Stage II: </strong>Cancer cells are found in the deeper tissues of the glans and have spread to the shaft of the penis (the long, slender cylinders of tissue inside the penis that contain spongy tissue and expand to produce erections).

                    Treatment may be amputation of the penis (partial, total, or radical penectomy) or radiation therapy followed by amputation of the penis.
                  </p>
                </li>
                <li>
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
              <h2>
                Recurrent disease:

              </h2>
              <ul className='mt-3'>
                <li>
                  <p>
                    Recurrent disease means that the cancer has come back (recurred) after it has been treated. It may come back in the same area or in another place.

                  </p>
                </li>
                <li>
                  <p>
                    If the cancer has come back (recurred), treatment may include amputation of the penis or radiation therapy.
                  </p>
                </li>
                <li>
                  <p>
                    Locally recurrent disease can be approached by surgery or radiation therapy. Patients who fail irradiation as the initial treatment are often salvaged by penile amputation. There are treatments for all patients with cancer of the penis.
                  </p>
                </li>
                <li>
                  <p>Three kinds of treatment used are surgery, radiation therapy and chemotherapy</p>
                </li>


              </ul>
            </div>
            <div className="servicePageText mt-4">
              <h2>
                Surgery:
              </h2>
              <p className='mt-4'>Surgery is the most common treatment of all stages of cancer of the penis. The surgeon may take out the cancer using one of the following operations:</p>
              <ul className='mt-3'>
                <li>
                  <p>
                    Wide local excision takes out only the cancer and some normal tissue on either side.

                  </p>
                </li>
                <li>
                  <p>
                    Amputation of the penis is an operation that takes out the penis. It is the most common and most effective treatment of cancer of the penis. In a partial penectomy, part of the penis is taken out.
                  </p>
                </li>
                <li>
                  <p>
                    In a total penectomy, the whole penis is removed. Lymph nodes in the groin may be taken out during surgery.
                  </p>
                </li>


              </ul>
            </div>


            <div className="servicePageText mt-4">
              <h2>
                Radiation Therapy:
              </h2>

              <ul className='mt-3'>
                <li>
                  <p>
                    Radiation therapy uses x-rays or other high-energy rays to kill cancer cells and shrink tumors.



                  </p>
                </li>
                <li>
                  <p>
                    Radiation may come from a machine outside the body (external radiation) or from putting materials that contain radiation through thin plastic tubes into the area where the cancer cells are (internal radiation).
                  </p>
                </li>
                <li>
                  <p>
                    Radiation may be used alone or after surgery.
                  </p>
                </li>
              </ul>
            </div>

            <div className="servicePageText mt-4">
              <h2>
                Chemotherapy:
              </h2>

              <ul className='mt-3'>
                <li>
                  <p>
                    Chemotherapy uses drugs to kill cancer cells. Fluorouracil cream (a chemotherapy drug put on the skin of the penis) is sometimes used for very small surface cancers of the penis.
                  </p>
                </li>
                <li>
                  <p>
                    Chemotherapy may also be given by pill or by a needle in a vein.
                  </p>
                </li>
                <li>
                  <p>
                    When chemotherapy is given in this way, it is called a systemic treatment because the drugs enter the bloodstream, travel through the body, and can kill cancer cells outside the penis.
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
  );
};

export default PenisCancer;