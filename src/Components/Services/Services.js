import { Container } from "react-bootstrap";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Services.css";
function Services() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container
      className="mt-3 mb-3 text-center"
      style={{
        backgroundColor: "#F7EDE2",
        padding: "10px 0",
        borderRadius: "10px",
      }}
    >
      <div className="title">
        <h2>Our Services</h2>
      </div>
      <section className="features">
        <div className="container">
          <article
            className="feat-box video-ramka"
            data-aos="flip-up"
            data-aos-delay="350"
          >
            <img src="../imgs/programming.svg" alt="" />
            <h4>Development</h4>
            <p>
              We are professional marketeers, we will do anything you imagine in
              no time.
            </p>
          </article>
          <article
            className="feat-box video-ramka"
            data-aos="flip-up"
            data-aos-delay="350"
          >
            <img src="../imgs/advertising.svg" alt="" />
            <h4>Marketing</h4>
            <p>
              We are professional marketeers, we will do anything you imagine in
              no time.
            </p>
          </article>
          <article
            className="feat-box video-ramka"
            data-aos="flip-up"
            data-aos-delay="350"
          >
            <img src="../imgs/hosting-icon.svg" alt="" />
            <h4>Hosting</h4>
            <p>
              We are professional marketeers, we will do anything you imagine in
              no time.
            </p>
          </article>
          <article
            className="feat-box video-ramka"
            data-aos="flip-up"
            data-aos-delay="350"
          >
            <img src="../imgs/mobile-app.svg" alt="" />
            <h4>Mobile Develope</h4>
            <p>
              We are professional marketeers, we will do anything you imagine in
              no time.
            </p>
          </article>
          <article
            className="feat-box video-ramka"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <img src="../imgs/graphic-design.svg" alt="" />
            <h4>Cloud and Servers</h4>
            <p>
              We are professional marketeers, we will do anything you imagine in
              no time.
            </p>
          </article>
          <article
            className="feat-box video-ramka"
            data-aos="fade-down"
            data-aos-delay="350"
          >
            <img src="../imgs/web-design.svg" alt="" />
            <h4>Seo</h4>
            <p>
              We are professional marketeers, we will do anything you imagine in
              no time.
            </p>
          </article>
          <div className="clearfix"></div>
        </div>
      </section>
    </Container>
  );
}
export default Services;
