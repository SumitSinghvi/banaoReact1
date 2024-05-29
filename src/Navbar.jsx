import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HobbyCueNavbar = () => {
  return (
    <Navbar expand="lg" style={{height:"80px"}}>
      <Navbar.Brand href="#" className="ms-1 ms-lg-5">
        <img
          src="HobbyCue Logo.png"
          className="d-inline-block align-top ms-3 brand-logo"
          alt="hobbycue logo"
        />
      </Navbar.Brand>
      <Form className="d-flex mx-auto ms-4" style={{ maxWidth: "400px" }}>
        <FormControl
          type="search"
          placeholder="Search here..."
          className="me-2 me-lg-0 d-none d-lg-block"
          aria-label="Search" 
        />
        <Button style={{ background: "#8064A2", borderColor:"#8064A2" }}>
          <i class="bi bi-search" style={{fontSize: '0.75rem'}}></i>
        </Button>
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ fontSize: '0.75rem' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto gap-2 me-5">
          <Nav.Link
            href="#explore"
            className="mr-2"
            style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "22px",
            }}
          >
            <img src="Explore.png" className="me-2"/>
            Explore
          </Nav.Link>
          <NavDropdown className="me-3" style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "22px",
            }} title="Hobbies" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              People - Community
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              Places - Venues
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              Programs - Events
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              Programs - Store
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Blogs</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#bookmark">
            <i className="bi bi-bookmark"></i>
          </Nav.Link>
          <Nav.Link href="#notifications">
            <i className="bi bi-bell"></i>
          </Nav.Link>
          <Nav.Link href="#cart">
            <i className="bi bi-cart"></i>
          </Nav.Link>
          <Button className="px-4 ms-2 me-4 d-flex justify-content-center align-items-center" style={{color:"purple",height:"40px" , background:"white", borderColor:"purple"}}>
            Sign In
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HobbyCueNavbar;
