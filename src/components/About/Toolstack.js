import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiLinux,
  SiGithub,
  SiWindows,
  SiWindowsterminal,
  SiBitwarden,
} from "react-icons/si";
import { TbBrandGithubCopilot } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGithubCopilot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindowsterminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitwarden />
      </Col>
    </Row>
  );
}

export default Toolstack;
