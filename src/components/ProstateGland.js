import { React, useLayoutEffect } from "react";
import image from "../Image/prostate_cancer.jpg";
import Footer from "../components/Footer";
import $ from "jquery";
import { Link } from "react-router-dom";
const ProstateGland = () => {
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
              <h2>Prostate Gland</h2>
              <p>
                Synonyms - (Benign Prostatic Enlargement, BPH, Enlargement of Prostate, Benign Hyperplasia,
                Prostatitis)
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
                <h2>What is Prostate?</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      The prostate is a walnut-sized gland that forms part of the male reproductive system. The
                      gland is made up of two lobes or regions enclosed by an outer layer of tissue. It is located in
                      front of the rectum and just below the urinary bladder which is the storage organ for urine.
                      The prostate gland surrounds the urethra, the canal through which urine passes out of the
                      body.
                    </p>
                  </li>
                  <li>
                    <p>
                      Benign enlargement of the prostate or benign prostatic hyperplasia (BPH) is a non cancerous
                      growth of the prostate gland. It is considered more as an aging disorder rather than a
                      disease.
                    </p>
                  </li>
                  <li>
                    <p>
                      The scientists do not know all the prostate&#39;s functions. One of its main roles, though, is to
                      squeeze fluid into the urethra as sperm move through during sexual climax. This fluid, which
                      helps make up semen, energizes the sperm and makes the vaginal canal less acidic.
                    </p>
                  </li>
                  <li>
                    <p>
                      Benign Prostatic Hyperplasia (BPH) is not considered a disease but it is an aging process. As
                      the age advances and hair turns grey, the prostate gland enlarges around the same time.
                      The prostate gland continues to grow during most of a man's life. However, it does not cause
                      symptoms before 40 years of age. After 50 years of age, a man begins to complain of
                      symptoms due to Benign Prostatic Hyperplasia (BPH). As the prostate enlarges, the layer of
                      tissue surrounding it stops it from expanding, causing the gland to press against the urethra
                      like a clamp on a garden hose. The bladder wall becomes thicker and irritable. The bladder
                      begins to contract even when it contains small amounts of urine, causing more frequent
                      urination. Eventually, the bladder weakens and loses the ability to empty itself, so some of
                      the urine remains in the bladder. The narrowing of the urethra and partial emptying of the
                      bladder cause many of the problems associated with Benign Prostatic Hyperplasia (BPH).
                    </p>
                  </li>
                  <li>
                    <p>
                      Most men will experience occasional impotence, usually resulting from stress, tiredness,
                      anxiety or excessive alcohol or other drug consumption. Worrying about impotence may
                      then set the scene for a more persistent problem due to "fear of failure" known as
                      performance anxiety.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="servicePageImg1 d-flex justify-content-center align-items-center">
                <img src={image} alt="About company" />
              </div>
              <div className="servicePageText pt-5">
                <h2>What is Benign Prostatic Hyperplasis (BPH)?</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      Benign Prostatic Hyperplasis (BPH) is not considered a
                      disease but it is an aging process. As the age advances
                      and hair turns grey, the prostate gland enlarges aroung
                      the same time. The prostate gland continues to grow during
                      most of a man's life. However, it does not cause symptoms
                      before 40 years of age. After 50 years of age, a man
                      begins to complain of symptoms due to Benign Prostatic
                      Hyperplasis (BPH). As the prostate enlarges, the layer of
                      tissue surrounding it stops it from expanding, causing the
                      gland to press against the urethra like a clamp on a
                      garden hose. The bladder wall becomes thicker and
                      irritable. The bladder begins to contract even when it
                      contains small amounts of urine, causing more frequent
                      urination. Eventually, the bladder weakens and loses the
                      ability to empty itself, so some of the urine remains in
                      the bladder. The narrowing of the urethra and partial
                      emptying of the bladder cause many of the problems
                      associated with Benign Prostatic Hyperplasis (BPH)Most men
                      will experience occasional impotence, usually resulting
                      from stress, tiredness, anxiety or excessive alcohol or
                      other drug consumption. Worrying about impotence may then
                      set the scene for a more persistent problem due to "fear
                      of failure" known as performance anxiety.
                    </p>
                  </li>
                  <li>
                    <p>
                      Many people feel uncomfortable talking about the prostate,
                      since the gland plays a role in both sex and urination.
                      Still, prostate enlargement is as common a part of aging
                      as gray hair. As life expectancy rises, so does the
                      occurrence of Benign Prostatic Hyperplasis (BPH). In the
                      United States in 2000, there were 4.5 million visits to
                      physicians for Benign Prostatic Hyperplasis (BPH).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceDetails">
        <h2 className="serviceCeterTittle">
          Symptoms that may indicate Prostate problems are
        </h2>
        <div className="container  mt-md-5 mt-0">
          <div className="row">
            <div className="col-md-6 col-12 d-flex justify-content-center flex-column">
              <p><b>Obstructive Symptoms are: -</b> </p>
              <ol>
                <li>
                  <p>
                    Weak stream
                  </p>
                </li>
                <li>
                  <p>
                    Hesitancy
                  </p>
                </li>
                <li>
                  <p>
                    Sensation of incomplete emptying
                  </p>
                </li>
                <li>
                  <p>
                    Intermittent stream
                  </p>
                </li>
                <li>
                  <p>
                    Prolonged urination
                  </p>
                </li>



              </ol>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center flex-column">
              <p>Irritative Symptoms are: -</p>
              <ol>
                <li>
                  <p>
                    Frequency
                  </p>
                </li>
                <li>
                  <p>
                    Nocturia
                  </p>
                </li>
                <li>
                  <p>
                    Urgency
                  </p>
                </li>
                <li>
                  <p>
                    Urge incontinence
                  </p>
                </li>


              </ol>
            </div>

          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "aliceblue" }} className="servicePageSection">
        <div className="container">
          <div className="row">
            <div className="servicePageText">
              <h2>Diagnosis of BPH / Prostate Disease:</h2>
              <ul className="mt-3">
                <li>
                  <p><b>Physical Examination –</b>
                    to palpate kidney and the bladder.
                  </p>
                </li>
                <li>
                  <p><b>Digital rectal examination of prostate -</b>
                    to look for size, consistency, and nodules in the
                    prostate. This examination is done by the urologist in his clinic. He inserts a gloved finger
                    into the rectum and feels part of the prostate next to the rectum. This examination helps
                    him to evaluate the size, consistency and nodules in the prostate.
                  </p>
                </li>
                <li>
                  <p><b>Routine Urine Analysis to look for urinary infection.</b>

                  </p>
                </li>
                <li>
                  <p><b>Serum Creatinine.</b>

                  </p>
                </li>
                <li>
                  <p><b>Prostate specific antigen (PSA)-</b> PSA is the protein produced by the prostate glands or
                    prostate cells and found in the blood. These levels generally elevated in the blood of men
                    who have prostate cancer. However, PSA may also be elevated in severe urinary tract
                    infection, prostate abscess, or large voluminous prostate gland. PSA levels can also be used
                    for monitoring men with prostate cancer who have undergone treatment.</p></li>
                <li>
                  <p><b>Ultrasonography- </b>
                    Ultrasonography of Abdomen and Pelvis with full Bladder and Post void residual urine. The
                    ultrasonography of the abdomen and pelvis is done to assess the any secondary pathology in
                    the kidney, ureter and the bladder and also to measure the post void residual urine.</p>
                </li>
                <li>
                  <p><b>TRUS for Prostate and Seminal Vesicle –</b>To directly evaluate any nodularity in irregularity in prostate.</p>
                </li>
                <li>
                  <p><b>Uroflowmetry- </b> One is asked to pass urine into a special commode which is connected to
                    computerized device which measures the quantity and flow of urine. Reduced and
                    obstructed flow will signify outflow obstruction secondary to BPH or stricture urethra.
                  </p>
                </li>
                <li>
                  <p><b>Cystoscopy- </b>The urologist inserts a small tube through the opening of the urethra into the
                    penis. This procedure is done under local or general anaesthesia. The cystoscope allows the
                    urologists through its lens and light system to visualize the inside the urethra and the
                    bladder. This also helps to assess the size of the prostate gland and rule out any other cause
                    of obstruction.
                  </p>
                  <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ol>
                </li>

              </ul>
            </div>
            <div className="servicePageText mt-4">
              <h2>There are four types of prostatitis:</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ul className="mt-3">
                <li>
                  <p><b>Acute Bacterial Prostatitis:&nbsp;</b>
                    A severe and sudden bacterial infection that requires immediate medical attention .</p>
                  <p>Symptoms:<br />
                    <ol>
                      <li>Pain around the base of the penis</li>
                      <li>Painful urination and ejaculation</li>
                      <li>Weak urine stream and difficulty urinating</li>
                      <li>Fever, aches and chills</li>
                    </ol>
                  </p>
                  <p>Treatment is mainly antibiotics as well as lifestyle modification to relieve symptoms</p>

                </li>
                <li>
                  <p><b>Chronic Bacterial Prostatitis:&nbsp;</b>
                    <p>1. A milder bacterial infection that can linger for months</p>
                    <p>2. Often happens to people who have had Acute Bacterial Prostatitis, or recurring UTIs</p>
                  </p>
                  <p>Symptoms:<br />
                    <ol>
                      <li>Frequent and painful urination</li>
                      <li>Lower back and rectal pain</li>
                      <li>Blood in semen or urine</li>

                    </ol>
                  </p>
                </li>
                <li>
                  <p><b>Chronic Prostatitis / Chronic Pelvic Pain Syndrome –:&nbsp;</b>
                    <p>1. It's a most common type of prostatitis</p>
                    <p>2. An inflammation where no bacteria are present</p>
                  </p>
                  <p>Symptoms:<br />
                    <ol>
                      <li>Persistent (&gt;3 months) pain in the penis, scrotum, rectal area, lower back and/or
                        lower abdomen</li>
                      <li>Painful urination and ejaculation</li>
                      <li>Frequent urination and weak urine stream</li>

                    </ol>
                  </p>
                </li>
                <li>
                  <p><b>Asymptomatic Prostatitis:&nbsp;</b>
                    <p>1. An inflamed Prostate without any symptoms</p>
                    <p>2. No treatment needed</p>
                  </p>

                </li>
              </ul>
            </div>
            <div className="servicePageText mt-4">
              <h2>Treatment of Benign prostate hyperplasia (BPH)</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ul className="mt-3">
                <li>
                  <p>
                    The symptoms of outflow obstructions or LUTS secondary to Benign prostate hyperplasia
                    (BPH) usually waxes and vanes with time. These symptoms can be described as mild,
                    moderate or severe. </p>
                </li>
                <li>
                  <p>
                    The symptoms of outflow obstructions or LUTS secondary to Benign prostate hyperplasia
                    (BPH) usually waxes and vanes with time. These symptoms can be described as mild,
                    moderate or severe. </p>
                </li>

              </ul>
            </div>
            <div className="servicePageText mt-4">
              <h2>Conservative or Medical Treatment for BPH:</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ul className="mt-3">
                <li>
                  <p>
                    There has been constant research to find a newer drug for the treatment of BPH. These
                    drugs are either aimed at shrinking the prostate gland and/ or prevent the growth of the
                    prostate or facilitate the passage of urine by relaxing the obstructed passage which is been
                    caused by BPH. </p><br />
                  <p>FDA has approved a few drugs. The FDA also approved the drugs terazosin (Hytrin) in 1993,
                    doxazosin (Cardura) in 1995, tamsulosin (Flomax) in 1997, and alfuzosin (Uroxatral) in 2003,
                    Alfuzosin in 2003 and Silodosin in 2008 for the treatment of BPH. All four drugs act by
                    relaxing the smooth muscle of the prostate and bladder neck to improve urine flow and to
                    reduce bladder outlet obstruction. The four drugs belong to the class known as alpha
                    blockers. Terazosin and doxazosin were developed first to treat high blood pressure.
                    Tamsulosin and alfuzosin were developed specifically to treat BPH.</p>
                </li>
                <li>
                  <p>
                    Though the medical treatment may give relief in some selected cases it is important not to
                    prolong the medication just to escape surgery.  </p>
                </li>

              </ul>
            </div>
            <div className="servicePageText mt-4">
              <h2>Minimal invasive therapy:</h2>

              <ul className="mt-3">
                <li>
                  <p>
                    Because drug treatment is not effective in all cases, researchers in recent years have
                    developed a number of procedures that relieve BPH symptoms but are less invasive than
                    conventional surgery.  </p>
                </li>


              </ul>
            </div>

            <div className="servicePageText mt-4">
              <h2>Surgical Treatment for Benign prostate hyperplasia (BPH)::</h2>

              <ul className="mt-3">
                <li>
                  <p>
                    Most of the urologists will recommend removal of the enlarged part of the prostate which is
                    symptomatic. The gold standard for the surgical treatment for Benign prostate hyperplasia
                    (BPH) is Trans Urethral Resection of Prostate (TURP). This treatment is offered to the
                    patients with signs and symptoms of outflow obstruction / LUTS secondary to Benign
                    prostate hyperplasia (BPH).</p>
                </li>
                <li>
                  <p>
                    In this surgery, only the enlarged tissue that is causing obstruction to the urethra is
                    removed. The rest of the peripheral tissue which is outside the capsule are left intact. This
                    usually helps them in relieving the obstructions and other symptoms of Benign prostate
                    hyperplasia (BPH).  </p>
                </li>

              </ul>
            </div>

            <div className="servicePageText mt-4">
              <h2>Trans Urethral Resection of Prostate ( TURP):</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ul className="mt-3">
                <li>
                  <p>
                    Trans Urethral Resection of Prostate (TURP) is the procedure done for the Benign prostate
                    hyperplasia (BPH). More than 90% of prostate surgery can be done through this trans

                    urethral route. The technique of Trans Urethral Resection of Prostate (TURP) uses an
                    instrument called resectoscope which is passed through the penis. This resectoscope is
                    about 12 inches long and ½ inch in diameter contains a light source a lens which is
                    connected with the camera, valves for controlling irrigating fluids and electrical loupe that
                    cuts the tissue (prostate) and controls the bleeding. </p>
                </li>
                <li>
                  <p>
                    Trans Urethral Resection of Prostate (TURP) is the procedure done for the Benign prostate
                    hyperplasia (BPH). More than 90% of prostate surgery can be done through this trans

                    urethral route. The technique of Trans Urethral Resection of Prostate (TURP) uses an
                    instrument called resectoscope which is passed through the penis. This resectoscope is
                    about 12 inches long and ½ inch in diameter contains a light source a lens which is
                    connected with the camera, valves for controlling irrigating fluids and electrical loupe that
                    cuts the tissue (prostate) and controls the bleeding.</p>
                </li>
                <li>
                  <p>
                    Some urologists sometimes may perform TUIP that is Trans Urethral incision of prostate for
                    a smaller gland. They do not remove the tissue, as in case of Trans Urethral Resection of
                    Prostate (TURP), but simply make few cuts at the bladder neck. The advantage of this
                    procedure and long-term results have not been clearly established.  </p>
                </li>
              </ul>
            </div>
            <div className="servicePageText mt-4">
              <h2>Open surgery:</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ul className="mt-3">
                <li>
                  <p>
                    In the few cases when a transurethral procedure cannot be used, open surgery, which
                    requires an external incision, may be used. Open surgery is often done when the gland is
                    greatly enlarged, when there are complicating factors, or when the bladder has been
                    damaged and needs to be repaired. The location of the enlargement within the gland and
                    the patient&#39;s general health helps the surgeon decide which of the three open procedures to
                    use. </p>
                </li>
                <li>
                  <p>
                    With all the open procedures, anaesthesia is given and an incision is made. Once the
                    surgeon reaches the prostate capsule, he or she scoops out the enlarged tissue from inside
                    the gland. </p>
                </li>

              </ul>
            </div>
            <div className="servicePageText mt-4">
              <h2>Laser Surgery:</h2>
              {/* <p className="mt-4">Surgery usually has one of three goals::</p> */}
              <ul className="mt-3">
                <li>
                  <p>
                    Holmium lasers are used to enucleate obstructing prostate lobe. The doctor passes the laser
                    fibre through the urethra into the prostate using a cystoscope and then delivers holmium
                    laser. The laser energy cuts and coagulates the prostate tissue. Hence there is no bleeding As
                    with Trans Urethral Resection of Prostate (TURP), laser surgery requires anaesthesia and a
                    hospital stay. </p>
                </li>
                <li>
                  <p>
                    Urethral Resection of Prostate (TURP) is that laser surgery causes little blood loss. Laser
                    surgery also allows for a quicker recovery time. But laser surgery may not be effective on
                    larger prostates. The long-term effectiveness of laser surgery is not known. </p>
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

export default ProstateGland;
