import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { People, GeoAlt, Bag, CalendarCheck } from "react-bootstrap-icons"; // Correct icons from react-bootstrap-icons

const FeatureComponent = () => {
  const features = [
    {
      icon: <People />,
      title: "People",
      description:
        "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      buttonText: "Connect",
    },
    {
      icon: <GeoAlt />,
      title: "Place",
      description:
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      buttonText: "Meet up",
    },
    {
      icon: <Bag />,
      title: "Product",
      description:
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      buttonText: "Get it",
    },
    {
      icon: <CalendarCheck />,
      title: "Program",
      description:
        "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      buttonText: "Attend",
    },
  ];

  return (
    <Row
      className="m-5 d-flex justify-content-center"
      style={{
        borderRadius: "8px",
      }}
    >
      {features.map((feature, index) => (
        <Col
          key={index}
          sm={12}
          md={6}
        >
          <Card
            style={{
              width: "608px",
              height: "297px",
              margin: '15px'
            }}
          >
            <Card.Body>
              <Card.Title>
                {feature.icon} {feature.title}
              </Card.Title>
              <Card.Text>{feature.description}</Card.Text>
              <Button
                className="mt-5"
                style={{
                  background: "white",
                  color: "black",
                  borderColor: "black",
                }}
              >
                {feature.buttonText}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default FeatureComponent;
