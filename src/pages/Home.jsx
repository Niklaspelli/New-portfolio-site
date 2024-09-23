import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  faReact,
  faCss3Alt,
  faJs,
  faNodeJs,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import "../styles.css";
import { styled } from "styled-components";

export default function Home() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center h-100"></Row>

      <Card
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 15 }}
      >
        <div className="skills">
          <Row className="justify-content-center">
            <Col md={2} sm={7}>
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-1">
                    <div className="fill-1"></div>
                  </div>
                  <div className="mask half">
                    <div class="fill-1"></div>
                  </div>

                  <div className="inside-circle">
                    <FontAwesomeIcon
                      icon={faReact}
                      style={{
                        color: "cyan",
                        fontSize: "5rem",
                        margin: "20px",
                      }}
                    />
                    <span className="progress-value">
                      <CountUp start={0} end={40} duration={4.75}></CountUp>%
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2} sm={7}>
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-2">
                    <div className="fill-2"></div>
                  </div>
                  <div className="mask half">
                    <div class="fill-2"></div>
                  </div>
                  <div className="inside-circle2">
                    <FontAwesomeIcon
                      icon={faCss3Alt}
                      style={{
                        color: "blue",
                        fontSize: "5rem",
                        margin: "20px",
                      }}
                    />
                    <span className="progress-value">
                      <CountUp start={0} end={60} duration={7.75}></CountUp>%
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2} sm={7}>
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-3">
                    <div className="fill-3"></div>
                  </div>
                  <div className="mask half">
                    <div class="fill-3"></div>
                  </div>

                  <div className="inside-circle3">
                    <FontAwesomeIcon
                      icon={faJs}
                      style={{
                        color: "yellow",
                        fontSize: "5rem",
                        margin: "20",
                      }}
                    />
                    <span className="progress-value">
                      <CountUp start={0} end={30} duration={4.75}></CountUp>%
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2} sm={7}>
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-4">
                    <div className="fill-4"></div>
                  </div>
                  <div className="mask half">
                    <div class="fill-4"></div>
                  </div>
                  <div className="inside-circle4">
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      style={{
                        color: "green",
                        fontSize: "5rem",
                        margin: "20",
                      }}
                    />
                    <span className="progress-value">
                      <CountUp start={0} end={30} duration={9}></CountUp>%
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2} sm={7}>
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full-5">
                    <div className="fill-5"></div>
                  </div>
                  <div className="mask half">
                    <div class="fill-5"></div>
                  </div>
                  <div className="inside-circle5">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      style={{
                        color: "orange",
                        fontSize: "5rem",
                        margin: "20",
                      }}
                    />
                    <span className="progress-value">
                      <CountUp start={0} end={70} duration={20}></CountUp>%
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </Container>
  );
}

const Card = styled(motion.div)`
  .skills {
    display: flex;
    position: relative;
    top: 20rem;
    text-align: center;
  }

  .progress-value {
    margin-top: -20px;
  }

  .circle-container {
    place-content: center;
  }
`;
