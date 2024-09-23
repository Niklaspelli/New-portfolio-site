import { useEffect, useState } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import "./contactform.css";
import emailjs from "@emailjs/browser";

const service = import.meta.env.VITE_SERVICE;
const template = import.meta.env.VITE_TEMPLATE;
const id = import.meta.env.VITE_ID;

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

    // Simple validation before submission
    if (!values.fullName || !values.email || !values.message) {
      setStatus("ERROR");
      return;
    }

    emailjs.send(service, template, values, id).then(
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
        setStatus("ERROR");
      }
    );
  };

  useEffect(() => {
    if (status === "SUCCESS" || status === "ERROR") {
      setTimeout(() => {
        setStatus(""); // Reset status after 3 seconds
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const renderAlert = () => {
    if (status === "SUCCESS") {
      return (
        <div className="popup" style={{ color: "white", marginTop: "10px" }}>
          <p>Your mail was sent successfully!</p>
        </div>
      );
    } else if (status === "ERROR") {
      return (
        <div className="popup" style={{ color: "red", marginTop: "10px" }}>
          <p>Failed to send your mail. Please try again.</p>
        </div>
      );
    }
    return null;
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
                required // Make full name required
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
                required // Make email required
              />
            </Form.Floating>
            <label style={{ color: "orange" }}>Message:</label>
            <Form.Floating className="mb-1" inline>
              <TextareaField
                value={values.message}
                handleChange={handleChange}
                name="message"
                required // Make message required
              />
            </Form.Floating>
            {renderAlert()}
            <Button
              className="--btn"
              type="submit"
              style={{
                background: "black",
                border: "1px solid orange",
                color: "orange",
                padding: "6px 8px",
                margin: "30px",
                marginBottom: "80px",
              }}
              onClick={(e) => handleSubmit(e)}
            >
              Send
            </Button>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default ContactForm;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
