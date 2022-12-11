import { React, useLayoutEffect } from "react";
import image from '../Image/kidneytrans.jpg';
import Footer from './Footer'
import $ from "jquery";
import { Link } from "react-router-dom";
const KidneyTrans = () => {
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
              <h2>Kidney Transplant</h2>
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
                <h2>Kidney Transplant</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      A kidney transplant is a surgical procedure in which a kidney is removed from one person (donor) and placed into the body of a person suffering from renal failure (recipient), in whom the transplanted kidney can perform all the functions which the patient's own kidneys are not able to perform.  </p>
                  </li>


                </ul>
              </div>
              <div className="servicePageText">
                <h2>Why is a kidney transplantation necessary ?</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      When a person has 'RENAL FAILURE', the kidneys do not properly filter harmful waste products; as a result, excess wastes and chemicals start to accumulate in the blood. When this happens, a dangerous accumulation of waste products can occur, causing a condition known as uremia.</p>
                  </li>
                  <li>
                    <p>
                      Patients with irreversible renal failure have two options of treatment:

                      1. Dialysis, where the waste products from the blood are removed artificially.

                      2. kidney transplantation</p>
                  </li>
                  <li>
                    <p>
                      Any patient whose own kidneys have failed permanently is a potential candidate for a kidney transplant. There are several factors in each individual case, which determine whether a kidney transplant or lifelong dialysis is the better form of treatment for that patient. These factors include age, availability of family donors and the presence of antibodies in the patients (this increases the risk of kidney failure after transplantation). The health factors which increase the risk of the transplant operation are mainly heart disease, cancer or infection. </p>
                  </li>

                </ul>
              </div>
              <div className="servicePageText">
                <h2>What about the failed kidneys ?</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      High blood pressure (due to original kidneys), that cannot be controlled by the use of medications.</p>
                  </li>
                  <li>
                    <p>
                      Infected kidneys, with recurring urinary tract infection.</p>
                  </li>
                  <li>
                    <p>
                      Large polycystic kidneys. </p>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img src={image} alt="About company" />
              </div>
              <div className="servicePageText pt-5">
                <h2>What are the advantages of transplantation over dialysis ? </h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      There is no dependence on the machine thrice a week for the rest of one's life.   </p>
                  </li>
                  <li>
                    <p>
                      There are hardly any restrictions in the diet and fluid intake after a successful transplant.  </p>
                  </li>
                  <li>
                    <p>
                      The physical sense of well-being is so much better that one can go back to work in a style similar to that before the illness. </p>
                  </li>
                  <li>
                    <p>
                      Usually the anaemia (and feeling of tiredness) seen in patients with renal failure is reversed after a successful transplant, since the kidney is functioning to maintain normal red cell production. For patients on dialysis, correction of anaemia requires life-long use of erythropoietin injections which are extremely expensive.  </p>
                  </li>
                  <li>
                    <p>
                      A woman may be able to conceive a child after having a successful transplant. (Women on dialysis usually do not ovulate and therefore are unable to become pregnant.)   </p>
                  </li>
                  <li>
                    <p>
                      Men who may be having sexual problems such as inability to maintain an erection may find this problem eliminated once they receive a successful transplant.  </p>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceDetails">
        <h2 className="serviceCeterTittle">
          Who are the potential kidney donors?
        </h2>
        <p>Kidneys are obtained from 4 sources:

        </p>
        <div className="container d-flex justify-content-center align-items-center mt-md-5 mt-0">
          <div className="row d-flex justify-content-center align-items-center">
            <div>
              <ol>
                <li>
                  <p>
                    <b>Cadaver donors : </b> A cadaver kidney is removed from an individual who has been declared as brain-dead from non-kidney related causes, such as an accident or a stroke. Since a cadaver kidney is from a person not related to the patient, the kidney has less possibility of close antigen matching and thus less chances of success. Also, the recipient has to wait till a suitable kidney is obtained. In our country, cadaver organs are not yet a practically feasible alternative, though legislation for making removal of organs from cadavers has been passed in Parliament.
                  </p>
                </li>
                <li>
                  <p>
                    <b> Living related donors:</b> Very close relatives-parents, siblings (brothers & sisters), children, grandparents may donate a kidney to a near relative. This is because a normal individual has two kidneys and can live safely in good health with one kidney. Kidney donation does not alter the physical capacity or life-style or longevity of life of such a donor.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Emotionally related recipient donor mother kidney donor:  </b>In the situation where cadaver donor transplant is not available & living related donors are found unfit, emotionally related kidney donors like spouse (husband/wife) cousins, uncles, aunts, in-laws may donate a kidney and they are called emotionally related kidney donors.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Unrelated kidney donors:  </b>When cadaver donors, living related donors, emotionally related donors are not available or are found unfit, then unrelated donor kidney transplantation can be considered. Patients should understand that the chances of rejection are higher &amp; costly medicines like Cyclosporin-A, ATG, etc. have to be taken for better function of the transplanted kidney. </p>
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
      <section style={{ backgroundColor: "aliceblue" }}>
        <div className="container">
          <div className="row">
            <div className="servicePageText">
              <h2>Treatment for prostate cancer</h2>
              <ol className="mt-3">
                <li>
                  <p>
                    Surgery
                  </p>
                </li>
                <li>
                  <p>
                    Radiation therapy.  </p>
                </li>
                <li>
                  <p>
                    Routine Urine Analysis to look for urinary infection.
                  </p>
                </li>
                <li>
                  <p>Hormonal therapy.</p>

                </li>
                <li>
                  <p>Chemotherapy.</p>

                </li>
              </ol>
            </div>
            <div className="servicePageText mt-4">
              <h2>Treatment of prostate cancer in early stage:</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ol className="mt-3">
                <li>
                  <p>
                    <b>Prostatectomy: </b>
                    This is surgical removal of the prostate gland. The idea is to remove the cancerous growth of the prostate by removing the entire prostate gland.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Radiation therapy:</b>
                    Radiation has its own complication but with proper planning and linear accelerator, side effects can be minimized.

                    Radiation has its own complication but with proper planning and linear accelerator, side effects can be minimized.

                    Radical retropubic prostatectomy and radical perineal prostatectomy are the two most common types of radical prostatectomy procedures. The entire prostate gland, attached seminal vesicles, and some nearby tissue are removed during these surgeries.
                  </p>
                </li>


              </ol>
            </div>
            <div className="servicePageText mt-4">
              <h2>Treatment of advanced prostate cancer</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ol className="mt-3">
                <li>
                  <p><b>Partial Hormonal Therapy:</b>
                    Modern drugs provide various ways to reduce the flow of testosterone, the primary source of tumor growth. The following  are the examples of partial hormonal therapy
                  </p>
                </li>
                <li>
                  <p><b>Estrogen:</b>
                    Estrogen (DES), a female hormone is used in the treatment of prostate cancer. In men, intake of estrogen leads to fall of testosterone. However, its use is not widely accepted due to many side effects. It is usually prescribed as a single dose per day but it may cause nausea, vomiting, breast tenderness or enlargement, serious heart or blood vessel problems (such as stroke, clots, and fluid retention) and lower sex drive.
                  </p>
                </li>

              </ol>
            </div>
            <div className="servicePageText mt-4">
              <h2>Orchidetcomy</h2>

              <ol className="mt-3">
                <li>
                  <p>
                    It means surgical removal of testicles, it is also known as surgical castration. In the absence of testis, the main source of male hormones, testosterone, is absent. This slows the growth of the tumor. Side effects may include impotence and hot flashes. The surgery can be performed as a day care.
                  </p>
                </li>
                <li>
                  <p>
                    Medical Castration: Testosterone production from testicles can also be blocked by medicines. Medical castration shuts off the supply of testosterone by the testicle and achieves almost the same results as surgical castration. Medical castration involves monthly injection of Lupron Depot (Leuprolide) or Zoladex (Goserelin). These medications are also known as LHRH agonists. A LHRH agonist help reduce the amout of testosterone similar to surgical procedure. Side effects usually include hot flashes, impotence, breast enlargement and tenderness, loss of sex drive and nausea.
                  </p>
                </li>

              </ol>
            </div>

            <div className="servicePageText mt-4">
              <h2>Complete Hormonal Therapy</h2>

              <ol className="mt-3">
                <li>
                  <p>
                    Although testicles are the main source of male hormones, they are not the only one. The adrenal glands also make male hormones.
                  </p>
                </li>
                <li>
                  <p>
                    While castration stops the testicles from making testosterone, a drug called Flutamide can help prevent the male hormone produced by the adrenal glands from reaching the prostate. Flutamide is referred to as an antiandrogen.


                  </p>
                </li>
                <li>
                  <p>
                    The combination of LHRH agonist (Lupron or Zoladex), or castration plus Flutamide are called complete hormonal therapy. Complete hormonal theapy virtually shuts off the body’s supply of male hormones and slows the growth of the tumor.


                  </p>
                </li>

              </ol>
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

export default KidneyTrans