import { useEffect,  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import logo from "../assets/logo.png";
function Navbarr() {
  const navigate=useNavigate()
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const handleNavLinkClick = () => {
    console.log("Before:", expanded);
    setExpanded(false);
    console.log("After:", expanded);
  };
  useEffect(() => {
    // Check if the user is logged in by looking for a token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
   };
  return (
    <Navbar
      expand="lg"
      className=""
      expanded={expanded}
      style={{
        // position: "fixed",
        // width: "100%",
        
        // zIndex: 1000,
        backgroundColor: "var(--black)",
        padding: "0.8rem 0",
        height: "5rem",
        // top:"2.5rem"
        
      }}
    >
      <Container fluid style={{ backgroundColor: "var(--black)" }}>
      <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
         <h3 style={{color:"var(--white)"}}>LOGO</h3>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} style={{margin:"0px 10px"}} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-items" navbarScroll>
          <Nav.Link as={Link} to="/" onClick={handleNavLinkClick}>
                Home
            </Nav.Link>{" "}
    
          
            {/* New Route */}
            <Nav.Link as={Link} to="/lease-swap" onClick={handleNavLinkClick}>
             About Us
            </Nav.Link>{" "}

             {/* New Route */}
             <Nav.Link as={Link} to="/contact" onClick={handleNavLinkClick}>
             Services
            </Nav.Link>{" "}
            

             {/* New Route */}
           
             <Nav.Link as={Link} to="/tenate-portal" onClick={handleNavLinkClick}>
             ⁠Why Choose Us
            </Nav.Link>{" "}
            

            <Nav.Link as={Link} to="/blogs" onClick={handleNavLinkClick}>
             Career            </Nav.Link>{" "}
            

             <Nav.Link as={Link} to="/blogs" onClick={handleNavLinkClick}>
             Contact Us           </Nav.Link>{" "}
            

            
          </Nav>

        
          <Form className="d-flex nav-btns" style={{ display: "flex", flexWrap: "wrap",marginBottom:"1rem" }}>
            {/* {isLoggedIn ? (
              <Button  className="button-29" role="button" onClick={() => { handleLogout(); handleNavLinkClick(); }}>
                Logout
              </Button>
            ) : (
              <Link to="/signup" className="button-29" role="button" onClick={handleNavLinkClick}>
                Book Now
              </Link>
            )} */}
            {/* <Link to="/available-listing"   role="button" onClick={handleNavLinkClick}> */}
            <button className="button-5">
                Contact Us
              </button>
              {/* </Link> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
