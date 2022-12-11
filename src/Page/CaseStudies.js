import { React, useLayoutEffect } from "react";
import Footer from "../components/Footer";
import "../CSS/Service.css";
import "../CSS/caseStudies.css";
import case1 from "../Image/D-Images/case1.1.jpg";
import case1_1 from "../Image/D-Images/case1.2.jpg";
import case1_2 from "../Image/D-Images/case1.3.jpg";
import case1_3 from "../Image/D-Images/case1.4.jpg";
import case1_4 from "../Image/D-Images/case1.5.jpg";
import case1_5 from "../Image/D-Images/case1.6.jpg";
import case1_6 from "../Image/D-Images/case1.7.jpg";
import case1_7 from "../Image/D-Images/case1.8.jpg";
import case1_8 from "../Image/D-Images/case1.9.jpg";
import case1_9 from "../Image/D-Images/case2.0.jpg";
import case1_10 from "../Image/D-Images/case2.1.jpg";
import case2_1 from "../Image/D-Images/case2.1.1.jpg";
import case2_2 from "../Image/D-Images/case2.1.2.jpg";
import case3_1 from "../Image/D-Images/case3.1.1.jpg";
import case3_2 from "../Image/D-Images/case3.1.2.jpg";
import case4_1 from "../Image/D-Images/case4.1.2.jpg";
import case4_2 from "../Image/D-Images/case4.1.2.jpg";
import case4_3 from "../Image/D-Images/case4.1.2.jpg";
import case4_4 from "../Image/D-Images/case4.1.2.jpg";
// import case1_7 from '../Image/D-Images/case1.6.jpg'
// import Page from "../components/Page";

const CaseStudies = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      {/* <Page /> */}
      <div
        className="whoWeareBanner"
        style={{
          background:
            "linear-gradient(to right, rgb(0, 0, 0, .4), rgb(0, 0, 0, .4)), url(https://www.dogesoft.com/images/case/medtronic-banner.webp)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Case Study</h2>
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
                <h2>Case1:</h2>
                <p>
                  <b>Diagnosis – A complex Case of Renal Cell Carcinoma</b>
                </p>
                <ul className="mt-3">
                  <li>
                    <p>
                      Mr. M.H, 60 years of age, consulted me on October 22, 2007
                      with history of total painless hematuria with clots, off
                      and on since end of July 2007.
                    </p>
                  </li>
                  <li>
                    <p>
                      He did not have any other symptoms of outflow
                      obstructions. He underwent right hernioplasty in 2004.
                    </p>
                  </li>
                  <li>
                    <p>
                      He is a non diabetic and non hypertensive and does not
                      suffer from any cardio respiratory disorders.
                    </p>
                  </li>
                  {/* <li>
                                        <p>
                                            Physical Examination was essentially normal. Rectal Examination revealed Benign Hypertrophy (BPH) of prostate Grade I approximately 10 – 15 gms. Routine Biochemical Parameters were within normal limits. His urine analysis showed microscopic hematuria. X-Ray chest normal. His PSA was 1 ng/dl. His uroflowmetry was normal. His Ultrasonography revealed bilateral tiny renal calculi with no evidence of hydronephrosis.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            His repeat ultrasonography revealed 4.4 x 3.5 x 3.4 cm sized ill defined hypoechoic lesion in the mid region of right kidney arising from the renal parenchyma. The lesion caused contour irregularity and indenting of the echogenic fat of the sinus. Left kidney was normal.
                                        </p>
                                    </li>
                                    <li>
                                        <p>His ultra fast MDCT urography revealed a soft tissue mass in the calyces of upper moiety of the right kidney. The renal function was normal bilaterally. The CT scan concluded as possibility of transitional cell carcinoma.</p>
                                    </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                  <div className="servicePageImg">
                    <img src={case1} alt="About company" />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="servicePageImg">
                    <img src={case1_1} alt="About company" />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="servicePageImg">
                    <img src={case1_2} alt="About company" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="servicePageImg">
                    <img src={case1_3} alt="About company" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="servicePageImg">
                    <img src={case1_4} alt="About company" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="servicePageText">
                {/* <h2>
                                    Diagnosis – A complex Case of Renal Cell Carcinoma
                                </h2> */}
                <ul className="mt-3">
                  <li>
                    <p>
                      Physical Examination was essentially normal. Rectal
                      Examination revealed Benign Hypertrophy (BPH) of prostate
                      Grade I approximately 10 – 15 gms. Routine Biochemical
                      Parameters were within normal limits. His urine analysis
                      showed microscopic hematuria. X-Ray chest normal. His PSA
                      was 1 ng/dl. His uroflowmetry was normal. His
                      Ultrasonography revealed bilateral tiny renal calculi with
                      no evidence of hydronephrosis.
                    </p>
                  </li>
                  <li>
                    <p>
                      His repeat ultrasonography revealed 4.4 x 3.5 x 3.4 cm
                      sized ill defined hypoechoic lesion in the mid region of
                      right kidney arising from the renal parenchyma. The lesion
                      caused contour irregularity and indenting of the echogenic
                      fat of the sinus. Left kidney was normal.
                    </p>
                  </li>
                  <li>
                    <p>
                      His ultra fast MDCT urography revealed a soft tissue mass
                      in the calyces of upper moiety of the right kidney. The
                      renal function was normal bilaterally. The CT scan
                      concluded as possibility of transitional cell carcinoma.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                  <div className="servicePageImg">
                    <img src={case1_6} alt="About company" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="servicePageImg">
                    <img src={case1_7} alt="About company" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="servicePageImg">
                    <img src={case1_5} alt="About company" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="servicePageText">
                <ul className="mt-3">
                  <li>
                    {" "}
                    <p>
                      {" "}
                      Impression –A parenchymal mass in the anterior aspect of
                      upper pole of right kidney with an exophytic component and
                      invasion in upper pole calyx most likely a renal cell
                      carcinoma.
                    </p>
                  </li>

                  <li>
                    <p>
                      Subsequently, Mr. M. H underwent Right Radical Nephrectomy
                      on October 25, 2007 through 11th rib bed incision by flank
                      approach. The renal artery and the vein were approached
                      first retroperitoneally and were divided between the
                      ligatures. The kidney with its Genota’s Fascia and the
                      supra renal glands was mobilized and removed after
                      dividing the ureter as low as possible up to the pelvic
                      brim.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                {/* <div className="col-md-4"> */}
                <div className="servicePageImg">
                  <img src={case1_8} alt="About company" />
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="servicePageText">
                <ul className="mt-3">
                  <li>
                    <p>
                      The frozen section of the kidney and the specimen revealed
                      papillary neoplasm favourable with features of papillary
                      renal carcinoma. No features of classical Transitional
                      Cell Carcinoma were seen. Parenchymal Tumour reached up to
                      renal pelvis and polypoid projections protruded loosely
                      into it.
                    </p>
                  </li>

                  <li>
                    <p>
                      Mr. M. H recovered from the procedure uneventfully and was
                      discharged from the hospital on 3rd post operative day
                      with the advice to come back for the removal of the
                      sutures on the 10th post operative day.
                    </p>
                  </li>
                  <li>
                    <p>
                      Mr. M.H was followed up and has been doing well.
                      Histopathology of the specimen revealed Right Kidney –
                      Papillary cell carcinoma Type 1 Fuhrman Nuclear Grade II
                      confined by Gerota’s fascia (stage 2 – Robson System, TNM
                      – T3a). Hilar nodes – No metastasis. Hilar blood vessels –
                      No tumor involvement. Ureter – No tumor involvement.
                      Adrenal – No tumor involvement.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="servicePageImg">
                    <img src={case1_9} alt="About company" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="servicePageImg">
                    <img src={case1_10} alt="About company" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="servicePageImg mt-lg-5 mt-2">
                <img src={case2_1} alt="About company" />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="servicePageText">
                <h2>Case2:&nbsp;</h2>
                <p>
                  <b>
                    Diagnosis – A Universal Case of Right Lower 3rd Ureteric
                    Calculus with Hydronephrosis and ‘Urinoma’
                  </b>
                </p>
                <ul>
                  <li>
                    <p>
                      The aim of presenting this case was that a spontaneous
                      urinoma in the perinephric region because of long standing
                      right ureteric calculus causing obstruction was noticed.
                      This is not the common phenomenon and any aggressiveness
                      to decompress or drain the urinoma via PCN would have been
                      harmful.
                    </p>
                  </li>
                  <li>
                    <p>
                      Dr. F.M, 75 years of age, was suffering from generalized
                      weakness, reduced appetite on and off fever and pain in
                      right lumbar and iliac region.  He is a known diabetic and
                      hypertension and underwent Trans Urethral Resection of
                      Prostate (TURP) in 2005.  He is also a known case of
                      bilateral renal calculus disease. Currently, he is a known
                      to have right lower urinary calculus with right sided
                      hydro-uretero-nephrosis.  He also had significant anemia,
                      Urinary Tract Infection and chronic azotemia.
                    </p>
                  </li>
                  <li>
                    <p>
                      Dr. F.M was received in a toxic condition and was treated
                      aggressively to control his infection and was
                      investigated.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="servicePageImg mt-lg-5 mt-2">
                <img src={case2_2} alt="About company" />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="servicePageText">
                <ul>
                  <li>
                    <p>
                      Dr. F.M was subjected to Renogram and Renal scan on
                      November 11, 2007 which revealed mild obstructive
                      nephropathy pattern of left kidney following Intra Venous
                      lasix intervention.  Slightly enlarged hydro-nephrotic
                      right kidney with moderate obstructive nephropathy.  It
                      also showed mild parenchymal dysfunction of the right
                      kidney.  His repeat Ultrasonography done on November 20,
                      2007 revealed large collection in the right sub capsular
                      region and right perinephric region.  Both kidneys showed
                      increased echo texture suggestive of medical renal
                      disease.  A large calculus was also seen in the right
                      lower 3rd of the ureter and a small calculus was also seen
                      in the left kidney.
                    </p>
                  </li>
                  <li>
                    <p>
                      Dr. F.M was subjected to Cystoscopy and right renal
                      Ureterorenoscopy on November 22, 2007. Right Ureteroscopy
                      (URS) was done.  The stone was localized and was
                      fragmented with Swiss Lithoclast Master.  The fragments
                      were removed into the bladder and were subsequently washed
                      out.  A Double J Stent was kept.  Dr. F.M recovered from
                      the procedure uneventfully.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ---------------------------------------case3-------------------- */}
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="servicePageText">
                <h2>Case3:</h2>
                <p>
                  <b>
                    Diagnosis – A Case of Transitional Cell Carcinoma of the
                    Bladder
                  </b>
                </p>
                <ul className="mt-3">
                  <li>
                    <p>
                      Mrs. A.B., 73 years of age consulted me with history of
                      total painless hematuria 15 days back. This was
                      accompanied by pain in the left lumbar region. The episode
                      lasted for 2 days. She also suffers from diabetes mellitus
                      and hypertension for last 10 years. She underwent Coronary
                      Angiography for Ischemic heart disease and has been on
                      medication since then. She underwent Cystoscopy and biopsy
                      of bladder tumour outside which revealed low grade
                      transitional cell Carcinoma.
                    </p>
                  </li>
                  <li>
                    <p>
                      Physical Examination was essentially normal.  The CT scan
                      revealed a lobulated hypodense 3.8 X 3.5 cms sized mildly
                      enhancing soft tissue mass lesion in the right
                      postero-lateral aspect of Urinary Bladder.  This is
                      involving the right vesico- ureteric junction.  A
                      streaking of peri vesical fat is noted.  The urinary
                      bladder otherwise shows normal distension and wall
                      thickness.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12">
                  <div className="servicePageImg">
                    <img src={case3_2} alt="About company" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="servicePageText">
                <ul className="mt-3">
                  <li>
                    <p>
                      She was advised to undergo Cystoscopy and Trans Urethral
                      Resection of Bladder Tumor (TURBT) for which she was
                      admitted to the hospital.  She underwent Trans Urethral
                      Resection of Bladder Tumor (TURBT).  At Cystoscopy she had
                      a papillary tumor arising just beyond the right ureteric.
                      The right ureteric orifice could not be seen.  Right
                      ureteric orifice however, was successfully catheterized
                      using number 5 ureteric catheter.  There was no intra
                      luminal lesion in the right ureteric orifice and the
                      papillary growth of the bladder was resected saving the
                      right ureteric orifice.  The mass was completely resected
                      and the histopathology revealed Papillary Urothelial
                      Carcinoma (Grade III) of the Urinary Bladder.
                    </p>
                  </li>
                  <li>
                    <p>
                      Mrs. A.B. was discharged from the hospital in satisfactory
                      condition. Post operative day she passed urine
                      satisfactorily.  She has been advised for a follow up
                      after 10 days with urine analysis and she is doing well.
                      She is also advised to come back for check Cystoscopy
                      after 3 months. Mrs. A.B is now fit to resume her normal
                      activities.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12">
                  <div className="servicePageImg">
                    <img src={case3_1} alt="About company" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center align-items-center">

                  <div className="col-md-6">
                    <div className="servicePageImg">
                      <img src={case4_1} alt="About company" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="servicePageImg">
                      <img src={case4_2} alt="About company" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="servicePageText">
                  <h2>Case4:&nbsp;</h2>
                  <p>
                    <b>
                      Diagnosis – “An unusual Primitive Neuroectodermal
                      Tumour of the Kidney”
                    </b>
                  </p>
                  <ul>
                    <li>
                      <p>
                        Mr. B.R, 28 years of age consulted me with history of pain in right lumbar region for last 4 – 5 weeks. This was associated with
                        gross total painless intermittent hematuria without clots once in 2 – 3 weeks. He also complained of fever about 2 months
                        back and his hematuria has been persisting for the last 2 days. He does not suffer from any other medical or surgical illness.
                      </p>
                    </li>
                    <li>
                      <p>
                        Physical Examination was essentially normal except for the large ballotable mass was felt in the right hypochondrium and
                        right lumbar region.  This was not tender. Routine Biochemical Parameters were within normal limits.  His urine revealed
                        significant microscopic hematuria with urinary tract infection.
                      </p>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3 d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center align-items-center">

                  <div className="col-md-6">
                    <div className="servicePageImg">
                      <img src={case4_3} alt="About company" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="servicePageImg">
                      <img src={case4_4} alt="About company" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-5">
                <div className="servicePageText">
                  <ul>
                    <li>
                      <p>
                        His ultrasonography revealed a hypoechoic mass in the lower pole of the right kidney.  CT scan of the abdomen and pelvis
                        revealed a large mass lesion involving the right kidney with non-visualization of the right ureter.  The lesion abuts the
                        duodenum, head of pancreas, psoas muscles and ascending colon with stranding of the adjacent fat planes.  Neoplastic
                        etiology is likely? RCC.  Centimetre sized retroperitoneal nodes are noted.  X-ray chest was normal.
                      </p>
                    </li>
                    <li>
                      <p>
                        Subsequently Mr. B.R was admitted to hospital.  He was subjected to Laparoscopic Right Radical Nephrectomy under
                        general anaesthesia.  Multiple ports were used and right colon was mobilized medially. Duodenum was kocherised.  The
                        hilum was approached and the renal artery was dissected free.  It was cut between the ligatures.  Renal vein was stapled.
                        The ureter was mobilized and was clipped.  The gonadal veins were also clipped.  The specimen was freed and was removed
                        through an extended transverse Pfannenstiel like incision and the kidney was removed and sent for histopathology
                        examination.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 mt-5">
                <div className="servicePageText">
                  <ul>
                    <li>
                      <p>
                        The histopathology revealed: The Right Kidney – Malignant, Poorly Differentiated Round Cell Tumour – Primitive
                        Neuroectodermal Tumor (PNET).  Tumour invades Ureter.  Tumour invades Adrenal (not separately identified from
                        tumour) Peri renal fat invaded. Gerota’s Fascia not involved.  Renal Hilac vessels – not involved.
                        Mr. B.R. recovered from the procedure well and was discharged from the hospital.
                      </p>
                    </li>
                    <li>
                      <p>
                        Further, the histopathology slides were sent for another opinion which revealed Primitive Neuroectodermal Tumor of the
                        Kidney.  The tumour cells express Mic2.  They are negative for CK &amp; vimentin.
                      </p>
                    </li>
                    <li>
                      <p>
                        Post operatively he was also subjected to whole body PET CT scan which shows minimally active left para-aortic nodes.
                        Uptake in the left adrenal? significance.
                      </p>
                    </li>
                    <li>
                      <p>
                        Mr. B.R has further been referred to a medical Oncologist for further directions. In the meanwhile, skin staples were
                        removed and wound was healthy. Medical Oncologist has advised him to take chemotherapy for Primitive Neuroectodermal
                        Tumor with ICE x 6 such.  He is pursuing the treatment with medical oncologist.
                        Mr. B.R. is now doing well and is fit to resume his normal activities.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>
      <Footer />
    </div>
  );
};

export default CaseStudies;
