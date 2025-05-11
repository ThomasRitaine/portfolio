import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiNixos,
  SiGithub,
  SiBitwarden,
  SiTorproject,
  SiNeovim,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNixos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeovim />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitwarden />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTorproject />
      </Col>
    </Row>
  );
}

export default Toolstack;
