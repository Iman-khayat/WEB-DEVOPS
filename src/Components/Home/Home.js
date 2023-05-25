import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container>
      <section style={{ backgroundColor: "#f7ede3" }} className="p-3 mt-3 mb-3 home">
        <div className="center">
          <img
            src="../home.jpg"
            className="img-fluid shadow-4 image"
            alt="..."
          />
        </div>
        <article>
          <div className="title">
            <h1>OUR PARTNER</h1>
          </div>
          <Container>
            <Row>
              <Col data-aos="flip-down" data-aos-delay="350">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Card.Img
                    variant="middle"
                    src="../logo.png"
                    style={{ width: "5rem" }}
                  />
                  <Card.Body>
                    <Card.Text>Web devops company visit company</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col data-aos="flip-left" data-aos-delay="350">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Card.Img
                    variant="middle"
                    src="../logo.png"
                    style={{ width: "5rem" }}
                  />
                  <Card.Body>
                    <Card.Text>Web devops company visit company</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col data-aos="flip-right" data-aos-delay="350">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Card.Img
                    variant="middle"
                    src="../logo.png"
                    style={{ width: "5rem" }}
                  />
                  <Card.Body>
                    <Card.Text>Web devops company visit company</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col data-aos="flip-up" data-aos-delay="350">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Card.Img
                    variant="middle"
                    src="../logo.png"
                    style={{ width: "5rem" }}
                  />
                  <Card.Body>
                    <Card.Text>Web devops company visit company</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="title">
            <h1>OUR CUSTOMERS</h1>
          </div>
          <Container>
            <Row>
              <Col data-aos="flip-up" data-aos-delay="350">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Card.Img
                    variant="middle"
                    src="../logo.png"
                    style={{ width: "5rem" }}
                  />
                  <Card.Body>
                    <Card.Text>Web devops company visit company</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col data-aos="flip-right" data-aos-delay="350">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Card.Img
                    variant="middle"
                    src="../logo.png"
                    style={{ width: "5rem" }}
                  />
                  <Card.Body>
                    <Card.Text>Web devops company visit company</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col data-aos="flip-left" data-aos-delay="350">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Card.Img
                    variant="middle"
                    src="../logo.png"
                    style={{ width: "5rem" }}
                  />
                  <Card.Body>
                    <Card.Text>Web devops company visit company</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col data-aos="flip-down" data-aos-delay="350">
                <Card style={{ backgroundColor: "transparent" }}>
                  <Card.Img
                    variant="middle"
                    src="../logo.png"
                    style={{ width: "5rem" }}
                  />
                  <Card.Body>
                    <Card.Text>Web devops company visit company</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </article>
      </section>
    </Container>
  );
}

export default Home;
