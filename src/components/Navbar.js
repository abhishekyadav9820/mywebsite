import { useState, useEffect, React } from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/Modal.css";
import "../CSS/Navbar.css";
import logo from "../Image/logo.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import $ from "jquery";


const NavBar = () => {

  const bookingForm = () => {
    var custName;
    var custEmail;
    var custPhone;
    var custTittle;
    var custAppoinmentDate;
    var custAppoinmentTime;



    if ($(".custName1").val() !== '') {
      custName = $(".custName1").val();
    } else {


    }
    if ($(".custPhone1").val() !== '') {
      custPhone = $(".custPhone1").val();
    } else {

    }

    if ($(".custEmail1").val() !== '') {
      custEmail = $(".custEmail1").val();
    } else {


    }

    if ($(".reasonForVisit option:selected").val() !== '') {
      custTittle = $(".reasonForVisit option:selected").val();
    } else {


    }


    if ($(".checkin").val() !== '') {
      custAppoinmentDate = $(".checkin").val();
    } else {


    }

    if ($(".appointmentTime option:selected").val() !== '') {
      custAppoinmentTime = $(".appointmentTime option:selected").val();
    } else {

    }


    var body = '<!DOCTYPE html><html><head><title>Dr. Dilip Raja - Urologist &amp; Andrologist MS,MNAMS,FICS, DNBE(Urology)</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"><tr><td align="center" style="background-color:#eee" bgcolor="#eeeeee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#164388"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"><a href="tel:+91" style="text-decoration:none;color:#fff;font-family:serif;font-size:16px">Leade Generate for Dr Dilip Raja</a></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:120px;height:120px" src="" alt=""></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#164388"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center"><h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#fff">Client Enquiry Details</h1></td></tr></table></div></td></tr><tr><td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"><tr><td width="100%" align="center" valign="top" style="font-size:0"><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Name:</p><p style="font-size:14px;font-weight:500;color:#111">' + custName + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Number:</p><p style="font-size:14px;font-weight:500;color:#111">' + custPhone + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Email:</p><p style="font-size:14px;font-weight:500;color:#111">' + custEmail + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Customer Reason</p><p style="font-size:14px;font-weight:500;color:#111">' + custTittle + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Appointment Date:</p><p style="font-size:14px;font-weight:500;color:#111">' + custAppoinmentDate + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#164388">Appointment Time:</p><p style="font-size:14px;font-weight:500;color:#111">' + custAppoinmentTime + '</p></td></tr></table></div></td></tr></table></td></tr><tr><td width="100%" align="center" bgcolor="#164388" style="padding:10px 0"><p style="color:#fff;font-weight:500;font-size:1rem;padding:0;margin:0">© Copyright 2022 Dr Dilip Raja</p></td></tr></table></td></tr></table></body></html>';
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
      accountLeadMsgs: custTittle,
      checkIn: custAppoinmentDate,
      referralName: custAppoinmentTime



    },

      function (dataa, status) {
        console.log('data :' + dataa);
        console.log("name:" + status);

      });

    alert("Your Form has Submitted Our team will contact with You  soon.");

    window.location.reload();

    return false;

  }

  // const [isActive, setIsActive] = useState(false);
  // const onItemClick = (e) => {
  //   e.preventDefault();
  //   setIsActive(current => !current);

  // }

  // const onItemClick1 = (e) => {
  //   e.preventDefault();
  //   setIsActive(current => !current);
  // }


  const onItemClick = () => {
    var dropdown = $(".dropdown-menu").hasClass("cont2")
    if (dropdown) {
      $(".dropdown-menu").removeClass('cont2');
    }
    else {
      $(".dropdown-menu").addClass('cont2');
    }
  }

  const onItemClick1 = () => {
    $(".dropdown-menu").removeClass('cont2');
    if ($('#menuToggle').prop('checked')) {
      $('#menuToggle').prop('checked', false);
    } else {
      $('#menuToggle').prop('checked', true);
    }
  }



  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const newLinkStyles = ({ isActive }) => {
    return {
      fontweight: isActive ? "red" : "white",
    };
  };
  return (

    <>
      <header>
        <div className="socialMeidaAndContact">
          <div className="container">
            <div className="headerContact">
              <ul>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>+91 22 2645 2007</span>
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>
                    drdilipraja@gmail.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="headerSocial d-none d-md-block">
              <ul>
                <li>
                  <Link href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav
          className={
            scroll
              ? "navbar  navbar-expand-lg navbar-bg"
              : "navbar  navbar-expand-lg"
          }
        >
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src={logo} alt="logo" />
            </a>
            <div className="backBlur"></div>
            <input type="checkbox" id="menuToggle" />
            <label htmlFor="menuToggle" className="navbar-toggler-icon"></label>

            <div className="navbar-collapse" id="navbarNav">
              <label htmlFor="menuToggle" className="closeIcons"><i
                className="fa fa-close  d-lg-none d-block"
                aria-hidden="true"
              ></i></label>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" onClick={onItemClick1} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/AboutUs" onClick={onItemClick1} style={newLinkStyles}>
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item dropdown position-static">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    onClick={onItemClick}
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Service
                  </Link>
                  <div className='dropdown-menu w-100 mt-0' aria-labelledby="navbarDropdown" style={{ borderRadius: "6px" }}>
                    <div className="container" style={{ display: "initial" }}>
                      <div className="row my-md-4 my-0">
                        <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                          <div className="list-group list-group-flush">

                            <Link to="/service" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Kidney Stone
                            </Link>
                            <Link href="" onClick={onItemClick1} to="/ProstateGland" className="list-group-item list-group-item-action">
                              Prostate gland
                            </Link>
                            <Link href="" onClick={onItemClick1} to="/ProstateCancer" className="list-group-item list-group-item-action">
                              Prostate Cancer
                            </Link>
                            <Link href="" onClick={onItemClick1} to="/BloodUrine" className="list-group-item list-group-item-action">
                              Blood In Urine
                            </Link>
                            <Link href="" onClick={onItemClick1} to="/KidneyCancer" className="list-group-item list-group-item-action">
                              Kidney Cancer
                            </Link>
                            <Link href="" onClick={onItemClick1} to="/BladderC" className="list-group-item list-group-item-action">
                              Bladder Cancer
                            </Link>
                            {/* <Link href="" className="list-group-item list-group-item-action">
                              Urology
                            </Link> */}
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                          <div className="list-group list-group-flush">
                            <Link to="/penisCancer" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Penis Cancer
                            </Link>
                            <Link to="/impotence" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Impotence
                            </Link>
                            <Link href="" to="/UrinaryTract" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Urinary Tract Infection
                            </Link>
                            <Link href="" to="/Incoti" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Incontinence
                            </Link>
                            {/* <Link href="" className="list-group-item list-group-item-action">
                              Urinary Incontinence
                            </Link> */}
                            <Link href="" to="/Infert" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Infertility
                            </Link>
                            <Link href="" to="/Endouro" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Endo urology
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                          <div className="list-group list-group-flush">
                            <Link href="" to="/KidneyTrans" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Kidney Transplant
                            </Link>
                            <Link href="" to="/AgingM" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Aging Male
                            </Link>
                            <Link href="" to="/PenisEn" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Penis Enlargement
                            </Link>
                            <Link href="" to="Varicocele" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Varicocele
                            </Link>
                            <Link href="" to="Robot" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Robotic Surgery
                            </Link>
                            <Link href="" to="/Andro" onClick={onItemClick1} className="list-group-item list-group-item-action">
                              Andrology
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/caseStuies" onClick={onItemClick1}>
                    CASE STUDIES
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Faq" onClick={onItemClick1}>
                    FAQ’S
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" onClick={handleShow}>
                    CONSULT
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" onClick={onItemClick1}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Modal
        show={show}
        id="partner"
        backdrop="static"
        keyboard={false}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onHide={handleClose}

      >

        <Modal.Body>
          <div className="partnerProgramForm">
            <div className="formTitleSection">
              <div className="closeProgram closeProgram1" onClick={handleClose}>
                {" "}
                <i className="fa fa-times" />{" "}
              </div>
              <div className="formTitle">
                <h2>Booking form</h2>
              </div>
            </div>
            <div className="login-box">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                  <div className="user-box">
                    <input
                      type="text"
                      className="custNameValidation custName1"
                      name=""
                      required=""
                    />{" "}
                    <span className="CustNameError" style={{ color: "red" }} />
                    <label>Full Name</label>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                  <div className="user-box">
                    <input
                      type="number"
                      className="custPhoneValidation custPhone1"
                      name=""
                      required=""
                    />
                    <span className="MobileNoError" style={{ color: "red" }} />
                    <label>Phone Number</label>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="user-box">
                    <input
                      type="mail"
                      className="custEmailValidation custEmail1"
                      name=""
                      required=""
                    />{" "}
                    <span className="EmailError" style={{ color: "red" }} />
                    <label>E-mail</label>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-12">
                  <div className="user-box">
                    <select class="form-select user-box reasonForVisit" aria-label="Default select example">
                      <option selected>Reason for Your Visit:</option>
                      <option value="KIDNEY STONE">KIDNEY STONE</option>
                      <option value="PROSTATE GLAND">PROSTATE GLAND</option>
                      <option value="PROSTATE CANCER">PROSTATE CANCER</option>
                      <option value="BLOOD IN URINE">BLOOD IN URINE</option>
                      <option value="KIDNEY CANCER">KIDNEY CANCER</option>
                      <option value="BLADDER CANCER">BLADDER CANCER</option>
                      <option value="PENIS CANCER">PENIS CANCER</option>
                      <option value="IMPOTENCE">IMPOTENCE</option>
                      <option value="URINARY TRACT INFECTION">URINARY TRACT INFECTION</option>
                      <option value="INCONTINENCE">INCONTINENCE</option>
                      <option value="URINARY INCONTINENCE">URINARY INCONTINENCE</option>
                      <option value="INFERTILITY">INFERTILITY</option>
                      <option value="KIDNEY TRANSPLANT">KIDNEY TRANSPLANT</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="user-box">
                    <label class="datelabel">Appointment Date</label>
                    <input type="date" class="custCheckinValidation checkin" name="" required="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="user-box">
                    <select class="form-select user-box appointmentTime" aria-label="Default select example">
                      <option selected>Appointment Time</option>
                      <option value="08:00 AM - 11:00 AM">08:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 02:00 PM">11:00 AM - 02:00 PM</option>
                      <option value="02:00 PM - 06:00 PM">02:00 PM - 06:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <Button
                value="submit"
                type="submit"
                className="submit"
                onClick={bookingForm}
                id="FormSubmit">
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>

      </Modal>

    </>
  );
};

export default NavBar;
