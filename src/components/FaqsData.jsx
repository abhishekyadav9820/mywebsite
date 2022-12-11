import { React } from "react";
import KidneyImage from "../Image/faq_kidney_transplantation.jpg";

const FaqsData = [
  {
    FaqTitle: "Stones (calculus disease)",
    FaqInnerData: [
      {
        eventkey: "0",
        FaqShortDes: "WHAT ARE THE SYMPTOMS OF THE PRESENCE OF KIDNEY STONES?",
        FaqPointHeading:
          "The presentation of symptoms depends upon the location, size, and shape of the stone. Many times they are symptom free. They are called silent stones. Common symptoms are as follows:",
        FaqPoint1:
          "1. Sudden, severe pain- starting in the flanks and moving towards groins. Typically, described as ureteric colic and loin to groin pain",
        FaqPoint2: "2. Nausea and Vomiting.",
        FaqPoint3: "3. Blood in Urine.",
        FaqPoint4: "4. Increased Urinary frequency.",
        FaqPoint5: "5. Burning sensation on passing Urine.",
        FaqPoint6: "6. Infection in Urine.",
      },
      {
        eventkey: "1",
        FaqShortDes: "WHO HAVE GREATER TENDENCY TOWARDS KIDNEY STONES?",
        FaqPoint1:
          "1. People who tend to form stones have certain factors in common.",
        FaqPoint2:
          "2. Those who stay in the hot environmental condition, such as tropical area.",
        FaqPoint3:
          "3. Positive family history of the stone disease in first blood relation.",
        FaqPoint4:
          "4. Decreases fluid intake, which reduces urine output, and forms supersaturated urine.",
      },
      {
        eventkey: "2",
        FaqShortDes: "	WHAT CAUSES STONE FORMATION?",
        FaqPara1:
          "Medical science have advanced considerably particularly in the last decade. These advances have greatly improved our understanding of course of the stone disease and the management of this ailment has undergone revolutionary changes. This knowledge has further been helpful in the prevention and treatment of stone disease.",
        FaqPara2:
          "Various factors play a role in the formation of kidney stone in a susceptible individual. These factors are diet, water intake, urinary output, climate, occupation, and heredity, radical and family background.",
        FaqPoint1:
          "1. Diet- Ingestion of excessive amount of calcium, oxalates, purines (uric acid), phosphates and other elements often results in excessive excretion of these components in the urine. The stone formation can be precipitated by high intake of calcium in the form of milk, ice creams, cheese, chocolates, cocoa, calcium containing drugs or vitamin D.",
        FaqPoint2:
          "2.Water Intake and Urinary Output- It has been well established that increased water intake and increased urinary output decrease the incidence of urinary stone in patients predisposed to the disease.",
        FaqPoint3:
          "3.Climate- High environmental temperature increases sweating, which may result in increased concentration of urine. This hyper concentration may contribute to stone formation.",
        FaqPoint4:
          "4.Occupation- Stone disease is more likely to be found in individuals with sedentary occupation like professionals and managerial class rather than unskilled and partly skilled labourers.",
        FaqPoint5:
          "5.Genetic Disorders- Like Gout, Cystinuria, primary Oxaluria, metabolic disorders like bowl, endocrine and kidney problems that increase blood and urine calcium and oxalates can promote the tendency for stone formation. Other rarer conditions like rickets, hyperparathyroidism and demineralization of bone may lead to stone formation.",
        FaqPoint6:
          "6.Obstruction and Infection- Due to stricture or enlarged prostate may cause stagnation of urine leading to stone formation. Chronic infection in the kidney may also allow stone formation around the debris in the urine.",
        EndPara:
          "In stone belts, where the disease is endemic, it is the hot dry climate and the high content of calcium in the hard water and in the food grown in the soil that leads to stone formation. In areas where this disease is not endemic, in most cases no cause can be detected and it may be the tendency of the kidneys in the individual to form urine of high calcium or urate content. In some it may be due to a period of negligence in intake of adequate fluids worsened by excessive sweating.",
      },
      {
        eventkey: "3",
        FaqShortDes: "WHY DO STONES FORM?",
        FaqPointHeading:
          "Stones form due to many reasons Common causes of the stone formation are:",
        FaqPoint1:
          "1. Supersaturation of urine by decreases intakes of water and or hot environmental condition where there is loss of body fluid in atmosphere by perspiration, and in breathing.",
        FaqPoint2:
          "2. Urine infection where crystals deposit themselves on and around the infection causing organism, and the stone grows over the period in the supersaturated urine.",
        FaqPoint3:
          "3. Diet rich in oxalates, Uric acid, can increase the incidence of stone formation.",
        FaqPoint4:
          "4. Functional or structural obstruction of the urinary system can precipitate the stone formation. Like Pelviureteric junction obstruction, Ectopic kidney, Horseshoe kidney.",
      },
      {
        eventkey: "4",
        FaqShortDes: "DOES WATER HELP IN FLUSHING OUT THE STONES?",
        FaqPara1:
          "Yes.  Water helps in the flushing out the stones. But fortunately not all stones, stones which are in the size range of 3-6 mm can be passed out with the increased in take of water",
      },
      {
        eventkey: "5",
        FaqShortDes: "WHAT SHOULD I DO I F I HAVE PASSED A STONE IN URINE?  ",
        FaqPara1:
          "If you find a stone, bring it in to your doctor for analysis. The type of stone you have, will determine the diet and prevention programme your doctor recommends. You may need additional tests and X-ray in future to ensure that new stones do not form.",
      },
      {
        eventkey: "6",
        FaqShortDes:
          "I HAVE STONE BUT I DON’T HAVE ANY SYMPTOMS SHOULD I UNDER GO TREATMENT?",
        FaqPara1:
          "Knowing the fact that you are harbouring the stone you should not ignore that. You should go for check up for the stone size every 6 months and should notice for increase in the size of the stone.",
        FaqPara2:
          "Increase in size is the indication that stones need some intervention.",
        FaqPara3:
          "There is high chance of the repeated urinary tract infection because of the stone. Above all symptomatic obstructing stone can lead to kidney failure.",
      },
      {
        eventkey: "7",
        FaqShortDes: "IS ESWL SAFE?",
        FaqPara1: "ESWL is an absolute safe procedure in almost all cases.",
      },
      {
        eventkey: "8",
        FaqShortDes: "WILL THERE BE PAIN AFTER THE PROCEDURE?",
        FaqPara1:
          "There may be dull aching pain in site of treatment after the procedure for few hrs. Further there will be colic pain due to passage of stone particles. This normally responds to the medication.",
      },
      {
        eventkey: "9",
        FaqShortDes:
          "IS THERE ANY DAMAGE TO THE KIDNEY OR OTHER ORGANS DURING LITHOTRIPSY?	",
        FaqPara1:
          "There is no damage to the other organs as the shock waves are effective on the targeted point at the junction of solid and liquid, which is stone and urine respectively.",
      },
      {
        eventkey: "10",
        FaqShortDes:
          "IS THE TREATMENT POSSIBLE IN PATIENT WITH DIABETES, BLOOD PRESSURE, HEART DISEASE OR RENAL FAILURE?",
        FaqPara1:
          "Lithotripsy is safest with above diseases as it is totally non-invasive procedure. However, one should keep these diseases under control when treating with Lithotripsy.",
      },
      {
        eventkey: "11",
        FaqShortDes: "HOW CAN I PREVENT URETERAL STONES?",
        FaqPara1:
          "A good first step for prevention is to drink more liquids – water is the best. If you tend to form stones, you should try to drink enough liquids throughout the day to produce at least two litres of urine in every 24 hours period. People who form calcium stones used to be told to avoid dairy products and other foods with high calcium content. However, recent studies have shown that foods high in calcium, including dairy foods, help prevent calcium stones. Taking calcium in pill form, however, may increase the risk of developing stones. Women taking vitamin D and calcium pills in the postmenopausal period to prevent osteoporosis, especially with family history of stones, need to be careful.",
      },
      {
        eventkey: "12",
        FaqShortDes: "MY STONE HAS NOT PASSED DO I NEED SURGERY?",
        FaqPara1: "ESWL is an absolute safe procedure in almost all cases.",
        FaqPara1:
          "In general, you require surgical intervention if your stones are large enough to obstruct urine flow, if they are potentially harmful to your kidneys or if they are causing symptoms for which medication does not help.",
      },
      {
        eventkey: "13",
        FaqShortDes: "WILL MY CHILDREN GET STONES BECAUSE I HAVE THEM?	",
        FaqPara1:
          "Any person with a family history of stones may be at higher risk. Stone disease in a first degree relative, such as a parent or sibling, can dramatically increase the probability for you. In addition, more than 70 percent of people with certain rare hereditary disorders are prone to the problem. Those conditions include cystinuria, an excess of the amino acid, cystine, that does not dissolve in urine and instead forms stones of cystine; and primary hyperoxaluria, an excess production of the compound oxalate, which also does not dissolve in urine, forming stones of oxalate and calcium.",
      },
      {
        eventkey: "14",
        FaqShortDes: "ARE GALLSTONES ARE URETERAL STONES RELATED?",
        FaqPara1:
          "No there is no known link. They are formed in different areas of the body. Also, if you have a gallstone, you are not necessarily more likely to develop kidney stones.",
      },
      {
        eventkey: "15",
        FaqShortDes: "Conclusion",
        FaqPara1:
          "The treatment of renal calculi has undergone significant changes over the last decade. The endo-urologist has a large armamentarium of treatment options. The advent of ESWL, along with improvements in fiberoptic technology and video equipment has virtually eliminated the need for open stone surgery. In an era of minimally invasive surgery, the use of ureteroscopy, Lithotripsy, and Percutaneous procedures has expanded the use of endoscopic management of renal stones. Continued progress in Lithotripsy technology, advances in endoscopic techniques and refinements in medical management will improve our ability to choose the appropriate treatments for renal calculi in an era of cost confinement.",
      },
    ],
  },
  {
    FaqTitle: "Prostate Gland",
    FaqInnerData: [
      {
        eventkey: "0",
        FaqShortDes: "WHAT IS BENIGN PROSTATIC HYPERPLASIA ?",
        FaqPara1:
          "Benign prostatic hyperplasia (BPH) is a condition that affects the prostate gland in men. The prostate is a gland found between the bladder (where urine is stored) and the urethra (the tube urine passes through). As men age, the prostate gland slowly grows bigger (or enlarges). As the prostate gets bigger, it may press on the urethra and cause the flow of urine to be slower and less forceful. <strong>Benign</strong> means the enlargement isn't caused by cancer or infection. <stromg>Hyperplasia</strong> means enlargement.",
      },
      {
        eventkey: "1",
        FaqShortDes: "WHAT ARE THE SYMPTOMS OF BPH?",
        FaqPara1:
          "Most symptoms of BPH start gradually. One symptom is the need to get up more often at night to urinate. Another symptom is the need to empty the bladder often during the day. Other symptoms include difficulty in starting the urine flow and dribbling after urination ends. The size and strength of the urine stream may decrease.",
        FaqPara2:
          "These symptoms can be caused by other things besides BPH. They may be signs of more serious diseases, such as a bladder infection or bladder cancer. Tell your doctor if you have any of these symptoms, so he or she can decide which tests to use to find the possible cause.",
      },
      {
        eventkey: "2",
        FaqShortDes: "HOW WILL MY DOCTOR KNOW IF I HAVE BPH?",
        FaqPara1:
          "After your doctor takes a complete history of your symptoms, a rectal exam is the next step. This exam allows your doctor to actually feel the size of the prostate gland.",
        FaqPara2:
          "It might not be possible for your doctor to be sure that your prostate problem is benign just by taking a history and performing a physical exam. Your doctor might need to look at a sample of your urine for signs of infection. Your doctor may also do a blood test. An ultrasound exam or a biopsy of the prostate may help your doctor make the diagnosis.",
      },
      {
        eventkey: "3",
        FaqShortDes: "HOW WILL MY DOCTOR TREAT MY BPH?	",
        FaqPara1:
          "Once your doctor is sure that your symptoms are caused by benign growth of the prostate gland, treatment can be recommended. However, your doctor may suggest that you wait to see if your symptoms get better because sometimes mild symptoms get better on their own. If your symptoms get worse, your doctor may suggest another treatment option.",
        FaqPara2:
          "Surgery is considered the most effective treatment and is used in men with strong symptoms. This is also the best way to diagnose and cure early cancer of the prostate. Surgery is usually done through the urethra, leaving no scars. Surgery does have risks, such as bleeding, infection or impotence. These risks are generally small.",
      },
      {
        eventkey: "4",
        FaqShortDes: "ARE THERE ANY DRUG I CAN TAKE?",
        FaqPara1:
          "Drug treatments are available. Finasteride (brand name: Proscar) makes the prostate shrink, but it does not help all patients. The side effects of finasteride are rare and mild, but they usually have to do with sexual function. They go away when the medicine is stopped. The prostate will enlarge again when the medicine is stopped, so another treatment may have to be tried.",
        FaqPara2:
          "Another kind of medicine, called alpha blockers, also can help the symptoms of BPH. Some of these drugs are terazosin (brand name: Hytrin), doxazosin (brand name: Cardura) and tamsulosin (brand name: Flomax). Alpha blockers have been used for a long time to treat high blood pressure, but they can also help the symptoms of BPH, even in men with normal blood pressure. These medicines may not work in all men. The side effects of alpha blockers are mild and go away if you stop taking the medicine. The side effects include dizziness, fatigue and lightheadedness.",
      },
    ],
  },
  {
    FaqTitle: "Prostate Cancer",
    FaqInnerData: [
      {
        eventkey: "0",
        FaqShortDes: "WHAT ARE MY CHANCES OF GETTING PROSTATE CANCER?",
        FaqPara1:
          "Prostate cancer is the most common cancer among men and the second leading cause of annual cancer deaths, following lung cancer.  One in 10 men will be diagnosed with prostate cancer. More than 70 percent of all prostate cancer cases are diagnosed in men over the age of 65.  Black men are in the highest risk group and represent approximately 270 cases per 100,000 men.  In addition, prostate cancer has the strongest familial link of all the major cancers.",
      },
      {
        eventkey: "1",
        FaqShortDes: "WHAT ARE THE SYMPTOMS OF PROSTATE CANCER?",
        FaqPointHeading:
          "Often, early stages of prostate cancer do not cause symptoms.  But, in some cases, men with prostate cancer may experience any of these problems:",
        FaqPoint1: "1. A need to urinate frequently, especially at night;",
        FaqPoint2: "2. Difficulty starting urination or holding back urine;",
        FaqPoint3: "3. Weak or interrupted flow of urine;",
        FaqPoint4: "4. Painful or burning urination;",
        FaqPoint5: "5. Difficulty in having an erection;",
        FaqPoint6: "6. Painful ejaculation",
        FaqPoint7: "7. Blood in urine or semen; or",
        FaqPoint8:
          "8. Frequent pain or stiffness in the lower back, hips, or upper thighs.",
        EndPara:
          "You should speak with your doctor immediately if you have these symptoms or if you are over 50 and not had a recent prostate cancer screening.  If you have a family history of prostate cancer, or are an African-American male, you should consider screening beginning at age 45.",
      },
      {
        eventkey: "2",
        FaqShortDes: "WHAT ARE THE CHANCES OF SURVIVAL?",
        FaqPara1:
          "Prostate cancer may be highly curable when detected in its early stages.  One in every seven men diagnosed with prostate cancer will die from the disease.  In advanced stages of the disease, new data from two large clinical trials suggest chemotherapy extends survival among men who have failed hormone therapy. Your physician can provide you with specific guidance based on the facts and circumstances of your case.",
      },
      {
        eventkey: "3",
        FaqShortDes:
          "WHAT TYPE OF DOCTOR SHOULD I VISIT FOR PROSTATE CANCER SCREENING?",
        FaqPara1:
          "Screening for prostate cancer is a relatively simple procedure.  While others may begin with a visit to the urologist. Urologist will be able to help you learn more about the screening process. ",
      },
      {
        eventkey: "4",
        FaqShortDes: "WHAT TYPE OF TESTS WILL THE DOCTOR PERFORM?",
        FaqPointHeading: "The first analysis many physicians will perform is a",
        FaqPoint1:
          "1. PSA test.  Prostate specific antigen (PSA) is an enzyme produced in the prostate that is found in the seminal fluid and the bloodstream.  To measure the PSA level, a small vial of blood is drawn and sent to a laboratory for evaluation.  An elevated PSA level in the bloodstream does not necessarily indicate prostate cancer, since PSA can also be raised by infection or other prostate conditions.  Many men with an elevated PSA do not have prostate cancer.",
        FaqPoint2:
          "2. The digital rectal exam (DRE) should be performed along with the PSA test.  The DRE is performed by a physician who will insert a gloved finger into the rectum to feel the peripheral zone of the prostate where most prostate cancers occur.  The physician will be checking for hardness of the prostate or for irregular shapes or bumps extending from the prostate - all of which may indicate a problem.  The DRE is particularly useful because the PSA test may miss up to 25 percent of cancers, and the DRE may catch some of these.",
      },
      {
        eventkey: "5",
        FaqShortDes:
          "WHAT HAPPENS IF THE SCREENING TESTS INDICATE A POTENTIAL PROBLEM?",
        FaqPara1:
          "The DRE and PSA tests cannot diagnose prostate cancer; they merely indicate that further testing is needed.  Abnormal findings in either the DRE or PSA may indicate the need for a biopsy.  During a biopsy, ultrasound is used to view and guide a needle (or multiple needles) into the prostate to take small samples of tissue.  Typically, a prostate cancer biopsy employs a multi-needle device that is able to take six or more tissue samples simultaneously from different parts of the prostate to be sure that cancerous tissue is not missed.  This procedure is typically performed using local anesthesia.",
        FaqPara2:
          "A biopsy is the only way to confirm or diagnose the presence of prostate cancer.  The biopsy procedure may cause some discomfort or pain, but the procedure is short, and it can usually be performed without an overnight hospital stay on an outpatient basis.",
      },
      {
        eventkey: "6",
        FaqShortDes: "HOW IS PROSTATE CANCER TYPICALLY TREATED?",
        FaqPointHeading:
          "There are a variety of ways to treat prostate cancer including",
        FaqPoint1:
          "1. Surgery to remove the prostate in its entirety, radiation therapy to kill the cancerous tissue in and around the prostate,",
        FaqPoint2:
          "2. Hormone deprivation therapy to stop the production of hormones that help prostate cancer cells to grow",
        FaqPoint3:
          "3. Chemotherapy to stop the cancer cells from dividing and multiplying,",
        FaqPoint4:
          "4. Watchful waiting which involves no active treatment at that particular time.  One or more of these treatment approaches may be used by your doctors at various times and stages of the disease.  There are a variety of factors that will be evaluated by your physician to determine the best treatment approach. ",
      },
      {
        eventkey: "7",
        FaqShortDes:
          "HOW DO I KNOW WHICH SPECIALISTS TO SEE TO TREAT MY DISEASE?",
        FaqPara1:
          "Urologists, radiation oncologists and medical oncologists all play a vital role in the treatment of prostate cancer.",
      },
      {
        eventkey: "8",
        FaqShortDes:
          "WHAT IF MY PROSTATE CANCER PROGRESSES OR COMES BACK AFTER I RECEIVE INITIAL THERAPY?",
        FaqPara1:
          "By measuring levels of a substance called prostate-specific antigen in the blood, your physician can measure disease progression.  If you are receiving treatment for prostate cancer and your PSA numbers keep rising, it may be a sign that your therapy isn't working and you may need to consider a more aggressive treatment.",
        FaqPara2:
          "Most men whose cancer returns after local treatment or are diagnosed with advanced disease are treated with hormone therapy.  However, at some point, hormone therapy may stop working and the PSA levels will begin to rise again.  At this point it is particularly important to seek the advice of a medical oncologist who can work with the rest of your healthcare team to determine the best treatment for you at this stage of the disease.",
      },
      {
        eventkey: "9",
        FaqShortDes:
          "WHAT NEW TREATMENTS ARE AVAILABLE FOR ADVANCED PROSTATE CANCER?",
        FaqPara1:
          "If prostate cancer is diagnosed at an advanced stage or if the cancer returns after localized therapy such as surgery or radiation, additional treatment with hormonal therapy is typically initiated.",
        FaqPara2:
          "Recently, the U.S. FDA approved a new chemotherapy regimen. It represents an important treatment option for patients with prostate cancer who have undergone hormonal therapy (also known as androgen-deprivation therapy or ADT) but whose cancer is progressing despite the use of ADT.",
      },
    ],
  },
  {
    FaqTitle: "Impotence",
    FaqInnerData: [
      {
        eventkey: "0",
        FaqShortDes: "HOW IS ERECTILE DYSFUNCTION TREATED?",
        FaqPara1:
          "How erectile dysfunction is treated depends on what things are causing it. After your doctor checks you for medical problems and medicines that might cause erectile dysfunction, he or she may have you try a medicine to help with erectile dysfunction. Some of these medicines are injected into your penis. Other medicines are taken by mouth. Not everyone can use these medicines. Your doctor will help you decide if you can try them.",
      },
      {
        eventkey: "1",
        FaqShortDes: "WHAT OTHER OPTIONS DO I HAVE ?",
        FaqPara1:
          "If the medicines aren't right for you, you could also try using vacuum pump devices, or you could have surgery. Your doctor may send you to an urologist to talk about these options.",
      },
      {
        eventkey: "2",
        FaqShortDes:
          "HOW DO I KNOW WHICH TREATMENT FOR IMPOTENCY IS BEST SUITED FOR ME?",
        FaqPara1:
          "The decision about treatment option should be discussed with your physician. Your choice of treatment will depend on personal preference and economic factors. Both you and your partner should be comfortable with your choice.",
      },
      {
        eventkey: "3",
        FaqShortDes:
          "IS IT NECESSARY FOR MY SEXUAL PARTNER TO BE INCLUDED IN DISCUSSIONS ON MY IMPOTENCE?",
        FaqPara1:
          "She helps the doctor understand the problem and must agree with the treatment choice.",
      },
      {
        eventkey: "4",
        FaqShortDes: "CAN ANY OF THESE TREATMENT OPTIONS REVERSE IMPOTENCE?",
        FaqPara1:
          "Most impotence is irreversible. While none of the three treatment options reverse a man’s impotence, they do offer a solution to the problem.",
      },
      {
        eventkey: "5",
        FaqShortDes: "HOPE THROUGH RESEARCH",
        FaqPara1:
          "Advances in suppositories, inject able medications, implants, and vacuum devices have expanded the options for men seeking treatment for ED. These advances have also helped increase the number of men seeking treatment. Gene therapy for ED is now being tested in several centers and may offer a long-lasting therapeutic approach for ED.",
        FaqPara2:
          "The National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) sponsors programs aimed at understanding the causes of erectile dysfunction and finding treatments to reverse its effects. NIDDK's Division of Kidney, Urologic, and Hematologic Diseases supported the researchers who developed Viagra and continue to support basic research into the mechanisms of erection and the diseases that impair normal function at the cellular and molecular levels, includingdiabetes and high blood pressure.",
      },
      {
        eventkey: "6",
        FaqShortDes: "POINTS TO REMEMBER",
        FaqPoint1:
          "1. Erectile dysfunction (ED) is the repeated inability to get or keep an erection firm enough for sexual intercourse.",
        FaqPoint2: "2.  ED affects 15 to 30 million American men.",
        FaqPoint3: "3. ED usually has a physical cause.",
        FaqPoint4: "4. ED is treatable at all ages.",
        FaqPoint5:
          "5. Treatments include psychotherapy, drug therapy, vacuum devices, and surgery. ",
      },
    ],
  },
  {
    FaqTitle: "Urinary Incontinence",
    FaqInnerData: [
      {
        eventkey: "0",
        FaqShortDes: "WHAT IS URINARY INCONTINENCE ?",
        FaqPara1:
          "Urinary incontinence is the inability to hold urine leading to involuntary loss of urine. The urine loss can range from slight leakage of urine to severe frequent wetting. This condition severely affects quality of life by interfering with work, travel, social recreation and sexual activities.",
      },
      {
        eventkey: "1",
        FaqShortDes: "WHAT IS THE INCIDENCE OF OF URINARY INCONTINENCE?",
        FaqPara1:
          "At least 10% of people over the age of 65 years have urinary incontinence. According to World Health Organisation estimates, there are 200 million patients worldwide with symptoms of male or female urinary incontinence. However, as this condition is associated with shame, embarrassment and silence, the exact figure is not known.",
      },
      {
        eventkey: "2",
        FaqShortDes: "IS URINARY INCONTINENCE AN INEVITABLE PART OF AGING?",
        FaqPara1:
          "With aging, the urge to urinate may occur more frequently and be harder to control: however, incontinence can affect men and women of all ages and is not a normal response to aging.",
      },
      {
        eventkey: "3",
        FaqShortDes:
          "IS THE INCIDENCE OF URINARY INCONTINENCE SIMILAR IN MEN AND WOMEN ?",
        FaqPara1:
          "No, women experience incontinence two times more often than men. Pregnancy and child-birth, menopause and the structure of the female urinary tract account for this difference. However, both women and men can become incontinent from stroke, multiple sclerosis and other physical problems associated with old age. ",
      },
      {
        eventkey: "4",
        FaqShortDes: "WHAT ARE THE RISK FATORS FOR URINARY INCONTINENCE?",
        FaqPointTitle:
          "Risk factors for urinary incontinence vary, but include:",
        FaqPoint1: "1. Pregnancy ",
        FaqPoint2: "2. Childbirth ",
        FaqPoint3: "3. Obesity ",
        FaqPoint4: "4. Menopause",
        FaqPoint5: "5. Cigarette smoking",
        FaqPoint6: "6. Prostate enlargement and/or surgery ",
        FaqPoint7: "7. Hysterectomy",
        FaqPoint8: "8. Radiation therapy to the pelvis",
        FaqPoint9: "9. Diabetes ",
        FaqPoint10: "10. Parkinson's disease ",
        FaqPoint11: "11. Back injury",
        FaqPoint12: "12. Cerebral vascular accident",
        FaqPoint13: "13. Dementia.",
      },
      {
        eventkey: "5",
        FaqShortDes: "WHAT ARE THE CONSEQUENCES OF URINARY INCONTINENCE ?",
        FaqPara1:
          "Urinary incontinence has far reaching consequences not only on a person's physical health but also on the mental condition. Embarrassment, stigmatization, isolation, demoralization and depression are common in these patients. Urinary incontinence is also associated with an increased number of falls, urinary tract infections and skin breakdown. The economic burden of the disease is also considerable as it often leads to premature admission of the patient to nursing home.",
      },
      {
        eventkey: "6",
        FaqShortDes: "ARE THERE DIFFERENT TYPES OF URINARY INCONTINENCE?",
        FaqPointTitle: "There are three basic types of urinary incontinence:",
        FaqPoint1: "1. Urge incontinence",
        FaqPoint2: "2. Stress incontinence ",
        FaqPoint3: "3. Overflow bladder",
      },
      {
        eventkey: "7",
        FaqShortDes: "WHAT IS URGE INCONTINENCE ?",
        FaqPara1:
          "Urge incontinence or detrusor over activity is a common problem that increases in frequency and severity with advancing age. In this condition, the patient often loses urine for no apparent reasons while suddenly feeling the need or urge to urinate. In urge incontinence, the bladder involuntarily empties during sleep, after drinking a small amount of water, or while touching water or even when hearing it run (as when someone else is taking a shower or washing dishes).",
      },
      {
        eventkey: "8",
        FaqShortDes: "IWHAT CAUSES URGE INCONTINENCE?",
        FaqPointTitle:
          "The most common cause of urge incontinence is inappropriate and involuntary bladder contractions. These involuntary contractions may occur because of inflammation or irritation within the bladder or when certain neurological diseases impair control of bladder contractions.",
        FaqPoint1: "1. Urinary tract infections  ",
        FaqPoint2: "2. Cancer ",
        FaqPoint3: "3. Parkinson's disease ",
        FaqPoint4: "4. Alzheimer's disease ",
        FaqPoint5: "5. Certain drugs such as hypnotics or narcotics ",
        FaqPoint6: "6. Injury (such as those occurring during surgery) ",
        FaqPoint7: "7. Benign prostatic hyperplasia (BPH).",
        EndPara:
          "Urge incontinence can also occur when mobility is impaired (for example, in patients with arthritis), making it difficult for patients to get to the bathroom in time. This condition is sometimes referred to mass functional incontinence ",
      },
      {
        eventkey: "9",
        FaqShortDes: "WHAT IS STRESS INCONTINENCE ?",
        FaqPara1:
          "Stress incontinence is the most prevalent form of incontinence in elderly patients. It is caused by malfunction of the urethral sphincter that causes urine to leak from the bladder when intra-abdominal pressure increases, such as during laughing, coughing or sneezing.",
      },
      {
        eventkey: "10",
        FaqShortDes: "WHAT CAUSES STRESS INCONTINENCE ?",
        FaqPara1:
          "Physical changes resulting from pregnancy, childbirth and menopause are common causes of stress incontinence. It is the most common form of incontinence in women and is treatable. Certain muscles, known as the pelvic floor muscles support the bladder. If these muscles weaken, the bladder can move downward, pushing slightly out of the bottom of the pelvis toward the vagina. This prevents muscles that ordinarily force the urethra shut from squeezing as tightly as they should. As a result, urine can leak into the urethra during moments of physical stress. Stress incontinence also occurs if the muscles that do the squeezing weaken. Stress incontinence can worsen during the week before menstrual period. At that time, lowered estrogen levels might lead to lower muscular pressure around the urethra, increasing chances of leakage. The incidence of stress incontinence increases following menopause. Stress incontinence can also occur as a result of drugs, Surgical trauma or radiation damage.",
      },
      {
        eventkey: "11",
        FaqShortDes: "WHAT IS OVERFLOW INCONTINENCE?",
        FaqPara1:
          'Overflow bladder is more relatively uncommon. Urinary incontinence due to overflow bladder is more common in men because of the prevalence of obstructive prostate gland enlargement. In this condition urine accumulates in the bladder until maximum bladder capacity is reached. It then leaks through the urethra by "overflow", usually manifesting as dribbling. However, increased intra-abdominal pressure, which occurs during coughing and sneezing, may also cause loss of urine, so that overflow incontinence may be confused with stress incontinence.',
      },
      {
        eventkey: "12",
        FaqShortDes: "WHAT CAUSES OVERFLOW INCONTINENCE ?",
        FaqPointTitle: "Overflow bladder incontinence occurs because of:",
        FaqPoint1:
          "1. Week bladder muscles caused by nerve damage from diabetes or other diseases (e.g., tumours, radiation, surgery)",
        FaqPoint2:
          "2. Obstructed urinary outflow, such as those caused by prostate enlargement and urinary stones ",
        FaqPoint3:
          "3. Under active bladder contractions caused by certain medications. These medications lead to urinary retention with bladder distension.",
      },
      {
        eventkey: "13",
        FaqShortDes: "ARE THERE ANY OTHER TYPES OF INCONTINENCE ?",
        FaqPara1:
          'When stress and urge incontinence occur together, it is sometimes referred to as "mixed incontinence". This is common in women."Transient" or temporary incontinence can be caused by medications, urinary tract infections, mental impairment, restricted mobility and severe constipation, which can push against the urinary tract and obstruct outflow.',
      },
      {
        eventkey: "14",
        FaqShortDes: "IS THERE ANY TREATMENT OF URINARY INCONTINENCE ?",
        FaqPara1:
          "Most types of urinary incontinence can be effectively treated and the symptoms improved the type of incontinence present is determined. In some patients, incontinence is often improved by weight loss. Smokers who have a chronic cough have fewer problems when they stop smoking (and stop coughing). Some common drugs can also aggravate the situation.",
      },
      {
        eventkey: "15",
        FaqShortDes: "WHAT ARE THE TREATMENT OPTIONS FOR URGE INCONTINENCE ?",
        FaqPara1:
          "These patients often respond to behavioural therapy consisting of bladder re-training provided they are motivated to do so and their mental faculties are all right. For example, such patients are instructed about a fluid intake schedule, voiding techniques and scheduled voiding. Institutionalised patients can also benefit from behavioural training using scheduled toileting or prompted voiding. Urge incontinence also responds to various drugs. Special care must be taken when using these medications, especially in patients who may have urinary outflow obstruction, as these drugs can precipitate urinary retention",
      },
      {
        eventkey: "16",
        FaqShortDes: "WHAT ARE THE TREATMENT OPTIONS FOR STRESS INCONTINENCE ?",
        FaqPara1:
          "In these patients, pelvic floor exercises (e.g. Kegel exercises, vaginal cones) can be effective. These exercises strengthen both the peri urethral and pelvic floor muscles. They are easy to perform, however must be performed frequently throughout the day and continued for long-term effect. Certain drugs are also available for the management of stress incontinence. Oestrogen replacement therapy can also be very helpful in this condition, particularly postmenopausal women. Topical, oral, or transdermal oestrogen preparations, all are effective. There are several surgical procedures, which may also prove helpful for stress incontinence.",
      },
      {
        eventkey: "17",
        FaqShortDes: "HOW DO PELVIC FLOOR EXERCISES HELP ?",
        FaqPara1:
          "The urinary sphincter, with the help of surrounding pelvic floor muscles, controls release of urine from the bladder. Pelvic floor exercises strengthen these muscles, which help to prevent or reduce incontinence",
      },
      {
        eventkey: "18",
        FaqShortDes: "WHICH ARE THESE EXERCISES ?",
        FaqPara1:
          'Exercises used to strengthen these muscles called "Kegels". To do them, imagine that you are trying to stop passing gas. Squeeze the muscles you would use to stop the gas and hold the squeeze as you count to 3. Relax, count to 3 again, and then repeat the squeezing exercise. Don\'t use stomach, leg, or buttock muscles. Do this for about 5 minutes three times a day. It may take 6-8 weeks before any beneficial effect is noted. Reported improvement/cure rates have been as high as 77%. These exercises can be done practically anywhere-while driving, watching television, or fixing a meal. But the important thing is to get into the habit of doing Kegels regularly. But remember to avoid pelvic floor exercises while you are urinating, because that may actually weaken the muscles ',
      },
      {
        eventkey: "19",
        FaqShortDes:
          "WHAT ARE THE TREATMENT OPTIONS FOR OVERFLOW INCONTINENCE ?",
        FaqPara1:
          "Patients with overflow incontinence have difficulty emptying their bladder. The goal of treatment is therefore to improve bladder drainage. This can be achieved by drugs, catheterisation and surgery. Intermittent self-catheterisation may also be used for chronic management in patients with overflow incontinence. Most of these patients can be taught to self-catheterise safely with clean catheters. Patients with overflow incontinence can also be instructed in assisted voiding techniques (e.g., abdominal strain, Crede maneuver).",
      },
      {
        eventkey: "20",
        FaqShortDes:
          "WHAT ARE THE TREATENT OPTIONS FOR FUNCTIONAL INCONTINENCE ?",
        FaqPara1:
          "Treatment of functional incontinence depends on the successful management of causative or contributing conditions. Mobility can be improved by relieving pain and providing equipment for patients suffering from arthritis, contractures, deconditioning and neurologic impairments. Environmental modifications (e.g., improved lighting, use of a bedside commode or reducing the distance to the toilet) can be useful in selected patients",
      },
      {
        eventkey: "21",
        FaqShortDes: "SHOULD THESE PATIENTS USE ABSORBENT UNDERGARMENTS ?",
        FaqPara1:
          "Although absorbent undergarments can help elderly patients regain freedom lost as a result of urinary incontinence, they may cause many patients to avoid medical evaluation and simply accept the incontinence. Absorbent undergarments are expensive and may cause skin irritation and breakdown with long-term use.",
      },
      {
        eventkey: "22",
        FaqShortDes: "ARE THERE ANY OTHER TREATMENT OPTIONS ?	",
        FaqPara1:
          "Behavioural therapy has been recommended as the initial approach to urinary incontinence. Even when surgery is the treatment of choice , it is often complemented with some form of behavioural treatment . Behavioural interventions include pelvic muscle exercises, biofeedback, bladder training and fluid /dietary modifications.",
      },
      {
        eventkey: "23",
        FaqShortDes: "WHAT IS ELECTRICAL STIMULATION ?",
        FaqPara1:
          "Electrodes are temporarily placed in the vagina or rectum to stimulate nearby muscles. This will stabilize overactive muscles and stimulate contraction of urethral muscles. Brief doses of electrical can strengthen muscles in the lower pelvis in a way similar to exercising the muscles. Electrical stimulation can be used to reduce both stress incontinence and urge incontinence.",
      },
    ],
  },
  {
    FaqTitle: "Infertility",
    FaqInnerData: [
      {
        eventkey: "0",
        FaqShortDes:
          "Y HUSBAND REFUSES TO GET HIS SEMEN TESTED.HE SAYS THAT IT IS THICK AND VOLUMINOUS MEANS IT MUST BE NORMAL !",
        FaqPara1:
          "Semen consists mainly of seminal fluid, secreted by   the seminal vesicles and the prostate. The volume and consistency of the semen is not related to its fertility potential, which depends upon the sperm count. This can only be assessed by microscopic examination.",
      },
      {
        eventkey: "1",
        FaqShortDes:
          'MY HUSBANTD\'S SPERM COUNT VARIES EVERY TIME WE TEST IT ! HOW DO WE DETERMINE WHAT THE "REAL" SPERM CONT IS ?',
        FaqPara1:
          "Even a normal (fertile) man's sperm count can vary considerably from week to week. Sperm count and motility can be affected by many factors, including time between ejaculations, illness, and medications. There are other factors which affect the sperm count as well, all of which we do not understand.",
      },
      {
        eventkey: "2",
        FaqShortDes:
          "I HAVE NO PROBLEMS HAVING SEX SINCE I AM VIRILE,MY SPERM COUNT MUST BE NORMAL.",
        FaqPara1:
          "There is no correlation between male fertility and virility. Men with totally normal sex drives may have no sperms at all.",
      },
      {
        eventkey: "3",
        FaqShortDes:
          "MY SEMAN ANALYSIS REPORT SHOWS I HAVE NO SPERM IN THE SEMEN(AZOOSPERMIA).IS THIS BECAUSE I USE TO MASTURBATE EXCESSIVELY AS A BOY?",
        FaqPara1: "Masturbation is a normal activity",
        FaqPara2:
          'which most boys and men indulge in. It does not affect the sperm count. You cannot "run" out of sperms, because these are constantly being produced in the testes.',
      },
      {
        eventkey: "4",
        FaqShortDes:
          "MY WIFE IS FRIGID AND DOES NOT ENJOY HAVING SEX . COULD THIS BE THE RESON FOR HER INFERTILITY?",
        FaqPara1:
          "There is no connection between sexual pleasure and fertility. Don't forget that even a woman who gets raped can get pregnant! And don't forget that the commonest reason women do not enjoy sex is because their husbands are unskilled lovers! Maybe you should improve your sexual technique, and spend more time in foreplay and in pleasuring your wife!",
      },
      {
        eventkey: "5",
        FaqShortDes: "WHAT CAUSES OF MALE INFERTILITY ?",
        FaqPoint1: "1. Exposure to toxic chemicals or radiation",
        FaqPoint2: "2. A genetic disorder such as klinefelter’s syndrome",
        FaqPoint3: "3. Taking frequent, long hot tub baths ",
        FaqPoint4: "4. Alcohol, tobacco or drug abuse",
        FaqPoint5: "5. A severe mumps infection as an adolescent or adult",
        FaqPoint6:
          "6. Hormone disorders of the pituitary gland, testicles, thyroid or adrenal glands",
        FaqPoint7:
          "7. Infections of the genital organs causing blockage of the sperm passages",
        FaqPoint8: "8. Wearing tight shorts underwear all the time",
        FaqPoint9:
          "9. Malformed sperm that cannot swim properly or have a short lifespan",
        FaqPoint10: "10. Early ejaculation or retrograde ejaculation ",
        FaqPoint11: "11. Inability to keep an erection",
        FaqPoint12: "12. A complication of radiation therapy or surgery",
      },
      {
        eventkey: "6",
        FaqShortDes: 'WHAT IS "TESE" OR "MESA"?',
        FaqPara1:
          "TESE (Testicular Sperm Extraction): Sperm collected out of the testicles after operation. MESA (Microsurgical Epididymal Sperm Aspiration): Sperm collected out of the epididymis after operation.",
        FaqPara2:
          "TESE or MESA is a technique developed for patients with no sperm cells in their sperm due to an undeveloped or obstructed spermatic cord. The cause of obstruction can be a former sterilisation or an infection of the epididymis. When the testicles make no sperm cells at all, of course TESE or MESA is not possible. If sperm cells are obtained, an ICSI procedure (Intra Cytoplasmic Sperm Injection) will follow. ICSI is like IVF; only now one sperm cell is injected into an egg to fertilise it and make an embryo.",
      },
      {
        eventkey: "7",
        FaqShortDes: "WHAT DOES SPERM PREPARATION MEAN?",
        FaqPara1:
          "Spermatozoa are ejaculated in the seminal fluid during intercourse or masturbation. During assisted reproduction the spermatozoa are extracted from the semen by a series of processes - centrifugation and washing, layering (to select the active sperm and leave the immotile or dead sperm behind) or selecting the best sperm by making them swim through a denser medium and using those that succeed.",
      },
    ],
  },
  {
    FaqTitle: "Kidney Transplantation",
    FaqInnerData: [
      {
        eventkey: "0",
        FaqShortDes: "WHAT IS KIDNEY TRANSPLANTATION?",
        FaqPara1:
          "A kidney transplant is a surgical procedure in which a kidney is removed from one person (donor) and placed into the body of a person suffering from renal failure (recipient), in whom the transplanted kidney can perform all the functions which the patient's own kidneys are not able to perform.",
      },
      {
        eventkey: "1",
        FaqShortDes: "WHY IS A KIDNEY TRANSPLANT NECESSARY?",
        FaqPara1:
          "When a person has 'RENAL FAILURE', the kidneys do not properly filter harmful waste products; as a result, excess wastes and chemicals start to accumulate in the blood. When this happens, a dangerous accumulation of waste products can occur, causing a condition known as uremia. ",
        FaqPointTitle:
          "Patients with irreversible renal failure have two options of treatment:",
        FaqPoint1:
          "1. Dialysis, where the waste products from the blood are removed artificially.  ",
        FaqPoint2: "2. Kidney transplantation ",
        EndPara:
          "Any patient whose own kidneys have failed permanently is a potential candidate for a kidney transplant. There are several factors in each individual case, which determine whether a kidney transplant or lifelong dialysis is the better form of treatment for that patient. These factors include age, availability of family donors and the presence of antibodies in the patients (this increases the risk of kidney failure after transplantation). The health factors which increase the risk of the transplant operation are mainly heart disease, cancer or infection.",
      },
      {
        eventkey: "2",
        FaqShortDes: "WHAT ABOUT THE FAILED KIDNEYS?",
        FaqPara1:
          "The removal of the kidneys (Nephrectomy) which are diseased is usually not necessary prior to the time of transplant. The original kidneys may have to be removed if they are producing damaging effects in the body, such as in case of",
        FaqPoint1:
          "1.  High blood pressure (due to original kidneys), that cannot be controlled by the use of medications. ",
        FaqPoint2:
          "2. Infected kidneys, with recurring urinary tract infection.",
        FaqPoint3: "3. Large polycystic kidneys. ",
      },
      {
        eventkey: "3",
        FaqShortDes:
          "IWHAT ARE THE ADVANTAGES OF TRANSPLANTATION OVER DIALYSIS?",
        FaqPara1:
          "She helps the doctor understand the problem and must agree with the treatment choice.",
        FaqPoint1:
          "1. There is no dependence on the machine thrice a week for the rest of one's life.",
        FaqPoint2:
          "2. There are hardly any restrictions in the diet and fluid intake after a successful transplant.",
        FaqPoint3:
          "3. The physical sense of well-being is so much better that one can go back to work in a style similar to that before the illness.",
        FaqPoint4:
          "4. Usually the anaemia (and feeling of tiredness) seen in patients with renal failure is reversed after a successful transplant, since the kidney is functioning to maintain normal red cell production. For patients on dialysis, correction of anaemia requires life-long use of erythropoietin injections which are extremely expensive.",
        FaqPoint5:
          "5. A woman may be able to conceive a child after having a successful transplant. (Women on dialysis usually do not ovulate and therefore are unable to become pregnant.)",
        FaqPoint6:
          "6. Men who may be having sexual problems such as inability to maintain an erection may find this problem eliminated once they receive a successful transplant.",
      },
      {
        eventkey: "4",
        FaqShortDes: "WHO ARE THE POTENTIAL KIDNEY DONORS?",
        FaqPointTitle: "Kidneys are obtained from 4 sources:",
        FaqPoint1:
          "1. <strong>CADAVER DONORS</Strong> : A cadaver kidney is removed from an individual who has been declared as brain-dead from non-kidney related causes, such as an accident or a stroke. Since a cadaver kidney is from a person not related to the patient, the kidney has less possibility of close antigen matching and thus less chances of success. Also, the recipient has to wait till a suitable kidney is obtained. In our country, cadaver organs are not yet a practically feasible alternative, though legislation for making removal of organs from cadavers has been passed in Parliament. ",
        FaqPoint2:
          "2. <strong>LIVING RELATED DONORS</Strong> : Very close relatives-parents, siblings (brothers & sisters), children, grandparents may donate a kidney to a near relative. This is because a normal individual has two kidneys and can live safely in good health with one kidney. Kidney donation does not alter the physical capacity or life-style or longevity of life of such a donor. ",
        FaqPoint3:
          "3. <strong>EMOTIONALLY RELATED RECIPIENT DONOR MOTHER KIDNEY DONOR</Strong> : In the situation where cadaver donor transplant is not available & living related donors are found unfit, emotionally related kidney donors like spouse (husband/wife) cousins, uncles, aunts, in-laws may donate a kidney and they are called emotionally related kidney donors.",
        FaqPoint4:
          "3. <strong>UNRELATED KIDNEY DONORS</Strong> : When cadaver donors, living related donors, emotionally related donors are not available or are found unfit, then unrelated donor kidney transplantation can be considered. Patients should understand that the chances of rejection are higher &amp; costly medicines like Cyclosporin-A, ATG, etc. have to be taken for better function of the transplanted kidney. ",
        EndPara:
          "A kidney donor should have a compatible blood group, age above 18 years and preferably below 60-65 years and should not have any major disease. In the absence of all the above potential kidney donors, the only option for such patients is lifelong dialysis which is very expensive and which may not be available to the patient where he is staying.",
      },
      {
        eventkey: "5",
        FaqShortDes: "WHAT CAUSES OF MALE INFERTILITY ?",
        FaqPoint1: "1. Exposure to toxic chemicals or radiation",
        FaqPoint2: "2. A genetic disorder such as klinefelter’s syndrome",
        FaqPoint3: "3. Taking frequent, long hot tub baths ",
        FaqPoint4: "4. Alcohol, tobacco or drug abuse",
        FaqPoint5: "5. A severe mumps infection as an adolescent or adult",
        FaqPoint6:
          "6. Hormone disorders of the pituitary gland, testicles, thyroid or adrenal glands",
        FaqPoint7:
          "7. Infections of the genital organs causing blockage of the sperm passages",
        FaqPoint8: "8. Wearing tight shorts underwear all the time",
        FaqPoint9:
          "9. Malformed sperm that cannot swim properly or have a short lifespan",
        FaqPoint10: "10. Early ejaculation or retrograde ejaculation ",
        FaqPoint11: "11. Inability to keep an erection",
        FaqPoint12: "12. A complication of radiation therapy or surgery",
      },
      {
        eventkey: "6",
        FaqShortDes: 'WHAT IS "TESE" OR "MESA"?',
        FaqPara1:
          "TESE (Testicular Sperm Extraction): Sperm collected out of the testicles after operation. MESA (Microsurgical Epididymal Sperm Aspiration): Sperm collected out of the epididymis after operation.",
        FaqPara1:
          "TESE or MESA is a technique developed for patients with no sperm cells in their sperm due to an undeveloped or obstructed spermatic cord. The cause of obstruction can be a former sterilisation or an infection of the epididymis. When the testicles make no sperm cells at all, of course TESE or MESA is not possible. If sperm cells are obtained, an ICSI procedure (Intra Cytoplasmic Sperm Injection) will follow. ICSI is like IVF; only now one sperm cell is injected into an egg to fertilise it and make an embryo.",
      },
      {
        eventkey: "7",
        FaqShortDes: "WHAT DOES SPERM PREPARATION MEAN?",
        FaqPara1:
          "Spermatozoa are ejaculated in the seminal fluid during intercourse or masturbation. During assisted reproduction the spermatozoa are extracted from the semen by a series of processes - centrifugation and washing, layering (to select the active sperm and leave the immotile or dead sperm behind) or selecting the best sperm by making them swim through a denser medium and using those that succeed.",
      },
    ],
  },
];

export default FaqsData;
