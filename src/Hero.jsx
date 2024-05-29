import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroComponent = () => {
  return (
    <Container fluid className="px-5 py-5" style={{ backgroundColor: '#f8f9fa'}}>
      <Row>
        <Col md={7} className="d-flex flex-column justify-content-center">
          <h1 style={{fontSize:'36px', lineHeight:'54px'}}>
            Explore your <span style={{ color: '#0d6efd' }}>hobby</span> or <span style={{ color: '#6f42c1' }}>passion</span>
          </h1>
          <p className="lead" style={{fontSize:'14px', lineHeight:'30px'}}>
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
            suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be
            about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities...
          </p>
          <p className="lead" style={{fontSize:'14px', lineHeight:'30px'}}>
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
            products, services or events. Hop on your hobbyhorse and enjoy the ride.
          </p>
          <div className="d-flex">
            <img
              src='Group 27.png' // Replace with the actual image path
              alt="Hobbyists"
              className="img-fluid mt-3"
            />
          </div>
        </Col>
        <Col md={5} className="d-flex flex-column justify-content-center align-items-center">
          <div className="py-4" style={{ width: '100%', maxWidth: '400px' }}>
            <div className="d-flex mb-3">
              <h5 style={{color:'purple'}}>Sign In</h5>
              <h5 style={{color:'#808080'}} className='ms-4'>Join In</h5>
            </div>
            <Button className="mb-3 w-100" style={{background:'white', color:'black'}}>
              <i className="bi bi-google me-5"></i> Continue with Google
            </Button>
            <Button style={{background:'white', color:'black'}} className="mb-3 w-100">
              <i className="bi bi-facebook me-4"></i> Continue with Facebook
            </Button>
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">Or connect with</span>
              <hr className="flex-grow-1" />
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                <Form.Check type="checkbox" label="Remember me" />
                <a href="#" className="text-muted">Forgot password?</a>
              </Form.Group>
              <Button style={{background:"white", color:"black", borderColor:'black'}} type="submit" className="w-100">
                Continue
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroComponent;
