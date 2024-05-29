import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Quote } from 'react-bootstrap-icons'; // Using react-bootstrap-icons for quote icon

const TestimonialComponentII = () => {
  return (
    <div style={{height: '672px'}} className='d-flex justify-content-center'>
  <Card className="p-4 my-4" style={{ backgroundColor: '#f8f9fa', height: "472px", width: '1240px' }}>
    <Card.Body>
      <div className="d-flex align-items-start mb-3">
        <Quote size={30} className="me-2" style={{ color: '#6c757d' }} />
        <Card.Title className="mb-0">Testimonials</Card.Title>
      </div>
      <Card.Text>
        In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
      </Card.Text>
      <div className="d-flex align-items-center justify-content-between mt-4">
        <div className="d-flex align-items-center" style={{ backgroundColor: '#e9ecef', borderRadius: '0.5rem', padding: '0.75rem', width: '100%', maxWidth: '800px' }}>
          <button className="btn-sm me-2" style={{ borderRadius: '50%' }}>
            <i className="bi bi-play-fill"></i>
          </button>
          <div className="flex-grow-1">
            <div className="progress" style={{ height: '0.25rem', backgroundColor: '#d3d3d3' }}>
              <div className="progress-bar" role="progressbar" style={{ width: '0%' }}></div>
            </div>
          </div>
          <span className="ms-2">0:00</span>
        </div>
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <Image src="Ellipse 12.png" roundedCircle />
          </div>
          <div className="ms-3">
            <Card.Text className="mb-1"><strong>Shubha Nagarajan</strong></Card.Text>
            <Card.Text className="text-muted">Classical Dancer</Card.Text>
          </div>
        </div>
      </div>
    </Card.Body>
  </Card>
</div>

  );
};

export default TestimonialComponentII;
