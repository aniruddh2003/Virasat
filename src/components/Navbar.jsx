import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/spicmacay_logo.png";

function Navbar2() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="img" className="h-16 md:h-32 mt-1 -mb-8" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* 
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
             */}
          </Nav>
          <Nav style={{ visibility: "visible" }}>
            <Nav.Link
              href="https://spicmacay.vercel.app/team"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "1.5rem" }}
            >
              Team
            </Nav.Link>
            <Nav.Link href="#about" style={{ fontSize: "1.5rem" }}>
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <a
        href=""
        target="_blank"
        className="bg-purple-600 p-2 visited:text-neutral-50 visited:no-underline hover:no-underline no-underline text-xs cursor-pointer rounded-xl white:hover:text-neutral-400 white:focus:text-neutral-400 text-white fixed right-8 bottom-8 z-20"
        style={{
          borderRadius: "100%",
          height: "4rem",
          width: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Main <br /> Website
      </a>
    </Navbar>
  );
}

export default Navbar2;
