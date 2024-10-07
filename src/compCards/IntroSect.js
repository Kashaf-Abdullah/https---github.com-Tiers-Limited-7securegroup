import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const IntroSect = (props) => {
  const iconStyle={
    backgroundColor: "var(--primary)",
              fontSize: "30px",
              fontWeight: "800",
              color: "var(--white)",
              border: "2px solid var(--primary)",
              borderRadius:"50%",
              margin:"0 3px",
              padding:"4px"
             
  }

  return (
    
    <Col lg={12} style={{zIndex:"2"}}>
      <div className="intro-content" >
        <h1 className="heading" style={{ color: "var(--black)" }}>
          {props.head1}{" "}
          <span style={{ color: "var(--black)" }}>{props.head2}</span>{" "}
        </h1>
        <p className="text" style={{color:"var(--black)"}}>
        In an increasingly complex world, security is no longer a luxury –
it’s a necessity. At 7SecureGroup, we bring the best of technology and human expertise together to
deliver security services you can trust. We offer a wide range of tailored security solutions that meet
the unique needs of each client, ensuring that your assets, people, and property are fully protected at all
times. Whether it’s on-site guarding, cutting-edge surveillance, or rapid response services, we have the
experience, technology, and personnel to provide unrivaled protection.
        </p>
      
        <div className="logo-social-media" style={{ margin: "1rem 0" }}>
        <FaFacebook style={iconStyle}/>
            {/* <FaInstagram style={iconStyle} /> */}
            <a href="https://www.instagram.com/scholar.suites?igsh=ZXpoOHpoNzUwanJ6" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={iconStyle} />
          </a>
            <FaYoutube style={iconStyle} />
       
            <FaLinkedin style={iconStyle} />
        </div>



       
        
      </div>
    </Col>
  );
};
export default IntroSect;

