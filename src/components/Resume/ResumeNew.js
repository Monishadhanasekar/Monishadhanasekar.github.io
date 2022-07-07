import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import resume from "../../Assets/resume.png";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Moni_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <br></br>
        <Col
          md={12}
          style={{
            paddingBottom: 20,
          }}
        >
          <img
            src={resume}
            alt="Resume"
            className="img-fluid"
            style={{
              maxHeight: "700px",
              justifyContent: "center",
            }}
          />
        </Col>
      </Container>
    </div>
  );
}

export default ResumeNew;
