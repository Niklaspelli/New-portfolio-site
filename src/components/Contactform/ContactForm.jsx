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
        {status && renderAlert()}
        <Row className="justify-content-center align-items-center h-100">
          {" "}
          <h2 style={{ color: "orange" }}>Send me a message!</h2>
          <Col md={6} lg={4} className="justify-content-center">
            <label style={{ color: "orange" }}>Name:</label>
            <Form.Floating className="mb-1" inline>
              {" "}
              <InputField
                value={values.user_name}
                handleChange={handleChange}
                name="user_name"
                type="text"
                placeholder="John Doe"
              />
            </Form.Floating>
            <label style={{ color: "orange" }}>E-mail:</label>
            <Form.Floating className="mb-1" inline>
              {" "}
              <InputField
                value={values.user_email}
                handleChange={handleChange}
                name="user_email"
                type="email"
                placeholder="jphn@example.com"
              />
            </Form.Floating>
            <label style={{ color: "orange" }}>Message:</label>
            <Form.Floating
              className="mb-1"
              inline
              style={{
                color: "orange",
              }}
            >
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
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

const renderAlert = () => (
  <div className="popup">
    <p>Your mail sent!</p>
  </div>
);

export default ContactForm;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;
