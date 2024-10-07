import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const NavSocialLink = () => {
  return (
    <div style={{
         backgroundColor: 'var(--primary)', padding: '10px 0' }}>
      <Container fluid>
        <Row className="align-items-center">
          {/* Left side (2 items) */}
          <Col md={6} className="d-flex justify-content-start">
            <div className="d-flex align-items-center me-4">
              <FaMapMarkerAlt style={{ color: 'var(--black)', fontSize: '1rem' }} />
              <span style={{ color: 'var(--black)', marginLeft: '10px' , whiteSpace: 'nowrap',fontSize:"12px"}}>123 Street, New York, USA</span>
            </div>
            <div className="d-flex align-items-center">
              <FaEnvelope style={{ color: 'var(--black)', fontSize: '1rem' }} />
              <span style={{ color: 'var(--black)', marginLeft: '10px', whiteSpace: 'nowrap',fontSize:"12px" }}>info@example.com</span>
            </div>
          </Col>

          {/* Right side (2 items) */}
          <Col md={6} className="d-flex justify-content-end">
            <div className="d-flex align-items-center me-4">
              <FaPhoneAlt style={{ color:'var(--black)', fontSize: '1rem' }} />
              <span style={{ color: 'var(--black)', marginLeft: '10px', whiteSpace: 'nowrap',fontSize:"12px" }}>+012 345 6789</span>
            </div>
            <div className="d-flex align-items-center">
              <FaClock style={{ color:'var(--black)', fontSize: '1rem' }} />
              <span style={{ color: 'var(--black)', marginLeft: '10px' , whiteSpace: 'nowrap',fontSize:"12px"}}>Mon - Fri : 9AM - 9PM</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavSocialLink;
