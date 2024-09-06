import { useEffect, useState } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import "./contactform.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_iwtg0ga", "template_v8sjwh1", values, "RGZGJ9e24vn_ShfG3")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            role: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Grid
        animate={{ opacity: 5 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Row className="justify-content-center align-items-center h-100">
          <h2 style={{ color: "orange" }}>Send me a message!</h2>
          <Col md={6} lg={4} className="justify-content-center">
            <label style={{ color: "orange" }}>Name:</label>
            <Form.Floating className="mb-1" inline>
              <InputField
                value={values.fullName}
                handleChange={handleChange}
                name="fullName"
                type="text"
                placeholder="John Doe"
              />
            </Form.Floating>
            <label style={{ color: "orange" }}>E-mail:</label>
            <Form.Floating className="mb-1" inline>
              <InputField
                value={values.email}
                handleChange={handleChange}
                name="email"
                type="email"
                placeholder="john@example.com"
              />
            </Form.Floating>
            <label style={{ color: "orange" }}>Message:</label>
            <Form.Floating className="mb-1" inline>
              <TextareaField
                value={values.message}
                handleChange={handleChange}
                name="message"
              />
            </Form.Floating>
            <Button
              className="--btn"
              type="submit"
              style={{
                background: "black",
                border: "1px solid orange",
                color: "orange",
                padding: "6px 8px",
                margin: "20px",
              }}
              onClick={(e) => handleSubmit(e)}
            >
              Send
            </Button>
            {status && renderAlert()}
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

const renderAlert = () => (
  <div className="popup">
    <p>Your mail was sent!</p>
  </div>
);

export default ContactForm;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
