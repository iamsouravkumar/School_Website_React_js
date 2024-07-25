
import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function WhatsappBtn() {
  return (
    <div className="App">
      <ReactWhatsappButton
        countryCode="1"
        phoneNumber="(123) 456-7890"
        animated
        style={{right:"10px"}}
      />
    </div>
  )
}

export default WhatsappBtn;
