import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import intro from "../";
// import star from "../assets/review.png";
// import star2 from "../assets/review2.png";
// import star3 from "../assets/review3.png";
// import star4 from "../assets/review4.png";
import IntroSect from "../compCards/IntroSect";
// import IntroTabs from "./IntroTabs";
// import Listing from "./Listing";

const Intro = () => {
  const products = [
    { location: "New York", price: 1000, squareFeet: 800, bedroomCount: 2, bathroomCount: 1 },
    { location: "Los Angeles", price: 1200, squareFeet: 900, bedroomCount: 3, bathroomCount: 2 },
    { location: "Chicago", price: 900, squareFeet: 750, bedroomCount: 2, bathroomCount: 1 },
    // Add more products as needed
  ];

  return (
    <div
      className="intro"
      style={{
        // backgroundColor: "#f9f1f1",
        // borderRadius: "20px",
        // padding: "20px",
      
      }}
    >
      <Container 
        style={{
        //   backgroundImage: `url(${intro})`,
          textAlign: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // borderRadius: "20px",
          padding: "60px 20px",
          height:"100%",
        }}
      >
          {/* <div className="intro-overlay"></div> */}
        <Row style={{zIndex:"2"}}>
          <IntroSect
            head1="SecureGroup – Where Your Security is Our Priority  "
            head2="London’s Premier Security Solutions Provider for Businesses and Individuals Alike"
          />
        </Row>

        <Row className="justify-content-center">
        <Col xs="auto" className="d-flex justify-content-center">
          <button  className='button-5' style={{ margin: '0 10px' }}>Button 1</button>
          <button className='button-5'  style={{ margin: '0 10px' }}>Button 2</button>
        </Col>
      </Row> </Container>
    </div>
  );
};

export default Intro;
