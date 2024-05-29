import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons'; // Using react-bootstrap-icons

const TestimonialComponent = () => {
  return (
    <div style={{height:'484px'}} className='d-flex justify-content-center'>
    <Card className="p-3 my-4" style={{height:"284px", width:'1240px'}}>
      <Card.Body>
        <Card.Title>
          <PlusCircle style={{ color: 'dodgerblue', fontSize: '1.5rem' }} /> Add your own
        </Card.Title>
        <Card.Text>
          Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
        </Card.Text>
        <Button style={{color:'black', background:'white', borderColor:'black'}}>Add new</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default TestimonialComponent;
