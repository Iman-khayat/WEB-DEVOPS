import { Col, Container, Row } from "react-bootstrap";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <Container>
        <Row className="p-4 footer">
          <Col>
            <div className="location">
              <h2 className="head">Location</h2>
              <span>lorem lorem</span>
              <span>lorem lorem lorem lorem lorem lorem</span>
            </div>
          </Col>
          <Col>
            <div className="navbar-nav links">
              <h2 className="head">section</h2>
              <NavLink
                to="/"
                className="navbar-nav nav-link"
                style={{ fontSize: "15px", padding: "2px 4px" }}
              >
                Home
              </NavLink>
              <NavLink
                to="/Services"
                className="navbar-nav nav-link"
                style={{ fontSize: "15px", padding: "2px 4px" }}
              >
                Services
              </NavLink>
              <NavLink
                to="Contact"
                className="navbar-nav nav-link"
                style={{ fontSize: "15px", padding: "2px 4px" }}
              >
                Contact
              </NavLink>
              <NavLink
                to="About"
                className="navbar-nav nav-link"
                style={{ fontSize: "15px", padding: "2px 4px" }}
              >
                About
              </NavLink>
            </div>
          </Col>
          <Col>
            <div className="social-icon">
              <h2 className="head">Follow Us</h2>
              <div className="icons">
                <a className="link" href="/#">
                  <CiFacebook />
                </a>
                <a className="link" href="/#">
                  <CiInstagram />
                </a>
                <a className="link" href="/#">
                  <CiLinkedin />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
