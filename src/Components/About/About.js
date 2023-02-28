import {Container } from "react-bootstrap";
import "./About.css";
function About() {
  return (
    <Container className="mt-3 mb-3">
      <div className="about-us">
        <div className="info-box">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            ipsum, tenetur dolores esse magni ratione distinctio! Quod iusto
            neque fuga, maxime quos nostrum quibusdam dicta deserunt blanditiis
            non voluptate id?
          </p>
        </div>
        <div className="image-box">
          <img src="../logo.png" alt="" />
        </div>
      </div>
    </Container>
  );
}
export default About;
