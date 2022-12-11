import React from "react";
import "../CSS/Faqs.css";
import FaqsImage from "../Image/faq.jpg";
import FaqsData from "../components/FaqsData";

////////////////////

import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";

const FaqPage = () => {
  const [ftitle, setFtitle] = useState();
  return (
    <>
      <div
        className="whoWeareBanner"
        style={{
          background:
            "linear-gradient(to right, rgb(0, 0, 0, .4), rgb(0, 0, 0, .4)), url(" +
            { FaqsImage } +
            ")",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>FAQ's</h2>
              <p>Know More about DR Dilip Raja</p>
            </div>
            <div className="col-md-6" />
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////////////// Section 1 ///////////////////////////////////////////// */}

      <section className="FAQ-section1">
        <div className="container">
          <div className="FAQ-Section-Conatiner">
            {FaqsData.map((ele) => {
              // console.log(ele.FaqInnerData)
              const { FaqTitle, FaqInnerData } = ele;
              return (
                <>
                  <div className="FAQ-Heading">
                    <h1>{FaqTitle}</h1>
                  </div>
                  <div className="FAQ-Points">
                    {FaqInnerData.map((elem) => {
                      const {
                        FaqShortDes,
                        eventkey,
                        FaqPointHeading,
                        FaqPoint1,
                        FaqPoint2,
                        FaqPoint3,
                        FaqPoint4,
                        FaqPoint5,
                        FaqPoint6,
                        FaqPoint7,
                        FaqPoint8,
                        FaqPoint9,
                        FaqPoint10,
                        FaqPoint11,
                        FaqPoint12,
                        FaqPoint13,
                        FaqPoint14,
                        FaqPara1,
                        FaqPara2,
                        FaqPara3,
                        EndPara,
                        ImagePara,
                        KImage,
                      } = elem;
                      return (
                        <>
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey={eventkey}>
                              <Accordion.Header>{FaqShortDes}</Accordion.Header>
                              <Accordion.Body>
                                <div className="Accordion-Body_con">
                                  <div className="Accordion-Para1">
                                    <p>{FaqPara1}</p>
                                    <p>{FaqPara2}</p>
                                    <p>{FaqPara3}</p>
                                  </div>

                                  <div className="Accordion-Points">
                                    <div className="Accordion-Points-head">
                                      <h5>{FaqPointHeading}</h5>
                                    </div>

                                    <div className="Accordion-Main-Points">
                                      <ul>
                                        <p>{FaqPoint1}</p>
                                        <p>{FaqPoint2}</p>
                                        <p>{FaqPoint3}</p>
                                        <p>{FaqPoint4}</p>
                                        <p>{FaqPoint5}</p>
                                        <p>{FaqPoint6}</p>
                                        <p>{FaqPoint7}</p>
                                        <p>{FaqPoint8}</p>
                                        <p>{FaqPoint9}</p>
                                        <p>{FaqPoint10}</p>
                                        <p>{FaqPoint11}</p>
                                        <p>{FaqPoint12}</p>
                                        <p>{FaqPoint13}</p>
                                        <p>{FaqPoint14}</p>
                                      </ul>
                                    </div>
                                    <div className="Accordion-End-Para">
                                      <p>{EndPara}</p>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
