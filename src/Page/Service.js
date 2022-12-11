import Footer from "../components/Footer";
import { React, useLayoutEffect } from "react";
import kids from "../Image/kidneystone/kidneyStones.jpg";
import lit from "../Image/kidneystone/lithotripsy.jpg";
import PCNL from "../Image/kidneystone/nephrolithotripsy.jpg";


const Service = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      {/* <Page /> */}
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
              <h2>Kidney Stones</h2>
              <p>
                (Synonyms - Renal Calculi, Calculus Disease, Stones - Kidney,
                Urinary Stones)
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
                <h2>What are Kidney Stones?</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      Kidney stones constitute one of the commonest diseases in
                      our country and pain due to kidney stones is known as
                      worse than that of labour pain. In India, approximately 5
                      -7 million patients suffer from stone disease and at least
                      1/1000 of Indian population needs hospitalization due to
                      kidney stone disease.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="servicePageText">
                <h2>Urinary Stones - Geographical Distribution</h2>
                <ul className="mt-3">
                  <li>
                    <p>
                      The kidney stone disease is widespread particularly in
                      countries with dry, hot climate. These "stone belt
                      regions" of the world are located in countries of Middle
                      East – Dubai, Sharjah, Qatar, Muscat, Abu Dhabi, Saudi
                      Arabia, North Africa, the Mediterranean Regions, North
                      Western state of India and Southern State of USA and areas
                      around the great lakes.
                    </p>
                  </li>
                  <li>
                    <p>
                      In India, the "stone belt" occupies parts of Maharashtra,
                      Gujarat, Punjab, Haryana, Delhi and Rajasthan. In these
                      regions, the disease is so prevalent that most of the
                      members of a family will suffer from kidney stones
                      sometime in their lives. Removal of Kidney, Ureteric and
                      Bladder stone procedure forms one of the commonest
                      procedures in Urology department of the hospitals in these
                      regions.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
              <div className="servicePageImg1">
                <img src={kids} alt="About company" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceDetails">
        <h2 className="serviceCeterTittle">What Causes Kidney Stones?</h2>
        <div className="container d-flex justify-content-center align-items-center mt-md-5 mt-0">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="cause">
              <p>
                Apparently, there are no direct causes for stone formation.
                However, there are few hypothesis in this regard.
              </p>
              <ol className="mt-3">
                <li>
                  <p>
                    <b>Kidney Stones:</b> can be formed anywhere in the urinary
                    system, like kidney, ureter, and bladder. The process by
                    which the stone formation occurs is Supersaturation of
                    urine.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Hereditery :</b>This may have some role as some people in
                    the same family are more prone to form kidney stones.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Diet : </b> Diet is not a dominating factor. However, if
                    an individual is a stone former the diet rich in calcium,
                    oxalated & uric acid may increase the chances of stone
                    fornation. In normal individual, diet will not play much
                    role. More than the diet; water intake may be more
                    responsible for kidney stone formation.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Water Intake:</b> If an individual is a stone former then
                    an increased intake of water will help him pass small
                    gravels before they become nidus for stone formation.
                    Unfortunately, in stone belt region due to dry climate the
                    water is hard and will infact contribute to the formation of
                    stones, if taken in large quantities.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Medications:</b> Medications like diureteric, excess
                    calcium containing antacids or calcium pills will increase
                    the chances of forming stones.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Other chronic medical illness:</b> Some chronic illness
                    are associated with kidney stone formation specially cystic
                    fibrosis, renal tubular acidosis and inflammatory bowel
                    diseases etc are associated with increased risk of kidney
                    stones formation.
                  </p>
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
            <div className="servicePageText">
              <h2>Types of Urinary Calculi (Urinary Stones)</h2>
              <p>
                There are various types of urinary stones, but the most common
                ones are
              </p>
              <p>
                <ul>
                  <li><p>Calcium oxalate.</p></li>
                  <li><p>Uric acid.</p></li>
                  <li><p>Struvite.</p></li>
                  <li><p>Cystine stones.</p></li>
                </ul>
              </p>
            </div>
            <div className="servicePageText mt-lg-5 mt-2 ">
              <h2>Symptoms and Signs:</h2>
              <p>
                <ul>

                  <li><p>Incidental diagnosis on routine health check-ups.</p></li>
                  <li><p>Dull aching pain in the back.</p></li>
                  <li><p>Acute colic – This colic pain begins from the flank or the
                    side of mid-back and comes forwards to the groin (from loin
                    to groin). This pain is considered to be worse than labour
                    pain, accompanied by nausea, vomiting and gaseous
                    distension.</p>

                  </li>

                  <li><p>Urinary tract infection.</p></li>
                  <li><p>Increased frequency of urine.</p></li>
                  <li> <p>Pain and or burning while passing urine.</p></li>
                  <li><p>Passage of blood in urine (Haematuria).</p> </li>
                </ul>
              </p>
            </div>

            <div className="servicePageText mt-lg-5 mt-2">
              <h2>Investigations: </h2>

              <ul>
                <li><p> <b>Physical Examination</b> – to be done to localise the
                  size and nature of pain.</p>

                </li>
                <li><p>
                  <b>Routine urine analysis </b>
                  <ol>
                    <li>Crystals in urine</li>
                    <li>Blood Cells</li>
                    <li>Puss cells in urine</li>
                  </ol>
                </p>

                </li>

                <li><p><b>CBC, Renal Profile</b></p>

                </li>
                <li><p><b>Urine for Culture Sensitivity </b>– To rule out UTI and
                  select best antibiotics to treat the infection.</p>

                </li>
                <li><p>
                  <b>USG of KUB</b> – To show the size and swelling
                  (Hydronephrosis) of the kidney and the ureter in obstructive
                  uropathy. It does not give information of function of
                  kidney.
                </p>

                </li>
                <li><p> <b>Intravenous Urography (IVU) </b>– To detect the size and
                  site of stone along with function of kidney.</p>

                </li>
                <li><p><b> CT Scan of Abdomen pelvis /CT Urography </b>– with or
                  without oral or intravenous contrast. It also gives density
                  of the renal stones in Hounsfield units ( HU). It also gives
                  the function of the kidney.</p>

                </li>
              </ul>

            </div>

            <div className="servicePageText mt-lg-5 mt-2 ">
              <h2>Stone Work up: </h2>

              <p>
                In a rapid recurrent stone former – The metabolic activity for
                stone formation can be assessed by following investigations for
                the prevention of stone formation:-
              </p>

              <ul>
                {" "}
                <li><p>Serum Calcium.</p></li>
                <li><p>Serum Phosphorus.</p></li>
                <li><p>Serum Uric acid.</p></li>
                <li><p>24-hour urinary calcium / 24 hrs urinary uric acid.</p></li>
                <li><p>Stone analysis of the retrieved calculus.</p></li>
              </ul>
            </div>

            <div className="servicePageText mt-lg-5 mt-2">
              <h2>Treatment of Renal Calculi:</h2>
              <p>
                It has been said that "once a kidney stone former, always a
                kidney stone former". Once a kidney stone has been diagnosed,
                the choice is between expectant treatment and more aggressive
                forms of treatment, such as transurethral, percutaneous, or open
                surgeries or extra corporeal modalities. Although some kidney
                stones may pass spontaneously and unless complicating conditions
                arise, surgical intervention may not be necessary. Thus,
                identification of kidney stones that are likely to pass is of
                utmost importance.
              </p>
              <p>
                The primary decision is whether to apply surgical treatment or
                wait. Removal of kidney stones by any methodology is necessary
                when there is evidence of:
              </p>

              <ul>

                <li><p>Significant obstruction</p></li>
                <li><p>Progressive deterioration of the kidney</p></li>
                <li><p>Progressive deterioration of the kidney</p></li>
                <li><p>Unremitting pain</p></li>
                <li><p>Stone obstruction an infected kidney requires emergency
                  intervention</p>

                </li>
              </ul>

            </div>

            <div className="servicePageText mt-lg-5 mt-2">
              <h2>Treatment of Kidney Stones</h2>
              <p>
                <ul className="mt-3">
                  <li>
                    <div className="row">
                      <div className="col-md-8 col-12">
                        <p>
                          <b>Extra Corporeal Shock wave Lithotripsy (ESWL)</b>
                          Extra Corporeal Shock Wave Lithotripsy (ESWL) is a
                          preferred mode of treatment for kidney stones upto 1.5
                          cm in size. An IVU is done prior to ESWL treatment to
                          confirm the open passage from kidney to bladder for
                          the finer fragment to pass out after a successful ESWL
                          treatment. ESWL machine uses highly focussed sound
                          wave projected from outside the body to break kidney
                          stones. The stone is generally reduced to sand like
                          particles which subsequently passes out in the urine.
                          More than 1.5 cm to 2 cm stones generally requires
                          more than one or two ESWL treatments.
                        </p>
                        <p>
                          The primary decision is whether to apply surgical
                          treatment or wait. Removal of kidney stones by any
                          methodology is necessary when there is evidence of:
                        </p>
                      </div>
                      <div className="col-md-4 col-12">
                        <div className="afterImg">
                          <img src={lit} alt=""></img>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-md-8 col-12">
                        <p>
                          <b>
                            Percutaneous Nephrolithotripsy (PCNL) – Synonyms -
                            Tunnel Surgery, Key Hole surgery for Kidney Stones
                          </b>
                        </p>
                        <p>
                          PCNL treatment is for a larger stone which are not
                          indicated by ESWL. This procedure is generally done
                          under general anaesthesia, spinal and /or epidural
                          anaesthesia. In this technique the stone is removed by
                          making a small tunnel into the kidney from the back. A
                          fine needle is used to puncture the renal collecting
                          system with the aid of X-ray and/or Ultrasonography,
                          and a guide wire is led into the kidney through the
                          needle. This tract is dilated over the guide wire and
                          a Nephroscope (kidney telescope) is inserted into the
                          pelvis of the kidney. The stones are visualized,
                          fragmented using Swiss Lithoclast and extracted using
                          fine forceps, allowing the kidney to become free of
                          stones at the end of the operation, in the vast
                          majority patients.
                        </p>
                        <p>
                          <b>
                            This Percutaneous Nephrolithotomy (PCNL) technique
                            is used to treat kidney stones of:
                          </b>
                        </p>
                        <p>
                          <ul>
                            <li>Large than 2.5 cms,</li>
                            <li>Staghorn calculus,</li>
                            <li>Calyceal diverticular calculus.</li>
                          </ul>
                        </p>
                      </div>
                      <div className="col-md-4 col-12">
                        <div className="afterImg">
                          <img src={PCNL} alt=""></img>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </p>
            </div>

            <div style={{ fontSize: "25px" }} className="servicePageText mt-lg-5 mt-2">
              <h2>
                {" "}
                <b>
                  <u>
                    URETERIC STONE - Synonyms - Stone- Ureter, Ureteric calculus
                  </u>
                </b>
              </h2>
              <p>
                Ureteroscopy is highly successful procedure for the retrieval of
                stone in the ureter. This is a routine procedure performed by
                urologists.
              </p>
              <p>
                The primary decision is whether to apply surgical treatment or
                wait. Removal of kidney stones by any methodology is necessary
                when there is evidence of:
              </p>
              <p>
                This is also used for the diagnosis of any malignant lesion in
                the ureter. Ureteroscopy are of two types: 1. Rigid Ureteroscopy
                <br />
                2.Flexible Ureteroscopy
              </p>

              <ul>
                <li>
                  <p>
                    <b>Ureterorenoscope (URS):&nbsp;</b>Ureterorenoscopy
                    (URS) involves the passage of an instrument namely
                    Ureteroscope through normal urinary passage. This is
                    advanced under vision through the normal urinary passage
                    under anathesia. Once the urinary stoneis localised, it can
                    either be picked up by forceps and pulled out or can be
                    broken into dust like tiny fragments with the help of laser.
                    Double J Stent is usually kept after the procedure to drain
                    the kidney. It is a very safe procedure in experienced
                    hands.
                  </p>
                </li>
                <li>
                  <p>
                    <b>
                      Retrograde Intrarenal Ureteroscopic Surgery (RIRS):&nbsp;
                    </b>
                    Flexible ureteroscope can be passed through the normal
                    ureter opening all the way up on the kidneys and stones in
                    the calyces of the kidney can be fragmented into fine
                    particles using laser technology. This procedure requires
                    general anaesthesia, spinal or epidural anaesthesia.
                    Hospitalization is generally for 1 or 2 days only.
                  </p>
                </li>
                <li>
                  <p>
                    <b> Open Surgery:&nbsp;</b>Open Surgery for Ureteric Stone
                    are extremely rate nowadays. However, they may be required
                    in large ureteric calculi not amenable to any Endoscopic
                    procedure.
                  </p>
                </li>
              </ul>
            </div>

            <div style={{ fontSize: "25px" }} className="servicePageText">
              <h2>
                <b>
                  <u>
                    BLADDER STONE - Synonyms - Blasser Calculi, Vesical
                    Calculus.
                  </u>
                </b>
              </h2>
              <p>
                The Urinary Bladder Stone can either travel from kidney and
                ureter into the ladder or can be formed in urinary bladder
                secondary to obstruction in passage.
              </p>
              <p>
                <b>Cause of Bladder Stone</b>
              </p>
              <p>
                {" "}
                These bladder stones are usually associated with retention of
                urine, but they can form in healthy individuals without evidence
                of anatomic defects, strictures, infections, or foreign bodies.
                The presence of upper urinary tract calculi is not necessarily a
                predisposition to the formation of bladder stones.
              </p>

              <ul>
                <li><p>Bladder outlet obstruction remains the most common cause of
                  bladder calculi in adults.</p>

                </li>
                <li><p>Prostatic enlargement.</p></li>
                <li><p>Elevation of bladder neck.</p></li>
                <li><p>High postvoid residual urine volume cause stasis, which
                  leads to crystal nucleation and accretion</p>

                </li>
              </ul>

            </div>
            <div className="servicePageText mt-lg-5 mt-2">
              <p className=" ">
                <b>Symptoms of Bladder Stone</b>
              </p>
              <p>
                The presentation of vesical calculi (urinary bladder calculi)
                varies from completely asymptomatic to the following symptoms</p>
              <ul>
                <li><p>Suprapubic pain (lower abdominal),</p></li>
                <li><p>Dysuria (pain while passing urine),</p></li>
                <li><p>Intermittent flow of urine,</p></li>
                <li><p>Increased frequency of urination,</p></li>
                <li><p>Hesitancy,</p></li>
                <li><p>Nocturia,</p></li>
                <li><p>Urinary retention.</p></li>
              </ul>

            </div>
            <div className="servicePageText mt-lg-5 mt-2">
              <p>
                <b>Investigation</b>
              </p>
              <ul>
                <li>
                  <p>
                    X-ray KUB will show the presence of the stone in the
                    pelvis
                  </p>
                </li>
                <li>
                  <p>
                    Sonography will show the presence of the stone with clue
                    to formation of bladder stone like enlarged prostate.
                  </p>
                </li>
              </ul>
            </div>
            <div className="servicePageText mt-lg-5 mt-2">
              <p>
                <b>Treatment</b>
              </p>
              <ul>
                <li>
                  {" "}
                  <p>
                    <b>Percutaneous Suprapubic Cystolithotomy.</b>
                    <br />
                    In case of larger bladder stone, the percutaneous
                    suprapubic route is selected. This allows the use of
                    shorter- and larger-diameter endoscopic equipment like
                    nephroscope (usually with an ultrasonic lithotripter),
                    which allows rapid fragmentation and evacuation of the
                    calculi. Often, a combined transurethral and percutaneous
                    approach can be used to aid in stone stabilization and to
                    facilitate irrigation of the stone debris.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Open Suprapubic Cystolithotomy.</b>
                    <br />
                    This procedure become the preferred mode of treatment for
                    very large or multiple bladder calculi associated with
                    enlargement of prostate.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Service;
