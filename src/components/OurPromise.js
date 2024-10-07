import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import yourImage from './Intro'; // Adjust the path to your image

const OurPromise = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '40px 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Text */}
          <Col md={6} className="text-left">
            <h2 style={{ color: 'var(--primary)' }}>SecureGroup</h2>
            <p className='text'>
              At SecureGroup, we don’t just provide security services – we provide peace of
              mind. With a commitment to professionalism, reliability, and innovation, we ensure that your security
              challenges are met head-on with solutions that are both proactive and effective.
            </p>
          </Col>

          {/* Right Column - Image */}
          <Col md={6} className="text-right">
            <img 
              src={yourImage} 
              alt="Security image will show here" 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurPromise;
