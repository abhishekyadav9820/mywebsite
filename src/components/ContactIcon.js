import { React, useLayoutEffect } from "react";

const ContactIcon = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      <div className="icon-bar0">
        <a href="tel:8291125126"><i className="fa fa-phone callus" aria-hidden="true"></i></a>
      </div>
      <div className="icon-bar1">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=+918291125126 &amp;forceIntent=true&amp;load=loadInIOSExternalSafarit"><i className="fa fa-whatsapp callus" aria-hidden="true"></i></a>
      </div>
    </div>
  )
}

export default ContactIcon;