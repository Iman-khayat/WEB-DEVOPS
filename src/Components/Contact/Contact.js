import React from "react";
import { Container } from "react-bootstrap";
import { useState, useRef } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const NameRef = useRef("");
  const emailRef = useRef();
  const areaRef = useRef();
  const lb = useRef();
  const lbemail = useRef();
  const lbarea = useRef();
  const handleFoucs = (element) => {
    element.current.classList.add("affect");
  };
  const handleBlur = (element) => {
    if (name.length > 1 || email.length > 1 || message.length > 1) {
      element.current.classList.add("affect");
    } else {
      element.current.classList.remove("affect");
    }
  };
const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        sender: email,
        subject: name,
        message: message
    };

    const response = await fetch('https://localhost:7077/about', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        console.log('Message sent successfully');
    } else {
        console.log('Failed to send message');
    }

    setName("");
    setEmail("");
    setMessage("");
};
  return (
    <Container>
      <div className="contact">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="text-input">
            <input
              ref={NameRef}
              type="text"
              className="text-input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={() => handleFoucs(lb)}
              onBlur={() => handleBlur(lb)}
            />
            <label ref={lb} className="label">
              Name
            </label>
          </div>
          <div className="text-input">
            <input
              ref={emailRef}
              type="text"
              className="text-input"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => handleFoucs(lbemail)}
              onBlur={() => handleBlur(lbemail)}
              name="email"
            />
            <label ref={lbemail} className="label">
              Email
            </label>
          </div>
          <div className="text-area">
            <textarea
              ref={areaRef}
              className="text-area"
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => handleFoucs(lbarea)}
              onBlur={() => handleBlur(lbarea)}
              name="message"
            />
            <label ref={lbarea} className="label">
              Message
            </label>
          </div>
          <button className="send">Send</button>
        </form>
      </div>
    </Container>
  );
}
export default Contact;

